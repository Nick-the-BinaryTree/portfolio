import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameTitleComponent } from './name-title.component';

describe('NameTitleComponent', () => {
  let component: NameTitleComponent;
  let fixture: ComponentFixture<NameTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
