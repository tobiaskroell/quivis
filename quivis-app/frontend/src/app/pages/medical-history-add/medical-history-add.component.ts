import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Image, MedicalHistoryEntryModel } from 'src/app/pages/medical-history-entry/medical-history-entry.model';
import { Router } from '@angular/router';
import { MedicalHistoryService } from '../../services/medical-history.service';


@Component({
  selector: 'app-medical-history-add',
  templateUrl: './medical-history-add.component.html',
})

export class MedicalHistoryAddComponent {
  
  text: string = '';
  uploadedFiles: any[] = [];
  showRemove: boolean = false;


  constructor(
    private router: Router,
    private medicalHistoryAddService: MedicalHistoryService) {
    
  }

  @ViewChildren('buttonEl') buttonEl!: QueryList<ElementRef>;

  // Has to be declared as a class property to be able to access it in the template
  medicalHistoryEntryModel: MedicalHistoryEntryModel = {
    id: 0,
    title: '',
    date: '',
    text: '',
    images: []
  };

  onUpload(event: any) {
    for (let file of event.files) {
      this.medicalHistoryEntryModel.images.push(file);
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
    this.medicalHistoryEntryModel.images = this.medicalHistoryEntryModel.images.filter((i) => i !== file);
  }

  onAddEntry() {
    this.medicalHistoryAddService.saveEntry(
      this.medicalHistoryAddService.numEntries,
      this.medicalHistoryEntryModel.title,
      this.medicalHistoryEntryModel.date,
      this.medicalHistoryEntryModel.text,
      this.medicalHistoryEntryModel.images
    );
  }

  discardEntry() {
    this.router.navigate(['/medical-history']);
  }
}
