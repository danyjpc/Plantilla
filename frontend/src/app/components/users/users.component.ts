import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, UrlSegment } from '@angular/router';
import { User } from 'src/app/models/user'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  items : User[];
  item : User =new User();


  constructor(private service: UserService, private http2: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.service.findList().subscribe(
      items =>{
        this.items =items;
        console.log(items);
      },err => {
        console.log(err);
      }

    );
  }

}
