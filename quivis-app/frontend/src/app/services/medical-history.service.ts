import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MedicalHistoryAddService {
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

  countEntriesFromPostRoute(): Promise<number> {
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




  // Returns an instance of Observable. In this case this.http.get(this.url + '/users'); is the Observable.
  // getUsers(): Observable<any> {
  //   return this.http.get(this.url + '/entries');
  // }

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
      console.log(`Medical History Entry \"${data.title}\" saved successfully`);

      // Navigate to the medical history page after saving the entry
      this.router.navigate(['/medical-history']);

    } catch (error) {
      console.error('Error saving entry:', error);
    }
  }



}

