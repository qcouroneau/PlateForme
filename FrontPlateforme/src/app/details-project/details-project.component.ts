import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-project',
  templateUrl: './details-project.component.html',
  styleUrls: ['./details-project.component.css']
})
export class DetailsProjectComponent implements OnInit {
  public url: string[] | null = null;
  public name = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.url = this.router.url.split("/");
    this.name = this.url[this.url.length - 1];
  } 

}
