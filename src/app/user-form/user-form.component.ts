import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user-class/user'; 
import { stringify } from 'querystring';
import { UserRequestService } from '../user-http/user-request.service'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
              user:User;

  constructor(private userService:UserRequestService) {

  }

  ngOnInit() {
    // interface ApiResponse{
    //   login:string;
    //   avatar_url: string;
    //   company: string;
    //   public_repos:number;
    //   followers: number;
    //   following: number;
    //   created_at:string  
    this.userService.userRequest()
    this.user=this.userService.user
    }
    // this.http.get<ApiResponse>("https://api.github.com/users/niEmerance?access_token=18d9bc95796705b5d97dd33ab88e8c0676d5ef76").subscribe(data=>{
    //   this.user=new User(data.login, data.avatar_url, data.company, data.public_repos, data.followers, data.following, data.created_at)
    // })
  // }

}
