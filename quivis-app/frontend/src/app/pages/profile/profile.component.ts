import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [MessageService]
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.email]],
      firstName: [''],
      lastName: [''],
      birthDate: [''],

    });

    // Load user profile data from API or service
    // and populate the form fields
    // this.loadProfileData();
  }

  onSubmit() {
    if (this.profileForm.valid) {
      // Save the updated profile data to API or service
      // this.saveProfileData(this.profileForm.value);

      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Profile updated successfully'
      });
    }
  }
}