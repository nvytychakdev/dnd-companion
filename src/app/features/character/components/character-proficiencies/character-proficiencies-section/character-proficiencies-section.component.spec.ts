import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterProficienciesSectionComponent } from './character-proficiencies-section.component';

describe('CharacterProficienciesSectionComponent', () => {
  let component: CharacterProficienciesSectionComponent;
  let fixture: ComponentFixture<CharacterProficienciesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterProficienciesSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterProficienciesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
