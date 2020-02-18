import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { message } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  [x: string]: any;
  messages: message[];
  error = '';
  success = '';
 
  constructor(private messageService: MessagesService,_HttpC:HttpClient) {
  }
  ngOnInit(): void {
    this.getMessages();
  }
  getMessages():void {
    this.messageService.getAll().subscribe(
      (res: message[]) => {
        this.messages = res;
      },
      (err) => {
        this.error = err;
      }
    ); 
  }
  addMessages(f) {
    this.resetAlerts();

    this.messageService.store(this.message)
      .subscribe(
        () => {
          // Update the list of cars
          this.message = null;

          // Inform the user
          this.success = 'Created successfully';

          // Reset the form
          f.reset();
        },
        (err: string) => this.error = err
      );
}
  resetAlerts() {
    throw new Error("Method not implemented.");
  }


baseUrl = '//localhost/api';


                
                
getAll(): Observable<message[]> {
  return this.http.get(`${this.baseUrl}/list`).pipe(
    map((res) => {
      this.messages = res['data'];
      return this.messages;
  }),
  catchError(this.handleError));
}
  private handleError(error: HttpErrorResponse) {
    console.log(error);
 
  // return an observable with a user friendly message
  return throwError('Error! something went wrong.');
  }
  store(message: message): Observable<message> {
    return this.http.post(`${this.baseUrl}/store`, { data: message })
      .pipe(map((res) => {
        this.messages.push(res['data']);
        return this.messages;
      }),
      catchError(this.handleError));

      
}
}
