import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProjectEditComponent } from './detail-project-edit.component';

describe('DetailProjectEditComponent', () => {
  let component: DetailProjectEditComponent;
  let fixture: ComponentFixture<DetailProjectEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProjectEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProjectEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
