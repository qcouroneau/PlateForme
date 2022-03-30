import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/services/project.service';
import {Project} from "../model/project.model";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  private project: Project = new Project();

  public form: FormGroup;

  private name = new FormControl('', [Validators.required]);
  private description = new FormControl('', [Validators.required]);
  private budget = new FormControl('', [Validators.required]);

  constructor(private router: Router, private formBuilder: FormBuilder, private projectService: ProjectService) {
    this.form = formBuilder.group({
      name: this.name,
      description: this.description,
      budget: this.budget
    });
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value)
    this.project = Object.assign(this.project, this.form.value);
    this.projectService.createProject(this.project).subscribe();
  }

}
