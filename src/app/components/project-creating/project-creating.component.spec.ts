import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreatingComponent } from './project-creating.component';

describe('ProjectCreatingComponent', () => {
  let component: ProjectCreatingComponent;
  let fixture: ComponentFixture<ProjectCreatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCreatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCreatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
