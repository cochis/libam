import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertComponent } from './ofert.component';

describe('OfertComponent', () => {
  let component: OfertComponent;
  let fixture: ComponentFixture<OfertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
