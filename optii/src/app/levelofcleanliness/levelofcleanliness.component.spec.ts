import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelofcleanlinessComponent } from './levelofcleanliness.component';

describe('LevelofcleanlinessComponent', () => {
  let component: LevelofcleanlinessComponent;
  let fixture: ComponentFixture<LevelofcleanlinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelofcleanlinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelofcleanlinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
