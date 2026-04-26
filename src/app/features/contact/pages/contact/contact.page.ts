import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Component } from "@angular/core";

import ThFormFieldModule from "@components/form-field/form-field.module";
import ThButtonComponent from "@components/button/button.component";
import ThIconComponent from "@components/icon/icon.component";
import { categories } from "@app/constants/categories";
import { toast } from "ngx-sonner";

@Component({
  selector: 'th-contact-page',
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.css',
  imports: [
    ThIconComponent,
    ThButtonComponent,
    ThFormFieldModule,
    ReactiveFormsModule
  ]
})
export default class ContactPage {
  categories = categories

  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    company: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    category: new FormControl('', [
      Validators.required
    ]),
    message: new FormControl('', [
      Validators.required
    ])
  }, { updateOn: 'submit' })

  onSubmit() {
    this.contactForm.markAllAsTouched()
    
    if (this.contactForm.invalid) return;

    this.contactForm.reset()
    toast.success('Éxito!', {
      description: 'Hemos recibido tu solicitud, en breves nos contactaremos contigo',
      position: 'top-center',
    })
  }
}