import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedVoterComponent } from './breed-voter.component';

describe('BreedVoterComponent', () => {
  let component: BreedVoterComponent;
  let fixture: ComponentFixture<BreedVoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedVoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedVoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
