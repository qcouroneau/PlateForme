import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/entities/task-reference';

@Component({
  selector: 'app-modal-detail-task',
  templateUrl: './modal-detail-task.component.html',
  styleUrls: ['./modal-detail-task.component.css']
})
export class ModalDetailTaskComponent implements OnInit {

  @Input() selectedTask: ITask;

  displayModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onOpenModalTask() {
    this.displayModal = true;
  } 

  onHide() {
    this.displayModal = false;
  }
}
