import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IProject } from 'src/app/entities/project-reference';
import { ITask } from 'src/app/entities/task-reference';
import { ModalDetailTaskComponent } from '../modal-detail-task/modal-detail-task.component';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  @Input() project: IProject;

  selectedTask: ITask = {name: "", id: 0, done: false, categories: [], description: ""};

  @ViewChild(ModalDetailTaskComponent) child: ModalDetailTaskComponent;

  constructor() { }

  ngOnInit(): void {
  }

  openModal(task: ITask): void {
    this.selectedTask = task;
    this.child.onOpenModalTask();
  }
}
