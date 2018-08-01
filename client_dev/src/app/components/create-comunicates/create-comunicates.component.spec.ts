import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComunicatesComponent } from './create-comunicates.component';

describe('CreateComunicatesComponent', () => {
  let component: CreateComunicatesComponent;
  let fixture: ComponentFixture<CreateComunicatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateComunicatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComunicatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
