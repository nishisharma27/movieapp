import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondtionalComponent } from './condtional.component';

describe('CondtionalComponent', () => {
  let component: CondtionalComponent;
  let fixture: ComponentFixture<CondtionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondtionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondtionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
