import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  loginform!: FormGroup;
  isSubmitted = false;
  returnUrl = ''

  constructor(private formBuilder:FormBuilder, 
    // private UserService:UserService,
    private authService: AuthService,
    private activatedRoute:ActivatedRoute,
    private router:Router){}

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
    
  }
  get fc (){
    return this.loginform.controls;
  }
  submit(){
    this.isSubmitted = true;
    if(this.loginform.invalid)return;

    alert(`email:${this.fc['email'].value} ,
     password: ${this.fc['password'].value}`)


    //  this.UserService.login({
    //    email: this.fc['email'].value,
    //    passwors: this.fc['password'].value
    //  }).subscribe(()=>{
    //   this.router.navigateByUrl(this.returnUrl);
    //  });

this.authService.login(this.fc['email'].value, this.fc['password'].value).subscribe((res)=>{
  
})
  }

}
