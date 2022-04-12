import { Component, NgModule} from '@angular/core';

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css']
})

export class AccountCreationComponent  {
   disabled: boolean = true;
   
    value1: string;

    value2: string;

    value3: string;

    value4: string;

    value5: string = 'Disabled';

    
}

