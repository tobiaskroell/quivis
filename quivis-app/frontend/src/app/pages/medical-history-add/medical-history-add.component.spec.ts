import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalHistoryAddComponent } from './medical-history-add.component';

describe('MedicalHistoryAddComponent', () => {
  let component: MedicalHistoryAddComponent;
  let fixture: ComponentFixture<MedicalHistoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalHistoryAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalHistoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
