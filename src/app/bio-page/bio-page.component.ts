import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

type urlsObj = { full: string, regular: string, small: string };

const CLIENT_ID = '813f1db96865d9d36ff6e9d5623b0da770d4b7bd4c05e6a764161e3460135296';
const BG_COLLECTION_ID = '3684874';
const DEFAULT_BG_INFO = {
  urls: {
    full: '../../assets/bgL.jpg',
    regular: '../../assets/bgM.jpg',
    small: '../../assets/bgS.jpg'
  },
  user: {
    name: 'Rebe Adelaida'
  }
};
const MEDIUM_WIDTH = 1080;
const MOBILE_WIDTH = 400;

@Component({
  selector: 'app-bio-page',
  templateUrl: './bio-page.component.html',
  styleUrls: ['./bio-page.component.css']
})
export class BioPageComponent implements OnInit {
  bgInfo: any;
  bgURL: string = null;
  photographerCredits: string = '';
  windowWidthCategory: number = 0;

  constructor() { }

  ngOnInit() {
    this.fetchBackground();
  }

  async fetchBackground() {
    try {
      const response = await fetch('https://api.unsplash.com/photos/random/'
        + '?collections=' + BG_COLLECTION_ID
        + '&orientation=landscape'
        + '&client_id=' + CLIENT_ID)
      
      this.bgInfo = await response.json();
    } catch(e) { }
    this.windowWidthCategory = this.getWindowWidthCategory();

    let { name, urls } = this.getBgData(this.bgInfo);

    if (urls == null || name == null) {
      this.bgInfo = DEFAULT_BG_INFO;
      name = DEFAULT_BG_INFO.user.name;
      urls = DEFAULT_BG_INFO.urls;
    }
    this.bgURL = this.getSizedBg(this.windowWidthCategory, urls)
    this.photographerCredits = name + ' on Unsplash'

    this.initWindowResizeHandler();
  }

  getBgData(bgInfo: any): { name: string, urls: urlsObj } {
    if (bgInfo == null){
      return { name: null, urls: null };
    }
    
    const { urls, user } = bgInfo;
    const name = user != null ? user.name : null;

    return { name, urls }
  }

  getWindowWidthCategory(): number {
    if (window.innerWidth > MEDIUM_WIDTH) {
      return 3;
    } else if (window.innerWidth > MOBILE_WIDTH) {
      return 2;
    }
    return 1;
  }

  getSizedBg(windowWidthCategory: number, urls: urlsObj): string {
    if (windowWidthCategory === 1) {
      return urls.regular;
    } else if (windowWidthCategory === 0) {
      return urls.small;
    }
    return urls.full;
  }

  initWindowResizeHandler() {
    fromEvent(window, 'resize').subscribe(()  => {
      const curWindowWidthCategory = this.getWindowWidthCategory();
      
      if (curWindowWidthCategory != this.windowWidthCategory) {
        this.windowWidthCategory = curWindowWidthCategory;
        this.bgURL = this.getSizedBg(this.windowWidthCategory, this.bgInfo.urls);
      }
    })
  }

}
