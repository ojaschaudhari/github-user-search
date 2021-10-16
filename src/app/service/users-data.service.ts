import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http: HttpClient) { }

  profileurl = "https://api.github.com/users/";

  getProfile(user: string): Observable<any> {
    return this.http.get<any>(this.profileurl.concat(user)).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getProfileRepos(user: string): Observable<any[]> {
    return this.http.get<any[]>((this.profileurl.concat(user)).concat("/repos?per_page=100")).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getLanguages(lang: string): Observable<any> {
    return this.http.get<any>(lang).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  handleError(err: HttpErrorResponse) {
    let errMsg: string
    if (err.error instanceof ErrorEvent) {
      errMsg = ' Message : ${err.error.message} '
    }
    else {
      errMsg = ' STATUS : ${err.status} MESSAGE: ${err.message} '
    }
    return throwError(errMsg)
  }
}
