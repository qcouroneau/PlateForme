import { Component, OnInit } from '@angular/core';
import { IProject } from '../entities/project-reference';
import { ProjectService } from '../services/project.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ICategory } from '../entities/category-reference';
import { CategoryService } from '../services/category.service';
import { ThisReceiver } from '@angular/compiler';

interface queryOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-search-project',
  templateUrl: './search-project.component.html',
  styleUrls: ['./search-project.component.css'],
})
export class SearchProjectComponent implements OnInit {
  public name: string = '';
  sub!: Subscription;
  projects: IProject[] = [];
  showProjects: IProject[] = [];
  errorMessage = 'Erreur lors du chargement';
  initialCategories: ICategory[] = [];
  filteredCategories: ICategory[];
  selectedCategoriesFilter: ICategory[] = [];

  sortOrder: number;
  sortField: string;
  sortOptions: queryOption[] = [];
  selectedOption: queryOption;
  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private project: ProjectService
  ) {}

  ngOnInit(): void {
    this.sortOptions = [
      { label: 'Ne pas inclure toutes les catégories', value: 'or' },
      { label: 'Inclure toutes les catégories', value: 'and' },
    ];

    this.categoryService.getAll().subscribe({
      next: (categories) => {
        this.initialCategories = categories;
      },
    });

    this.selectedOption = this.sortOptions[0];
    this.loadProjects();
  }

  loadProjects(): void {
    this.sub = this.project.getAll().subscribe({
      next: (projects) => {
        this.projects = projects;
        this.showProjects = projects;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  filterCategories(event: any) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.initialCategories.length; i++) {
      let category = this.initialCategories[i];
      if (category.name.toLowerCase().startsWith(query.toLowerCase())) {
        filtered.push(category);
      }
    }

    this.filteredCategories = filtered;
  }

  selectCategoriesFilter(event: any) {
    this.selectedCategoriesFilter.push(event);
    this.onFilterChange();
  }

  unselectCategoriesFilter(event: any) {
    this.selectedCategoriesFilter.splice(
      this.selectedCategoriesFilter.indexOf(event),
      1
    );
    this.onFilterChange();
  }

  onFilterChange() {
    console.log(this.projects);
    this.showProjects = [];
    if (this.selectedCategoriesFilter.length != 0) {
      if (this.selectedOption.value == this.sortOptions[0].value) {
        this.projects.forEach((project) => {
          this.selectedCategoriesFilter.forEach((category) => {
            project.categories.forEach((projectCategory) => {
              if (category.name == projectCategory.name) {
                this.showProjects.push(project);
              }
            });
          });
        });
      } else {
        var haveToHad = false;
        this.projects.forEach((project) => {
          project.categories.forEach((projectCategory) => {
            this.selectedCategoriesFilter.forEach((category) => {
              if (projectCategory.name == category.name) {
                haveToHad = true;
              } else {
                haveToHad = false;
              }
            });
            if (haveToHad) {
              this.showProjects.push(project);
            }
            haveToHad = false;
          });
        });
      }
    } else {
      this.showProjects = this.projects;
    }
  }

  getProjectWithThisCatgeries(event: any) {
    if (event.value == this.sortOptions[0].value) {
      this.selectedOption = this.sortOptions[0];
    } else {
      this.selectedOption = this.sortOptions[1];
    }
    this.onFilterChange();
  }
}
