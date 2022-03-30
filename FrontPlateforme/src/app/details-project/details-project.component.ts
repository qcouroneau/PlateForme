import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProjet } from '../entities/projet-reference';
import { ProjectService } from '../service/project-service';

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css']
})
export class DetailsProjectComponent implements OnInit {
  public url: string[] | null = null;
  public name = "";
  public project: IProjet = {id: 0, category: "", image: "", description: "", name: "default"};
  sub!:Subscription;
  errorMessage = 'Erreur lors du chargement';

  constructor(private router: Router, private projectService:ProjectService) {
    
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
    this.sub= this.projectService.getByName(name).subscribe({
    next: project => {
        
      this.project=project;
      console.log(this.project);
    },
    error: err => this.errorMessage = err
    })
    
  }
  

  
}
