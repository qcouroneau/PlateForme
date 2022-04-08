import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProject } from '../entities/project-reference';
import { ProjectService } from '../services/project.service';
import { environment } from 'src/environments/environment';
import { urls } from 'src/urls';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public name: string = '';
  public url: string[] | null = null;
  public projectImagePath: string;
  sub!: Subscription;
  projects: IProject[] = [];
  errorMessage = 'Erreur lors du chargement';
  sortOrder: number;
  sortField: string;
  display: boolean = false;
  selectedProject: IProject = {
    id: 0,
    budget: 0,
    name: '',
    description: '',
    categories: [],
    imagePath: '',
    tasks: []
  };
  labelButton: string = '';
  labelButton2: string = '';

  showDialog(selectedProject: IProject) {
    this.display = true;
    this.selectedProject = selectedProject;
  }

  constructor(
    private router: Router,
    private translate: TranslateService,
    private project: ProjectService
  ) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.sub = this.project.getAll().subscribe({
      next: (projects) => {
        projects.map((project: { imagePath: string }) => {
          project.imagePath =
            environment.apiUrl + urls.image.folder + project.imagePath;
        });
        this.projects = projects;
        this.projects.map(project => {
          project.urlName = project.name.split(" ").join("_")
        })

        this.loadHomeTranslation();
      },
      error: (err) => (this.errorMessage = err),
    });
  }
  loadHomeTranslation(): void {
    this.labelButton = this.translate.instant('PROJECT.CREATE.TITLE');
    this.labelButton2 = this.translate.instant('HOME.SEEPROJECT');
  }
}
