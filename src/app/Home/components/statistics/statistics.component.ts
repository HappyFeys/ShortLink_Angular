import { Component, Input } from '@angular/core';
import { StatsCardComponent } from '../stats-card/stats-card.component';
import { Link } from '../../../models/apiResponse';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [
    StatsCardComponent,
    CommonModule
  ],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {

  @Input() linksStorage!: Link[]

}
