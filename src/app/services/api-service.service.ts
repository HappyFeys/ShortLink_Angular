import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  postUrl(url: string) : Observable<ApiResponse>{
    return this.http.post<ApiResponse>('/api/api/v1/shorten', {url: url});
  }
}
