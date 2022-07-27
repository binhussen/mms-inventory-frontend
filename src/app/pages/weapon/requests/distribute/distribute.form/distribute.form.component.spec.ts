import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Distribute.FormComponent } from './distribute.form.component';

describe('Distribute.FormComponent', () => {
  let component: Distribute.FormComponent;
  let fixture: ComponentFixture<Distribute.FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Distribute.FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Distribute.FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
