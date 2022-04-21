/*
Composants pour afficher la page de profil de l'utilisateur connecté
*/





import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {Subscription} from "rxjs";
import {IProject} from "../entities/project-reference";
import {ICategory} from "../entities/category-reference";
import {Router} from "@angular/router";
import {CategoryService} from "../services/category.service";
import {ProjectService} from "../services/project.service";
import {TranslateService} from "@ngx-translate/core";
import {environment} from "../../environments/environment";
import {urls} from "../../urls";
import { TokenStorageService } from '../services/token-storage.service';
import { IUserToken } from '../entities/user-token-reference';


interface queryOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.css']
})
export class ProfilUserComponent implements OnInit {

  user: IUserToken;
  name: string = '';
  sub!: Subscription;
  projects: IProject[] = [];
  showProjects: IProject[] = [];
  errorMessage = 'Erreur lors du chargement';
  initialCategories: ICategory[] = [];
  filteredCategories: ICategory[];
  selectedCategoriesFilter: ICategory[] = [];

  labelEdit: string = "";
  labelCancel: string = "";
  labelLogout: string = "";

  sortOrder: number;
  sortField: string;
  sortOptions: queryOption[] = [];
  selectedOption: queryOption;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private project: ProjectService,
    private translate: TranslateService,
    private tokenStorageService: TokenStorageService
  ) {}

  searchProjectName: string = '';
  searchByCategories: string = '';
  goToButton: string = '';

  ngOnInit(): void {

    this.user = this.tokenStorageService.getUser();

    this.sortOptions = [
      { label: 'Ne pas inclure toutes les catégories', value: 'or' },
      { label: 'Inclure toutes les catégories', value: 'and' },
    ];

    this.categoryService.getAll().subscribe({
      next: (categories) => {
        this.initialCategories = categories;
        this.placeHolderTranslations();
      },
    });

    this.selectedOption = this.sortOptions[0];
    this.loadLabels();
    this.loadProjects();
  }

  loadLabels() {
    this.translate.get('GENERIC').subscribe(text => {
      this.labelCancel = this.translate.instant('GENERIC.CANCEL');
      this.labelEdit = this.translate.instant('GENERIC.EDIT');
      this.labelLogout = this.translate.instant('GENERIC.LOGOUT');
    });

  }

  placeHolderTranslations() {
    this.searchProjectName = this.translate.instant('PROJECT.SEARCH.NAME');
    this.searchByCategories = this.translate.instant(
      'PROJECT.SEARCH.CATEGORY_FILTER'
    );
    this.goToButton = this.translate.instant('PROJECT.SEARCH.GO_TO_PROJECT');
  }

  loadProjects(): void {
    this.sub = this.project.getProjectsByUsername(this.user.username).subscribe({
      next: (projects) => {
        this.projects = projects;
        this.projects.map((project) => {
          project.urlName = project.name.split(' ').join('_');
        });
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
    var haveToAdd = false;
    var countValid = 0;
    this.showProjects = [];
    if (this.selectedCategoriesFilter.length != 0) {
      if (this.selectedOption.value == this.sortOptions[0].value) {
        this.projects.forEach((project) => {
          this.selectedCategoriesFilter.forEach((category) => {
            project.categories.forEach((projectCategory) => {
              if (category.name == projectCategory.name) {
                haveToAdd = true;
              }
            });
          });
          if (haveToAdd) this.showProjects.push(project);
          haveToAdd = false;
        });
      } else {
        this.projects.forEach((project) => {
          project.categories.forEach((projectCategory) => {
            this.selectedCategoriesFilter.forEach((category) => {
              if (projectCategory.name == category.name) {
                countValid++;
              }
            });
          });
          if (countValid == this.selectedCategoriesFilter.length) {
            this.showProjects.push(project);
          }
          countValid = 0;
        });
      }
    } else {
      this.showProjects = this.projects;
    }
  }

  getProjectWithThisCatgeries(event: any) {
    this.selectedOption =
      event.value == this.sortOptions[0].value
        ? this.sortOptions[0]
        : this.sortOptions[1];
    this.onFilterChange();
  }

  logout() {
    this.tokenStorageService.signOut();
  }
}
