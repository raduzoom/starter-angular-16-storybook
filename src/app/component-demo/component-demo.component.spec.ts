import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDemoComponent } from './component-demo.component';

describe('ComponentDemoComponent', () => {
  let component: ComponentDemoComponent;
  let fixture: ComponentFixture<ComponentDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentDemoComponent]
    });
    fixture = TestBed.createComponent(ComponentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
