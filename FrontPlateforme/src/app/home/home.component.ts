import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProject } from '../entities/project-reference';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name : string = "";

  sub!: Subscription;
  projects: IProject[] = [];
  errorMessage = 'Erreur lors du chargement';
  sortOrder: number;
  sortField: string;

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
