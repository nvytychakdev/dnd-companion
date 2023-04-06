import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterHitDiceComponent } from './character-hit-dice.component';

describe('CharacterHitDiceComponent', () => {
  let component: CharacterHitDiceComponent;
  let fixture: ComponentFixture<CharacterHitDiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterHitDiceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterHitDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
