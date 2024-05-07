import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalHistoryEntryComponent } from './medical-history-entry.component';

describe('MedicalHistoryEntryComponent', () => {
  let component: MedicalHistoryEntryComponent;
  let fixture: ComponentFixture<MedicalHistoryEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalHistoryEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalHistoryEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
