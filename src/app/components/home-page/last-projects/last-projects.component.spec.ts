import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastProjectsComponent } from './last-projects.component';

describe('LastProjectsComponent', () => {
  let component: LastProjectsComponent;
  let fixture: ComponentFixture<LastProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
