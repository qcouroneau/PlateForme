import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/entities/category-reference';
import { ITask } from 'src/app/entities/task-reference';
import { FormTaskComponent } from './form-task/form-task.component';

@Component({
  selector: 'app-modal-task',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.css']
})
export class ModalTaskComponent implements OnInit {

  @ViewChild(FormTaskComponent)
  childForm: FormTaskComponent

  @Output() task: EventEmitter<ITask> = new EventEmitter<ITask>();

  @Input() initialCategories: ICategory[] = [];
  @Input() header: string = "gfd";

  displayModal: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  onOpenModalTask(display: boolean) {
    this.displayModal = display;
  }

  addNewTask(newTask: ITask) {
    this.task.emit(newTask);
    this.onOpenModalTask(false);
  }

  onHide() {
    this.childForm.resetForm();
  }
}
