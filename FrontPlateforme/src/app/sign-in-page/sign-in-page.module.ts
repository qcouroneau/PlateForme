import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { SignInPageComponent } from './sign-in-page.component';
import { AccountCreationModule } from '../account-creation/account-creation.module';
import { LoginModule } from '../login/login.module';
import { DividerModule } from 'primeng/divider';
@NgModule({
  declarations: [SignInPageComponent],
  imports: [
    AccountCreationModule,
    LoginModule,
    DividerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [SignInPageComponent],
})
export class SignInPageModule {}
