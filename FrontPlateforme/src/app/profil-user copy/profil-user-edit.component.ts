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
  private newPassword = new FormControl('', [Validators.required,
    validateNotEmpty,
  Validators.pattern(
    /^(?=.*[a-z])(?!=.*\s)(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/
  ),]);

  labelEdit: string = "";

  labelCancel: string = "";

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

  searchProjectName: string = '';
  searchByCategories: string = '';
  goToButton: string = '';

  ngOnInit(): void {

    this.user = this.tokenStorageService.getUser();

    this.newUsername.setValue(this.user.username);
    this.email.setValue(this.user.email);

    this.loadLabels();
  }

  loadLabels() {
    this.translate.get('GENERIC').subscribe(text => {
      this.labelCancel = this.translate.instant('GENERIC.CANCEL');
      this.labelEdit = this.translate.instant('GENERIC.EDIT');
    });
  }

  onSubmit(formValues: IUserEdit): void {
    formValues.username = this.user.username;
    formValues.newPassword === "" ?  formValues.password : formValues.newPassword;
    this.userService.edit(formValues).subscribe({
      next: () => {
        this.authService.login({username: formValues.newUsername, password: formValues.newPassword}).subscribe({
          next: (data) => {
            this.tokenStorage.saveToken(data.jwt);
            this.tokenStorage.saveUser(data);
            this.router.navigate(['/profiluser']);
          }
        });
      }
    });
  }
}
