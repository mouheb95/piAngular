import { Component, OnInit } from '@angular/core';
import { StudentService, AuthenticationService, UserService, User } from '@workshop/core-data';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'workshop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: User;
  currentUserSubscription: Subscription;
  variable = "Profile";

  links = [
    { path: '/home', icon: 'home', title: 'Home'},
    { path: '/student', icon: 'face', title: this.variable},
    { path: '/pfefile', icon: 'work', title: 'Pfefile'},
  ]

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              private router: Router,
) {


    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
        this.currentUser = user;
    });

    if( JSON.parse( localStorage.getItem('currentUser')) === null ) {
        console.log("GO LOGIN FIRST FUCKER");
        this.router.navigate(['/login']);
    }


}
ngOnInit() {
   // this.chat()
  this.addMessage("","","","")
  console.log(this.currentUser);
  /*  this.studentService.findStudent(1).subscribe(res => {
     console.log(res)
   }) */
 }

 logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');

  this.router.navigate(['/login']);
}
  addMessage(author, message, color, dt) {
    var content = document.getElementById('content')

    content.prepend('<p><span style="color:' + color + '">'
      + author + '</span> @ ' + (dt.getHours() < 10 ? '0'
        + dt.getHours() : dt.getHours()) + ':'
      + (dt.getMinutes() < 10
        ? '0' + dt.getMinutes() : dt.getMinutes())
      + ': ' + message + '</p>');
  }
  // chat () {
  //
  //   console.log("testtesteest");
  //   "use strict";
  //   // for better performance - to avoid searching in DOM
  //   var content = document.getElementById('content')
  //   var input = document.getElementById('input')
  //   var status = document.getElementById('status')
  //   // my color assigned by the server
  //   var myColor = false;
  //   // my name sent to the server
  //   var myName = false;
  //   // if user is running mozilla then use it's built-in WebSocket
  //   // if browser doesn't support WebSocket, just show
  //   // some notification and exit
  //
  //   // open connection
  //
  //   var connection = new WebSocket('ws://127.0.0.1:1337');
  //   connection.onopen = function () {
  //     // first we want users to enter their names
  //     status.innerHTML=('Choose name:');
  //   };
  //
  //
  //   // most important part - incoming messages
  //   connection.onmessage = function (message) {
  //
  //
  //     // try to parse JSON message. Because we know that the server
  //     // always returns JSON this should work without any problem but
  //     // we should make sure that the massage is not chunked or
  //     // otherwise damaged.
  //     try {
  //       var json = JSON.parse(message.data);
  //     } catch (e) {
  //       console.log('Invalid JSON: ', message.data);
  //       return;
  //     }
  //     // NOTE: if you're not sure about the JSON structure
  //     // check the server source code above
  //     // first response from the server with user's color
  //     if (json.type === 'color') {
  //       myColor = json.data;
  //       status.innerText=(myName + ': ');
  //       // from now user can start sending messages
  //     } else if (json.type === 'history') { // entire message history
  //       // insert every single message to the chat window
  //       for (var i=0; i < json.data.length; i++) {
  //         this.addMessage(json.data[i].author, json.data[i].text,
  //           json.data[i].color, new Date(json.data[i].time));
  //       }
  //     } else if (json.type === 'message') { // it's a single message
  //       // let the user write another message
  //
  //       addMessage(json.data.author, json.data.text,
  //         json.data.color, new Date(json.data.time));
  //     } else {
  //       console.log('Hmm..., I\'ve never seen JSON like this:', json);
  //     }
  //
  //   };
    /**
     * Send message when user presses Enter key
     * */
//}


}
