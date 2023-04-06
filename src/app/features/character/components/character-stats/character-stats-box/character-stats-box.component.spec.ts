import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterStatsBoxComponent } from './character-stats-box.component';

describe('CharacterStatsBoxComponent', () => {
  let component: CharacterStatsBoxComponent;
  let fixture: ComponentFixture<CharacterStatsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterStatsBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterStatsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
