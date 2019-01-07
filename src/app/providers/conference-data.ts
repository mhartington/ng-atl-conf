import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { format } from 'date-fns/esm';

@Injectable({
  providedIn: 'root'
})
export class ConferenceData {
  data: any;
  map = [
    {
      name: 'The Hotel at Avalon, Autograph Collection',
      lat: 34.071531,
      lng: -84.272747,
      center: true
    },
    {
      name: 'Barleygarden Kitchen & Craft Bar',
      lat: 34.0709743,
      lng: -84.2733487
    },
    {
      name: 'Starbucks',
      lat: 34.0710057,
      lng: -84.2732439
    }
  ];

  constructor(private db: AngularFirestore) {}

  getStore(collection: string) {
    return this.db.collection(collection);
  }
  getDoc(collection: string) {
    return this.db.doc(collection);
  }
  getMap() {
    return this.map;
  }
  processData(sessions: any[]) {
    let placeholder = [
      { date: '09-01-2019', sessions: [] },
      { date: '10-01-2019', sessions: [] },
      { date: '11-01-2019', sessions: [] },
      { date: '12-01-2019', sessions: [] }
    ];
    sessions.map((session: any) => {
      placeholder
        .find(entry => entry.date === session.date)
        .sessions.push(session);
    });
    return placeholder;
  }
  orderSessions(sessions) {
    return sessions.sort((a, b) => this.convert(a.time) - this.convert(b.time));
  }
  formatDate(date) {
    const [day, month, year] = date.split('-');
    const result = new Date(year, month - 1, day);
    return format(result, 'eeee');
  }
  convert(time: string) {
    return parseInt(time.split(':').join(''), 10);
  }
}
