import { Component, OnInit } from '@angular/core';
import { MedicalHistoryEntryModel } from 'src/app/pages/medical-history-entry/medical-history-entry.model';
import { MedicalHistoryService } from 'src/app/services/medical-history.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medical-history-entry',
  templateUrl: './medical-history-entry.component.html',
})
export class MedicalHistoryEntryComponent implements OnInit {
  medicalHistoryEntryModel: MedicalHistoryEntryModel = {
    id: 0,
    title: '',
    date: '',
    text: '',
    images: []
  };

  constructor(
    private medicalHistoryAddService: MedicalHistoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const entryId = +idParam;
      this.medicalHistoryAddService.getEntry(entryId).subscribe(
        (data) => {
          this.medicalHistoryEntryModel = data;
        },
        (error) => {
          console.error('Error fetching entry:', error);
        }
      );
    } else {
      console.error('Entry ID not found in route parameters');
    }
  }


}