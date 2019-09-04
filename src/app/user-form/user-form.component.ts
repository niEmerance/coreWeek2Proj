import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user-class/user'; 
import { stringify } from 'querystring';
import { UserRequestService } from '../user-http/user-request.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
              user:User;
              username:string=" ";
              // response:any;
  constructor(private http: HttpClient,private userService:UserRequestService, private router:Router) {

  }
  // findUser(){
  //   this.userService.updateUser(this.username);
  // }
  ngOnInit() {
    // interface ApiResponse{
    //   login:string;
    //   avatar_url: string;
    //   company: string;
    //   public_repos:number;
    //   followers: number;
    //   following: number;
    //   created_at:string  
    this.userService.userRequest(this.username)
    this.userService.repoRequest(this.username)
    this.user=this.userService.user
  
    }
    // this.http.get<ApiResponse>("https://api.github.com/users/niEmerance?access_token=18d9bc95796705b5d97dd33ab88e8c0676d5ef76").subscribe(data=>{
    //   this.user=new User(data.login, data.avatar_url, data.company, data.public_repos, data.followers, data.following, data.created_at)
    // })
  // }
  
    findUser(){
      // this.http.get("https://api.github.com/users/" +this.username+"?access_token=97ab4ddaa13868773a9339e536e940552894fba1").subscribe((response)=>{
      //   this.response=response;
      //   console.log(this.response);
      // })
      this.router.navigate(['/userform', this.username])
      this.userService.userRequest(this.username)
      this.user=this.userService.user
    }

}
