import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

import { Poll } from '../constants/Poll';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private firestore: AngularFirestore) { }

  createPoll(poll: Poll): Promise<String> {
    return new Promise<String>((resolve) => {
      this.firestore.collection("polls").add(poll).then(res => resolve(res.id));
    });
  }

  getPoll(id: string): Observable<Poll> {
    return this.firestore.collection("polls").doc(id).snapshotChanges().pipe(map(action => {
      return action.payload.data() as Poll;
    }))
  }

  updatePoll(updatedPoll: Poll, id: string): Promise<void> {
    return this.firestore.collection("polls").doc(id).set(updatedPoll);
  }
}
