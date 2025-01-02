import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-reach-us-form',
  imports: [],
  templateUrl: './reach-us-form.component.html',
  styleUrl: './reach-us-form.component.scss'
})
export class ReachUsFormComponent implements OnInit {
  contactForm: FormGroup;

  constructor (private fb:FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    })
  }

  ngOnInit(): void {}

  handleContactUsSubmit(): void {
    console.log(this.contactForm, 'contactForm');
    if (this.contactForm.valid) {
      console.log(this.contactForm.value, 'Form Submitted: ');
    }
  }
}
