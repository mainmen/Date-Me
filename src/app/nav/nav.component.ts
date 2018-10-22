import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  //this is gonna hold our username and password
  model: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        console.log('LoggedIn Successfully');
        console.log(this.model);
      },
      error => {
        console.log('Error logging In');
      }
    );
  }

  loggedIn() {
    const userToken = localStorage.getItem('token');
    //if token exist return true else return false
    return !!userToken;
  }

  loggedOut() {
    localStorage.removeItem('token');
    console.log('Logged out..');
  }
}
