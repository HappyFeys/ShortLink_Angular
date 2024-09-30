import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.scss'
})
export class StatsCardComponent {

  @Input() title!: string
  @Input() description! : string
  @Input() src! : string
  @Input() customClass!: string
  
}
