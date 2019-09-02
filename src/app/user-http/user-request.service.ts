import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user-class/user';
import { Repository } from 'src/app/repository';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
       user:User;
       repo:Repository[];
       private username:string;
  constructor(private http:HttpClient) {
      this.user=new User("","","",0,0,0,"","");
      this.repo=[];
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
      repos_url: string;  
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
        this.user.repos_url=response.repos_url
        resolve()
      },
      error=>{
        this.user.company="sorry, not found"

        reject(error)
      })
    })
    return promise
   }
   repoRequest(username){
  interface ApiResponse{
    name: string;
    description: string;
    }
    let first= new Promise((resolve, reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
       for (let counter in response){
         this.repo.push(response[counter]);
       }
       console.log(this.repo);
       resolve();
      },
     error => {
       this.user.login="Not found";
       reject(error);
    })
  });
   
  // updateUser(username:string){
  //   this.username=username;
   return first;
  }
}
