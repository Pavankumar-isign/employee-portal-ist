// email-check.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailCheckService {
  constructor(private http: HttpClient) { }
  checkEmailExists(email: string): Observable<boolean> {
    return this.http.get<boolean>(`http://localhost:8081/check-email/${email}`);
  }
}