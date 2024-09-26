import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-link',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './input-link.component.html',
  styleUrl: './input-link.component.scss'
})
export class InputLinkComponent {

  @Output() linkEvent: EventEmitter<string> = new EventEmitter<string>(); 

  linkForm!: FormGroup
  submitted: boolean = false

  constructor(private formBuilder: FormBuilder) {
    this.linkForm = this.formBuilder.group({
      link: ['', [Validators.required, Validators.pattern('https?://.+')]]
    })
  }


  onSubmit(){
    this.submitted = true
    if (this.linkForm.valid) {
      const linkValue = this.linkForm.get('link')?.value
      this.linkEvent.emit(linkValue)
      this.linkForm.reset()
      this.submitted = false
    }
  }

  get link(){
    return this.linkForm.get('link')
  }

}
