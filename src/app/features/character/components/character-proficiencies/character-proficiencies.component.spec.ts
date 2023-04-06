import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterProficienciesComponent } from './character-proficiencies.component';

describe('CharacterProficienciesComponent', () => {
  let component: CharacterProficienciesComponent;
  let fixture: ComponentFixture<CharacterProficienciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterProficienciesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterProficienciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
