import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterDeathSavesComponent } from './character-death-saves.component';

describe('CharacterDeathSavesComponent', () => {
  let component: CharacterDeathSavesComponent;
  let fixture: ComponentFixture<CharacterDeathSavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterDeathSavesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterDeathSavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
