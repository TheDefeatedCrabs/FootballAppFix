import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchDetailsModalComponent } from './match-details-modal.component';

describe('MatchDetailsModalComponent', () => {
  let component: MatchDetailsModalComponent;
  let fixture: ComponentFixture<MatchDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
