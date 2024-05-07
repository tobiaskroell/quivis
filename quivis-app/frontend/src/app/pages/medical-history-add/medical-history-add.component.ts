import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Image, MedicalHistoryEntry } from 'src/app/pages/medical-history-entry/medical-history-entry.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MedicalHistoryAddService } from './medical-history-add.service';


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
    private medicalHistoryAddService: MedicalHistoryAddService) 
    {
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
    const filePath = './assets/mockdata/medicalhistorydata.json'; // Replace with the actual path to your JSON file
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
      text: this.medicalHistoryEntry.text,
      images: this.medicalHistoryEntry.images,
    };

    const filePath = './assets/mockdata/medicalhistorydata.json';

    try {
      // Get the number of existing entries in the JSON file
      const existingEntries = await this.medicalHistoryAddService.countEntriesInJsonFile(
        filePath
      );
      this.numEntries = existingEntries;

      // Read the existing data from the file
      const existingData =
        existingEntries > 0 ? await this.readJsonFile(filePath) : [];

      // Add the new entry to the existing data
      existingData.push(data);

      // Write the updated data back to the file
      await this.writeJsonFile(filePath, existingData);

      console.log('Eintrag erfolgreich gespeichert');
    } catch (error) {
      console.error('Fehler beim Speichern des Eintrags', error);
    }
  }

  private async readJsonFile(filePath: string): Promise<any[]> {
    try {
      const fileData = await this.medicalHistoryAddService.countEntriesInJsonFile(
        filePath
      );
      const jsonData = JSON.parse(fileData.toString());
      return Array.isArray(jsonData) ? jsonData : [];
    } catch (error) {
      console.error('Fehler beim Lesen der JSON-Datei', error);
      return [];
    }
  }

  private async writeJsonFile(filePath: string, data: any[]): Promise<void> {
    try {
      // Read the existing data from the file
      const existingData = await this.readJsonFile(filePath);

      // Combine the existing data with the new data
      const updatedData = [...existingData, ...data];

      const fileContent = JSON.stringify(updatedData, null, 2);

      // You can use the appropriate method to write the file content here
      // For example, if you're using Node.js, you can use the fs module
      console.log('JSON-Datei erfolgreich geschrieben');
    } catch (error) {
      console.error('Fehler beim Schreiben der JSON-Datei', error);
    }
  }


  discardEntry() {
    this.router.navigate(['/medical-history']);
  }


  
}
