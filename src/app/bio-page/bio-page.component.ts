import { Component, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

type urlsObj = { full: string, regular: string, small: string };

const APP_NAME = 'nicholashartunian.com';
const CLIENT_ID = '813f1db96865d9d36ff6e9d5623b0da770d4b7bd4c05e6a764161e3460135296';
const BG_COLLECTION_ID = '3684874';
const DEFAULT_BG_INFO = {
  urls: {
    full: 'https://raw.githubusercontent.com/Nick-the-BinaryTree/nick-the-binarytree.github.io/master/src/assets/bgL.jpg',
    regular: 'https://raw.githubusercontent.com/Nick-the-BinaryTree/nick-the-binarytree.github.io/master/src/assets/bgM.jpg',
    small: 'https://raw.githubusercontent.com/Nick-the-BinaryTree/nick-the-binarytree.github.io/master/src/assets/bgS.jpg'
  },
  user: {
    name: 'Rebe Adelaida',
    links: {
      html: 'https://unsplash.com/@rrebba?utm_source=' + APP_NAME + '&utm_medium=referral'
    }
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
  bgLoaded: boolean = false;
  bgURL: string = null;
  photographerName: string = '';
  photographerURL: string = '';
  resizeHandler: Subscription;
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
        + '&client_id=' + CLIENT_ID);
      
      this.bgInfo = await response.json();
    } catch(e) { }
    this.windowWidthCategory = this.getWindowWidthCategory();

    let { html, name, urls } = this.getBgData(this.bgInfo);

    if (urls == null || name == null) {
      this.bgInfo = DEFAULT_BG_INFO;
      ({ html, name, urls } = this.getBgData(this.bgInfo));
    }
    this.bgURL = this.getSizedBg(this.windowWidthCategory, urls)
    this.photographerName = name;
    this.photographerURL = this.getUTMURL(html);

    this.initWindowResizeHandler();
  }

  getBgData(bgInfo: any): { html: string, name: string, urls: urlsObj } {
    if (bgInfo == null){
      return { html: null, name: null, urls: null };
    }
    const { urls, user } = bgInfo;
    let html, links, name;

    if (user != null) {
      links = user.links;
      name = user.name;

      if (links != null) {
        html = links.html;
      }
    }
    return { html, name, urls }
  }

  getUTMURL(url: string) {
    return url + '?utm_source=' + APP_NAME + '&utm_medium=referral';
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
    this.resizeHandler = fromEvent(window, 'resize')
      .subscribe(()  => {
      const curWindowWidthCategory = this.getWindowWidthCategory();
      
      if (curWindowWidthCategory != this.windowWidthCategory) {
        this.windowWidthCategory = curWindowWidthCategory;
        this.bgURL = this.getSizedBg(this.windowWidthCategory, this.bgInfo.urls);
      }
    })
  }
  
  onBgLoad() {
    this.bgLoaded = this.bgURL != null;
  }

  ngOnDestroy() {
    this.resizeHandler.unsubscribe();
  }
}
