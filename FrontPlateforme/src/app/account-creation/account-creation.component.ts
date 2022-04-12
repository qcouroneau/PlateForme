import { Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {validateNotEmpty} from "../shared/validators/empty.validator";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {IUser} from "../entities/user-reference";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css']
})

export class AccountCreationComponent  {

  form: FormGroup;

  private username = new FormControl('', [Validators.required, validateNotEmpty, Validators.pattern(/^[^_]+$/)]);
  private email = new FormControl('', [Validators.required, validateNotEmpty, Validators.pattern(/^((\w[^\W]+)[\.\-]?){1,}\@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]);
  private password = new FormControl('', [Validators.required, validateNotEmpty, Validators.pattern(/^(?=.*[a-z])(?!=.*\s)(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/)]);

  submitted: boolean = false;
  nameTaken: boolean = false;
  mailTaken: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder,
              private translate: TranslateService, private authService: AuthService) {
    this.form = formBuilder.group({
      username: this.username,
      email: this.email,
      password: this.password,
    });
  }

  ngOnInit(): void {

  }

  onSubmit(formValues: IUser): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    formValues.username = formValues.username.trim();
    formValues.email = formValues.email.trim();
    this.authService.register(formValues).subscribe({
      next:msg=>{
        console.log(msg);
      }
    })
  }

  isInvalid() {
    return this.form.get('name').invalid && this.form.get('name').touched && this.form.get('name').dirty;
  }

  public get createProjetControls() { return this.form.controls }


}

