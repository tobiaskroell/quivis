import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MedicalHistoryService {
  POST_ROUTE = 'http://localhost:3000/entries';
  numEntries: number = 0;

  constructor(private http: HttpClient, private router: Router) {
    this.countEntriesFromPostRoute()
      .then(numEntries => {
        this.numEntries = numEntries;
      })
      .catch(error => {
        console.error(error);
      });
  }
  // Count the number of entries in the JSON data to determine the ID of the next entry
  async countEntriesFromPostRoute(): Promise<number> {
    return new Promise((resolve, reject) => {
      this.http.get(this.POST_ROUTE).subscribe(
        (data: any) => {
          try {
            resolve(data.length);
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

  async saveEntry(id: number, title: string, date: string, text: string, images: any): Promise<void> {
    console.log('Anzahl Eintrage in JSON:', this.numEntries);
    const data = {
      id: id + 1,
      title: title,
      date: date,
      text: text.replace(/<[^>]*>/g, ''), // Remove the <p> tags from the title
      images: images
    };

    try {
      // Send a POST request to save the data
      await lastValueFrom(this.http.post(this.POST_ROUTE, data));
      console.log(`Medical History Entry \"${data.id}\" saved successfully`);

      // Navigate to the medical history page after saving the entry
      this.router.navigate(['/medical-history']);

    } catch (error) {
      console.error('Error saving entry:', error);
    }
  }

  getEntry(id: number): Observable<any> {
    const url = `${this.POST_ROUTE}/${id}`;
    return this.http.get(url);
  }

  getEntries(): Observable<any> {
    return this.http.get(this.POST_ROUTE);
  }


}

