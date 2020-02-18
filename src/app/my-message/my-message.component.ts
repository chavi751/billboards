import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-message',
  templateUrl: './my-message.component.html',
  styleUrls: ['./my-message.component.css']
})
export class MyMessageComponent implements OnInit {
  msgName: string;
  text: string;
  forSeconds: BigInteger;

  constructor() { }

  ngOnInit(): void {
  }

}
