import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Theme,
  createStyles,
  Menu,
  MenuItem,
  IconButton,
  Badge,
  InputBase,
  Link,
  Container,
} from '@material-ui/core';

import MoreIcon from '@material-ui/icons/MoreVert';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    links: {
      cursor: 'pointer',
    },
  }),
);

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Weeks</MenuItem>
      <MenuItem onClick={handleMenuClose}>Current Week</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <Typography>Weeks</Typography>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <Typography>Current Week</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position='static'>
        <Container maxWidth='md'>
          <Toolbar>
            <Typography
              variant='h6'
              noWrap
              onClick={() => history.push('/')}
              className={classes.links}
            >
              Mealplanner
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Typography className={classes.links}>
                <Link color='inherit' onClick={() => history.push('/weeks')}>
                  Weeks
                </Link>
              </Typography>
              <Typography style={{ marginLeft: 20 }} className={classes.links}>
                <Link
                  color='inherit'
                  onClick={() => history.push('/current-week')}
                >
                  Current Week
                </Link>
              </Typography>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label='show more'
                aria-controls={mobileMenuId}
                aria-haspopup='true'
                onClick={handleMobileMenuOpen}
                color='inherit'
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default Navbar;
