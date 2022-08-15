import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-sign-signup',
  templateUrl: './sign-signup.component.html',
  styleUrls: ['./sign-signup.component.css']
})
export class SignSignupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  username: string = '';
  password: string = '';
  login(){
    alert(this.username+ "*************");
    this.router.navigate(["/welcome"]);
  }

  create_username: string='';
  create_password: string='';
  user_mail: string ='';
  signup(){
    alert(this.create_username+"****************");
    this.router.navigate(["/welcome"]);
  }

}
