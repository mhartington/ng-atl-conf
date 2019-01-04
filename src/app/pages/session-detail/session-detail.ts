import { Component } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../../providers/user-data';

@Component({
  selector: 'page-session-detail',
  styleUrls: ['./session-detail.scss'],
  templateUrl: 'session-detail.html'
})
export class SessionDetailPage {
  session: any;
  isFavorite = false;
  constructor(
    private dataProvider: ConferenceData,
    private userProvider: UserData,
    private route: ActivatedRoute
  ) {}
  sessionClick(item: string) {
    console.log('Clicked', item);
  }
  // toggleFavorite() {
  //   if (this.userProvider.hasFavorite(this.session.name)) {
  //     this.userProvider.removeFavorite(this.session.name);
  //     this.isFavorite = false;
  //   } else {
  //     this.userProvider.addFavorite(this.session.name);
  //     this.isFavorite = true;
  //   }
  // }
  ionViewWillEnter() {
    // const sessionId = this.route.snapshot.paramMap.get('sessionId');
    // this.session = this.dataProvider.getDoc(``)
    // this.dataProvider.load().subscribe((data: any) => {
    //   if (
    //     data &&
    //     data.schedule &&
    //     data.schedule[0] &&
    //     data.schedule[0].groups
    //   ) {
    //     const sessionId = this.route.snapshot.paramMap.get('sessionId');
    //     for (const group of data.schedule[0].groups) {
    //       if (group && group.sessions) {
    //         for (const session of group.sessions) {
    //           if (session && session.id === sessionId) {
    //             this.session = session;
    //             this.isFavorite = this.userProvider.hasFavorite(
    //               this.session.name
    //             );
    //             break;
    //           }
    //         }
    //       }
    //     }
    //   }
    // });
  }
}
