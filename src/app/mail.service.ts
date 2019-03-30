import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id: 0, text: `Test message 1`},
    {id: 2, text: `Test message 2`},
    {id: 3, text: `Test message 3`}
  ];

  update(id, text){
    this.messages = this.messages.map(m => m.id === id ? {id, text} : m);
  }
  constructor() { }

}
