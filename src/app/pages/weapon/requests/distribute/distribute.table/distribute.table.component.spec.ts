import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Distribute.TableComponent } from './distribute.table.component';

describe('Distribute.TableComponent', () => {
  let component: Distribute.TableComponent;
  let fixture: ComponentFixture<Distribute.TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Distribute.TableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Distribute.TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
