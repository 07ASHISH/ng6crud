import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  users: any;

  constructor(private http: HttpClient, private userservice: UserService) {}

  ngOnInit() {
    this.getCoins()
  }

  getCoins() {
    this.userservice.getCoins().subscribe(res => {
      this.users = res;
    });
}

deleteCoin(id) {
  this.userservice.deleteCoin(id).subscribe(res => {
    this.getCoins();
    console.log('Deleted');
  });
}
}
