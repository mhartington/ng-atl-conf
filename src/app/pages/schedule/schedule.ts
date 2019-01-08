import { Component, OnInit } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
  styleUrls: ['./schedule.scss']
})
export class SchedulePage implements OnInit {
  queryText = '';
  schedule$: Observable<any>;
  constructor(public confData: ConferenceData) {}

  ngOnInit() {
    this.updateSchedule();
  }

  updateSchedule() {
    this.schedule$ = this.confData
      .getStore('sessions')
      .valueChanges()
      .pipe(map(this.confData.processData.bind(this)));
  }

  orderSessions(sessions) {
    return this.confData.orderSessions(sessions);
  }

  formatDate(date) {
    return this.confData.formatDate(date);
  }
}
