import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { InputLinkComponent } from '../../components/input-link/input-link.component';
import { ListLinksComponent } from '../../components/list-links/list-links.component';
import { StatisticsComponent } from '../../components/statistics/statistics.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ApiServiceService } from '../../../services/api-service.service';
import { Link } from '../../../models/apiResponse';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    InputLinkComponent,
    ListLinksComponent,
    StatisticsComponent,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  linkList: Link[] = [];

  constructor(private apiService: ApiServiceService, private localStorage: LocalStorageService) {}

  ngOnInit(): void {
    this.linkList = this.localStorage.Get('linkList', this.linkList);
  }

  postUrl(url: string) {
    return this.apiService.postUrl(url).subscribe({
      next: (response) => {
        this.linkList.push({
          full_link: url,
          short_link: response.result_url
        });
        this.localStorage.Set('linkList', this.linkList);
        console.log(this.linkList);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
