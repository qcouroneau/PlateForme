import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  private form: FormGroup;

  private name = new FormControl('', [Validators.required]);
  private description = new FormControl('', [Validators.required]);
  private budget = new FormControl('', [Validators.required]);

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: this.name,
      description: this.description,
      budget: this.budget
    });
   }

  ngOnInit(): void {
  }

}
