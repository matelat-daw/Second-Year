import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent {

  posts :any
  constructor(http :HttpClient) {

     let response = http.get('https://jsonplaceholder.typicode.com/posts');
     response.subscribe((data)=>this.posts=data);

  }

}
