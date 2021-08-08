import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatFormComponent } from './add-pat-form.component';

describe('AddPatFormComponent', () => {
  let component: AddPatFormComponent;
  let fixture: ComponentFixture<AddPatFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPatFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
