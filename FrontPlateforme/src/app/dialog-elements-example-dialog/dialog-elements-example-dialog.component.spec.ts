import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogElementsExampleDialogComponent } from './dialog-elements-example-dialog.component';

describe('DialogElementsExampleDialogComponent', () => {
  let component: DialogElementsExampleDialogComponent;
  let fixture: ComponentFixture<DialogElementsExampleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogElementsExampleDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogElementsExampleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
