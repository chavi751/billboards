import { Component, OnInit } from '@angular/core';
//import { message } from './message';
//import { MessagesService } from './messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  
  title = 'Welcome to the billboard management system!';
}
