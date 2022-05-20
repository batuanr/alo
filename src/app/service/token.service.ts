import { Injectable } from '@angular/core';
const TOKEN_KEY = 'Token_Key';
const NAME_KEY = 'Name_Key';
const ROLE_KEY = 'Role_Key';
const AVATAR_KEY = 'Avatar_Key';
const ID_KEY = 'Id_Key';
const USERNAME_KEY = 'Username_Key';
const EMAIL_KEY = 'Email_Key';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  token: any;
  name: any;
  id: any;
  constructor() { }

  setToken(token:any){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getIdKey(): string{
    const id =  window.sessionStorage.getItem(ID_KEY)
    return id? id:'';
  }
  public setIdKey(id: string){
    window.sessionStorage.removeItem(ID_KEY);
    window.sessionStorage.setItem(ID_KEY, id);
  }
  public setName(name: string) {
    window.sessionStorage.removeItem(NAME_KEY);
    window.sessionStorage.setItem(NAME_KEY, name);
  }
  public getName(): string {
    const name = window.sessionStorage.getItem(NAME_KEY);
    return name? name: '';
  }
  public getToken(): string {
    const token = window.sessionStorage.getItem(TOKEN_KEY);
    return token? token: '';
  }
  resetToken(){
    this.token = null
  }
}
