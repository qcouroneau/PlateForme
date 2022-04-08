import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICategory } from '../../../entities/category-reference';
import { ITask } from '../../../entities/task-reference';
import { validateNotEmpty } from '../../validators/empty.validator';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent implements OnInit {

  @Output() task: EventEmitter<ITask> = new EventEmitter<ITask>();

  @Input() initialCategories: ICategory[] = [];

  form: FormGroup

  private name: FormControl = new FormControl('', [Validators.required, validateNotEmpty]);
  private description: FormControl = new FormControl('', [Validators.required, validateNotEmpty]);
  private categories = new FormControl([], [Validators.required, Validators.minLength(1)]);

  filteredCategories: ICategory[];

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: this.name,
      description: this.description,
      categories: this.categories
    })
  }

  ngOnInit(): void {
    this.resetForm();
  }

  filterCategories(event: any) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.initialCategories.length; i++) {
      let category = this.initialCategories[i];
      if (category.name.toLowerCase().startsWith(query.toLowerCase())) {
        filtered.push(category);
      }
    }

    this.filteredCategories = filtered;
  }

  onSubmit(formValues: ITask) {
    console.log("got here ?");
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.task.emit(formValues);
    this.resetForm();
  }

  resetForm() {
    this.submitted = false;
    this.form.reset();
  }

  public get createTaskControls() { return this.form.controls }
}
