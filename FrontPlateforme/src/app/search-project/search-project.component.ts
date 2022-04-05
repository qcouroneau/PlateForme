import { Component, OnInit } from '@angular/core';
import { IProject } from '../entities/project-reference';
import { ProjectService } from '../services/project.service';
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import { ICategory } from '../entities/category-reference';
import { CategoryService } from '../services/category.service';

interface queryOption{
  label: string,
  value: string
}

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
  initialCategories: ICategory[] = [];
  filteredCategories: ICategory[];

  sortOrder: number;
  sortField: string;
  sortOptions: queryOption[];
  selectedOption:queryOption;
  constructor(private router: Router, private categoryService: CategoryService,
              private project: ProjectService) { }

  ngOnInit(): void {

    this.sortOptions = [
      {label: 'Ne pas inclure toutes les catégories', value: 'or'},
      {label: 'Inclure toutes les catégories', value: 'and'}
    ];

    this.selectedOption = this.sortOptions[0]

    this.categoryService.getAll().subscribe({
      next: categories => { 
        this.initialCategories = categories;
      }
    });

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

  filterCategories(event: any) {
    let filtered : any[] = [];
    let query = event.query;

    for(let i = 0; i < this.initialCategories.length; i++) {
        let category = this.initialCategories[i];
        if (category.name.toLowerCase().startsWith(query.toLowerCase())) {
            filtered.push(category);
        }
    }

    this.filteredCategories = filtered;
  }

  getProjectWithThisCatgeries(){
    console.log(this.selectedOption)
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
