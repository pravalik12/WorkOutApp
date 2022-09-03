import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SigninSignupServiceService } from '../signin-signup-service.service';
import { SigninSignup } from '../SigninSignup';
@Component({
  selector: 'app-sign-signup',
  templateUrl: './sign-signup.component.html',
  styleUrls: ['./sign-signup.component.css']
})
export class SignSignupComponent implements OnInit {

  constructor(private userService: SigninSignupServiceService,private router: Router) { }
  user: SigninSignup = new SigninSignup();

  ngOnInit(): void {
  }

  login(){
    window.alert(this.user.username);
    this.router.navigate(["/welcome"]);
  }

  private signup(){
    this.userService.createUser(this.user).subscribe((data: any) => {
      console.log(data);
     });
     window.location.reload();
  }

  onSubmit(): void {
    console.log(this.user);
    this.signup();
  }

}
