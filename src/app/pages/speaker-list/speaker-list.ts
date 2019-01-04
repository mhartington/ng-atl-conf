import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss']
})
export class SpeakerListPage implements OnInit {
  speakers: any;

  constructor(
    public confData: ConferenceData,
    public inAppBrowser: InAppBrowser,
    public router: Router
  ) {}

  ngOnInit() {
    this.speakers = this.confData.getStore('speakers').valueChanges();
  }
  goToSpeaker(speaker) {
    this.router.navigateByUrl(
      `/app/tabs/speakers/${speaker.id}`
    );
  }
  goToSpeakerTwitter(speaker: any) {
    this.inAppBrowser.create(
      `https://twitter.com/${speaker.twitterHandle}`,
      '_blank'
    );
  }
}
