import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ProjectService} from "../services/project.service";
import {IProject} from "../entities/project-reference";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  private project: IProject;

  public form: FormGroup;

  private name = new FormControl('', [Validators.required]);
  private description = new FormControl('', [Validators.required]);
  private budget = new FormControl('', [Validators.required]);
  private tags = new FormControl([]);

  constructor(private router: Router, private formBuilder: FormBuilder, private projectService: ProjectService) {
    this.form = formBuilder.group({
      name: this.name,
      description: this.description,
      budget: this.budget,
      tags: this.tags
    });
   }

  ngOnInit(): void {
  }

  onSubmit(formValues: IProject): void {
    if (this.form.invalid) {
      return;
    }
    formValues.categories = [];
    for(let i in formValues.tags){
      formValues.categories[i] = {name: ''};
      formValues.categories[i].name = formValues.tags[i].value;
    }
    formValues.name = formValues.name.trim();
    this.projectService.createProject(formValues).subscribe({
      next: project => {
        if(project) {
          const technicalName = project.name.replace(' ', '_');
          this.router.navigate(['/projet', technicalName]);
        } else {
        }
      }
    });
  }

}
