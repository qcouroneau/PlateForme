import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProjet } from '../entities/projet-reference';
import { ProjectService } from '../service/project-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sub!: Subscription;
  projects: IProjet[] = [];
  errorMessage = 'Erreur lors du chargement';

  constructor(private router: Router,
    private project: ProjectService) {
   }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.sub = this.project.getAll().subscribe({
      next: projects => {
          this.projects = projects;
        },
        error: err => this.errorMessage = err
      });
  }
}
