import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbroardComponent } from './dashbroard.component';

describe('DashbroardComponent', () => {
  let component: DashbroardComponent;
  let fixture: ComponentFixture<DashbroardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbroardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbroardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
