import { Component, NgModule} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {validateNotEmpty} from "../shared/validators/empty.validator";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {IProject} from "../entities/project-reference";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {

  form: FormGroup;

  private name = new FormControl('', [Validators.required, validateNotEmpty, Validators.pattern(/^[^_]+$/)]);
  private mail = new FormControl('', [Validators.required, validateNotEmpty, Validators.pattern(/^[.+@.+..+]+$/)]);
  private password = new FormControl('', [Validators.required, validateNotEmpty, Validators.pattern(/^(?=.[a-z])(?!=.\s)(?=.[A-Z])(?=.\d)[a-zA-Z\d]{8,}/)]);

  submitted: boolean = false;
  nameTaken: boolean = false;
  mailTaken: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder,
              private translate: TranslateService) {
    this.form = formBuilder.group({
      name: this.name,
      mail: this.mail,
      password: this.password,
    });
  }

  ngOnInit(): void {
    console.log("test");
  }

  onSubmit(formValues: IProject): void {
    this.submitted = true;
    console.log(this.form);
    console.log(this.form.controls);
    if (this.form.invalid) {
      return;
    }

    formValues.name = formValues.name.trim();
  }

  isInvalid() {
    return this.form.get('name').invalid && this.form.get('name').touched && this.form.get('name').dirty;
  }

  public get createProjetControls() { return this.form.controls }}
