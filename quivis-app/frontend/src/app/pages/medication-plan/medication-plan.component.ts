import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from '../../services/file.service';
import { File } from '../../models/file.model';

@Component({
  selector: 'app-medication-plan',
  templateUrl: './medication-plan.component.html',
})
export class MedicationPlanComponent implements OnInit {
  uploadedFiles: File[] = [];
  uploadedFile: File | null = null;
  showRemove: boolean = false;

  constructor(
    private router: Router,
    private fileService: FileService
  ) {}

  ngOnInit() {
    this.getUploadedFiles();
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