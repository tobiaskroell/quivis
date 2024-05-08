import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const MEDICALHISTORY_MOCKDATA = '/assets/mockdata/medicalhistorymockdata.json';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html'
})
export class MedicalHistoryComponent implements OnInit {
  entries: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get<any>(MEDICALHISTORY_MOCKDATA).subscribe(
      data => {
        this.entries = data.entries.reverse();
      },
      error => {
        console.error('Error loading data:', error);
      }
    );
  }

  // navigateToUrl(id: number) {
  //   console.log('test', id);
  //   window.location.href = 'http://localhost:3000/' + id;
  // }
}

