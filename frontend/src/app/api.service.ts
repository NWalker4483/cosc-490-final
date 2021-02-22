import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable , throwError} from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

import {API_URL} from './env';
import {Breed} from './breed-voter/breed.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getBreeds(): Observable<Breed[]> {
    const url = `${API_URL}/breeds`;
    return this.http
      .get<Breed[]>(url);
    }
}
