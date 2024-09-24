import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Link } from '../../../models/apiResponse';

@Component({
  selector: 'app-list-links',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './list-links.component.html',
  styleUrl: './list-links.component.scss'
})
export class ListLinksComponent {

  @Input() linksStorage!: Link[]

}
