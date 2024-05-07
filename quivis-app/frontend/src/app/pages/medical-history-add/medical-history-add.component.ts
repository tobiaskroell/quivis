import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Product, Image, MedicalHistoryEntry } from 'src/app/pages/medical-history-entry/medical-history-entry.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-medical-history-add',
  templateUrl: './medical-history-add.component.html',
})
export class MedicalHistoryAddComponent {
  constructor(private router: Router, private http: HttpClient) {}
  @ViewChildren('buttonEl') buttonEl!: QueryList<ElementRef>;

  text: string = '';

  // Has to be declared as a class property to be able to access it in the template
    medicalHistoryEntry: MedicalHistoryEntry = {
      id: 0,
      title: '',
      date: '',
      text: '',
      images: []
    };

  uploadedFiles: any[] = [];

  showRemove: boolean = false;

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

  saveEntry() {
    console.log('Eintrag speichern', this.medicalHistoryEntry);
    // medicalHistoryEntry = new MedicalHistoryEntry();
    // const data = {
    //   name: this.product.name,
    //   price: this.product.price,
    //   description: this.product.description,
    //   images: this.product.images
    // };
  
    // this.http.post('path/to/save/file.json', data)
    //   .subscribe(
    //     response => {
    //       console.log('Eintrag erfolgreich gespeichert');
    //       // Weitere Aktionen nach erfolgreichem Speichern
    //     },
    //     error => {
    //       console.error('Fehler beim Speichern des Eintrags', error);
    //       // Fehlerbehandlung
    //     }
    //   );
  }

  discardEntry() {
    this.router.navigate(['/medical-history']);
  }


  
}
