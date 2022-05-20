import { Component, OnInit } from '@angular/core';
import {TokenService} from "../service/token.service";
import {UserService} from "../service/user/user.service";
import {MessageService} from "../service/message/message.service";
import {connect} from "rxjs";
import {MessageRequest} from "../model/MessageRequest";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  receiverId: any;
  request : MessageRequest

  userId: any
  users: any
  name: any
  content: any;
  check = false;
  messages: any;
  constructor(
    private tokenService: TokenService,
    private userService: UserService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe(data => {
      this.users = data;
      console.log('dfgfg' +this.users)
    })
    this.userId = this.tokenService.getIdKey()
    this.name = this.tokenService.getName()
  }


  onclick(user: any) {
    this.check = true;
    this.receiverId = user.id;

    this.messageService.findAll({
      senderId: this.userId,
      receiverId: user.id
    }).subscribe(data =>{
      this.messages = data;
    })
  }

  send() {
    this.messageService.send({
      senderId: this.userId,
      receiverId: this.receiverId,
      content: this.content
    }).subscribe()
    this.content = '';
  }
}
