import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';


@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {
  menu: NbMenuItem[];
  constructor() {}
  
  ngOnInit(): void {
    this.initSideBar();
  }
  initSideBar() {
    this.menu = [
      {
        title: 'Dashboard',
        link: '/pages/dashboard',
        icon: 'home-outline',
        home: true,
      },
    ];
  }

}
