import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JamalComponent } from './jamal.component';

describe('JamalComponent', () => {
  let component: JamalComponent;
  let fixture: ComponentFixture<JamalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JamalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
