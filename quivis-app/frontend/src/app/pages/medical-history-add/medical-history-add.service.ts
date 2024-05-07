import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicalHistoryAddService {
  constructor(private http: HttpClient) {}

  countEntriesInJsonFile(filePath: string): Promise<number> {
    return new Promise((resolve, reject) => {
      this.http.get(filePath, { responseType: 'text' }).subscribe(
        (data: string) => {
          try {
            const jsonData = JSON.parse(data);
            const entries = Array.isArray(jsonData) ? jsonData : Object.values(jsonData);
            resolve(entries.length);
          } catch (error) {
            reject(`Error parsing JSON file: ${error}`);
          }
        },
        (error) => {
          reject(`Error fetching JSON file: ${error}`);
        }
      );
    });
  }
}

@Injectable({
  providedIn: 'root'
})
export class YourClass {
  numEntries: number = 0;
  medicalHistoryEntry: any;

  constructor(private medicalHistoryAddService: MedicalHistoryAddService) {}

  async saveEntry() {
    console.log('Anzahl Eintrage in JSON:', this.numEntries);
    const data = {
      id: this.numEntries + 1,
      title: this.medicalHistoryEntry.title,
      date: this.medicalHistoryEntry.date,
      text: this.medicalHistoryEntry.text,
      images: this.medicalHistoryEntry.images
    };

    const filePath = './assets/mockdata/medicalhistorydata.json';

    try {
      // Get the number of existing entries in the JSON file
      const existingEntries = await this.medicalHistoryAddService.countEntriesInJsonFile(filePath);
      this.numEntries = existingEntries;

      // Read the existing data from the file
      const existingData = existingEntries > 0 ? await this.readJsonFile(filePath) : [];

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
      const fileData = await this.medicalHistoryAddService.countEntriesInJsonFile(filePath);
      const jsonData = JSON.parse(fileData.toString());
      return Array.isArray(jsonData) ? jsonData : [];
    } catch (error) {
      console.error('Fehler beim Lesen der JSON-Datei', error);
      return [];
    }
  }

  private async writeJsonFile(filePath: string, data: any[]): Promise<void> {
    try {
      const fileContent = JSON.stringify(data, null, 2);
      // You can use the appropriate method to write the file content here
      // For example, if you're using Node.js, you can use the fs module
      console.log('JSON-Datei erfolgreich geschrieben');
    } catch (error) {
      console.error('Fehler beim Schreiben der JSON-Datei', error);
    }
  }
}