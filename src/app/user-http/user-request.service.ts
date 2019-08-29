import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user-class/user'

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
       user:User;
  constructor(private http:HttpClient) {
      this.user=new User("","","",0,0,0,"");
   }

   userRequest(){
    interface ApiResponse{
      login:string;
      avatar_url: string;
      company: string;
      public_repos:number;
      followers: number;
      following: number;
      created_at:string;  
    }
    let promise= new Promise((resolve, reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        this.user.login=response.login
        this.user.avatar_url=response.avatar_url
        this.user.company=response.company
        this.user.public_repos=response.public_repos
        this.user.followers=response.followers
        this.user.following=response.following
        this.user.created_at=response.created_at

        resolve()
      },
      error=>{
        this.user.company="sorry, not found"

        reject(error)
      })
    })
    return promise
   }
}
