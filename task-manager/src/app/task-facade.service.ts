import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskFacadeService {

  constructor(private http : HttpClient) { }
  getListe() {
    const httpParams = new HttpParams().set('number', 1);
    return this.http.get('api/URL', { params: httpParams });
  }
}

