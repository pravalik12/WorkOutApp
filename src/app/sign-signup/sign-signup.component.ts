import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-signup',
  templateUrl: './sign-signup.component.html',
  styleUrls: ['./sign-signup.component.css']
})
export class SignSignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username: string = '';
  password: string = '';
  login(){
    alert(this.username+this.password);
  }

  create_username: string='';
  create_password: string='';
  user_mail: string ='';
  signup(){
    alert(this.create_username+this.create_password);
  }

}
