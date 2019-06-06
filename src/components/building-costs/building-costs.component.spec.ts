import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingCostsComponent } from './building-costs.component';

describe('BuildingCostsComponent', () => {
  let component: BuildingCostsComponent;
  let fixture: ComponentFixture<BuildingCostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingCostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
