import { Injectable } from '@angular/core';
import { API } from "../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {LoginDto} from "../../model/LoginDto";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(login: LoginDto): Observable<any>{
    return this.http.post(`${API.GATEWAY_URL}${API.AUTH.PATH}${API.AUTH.LOGIN}`, login)
  }
}
