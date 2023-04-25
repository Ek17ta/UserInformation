import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  constructor(private http:HttpClient) { }
  getUserInformation():Observable<any>{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }
}
