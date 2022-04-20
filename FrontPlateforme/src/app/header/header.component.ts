/*
Composants du header contenant les différents boutons :
- Language
- Connexion
- Créez un projet
- Rechercher un projet
- Logo redirigeant vers la page d'accueil
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  items: MenuItem[];
  ngOnInit(): void {
    this.items = [
      {
        label: 'Language',
        icon: 'pi pi-globe',
        items: [{ label: 'Français' }, { label: 'English' }],
      },
      {
        label: 'Profil',
        icon: 'pi pi-user',
        command: () => {
          if (sessionStorage.getItem('auth-user') != null) {
            this.router.navigate(['/profiluser']);
          } else {
            this.router.navigate(['/login']);
          }
        },
      },
      {
        label: 'New project',
        icon: 'pi pi-plus',
        routerLink: ['/newproject'],
      },
      {
        label: 'Search projects',
        icon: 'pi pi-search',
        routerLink: ['/searchproject'],
      },
    ];

    if (sessionStorage.getItem('auth-user') == null) this.items[1].label='Connexion';
  }
}
