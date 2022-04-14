import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { validateNotEmpty } from '../shared/validators/empty.validator';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IUser } from '../entities/user-reference';
import { AuthService } from '../services/auth.service';
import { ICredential } from '../entities/credential-reference';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;

  private username = new FormControl('', [
    Validators.required,
    validateNotEmpty,
  ]);
  private password = new FormControl('', [
    Validators.required,
    validateNotEmpty,
  ]);

  submissionFailed: boolean = false;
  loginFailed: boolean = false;
  submitted: boolean = false;

  errorMessage: any[] = [];
  LoginFailMessage: any[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {
    this.form = formBuilder.group({
      username: this.username,
      password: this.password,
    });
  }

  ngOnInit(): void {
    this.loadErrorMessageTranslations();
  }

  loadErrorMessageTranslations() {
    let createErrorSummary, createLoginFailDetail, createErrorDetail;
    this.translate.get('LOGIN.ERROR.SUMMARY').subscribe((text) => {
      createErrorSummary = text;
      createLoginFailDetail = this.translate.instant('LOGIN.ERROR.LOG_FAIL');
      createErrorDetail = this.translate.instant('LOGIN.ERROR.DETAIL');
      this.LoginFailMessage.push({
        severity: 'error',
        summary: createErrorSummary,
        detail: createLoginFailDetail,
      });
      this.errorMessage.push({
        severity: 'error',
        summary: createErrorSummary,
        detail: createErrorDetail,
      });
    });
    
  }

  onSubmit(formValues: IUser): void {
    this.submitted = true;
    let newCredentials: ICredential = { username: '', password: '' };
    if (this.form.invalid) {
      return;
    }

    formValues.username = formValues.username.trim();
    formValues.password = formValues.password.trim();
    newCredentials.username = formValues.username;
    newCredentials.password = formValues.password;
    this.authService.login(newCredentials).subscribe({
      next: (data) => {
        this.tokenStorage.saveToken(data.jwt);
        this.tokenStorage.saveUser(data);
        this.router.navigate(['/profiluser']);
      },
      error: (err) => {
        this.loginFailed = err.error.error == 'Forbidden';
        this.submissionFailed = !this.loginFailed;
      },
    });
  }

  public get ConnectionControls() {
    return this.form.controls;
  }
}
