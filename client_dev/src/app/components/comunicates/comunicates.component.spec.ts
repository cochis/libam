import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicatesComponent } from './comunicates.component';

describe('ComunicatesComponent', () => {
  let component: ComunicatesComponent;
  let fixture: ComponentFixture<ComunicatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
