import { Component, Input, OnInit } from '@angular/core';
import { IProject } from 'src/app/entities/project-reference';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  @Input() project: IProject;

  constructor() { }

  ngOnInit(): void {
  }

}
