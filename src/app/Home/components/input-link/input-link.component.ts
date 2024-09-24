import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-link',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './input-link.component.html',
  styleUrl: './input-link.component.scss'
})
export class InputLinkComponent {

  @Output() linkEvent: EventEmitter<string> = new EventEmitter<string>(); 

  link!: string;

  onSubmit(){
    this.linkEvent.emit(this.link)
    this.link = '';
  }
}
