import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionalDiaryComponent } from './nutritional-diary.component';

describe('NutritionalDiaryComponent', () => {
  let component: NutritionalDiaryComponent;
  let fixture: ComponentFixture<NutritionalDiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionalDiaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NutritionalDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
