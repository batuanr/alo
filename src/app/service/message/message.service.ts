import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API} from "../../../environments/environment.prod";
import {MessageRequest} from "../../model/MessageRequest";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private http: HttpClient
  ) { }
  findAll(request:any): Observable<any>{
    console.log(request)
    return this.http.post(`${API.GATEWAY_URL}${API.MESSAGE.PATH}${API.MESSAGE.FIND_ALL}`, request)
  }
  send(message: any): Observable<any>{
    console.log(message)
    return this.http.post(`${API.GATEWAY_URL}${API.MESSAGE.PATH}`, message)
  }
}
