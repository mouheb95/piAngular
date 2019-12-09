import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { UserService, AuthenticationService, User } from '@workshop/core-data';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { SafeHtml } from '@angular/platform-browser';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {

  msg:string
  data: SafeHtml;
  connection = new WebSocket('ws://127.0.0.1:1337');
  myName=false;


  currentUser: User;
  currentUserSubscription: Subscription;

  constructor(
    private authenticationService: AuthenticationService,
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
    this.chat()
    setTimeout(() => {  this.connection.send(this.currentUser.name)}, 3000);

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
  chat () {

    "use strict";
    // for better performance - to avoid searching in DOM
    var content = document.getElementById('content')
    var input = document.getElementById('input')
    var status = document.getElementById('status')
    // my color assigned by the server
    var myColor = false;
    // my name sent to the server
    var myName = this.currentUser.name;
    // if user is running mozilla then use it's built-in WebSocket
    // if browser doesn't support WebSocket, just show
    // some notification and exit

    // open connection

    this.connection.onopen = function () {

      // first we want users to enter their names

      status.innerHTML=(myName);
    };


    // most important part - incoming messages
    this.connection.onmessage = function (message) {


      // try to parse JSON message. Because we know that the server
      // always returns JSON this should work without any problem but
      // we should make sure that the massage is not chunked or
      // otherwise damaged.
      try {
        var json = JSON.parse(message.data);
      } catch (e) {
        console.log('Invalid JSON: ', message.data);
        return;
      }
      // NOTE: if you're not sure about the JSON structure
      // check the server source code above
      // first response from the server with user's color
      if (json.type === 'color') {
        myColor = json.data;

        status.innerText=(myName);
        // from now user can start sending messages
      } else if (json.type === 'history') { // entire message history
        // insert every single message to the chat window
        for (var i=0; i < json.data.length; i++) {
          console.log("222")
        }
      } else if (json.type === 'message') { // it's a single message
        // let the user write another message

        document.getElementById("content").innerHTML=
          document.getElementById("content").innerText+('<div><div><span style="color:'+message.data.split('"')[19]+'">'
          + message.data.split('"')[15] + '</span> @' + (new Date().getHours() < 10 ? '0'
            + new Date().getHours() : new Date().getHours()) + ':'
          + (new Date().getMinutes() < 10
            ? '0' + new Date().getMinutes() : new Date().getMinutes())
          + ': ' + message.data.split('"')[11] + '</div></div>'
          )
      } else {
        console.log('Hmm..., I\'ve never seen JSON like this:', json);
      }

    };
    /**
     * Send message when user presses Enter key
     * */
  }
  getChatUser(){
    this.connection.send(this.currentUser.name)
  }

  keyPress(event: any){
    const inputChar = String.fromCharCode(event.charCode);

    if (event.charCode === 13) {
      this.msg =(event.target.value)
      console.log(this.msg)
      if (!this.msg) {
        return;
      }
      // send the message as an ordinary text
      this.connection.send(this.msg);
      event.target.value=""
      // disable the input field to make the user wait until server
      // sends back response
      // we know that the first message sent from a user their name

    }
  };

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');

    this.router.navigate(['/login']);
  }

}
