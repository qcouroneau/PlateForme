import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilUserEditComponent } from './profil-user-edit.component';

describe('ProfilUserEditComponent', () => {
  let component: ProfilUserEditComponent;
  let fixture: ComponentFixture<ProfilUserEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilUserEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
