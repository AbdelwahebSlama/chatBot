import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ImageRobotComponent} from './image-robot.component';

describe('ImageRobotComponent', () => {
  let component: ImageRobotComponent;
  let fixture: ComponentFixture<ImageRobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageRobotComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
