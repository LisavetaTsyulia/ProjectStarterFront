import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMessagesComponent } from './news-messages.component';

describe('NewsMessagesComponent', () => {
  let component: NewsMessagesComponent;
  let fixture: ComponentFixture<NewsMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
