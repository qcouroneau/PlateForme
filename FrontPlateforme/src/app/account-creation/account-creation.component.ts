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
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css'],
})
export class AccountCreationComponent {
  form: FormGroup;

  private username = new FormControl('', [
    Validators.required,
    validateNotEmpty,
    Validators.pattern(/^[^_]+$/),
  ]);
  private email = new FormControl('', [
    Validators.required,
    validateNotEmpty,
    Validators.pattern(
      /^((\w[^\W]+)[\.\-]?){1,}\@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ),
  ]);
  private password = new FormControl('', [
    Validators.required,
    validateNotEmpty,
    Validators.pattern(
      /^(?=.*[a-z])(?!=.*\s)(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/
    ),
  ]);

  submitted: boolean = false;
  nameTaken: boolean = false;
  mailTaken: boolean = false;

  createdCredentials: ICredential = { username: '', password: '' };

  submissionFailed: boolean = false;

  errorMessage: any[] = [];
  nameErrorMessage: any[] = [];
  mailErrorMessage: any[] = [];

  roles: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
  ) {
    this.form = formBuilder.group({
      username: this.username,
      email: this.email,
      password: this.password,
    });
  }

  ngOnInit(): void {
    this.loadErrorMesssagesTranslations();
  }

  loadErrorMesssagesTranslations() {
    let createErrorSummary,
      createNameErrorDetail,
      createMailErrorDetail,
      createErrorDetail;

    this.translate.get('ACCOUNT.CREATE.ERROR.SUMMARY').subscribe((text) => {
      createErrorSummary = text;
      createNameErrorDetail = this.translate.instant(
        'ACCOUNT.CREATE.ERROR.PSEUDO'
      );
      createMailErrorDetail = this.translate.instant(
        'ACCOUNT.CREATE.ERROR.MAIL'
      );
      createErrorDetail = this.translate.instant('ACCOUNT.CREATE.ERROR.DETAIL');
      this.nameErrorMessage.push({
        severity: 'error',
        summary: createErrorSummary,
        detail: createNameErrorDetail,
      });
      this.mailErrorMessage.push({
        severity: 'error',
        summary: createErrorSummary,
        detail: createMailErrorDetail,
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
    if (this.form.invalid) {
      return;
    }
    formValues.username = formValues.username.trim();
    formValues.email = formValues.email.trim();
    this.authService.register(formValues).subscribe({
      next: (msg) => {
        this.createdCredentials.username = formValues.username;
        this.createdCredentials.password = formValues.password;
        this.authService.login(this.createdCredentials).subscribe({
          next: (data) => {
            this.tokenStorage.saveToken(data.jwt);
            this.tokenStorage.saveUser(data);
            this.router.navigate(['/myprofile']);
          }
        });
      },
      error: (err) => {
        this.nameTaken = err.error.message == 'username';
        this.mailTaken = err.error.message == 'email';
        this.submissionFailed = !this.mailTaken && !this.nameTaken;
      },
    });
  }

  public get createAccountControls() {
    return this.form.controls;
  }
}

