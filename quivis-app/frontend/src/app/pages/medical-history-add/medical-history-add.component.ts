import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Image, MedicalHistoryEntry } from 'src/app/pages/medical-history-entry/medical-history-entry.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MedicalHistoryAddService } from './medical-history-add.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-medical-history-add',
  templateUrl: './medical-history-add.component.html',
})
export class MedicalHistoryAddComponent {
  numEntries: number = 0;
  text: string = '';
  uploadedFiles: any[] = [];
  showRemove: boolean = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private medicalHistoryAddService: MedicalHistoryAddService) {
    this.countEntriesInJsonFile();
  }
  @ViewChildren('buttonEl') buttonEl!: QueryList<ElementRef>;

  // Has to be declared as a class property to be able to access it in the template
  medicalHistoryEntry: MedicalHistoryEntry = {
    id: 0,
    title: '',
    date: '',
    text: '',
    images: []
  };

  countEntriesInJsonFile() {
    const filePath = './assets/mockdata/medicalhistorymockdata.json'; // Replace with the actual path to your JSON file
    this.medicalHistoryAddService.countEntriesInJsonFile(filePath)
      .then(numEntries => {
        this.numEntries = numEntries;
      })
      .catch(error => {
        console.error(error);
      });
  }

  onUpload(event: any) {
    for (let file of event.files) {
      this.medicalHistoryEntry.images.push(file);
    }
  }

  onImageMouseOver(file: Image) {
    this.buttonEl.toArray().forEach((el) => {
      el.nativeElement.id === file.name
        ? (el.nativeElement.style.display = 'flex')
        : null;
    });
  }

  onImageMouseLeave(file: Image) {
    this.buttonEl.toArray().forEach((el) => {
      el.nativeElement.id === file.name
        ? (el.nativeElement.style.display = 'none')
        : null;
    });
  }

  removeImage(file: Image) {
    this.medicalHistoryEntry.images = this.medicalHistoryEntry.images.filter((i) => i !== file);
  }

  async saveEntry() {
    console.log('Anzahl Eintrage in JSON:', this.numEntries);
    
    const data = {
      id: this.numEntries + 1,
      title: this.medicalHistoryEntry.title,
      date: this.medicalHistoryEntry.date,
      text: this.medicalHistoryEntry.text.replace(/<[^>]*>/g, ''), // Remove the <p> tags from the title
      images: this.medicalHistoryEntry.images,
    };

    try {
      // Send a POST request to save the data
      await lastValueFrom(this.http.post('http://localhost:3000/entries', data));
      console.log(`Medical History Entry \"${data.title}\" saved successfully`);

      // Navigate to the medical history page after saving the entry
      this.router.navigate(['/medical-history']);

    } catch (error) {
      console.error('Error saving entry:', error);
    }
  }

  discardEntry() {
    this.router.navigate(['/medical-history']);
  }
}
