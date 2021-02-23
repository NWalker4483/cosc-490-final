import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable , throwError} from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { environment } from '@environment';
import {Breed} from './breed-voter/breed.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getBreeds(): Observable<Breed[]> {
    const url = `${environment.API_URL}/breeds`;
    return this.http
      .get<Breed[]>(url).pipe(
        catchError(this.handleError<Breed[]>('getHeroes', []))
      );
    }
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
    private log(message: string) {
      console.log(message);
    }
}
