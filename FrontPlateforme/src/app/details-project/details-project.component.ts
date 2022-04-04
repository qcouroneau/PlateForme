import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProject } from '../entities/project-reference';
import { ProjectService } from '../services/project.service';
import { environment } from 'src/environments/environment';
import { urls } from 'src/urls';

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css']
})
export class DetailsProjectComponent implements OnInit {
  public url: string[] | null = null;
  public name = "";
  public project: IProject;
  public projectImagePath: string;
  sub!:Subscription;
  errorMessage = 'Erreur lors du chargement';

  constructor(private router: Router, private projectService: ProjectService) {
    
   }

  ngOnInit(): void {
    this.url = this.router.url.split("/");
    this.name = this.url[this.url.length - 1];
    this.loadProject(this.formatNameForBdd(this.name));
  } 

  formatNameForBdd(name: string) : string {
    return name.split('_').join(' ');
  }

  loadProject(name: string){
    this.sub = this.projectService.getByName(name).subscribe({
      next: project => {
        this.project = project;
        this.projectImagePath = environment.apiUrl + urls.image.folder +  project.imagePath;
      },
      error: err => this.errorMessage = err
    });
  }
  

  
}
