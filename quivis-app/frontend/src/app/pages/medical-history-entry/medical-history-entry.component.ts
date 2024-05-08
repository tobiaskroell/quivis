import { Component, OnInit } from '@angular/core';
import { MedicalHistoryEntryModel } from 'src/app/pages/medical-history-entry/medical-history-entry.model';
@Component({
  selector: 'app-medical-history-entry',
  templateUrl: './medical-history-entry.component.html',
})
export class MedicalHistoryEntryComponent implements OnInit{
  medicalHistoryEntryModel: MedicalHistoryEntryModel = {
    id: 0,
    title: '',
    date: '',
    text: '',
    images: []
  };

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    // this.http.get<any>(MEDICALHISTORY_MOCKDATA).subscribe(
    //   data => {
    //     this.entries = data.entries.reverse();
    //   },
    //   error => {
    //     console.error('Error loading data:', error);
    //   }
    // );
  }
}
