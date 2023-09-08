import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  loginForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';

  // UserService: any;

  constructor(private formBuilder:FormBuilder, 
    private UserService:UserService,
    // private authService: AuthService,
    private activatedRoute:ActivatedRoute,
    private router:Router){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
    
  }
  get fc (){
    return this.loginForm.controls;
  }
  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid)return;

    // alert(`email:${this.fc['email'].value} ,
    //  password: ${this.fc['password'].value}`)


     this.UserService.login({
       email: this.fc['email'].value,
       passwors: this.fc['password'].value
     }).subscribe(()=>{
      this.router.navigateByUrl(this.returnUrl);
     });

// this.authService.login(this.fc['email'].value, this.fc['password'].value).subscribe((res)=>{
  
}



//   }

    }
