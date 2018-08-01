import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaculityMemberComponent } from './faculity-member.component';

describe('FaculityMemberComponent', () => {
  let component: FaculityMemberComponent;
  let fixture: ComponentFixture<FaculityMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaculityMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaculityMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
