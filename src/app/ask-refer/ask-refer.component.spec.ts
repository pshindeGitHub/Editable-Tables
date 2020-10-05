import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskReferComponent } from './ask-refer.component';

describe('AskReferComponent', () => {
  let component: AskReferComponent;
  let fixture: ComponentFixture<AskReferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskReferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskReferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
