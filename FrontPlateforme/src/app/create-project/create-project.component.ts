import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from "../services/project.service";
import { CategoryService } from "../services/category.service";
import { IProject } from "../entities/project-reference";
import { ICategory } from '../entities/category-reference';
import { TranslateService } from '@ngx-translate/core';
import { ImageService } from '../services/image.service';
import { ITask } from '../entities/task-reference';
import { validateNotEmpty } from '../shared/validators/empty.validator';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  form: FormGroup;

  private name = new FormControl('', [Validators.required, validateNotEmpty]);
  private description = new FormControl('', [Validators.required, validateNotEmpty]);
  private budget = new FormControl('0', [Validators.required]);
  private categories = new FormControl([], [Validators.required, Validators.minLength(1)]);
  private image = new FormData();
  private tasks = new FormControl([], [Validators.required, Validators.minLength(1)]);

  filteredCategories: ICategory[];

  initialCategories: ICategory[] = [];

  nameTaken: boolean = false;

  submitted: boolean = false;

  submissionFailed: boolean = false;

  errorMessage: any[] = [];

  errorMessageTask: any[] = [];

  invalidFileTypeMessageSummary: string = "";

  invalidFileTypeMessageDetail: string = "";

  invalidFileSizeMessageSummary: string = "";

  invalidFileSizeMessageDetail: string = "";

  chooseLabel: string = "";

  createTask: string = "";

  private tmpTasks: ITask[] = [];

  constructor(private router: Router, private formBuilder: FormBuilder, private projectService: ProjectService,
    private categoryService: CategoryService, private translate: TranslateService, private imageService: ImageService) {
    this.form = formBuilder.group({
      name: this.name,
      description: this.description,
      budget: this.budget,
      categories: this.categories,
      tasks: this.tasks
    });
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe({
      next: categories => {
        this.initialCategories = categories;
        this.loadErrorMesssagesTranslations();
      }
    });
  }

  loadErrorMesssagesTranslations() {
    let createErrorSummary, createErrorDetail;
    createErrorSummary = this.translate.instant('PROJECT.CREATE.ERROR.SUMMARY');
    createErrorDetail = this.translate.instant('PROJECT.CREATE.ERROR.DETAIL');
    this.errorMessage.push({ severity: 'error', summary: createErrorSummary, detail: createErrorDetail });

    let taskErrorSummary, taskErrorDetail;
    taskErrorSummary = this.translate.instant('TASK.CREATE.ERROR.SUMMARY');
    taskErrorDetail = this.translate.instant('TASK.CREATE.ERROR.DETAIL');
    this.errorMessageTask.push({ severity: 'error', summary: taskErrorSummary, detail: taskErrorDetail });

    this.invalidFileTypeMessageSummary = this.translate.instant('PROJECT.CREATE.ERROR.INVALID_FILE_TYPE_SUMMARY');
    this.invalidFileTypeMessageDetail = this.translate.instant('PROJECT.CREATE.ERROR.INVALID_FILE_TYPE_DETAIL');
    this.invalidFileSizeMessageSummary = this.translate.instant('PROJECT.CREATE.ERROR.INVALID_FILE_SIZE_SUMMARY');
    this.invalidFileSizeMessageDetail = this.translate.instant('PROJECT.CREATE.ERROR.INVALID_FILE_SIZE_DETAIL');
    this.chooseLabel = this.translate.instant('PROJECT.CREATE.FIELD.IMAGE_BROWSE');
    this.createTask = this.translate.instant('TASK.CREATE.TITLE');
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

  isInvalid() {
    return this.form.get('name').invalid && this.form.get('name').touched && this.form.get('name').dirty;
  }

  onImageUpload(event: any) {
    let uploadedImage;
    for (let file of event.files) {
      uploadedImage = file;
    }
    this.image.append('image', uploadedImage, uploadedImage.name);
  }

  onSubmit(formValues: IProject): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    formValues.name = formValues.name.trim();
    if (this.image.get('image') != null) {
      this.imageService.saveFile(this.image).subscribe({
        next: image => {
          formValues.imagePath = image.path;
          this.createProject(formValues);
        }
      });
    } else {
      this.createProject(formValues);
    }
  }

  private createProject(formValues: IProject) {
    this.projectService.createProject(formValues).subscribe({
      next: project => {
        if (project) {
          const technicalName = project.name.split(' ').join('_');
          this.router.navigate(['/project', technicalName]);
        } else {
          this.nameTaken = true;
        }
      },
      error: err => {
        this.submissionFailed = true;
      }
    });
  }

  addNewTask(newTask: ITask) {
    this.tmpTasks.push(newTask);
    this.tasks.setValue(this.tmpTasks);
  }

  public get createProjetControls() { return this.form.controls }

}
