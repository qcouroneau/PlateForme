import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IUserEdit } from '../entities/user-edit-reference';
import { IUserToken } from '../entities/user-token-reference';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';
import { validateNotEmpty } from '../shared/validators/empty.validator';

@Component({
  selector: 'app-profil-user-edit',
  templateUrl: './profil-user-edit.component.html',
  styleUrls: ['./profil-user-edit.component.css']
})
export class ProfilUserEditComponent implements OnInit {

  user: IUserToken;

  form: FormGroup;

  private newUsername = new FormControl('', [Validators.required, validateNotEmpty]);
  private email = new FormControl('', [Validators.required, validateNotEmpty,
  Validators.pattern(
    /^((\w[^\W]+)[\.\-]?){1,}\@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ),]);
  private password = new FormControl('', [Validators.required, validateNotEmpty]);
  private newPassword = new FormControl('', [
    Validators.pattern(
      /^(?=.*[a-z])(?!=.*\s)(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/
    ),]);

  submitted: boolean = false;
  submissionFailed: boolean = false;
  nameTaken: boolean = false;
  mailTaken: boolean = false;

  errorMessage: any[] = [];
  nameErrorMessage: any[] = [];
  mailErrorMessage: any[] = [];

  constructor(
    private router: Router,
    private translate: TranslateService,
    private tokenStorageService: TokenStorageService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {
    this.form = formBuilder.group({
      newUsername: this.newUsername,
      email: this.email,
      password: this.password,
      newPassword: this.newPassword
    });
  }

  ngOnInit(): void {

    this.user = this.tokenStorageService.getUser();

    this.newUsername.setValue(this.user.username);
    this.email.setValue(this.user.email);

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

  onSubmit(formValues: IUserEdit): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    formValues.username = this.user.username;
    formValues.newPassword = formValues.newPassword === "" ? formValues.password : formValues.newPassword;
    this.userService.edit(formValues).subscribe({
      next: () => {
        this.authService.login({ username: formValues.newUsername, password: formValues.newPassword }).subscribe({
          next: (data) => {
            this.tokenStorage.saveToken(data.jwt);
            this.tokenStorage.saveUser(data);
            this.router.navigate(['/profiluser']);
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

  public get editAccountControls() {
    return this.form.controls;
  }
}
