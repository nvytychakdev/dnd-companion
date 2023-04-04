import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerCharactersOverviewComponent } from './player-characters-overview.component';

describe('PlayerCharactersOverviewComponent', () => {
  let component: PlayerCharactersOverviewComponent;
  let fixture: ComponentFixture<PlayerCharactersOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerCharactersOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerCharactersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
