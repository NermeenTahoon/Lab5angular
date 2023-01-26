import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userId: any;
  user:any;
  constructor(
    private UserService:UserService ,
    private ActivatedRoute:ActivatedRoute
     ){
      this.userId = this.ActivatedRoute.snapshot.params['id'];
     }
  ngOnInit(): void {
    this.UserService.getUserById(this.userId).subscribe((response)=>{
      this.user = response;
    });
  }
}
