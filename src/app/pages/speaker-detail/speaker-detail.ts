import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'page-speaker-detail',
  templateUrl: 'speaker-detail.html',
  styleUrls: ['./speaker-detail.scss']
})
export class SpeakerDetailPage implements OnInit {
  speaker: any;

  constructor(
    private dataProvider: ConferenceData,
    private route: ActivatedRoute,
    private inAppBrowser: InAppBrowser
  ) {}

  ngOnInit() {
    const speakerId = this.route.snapshot.paramMap.get('speakerId');
    this.dataProvider
      .getDoc(`speakers/${speakerId}`)
      .valueChanges()
      .subscribe(
        res => (this.speaker = res),
        err => console.warn(err),
        () => console.log('done')
      );
  }
  openTwitter(twitterHandle: string) {
    this.inAppBrowser.create(
      `https://twitter.com/${twitterHandle}`,
      '_blank'
    );
  }
}
