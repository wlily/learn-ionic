import {Component} from '@angular/core';
import {NavController, Platform} from "ionic-angular";

@Component({
  template: `
    <ion-header>
      <ion-navbar color="light">
        <ion-title>Toolbar: Light</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <button ion-button block (click)="goBack()">Go Back to Beginning</button>
    </ion-content>
  `
})
export class Page4 {
  constructor(public nav: NavController) {
  }

  goBack() {
    this.nav.setRoot(BasicPage);
  }
}


@Component({
  template: `
    <ion-header>
      <ion-navbar color="danger">
        <ion-title>Toolbar: Danger</ion-title>
      </ion-navbar>
    </ion-header>  
    
    <ion-content padding>
      <button ion-button block (click)="pushPage()">Next Page</button>
    </ion-content>
  `
})
export class Page3 {
  constructor(public nav: NavController) {
  }

  pushPage() {
    this.nav.push(Page4);
  }
}


@Component({
  template: `
    <ion-header>
      <ion-navbar color="secondary">
        <ion-title>Toolbar: Secondary</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
      <button ion-button block (click)="pushPage()">Next Page</button>
    </ion-content>
  `
})
export class Page2 {
  constructor(public nav: NavController) {
  }

  pushPage() {
    this.nav.push(Page3);
  }
}

@Component({
  templateUrl: 'template.html'
})
export class BasicPage {
  isAndroid: boolean = false;

  constructor(public nav: NavController, platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  pushPage() {
    this.nav.push(Page2);
  }
}
