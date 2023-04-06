import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterStatsCombatComponent } from './character-stats-combat.component';

describe('CharacterStatsCombatComponent', () => {
  let component: CharacterStatsCombatComponent;
  let fixture: ComponentFixture<CharacterStatsCombatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterStatsCombatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterStatsCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
