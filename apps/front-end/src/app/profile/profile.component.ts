import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../../../libs/core-data/src/lib/profile/profile.service';

import { Profile } from './Profile'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
   Profile : any ;
   role:String="";
  constructor(private profileService: ProfileService) { }
  currentProfile=new Profile();
  ngOnInit() {
  }

  addProfile() {

    this.profileService.addProfile(this.currentProfile).subscribe(res => {
     console.log(res);
    })
  }

  addTeacher() {

    this.profileService. addTeacher(this.currentProfile).subscribe(res => {
      console.log(res);
    })
  }

  addintdirec() {

    this.profileService. addintdirec(this.currentProfile).subscribe(res => {
      console.log(res);
    })
  }

  ajouthaed() {

    this.profileService. ajouthaed(this.currentProfile).subscribe(res => {
      console.log(res);
    })
  }
  addrole(r){
    this.role=r;
  }
}
