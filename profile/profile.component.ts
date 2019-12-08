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
  constructor(private profileService: ProfileService) { }
  currentProfile=new Profile();
  ngOnInit() {
  }

  addProfile() {

    this.profileService.addProfile(this.currentProfile).subscribe(res => {
      this.Profile = res
    })
  }

  addTeacher() {

    this.profileService. addTeacher(this.currentProfile).subscribe(res => {
      this.Profile = res
    })
  }

  addintdirec() {

    this.profileService. addintdirec(this.currentProfile).subscribe(res => {
      this.Profile = res
    })
  }

  ajouthaed() {

    this.profileService. ajouthaed(this.currentProfile).subscribe(res => {
      this.Profile = res
    })
  }
}
