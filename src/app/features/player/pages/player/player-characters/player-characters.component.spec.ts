import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerCharactersComponent } from './player-characters.component';

describe('PlayerCharactersComponent', () => {
  let component: PlayerCharactersComponent;
  let fixture: ComponentFixture<PlayerCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerCharactersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
