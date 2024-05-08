import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const MEDICALHISTORY_MOCKDATA = '/assets/mockdata/medicalhistorymockdata.json';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html'
})
export class MedicalHistoryComponent implements OnInit {
  events: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.http.get<any>(MEDICALHISTORY_MOCKDATA).subscribe(
      data => {
        this.events = data.entries;
      },
      error => {
        console.error('Error loading events:', error);
      }
    );
  }
}
