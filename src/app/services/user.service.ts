// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable, tap } from 'rxjs';
// import { user } from '../shared/models/user';
// import { IuserLogin } from '../shared/interfaces/IUserLogin';
// import { HttpClient } from '@angular/common/http';
// import { USER_LOGIN_URL } from '../shared/constants/urls';
// import { ToastrService } from 'ngx-toastr';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   private userSubject= new BehaviorSubject<user>(new user());
//   public userObservable: Observable<user>;

  

//   constructor(private http:HttpClient,private toastrService:ToastrService) {
//     this.userObservable = this.userSubject.asObservable();
//    }
//    login(userLogin:IuserLogin):Observable<user>{
//     return this.http.post<user>(USER_LOGIN_URL,userLogin).pipe(
//       tap({
//         next: (user)=>{
//           this.userSubject.next(user);
//           this.toastrService.success(
//             `Welcome to Rajpoot foodcorner ${user.name}!`,
//             'Login Successful'
//           )

//         },
//         error:(errorResponse)=>{
//           this.toastrService.error(errorResponse.error, 'Login Faild')
          
//         }

//       })
//     ); 
    
//    }
// }
