import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugDescriptionComponent } from './bug-description.component';

describe('BugDescriptionComponent', () => {
  let component: BugDescriptionComponent;
  let fixture: ComponentFixture<BugDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
