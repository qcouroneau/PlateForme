/*
Composants du footer contenant 3 boutons :
- Instagram
- Facebook
- Twitter
*/




import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private translate: TranslateService ) {
  }

  ngOnInit(): void {
  }

}
