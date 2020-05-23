import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Board, Task } from './board.model';
import * as firebase from 'firebase';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {}

  async createBoard(data: Board) {
    const user = await this.afAuth.currentUser;
    return this.db.collection<Board>('boards').add({
      ...data,
      uid: user.uid,
      tasks: [{ description: 'Hello!', label: 'yellow' }],
    });
  }

  deleteBoard(boardId: string) {
    return this.db.collection('boards').doc(boardId).delete();
  }

  updateTasks(boardId: string, tasks: Task[]) {
    return this.db.collection('boards').doc(boardId).update({ tasks });
  }

  removeTask(boardId: string, task: Task) {
    return this.db
      .collection('boards')
      .doc(boardId)
      .update({
        tasks: firebase.firestore.FieldValue.arrayRemove(task),
      });
  }

  getUserBoards() {
    return this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.db
            .collection<Board>('boards', (ref) =>
              ref.where('uid', '==', user.uid).orderBy('priority')
            )
            .valueChanges({ idField: 'id' });
        } else {
          return [];
        }
      })
    );
  }

  sortBoards(boards: Board[]) {
    const db = firebase.firestore();
    const batch = db.batch();
    const refs = boards.map((b) => db.collection('boards').doc(b.id));
    refs.forEach((ref, i) => batch.update(ref, { priority: i }));
    batch.commit().catch((err) => console.error(err));
  }

  moveTask(
    previousBoardId: string,
    previousTasks: Task[],
    boardId: string,
    tasks: Task[]
  ) {
    const db = firebase.firestore();
    const batch = db.batch();
    const previousRef = db.collection('boards').doc(previousBoardId);
    const nextRef = db.collection('boards').doc(boardId);
    batch.update(previousRef, { tasks: previousTasks });
    batch.update(nextRef, { tasks: tasks });
    batch.commit().catch((err) => console.error(err));
  }
}
