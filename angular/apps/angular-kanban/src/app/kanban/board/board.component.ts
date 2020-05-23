import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Board, Task } from '../board.model';
import { BoardService } from '../board.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../dialogs/task-dialog.component';

@Component({
  selector: 'angular-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  @Input() board: Board;
  @Output() taskMoved = new EventEmitter<{ previous: string; next: string }>();

  constructor(private boardService: BoardService, private dialog: MatDialog) {}

  ngOnInit(): void {}

  taskDrop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        this.board.tasks,
        event.previousIndex,
        event.currentIndex
      );
      this.boardService.updateTasks(this.board.id, this.board.tasks);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.taskMoved.emit({
        previous: event.previousContainer.id,
        next: event.container.id,
      });
    }
  }

  openDialog(task?: Task, idx?: number): void {
    const newTask = { label: 'purple' };
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '500px',
      data: task
        ? { task: { ...task }, isNew: false, boardId: this.board.id, idx }
        : { task: newTask, isNew: true },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.isNew) {
          this.boardService.updateTasks(this.board.id, [
            ...this.board.tasks,
            result.task,
          ]);
        } else {
          const update = this.board.tasks;
          update.splice(result.idx, 1, result.task);
          this.boardService.updateTasks(this.board.id, this.board.tasks);
        }
      }
    });
  }

  handleDelete() {
    this.boardService.deleteBoard(this.board.id);
  }
}
