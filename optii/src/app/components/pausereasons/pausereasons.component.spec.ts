import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PausereasonsComponent } from './pausereasons.component';

describe('PausereasonsComponent', () => {
  let component: PausereasonsComponent;
  let fixture: ComponentFixture<PausereasonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PausereasonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PausereasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
