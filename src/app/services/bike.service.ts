import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  responseType: 'application/json'
};

const httpOptions2 = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  responseType:  'text' as 'json'
};


@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http: HttpClient) { }

  getBikes() {
    return this.http.get('/server/api/v1/bikes/all');
  }

  getBike(id: number) {
    return this.http.get('/server/api/v1/bikes/' + id);
  }

  createBikeRegistration(bike) {
    const body = JSON.stringify(bike);
    return this.http.post('/server/api/v1/bikes', body, httpOptions2);
  }
}
