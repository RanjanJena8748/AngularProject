import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingarrangmentComponent } from './workingarrangment.component';

describe('WorkingarrangmentComponent', () => {
  let component: WorkingarrangmentComponent;
  let fixture: ComponentFixture<WorkingarrangmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingarrangmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingarrangmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
