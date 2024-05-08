import { Component, OnInit } from '@angular/core';
import { MedicalHistoryService } from 'src/app/services/medical-history.service';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html'
})
export class MedicalHistoryComponent implements OnInit {
  entries: any[] = [];

  constructor(private medicalHistoryService: MedicalHistoryService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.medicalHistoryService.getEntries().subscribe(
      data => {
        this.entries = data.reverse();
      },
      error => {
        console.error('Error loading data:', error);
      }
    );
  }
}