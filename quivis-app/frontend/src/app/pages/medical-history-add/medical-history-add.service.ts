import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicalHistoryAddService {
  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000';

  // Returns an instance of Observable. In this case this.http.get(this.url + '/users'); is the Observable.
  getUsers(): Observable<any> {
    return this.http.get(this.url + '/entries');
  }


  countEntriesInJsonFile(filePath: string): Promise<number> {
  return new Promise((resolve, reject) => {
    this.http.get(filePath).subscribe(
      (data: any) => {
        try {
          const entries = data.entries;
          resolve(entries.length);
        } catch (error) {
          reject(`Error parsing JSON data: ${error}`);
        }
      },
      (error) => {
        reject(`Error fetching JSON data: ${error}`);
      }
    );
  });
}
}

