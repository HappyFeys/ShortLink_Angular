import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { Link } from '../../../models/apiResponse';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-list-links',
  standalone: true,
  imports: [
    CommonModule,
    ClipboardModule
  ],
  templateUrl: './list-links.component.html',
  styleUrl: './list-links.component.scss'
})
export class ListLinksComponent {

  copiedIndex : number | null = null

  @Input() linksStorage!: Link[]

  onCopy(index: number): void{
    this.copiedIndex = index
    setTimeout(() => {
      this.copiedIndex = null
    }, 5000)
  }

}
