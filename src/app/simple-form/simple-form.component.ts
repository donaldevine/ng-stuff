import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-simple-form',
  template: `
    <input 
    #myInput 
    type="text" 
    [(ngModel)]="message" 
    [ngClass]="{mousedown: isMousedown}"
    (mousedown)="isMousedown = true"
    (mouseup)="isMousedown = false"
    (mouseleave)="isMousedown = false"
    >
    <button
    class="white bg-black code"
    (click)="update.emit({text:message})">Click me!</button>    
  `,
  styles: [`
    :host{
      display: flex;
      flex-direction: column;
    }

    .mousedown{
      border: 2px solid green;
    }

    input:focus{
      font-weight: bold;
      outline: none;
    }

    button{
      border: none;
    }
  `]
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  isMousedown;

  @Output() update = new EventEmitter();
  

  constructor() {
    

   }

  ngOnInit() {
  }

}
