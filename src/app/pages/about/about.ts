import { Component, OnInit } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss']
})
export class AboutPage implements OnInit {
  sponsors: any;
  constructor(private confData: ConferenceData) {}
  ngOnInit() {
    this.sponsors = this.confData.getStore('sponsors').valueChanges();
  }
}
