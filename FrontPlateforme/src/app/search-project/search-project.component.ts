import { Component, OnInit } from '@angular/core';
import { IProject } from '../entities/project-reference';
import { ProjectService } from '../services/project.service';
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-project',
  templateUrl: './search-project.component.html',
  styleUrls: ['./search-project.component.css']
})

export class SearchProjectComponent implements OnInit {
  public name : string = "";
  sub!: Subscription;
  projects: IProject[] = [];
  errorMessage = 'Erreur lors du chargement';

  sortOrder: number;
  sortField: string;
  sortOptions: any[];
  constructor(private router: Router,
              private project: ProjectService) { }

  ngOnInit(): void {

    this.sortOptions = [
      {label: 'Newest First', value: '!year'},
      {label: 'Oldest First', value: 'year'},
      {label: 'Brand', value: 'brand'}
    ];

    this.loadProjects();
  }

  loadProjects(): void {
    this.sub = this.project.getAll().subscribe({
      next: projects => {
        this.projects = projects;
        console.log(projects)
      },
      error: err => this.errorMessage = err
    });
  }

  onSortChange(event:any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
}
