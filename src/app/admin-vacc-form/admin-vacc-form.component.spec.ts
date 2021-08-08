import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVaccFormComponent } from './admin-vacc-form.component';

describe('AdminVaccFormComponent', () => {
  let component: AdminVaccFormComponent;
  let fixture: ComponentFixture<AdminVaccFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVaccFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVaccFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
