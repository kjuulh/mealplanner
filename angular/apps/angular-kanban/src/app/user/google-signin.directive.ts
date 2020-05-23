import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Directive({
  selector: '[angularGoogleSignin]',
})
export class GoogleSigninDirective {
  constructor(private afAuth: AngularFireAuth) {}

  @HostListener('click')
  onclick() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
