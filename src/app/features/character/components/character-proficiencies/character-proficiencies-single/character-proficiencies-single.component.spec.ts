import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterProficienciesSingleComponent } from './character-proficiencies-single.component';

describe('CharacterProficienciesSingleComponent', () => {
  let component: CharacterProficienciesSingleComponent;
  let fixture: ComponentFixture<CharacterProficienciesSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterProficienciesSingleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterProficienciesSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
