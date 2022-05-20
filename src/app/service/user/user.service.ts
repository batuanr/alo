import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }
  findAll(): Observable<any>{
    return this.http.get(`${API.GATEWAY_URL}${API.USER.PATH}`)
  }
}
