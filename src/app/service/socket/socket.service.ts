import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {API} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  webSocket: WebSocket;
  stompClient: any;
  constructor() { }
  public openWebsocket(){
    this.webSocket = new WebSocket('ws://localhost:8888/topic/chat');
    this.webSocket.onopen = event => {

    }
  }
  public sendMessage(chatMessage: any) {
    this.webSocket.send(JSON.stringify(chatMessage));
  }
  connect(idCurrentUser: any, idReceiver: any) {
    const ws = new SockJS(`${API.GATEWAY_URL}/ws`); // endpoint bên backend
    this.stompClient = Stomp.over(ws); // khởi tạo để kếtnối được
    this.stompClient.connect({}, () => { // gọi api của socket
      this.stompClient.subscribe('/topic/chat', data => { // hứng trả về của socket
        const message = JSON.parse(data.body);
        if ((idCurrentUser.toString() === message.idGuest.toString() && idReceiver.toString() === message.idReceiver.toString())
          || (idReceiver.toString() === message.idGuest.toString() && idCurrentUser.toString() === message.idReceiver.toString())) {
          this.listChat.push(message);
        }
      });
    });
  }
}
