import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { environment } from '@environment';
import {Breed} from './models/breed.model';
import { of } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { VoterData } from './models/voter_data.model';
import { Ballot } from './models/ballot.model';
import { Proposal } from './models/proposal.model';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  GetCurrentStanding(){
    const url = `${environment.API_URL}/active`;
    return this.http.get(url).pipe(
            catchError(this.handleError<Proposal[]>('getActiveProposals', []))
          );
  }

  getActiveProposals(){
    const url = `${environment.API_URL}/active`;
    return this.http.get(url).pipe(
            catchError(this.handleError<Proposal[]>('getActiveProposals', []))
          );
  } 
  queryAll(){
    const url = `${environment.API_URL}/queryAll`;
    return this.http.get(url).pipe(
            catchError(this.handleError<JSON>('queryAll', JSON))
          );
  }

  queryByKey(key: string){
    const url = `${environment.API_URL}/queryByKey`;
    return this.http.post(url, key).pipe(
            catchError(this.handleError<JSON>('queryByKey', JSON))
          );
  }

  castBallot(ballot: Ballot){
    const url = `${environment.API_URL}/castBallot`;
    return this.http.post(url, ballot).pipe(
            catchError(this.handleError<JSON>('castBallot', JSON))
          );  }

  registerVoter(data: VoterData){
    const url = `${environment.API_URL}/registerVoter`;
    return this.http.post(url, data).pipe(
            catchError(this.handleError<JSON>('registerVoter', JSON))
          );
  }

  validateVoter(data: VoterData){
    const url = `${environment.API_URL}/validateVoter`;
    return this.http.post(url, data).pipe(
            catchError(this.handleError<JSON>('validateVoter', JSON))
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
