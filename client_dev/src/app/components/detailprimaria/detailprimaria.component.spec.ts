import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailprimariaComponent } from './detailprimaria.component';

describe('DetailprimariaComponent', () => {
  let component: DetailprimariaComponent;
  let fixture: ComponentFixture<DetailprimariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailprimariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailprimariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
