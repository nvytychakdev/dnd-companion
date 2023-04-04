import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerRulesComponent } from './player-rules.component';

describe('PlayerRulesComponent', () => {
  let component: PlayerRulesComponent;
  let fixture: ComponentFixture<PlayerRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerRulesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
