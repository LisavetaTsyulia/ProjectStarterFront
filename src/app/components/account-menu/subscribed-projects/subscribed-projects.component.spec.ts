import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribedProjectsComponent } from './subscribed-projects.component';

describe('SubscribedProjectsComponent', () => {
  let component: SubscribedProjectsComponent;
  let fixture: ComponentFixture<SubscribedProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribedProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
