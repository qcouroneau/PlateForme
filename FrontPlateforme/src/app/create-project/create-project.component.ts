import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ProjectService} from "../services/project.service";
import {CategoryService} from "../services/category.service";
import {IProject} from "../entities/project-reference";
import { ICategory } from '../entities/category-reference';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  private project: IProject;

  form: FormGroup;

  private name = new FormControl('', [Validators.required]);
  private description = new FormControl('', [Validators.required]);
  private budget = new FormControl('', [Validators.required]);
  private categories = new FormControl(null, []);

  filteredCategories: ICategory[];

  initialCategories: ICategory[] = [];

  constructor(private router: Router, private formBuilder: FormBuilder, private projectService: ProjectService,
              private categoryService: CategoryService) {
    this.form = formBuilder.group({
      name: this.name,
      description: this.description,
      budget: this.budget,
      categories: this.categories
    });
   }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe({
      next: categories => { 
        this.initialCategories = categories;
        console.log(this.initialCategories);
      }
    })
  }

  filterCategories(event: any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    let query = event.query;

    for(let i = 0; i < this.initialCategories.length; i++) {
        let category = this.initialCategories[i];
        if (category.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(category);
        }
    }

    this.filteredCategories = filtered;
}

  onSubmit(formValues: IProject): void {
    if (this.form.invalid) {
      return;
    }
    formValues.name = formValues.name.trim();
    this.projectService.createProject(formValues).subscribe({
      next: project => {
        if(project) {
          const technicalName = project.name.split(' ').join('_');
          this.router.navigate(['/projet', technicalName]);
        } else {
        }
      }
    });
  }

}
