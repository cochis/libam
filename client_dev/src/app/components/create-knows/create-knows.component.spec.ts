import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKnowsComponent } from './create-knows.component';

describe('CreateKnowsComponent', () => {
  let component: CreateKnowsComponent;
  let fixture: ComponentFixture<CreateKnowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateKnowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKnowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
