import { Component } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-session-detail',
  styleUrls: ['./session-detail.scss'],
  templateUrl: 'session-detail.html'
})
export class SessionDetailPage {
  session: any;
  constructor(
    private dataProvider: ConferenceData,
    private route: ActivatedRoute
  ) { }
  ionViewWillEnter() {
    const sessionId = this.route.snapshot.paramMap.get('sessionId');
    this.dataProvider.getDoc(`sessions/${sessionId}`).valueChanges().subscribe(
      session => this.session = session,
      err => console.log('err', err),
      () => console.log('done')
    );
  }
}
