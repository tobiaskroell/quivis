import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from '../../services/file.service';
import { File } from '../../models/file.model';
import { Medication } from '../../models/medication.model';

@Component({
  selector: 'app-medication-plan',
  templateUrl: './medication-plan.component.html',
})
export class MedicationPlanComponent implements OnInit {
  uploadedFiles: File[] = [];
  uploadedFile: File | null = null;
  showRemove: boolean = false;
  medications: Medication[] = [];
  specialMedications: Medication[] = [];
  selfMedications: Medication[] = [];

  POST_ROUTE = 'http://localhost:3001/Medikationsplan';

  constructor(
    private router: Router,
    private fileService: FileService
  ) {}

  ngOnInit() {
    this.getUploadedFiles();
    this.getMedications();
    this.getSpecialMedications();
    this.getSelfMedications();
  }

  getUploadedFiles() {
    this.fileService.getFiles().subscribe(
      (files: File[]) => {
        this.uploadedFiles = files;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getMedications() {
    // fetch with api call later
    this.medications = [
      {
        wirkstoff: 'Bisoprololfumarat Hydrochlorothiazid',
        handelsname: 'Bisoprolol plus 5/12,5 – 1A',
        staerke: '5,0 mg 12,5 mg',
        form: 'Filmtabl.',
        morgens: 1,
        mittags: 0,
        abends: 0,
        zurNacht: 0,
        einheit: 'Stück',
        hinweise: '',
        grund: 'Bluthochdruck'
      },
      {
        wirkstoff: 'Simvastatin',
        handelsname: 'Simvastatin – 1A',
        staerke: '10 mg',
        form: 'Filmtabl.',
        morgens: 0,
        mittags: 0,
        abends: 1,
        zurNacht: 0,
        einheit: 'Stück',
        hinweise: '',
        grund: 'Blutfette'
      },
      {
        wirkstoff: 'Metformin',
        handelsname: 'Metformin Atid',
        staerke: '500 mg',
        form: 'Filmtabl.',
        morgens: 1,
        mittags: 0,
        abends: 1,
        zurNacht: 0,
        einheit: 'Stück',
        hinweise: 'Während oder nach den Mahlzeiten',
        grund: 'Blutzucker'
      }
    ];
  }

  getSpecialMedications() {
    // fetch with api call later
    this.specialMedications = [
      {
        wirkstoff: 'Doxycyclin',
        handelsname: 'Doxycyclin – 1A',
        staerke: '100 mg',
        form: 'Kapseln',
        morgens: 0,
        mittags: 0,
        abends: 1,
        zurNacht: 0,
        einheit: 'Stück',
        hinweise: 'Nüchtern mit viel Wasser',
        grund: 'Borreliose'
      },
      {
        wirkstoff: 'Prednisolon',
        handelsname: 'Prednisolon – 1A',
        staerke: '5 mg',
        form: 'Tabletten',
        morgens: 0,
        mittags: 0,
        abends: 1,
        zurNacht: 0,
        einheit: 'Stück',
        hinweise: 'Nüchtern',
        grund: 'Entzündungshemmung'
      }
    ];
  }

  getSelfMedications() {
    // fetch with api call later
    this.selfMedications = [
      {
        wirkstoff: 'Rotschimmelreis (Monacolin)',
        handelsname: 'Roter Reis Extrakt Tabletten',
        staerke: '4,5 mg',
        form: 'Kapseln',
        morgens: 0,
        mittags: 0,
        abends: 0,
        zurNacht: 1,
        einheit: '',
        hinweise: 'Unbedingt absetzen! Verstärken die Wirkung der Tabl. gegen die Blutfette (Simvastatin)',
        grund: 'Blutfette'
      }
    ];
  }

  @ViewChild('buttonEl') buttonEl!: ElementRef;

  onUpload(event: any) {
    const file = event.files[0];
    this.uploadedFile = {
      name: file.name,
      objectURL: '',
      uploadDate: new Date(),
    };
  }

  onFileMouseOver() {
    this.buttonEl.nativeElement.style.display = 'flex';
  }

  onFileMouseLeave() {
    this.buttonEl.nativeElement.style.display = 'none';
  }

  removeFile() {
    this.uploadedFile = null;
  }

  onAddFile() {
    if (this.uploadedFile) {
      const data = {
        name: this.uploadedFile.name,
        objectURL: '',
        uploadDate: this.uploadedFile.uploadDate,
      };
      this.fileService.createFile(data).subscribe(
        (response) => {
          console.log(response);
          this.getUploadedFiles();
          this.uploadedFile = null;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  discardEntry() {
    this.uploadedFile = null;
    this.router.navigate(['/medical-history']);
  }
}