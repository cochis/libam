import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComunicateComponent } from './detail-comunicate.component';

describe('DetailComunicateComponent', () => {
  let component: DetailComunicateComponent;
  let fixture: ComponentFixture<DetailComunicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComunicateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComunicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
