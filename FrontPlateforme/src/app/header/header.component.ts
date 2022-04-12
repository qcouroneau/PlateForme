import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  items: MenuItem[];
  ngOnInit(): void {
    this.items = [
      {
        label: 'language',
        icon: 'pi pi-globe',
        items: [
          {label: 'Français'},
          {label: 'English'}
        ]
      },
      {
        label: 'profil',
        icon: 'pi pi-user',
        routerLink: ['/accountcreation']
      },
      {
        label: 'profiluser',
        icon: 'pi pi-user',
        routerLink: ['/profiluser']
      },
      {
        label: 'new projects',
        icon: 'pi pi-plus',
        routerLink: ['/newproject']
      },
      {
        label: 'find project',
        icon: 'pi pi-search',
        routerLink: ['/searchproject']
      }
    ];
  }
}
