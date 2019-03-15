import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherScoresComponent } from './other-scores.component';

describe('OtherScoresComponent', () => {
  let component: OtherScoresComponent;
  let fixture: ComponentFixture<OtherScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
