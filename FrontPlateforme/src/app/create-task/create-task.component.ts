import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICategory } from '../entities/category-reference';
import { ITask } from '../entities/task-reference';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  @Output() task: EventEmitter<ITask> = new EventEmitter<ITask>();
  @Output() displayTaskModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() initialCategories: ICategory[] = [];

  form: FormGroup

  private name: FormControl = new FormControl('', [Validators.required]);
  private description: FormControl = new FormControl('', [Validators.required]);
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
    let filtered : any[] = [];
    let query = event.query;

    for(let i = 0; i < this.initialCategories.length; i++) {
        let category = this.initialCategories[i];
        if (category.name.toLowerCase().startsWith(query.toLowerCase())) {
            filtered.push(category);
        }
    }

    this.filteredCategories = filtered;
  }

  onSubmit(formValues: ITask){ 
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.task.emit(formValues);
    this.displayTaskModal.emit(false);
    this.resetForm();
  }

  resetForm() {
    this.form.reset();
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key).setErrors(null);
    });
  }

  public get createTaskControls() { return this.form.controls }
}
