import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(user){
    const url = 'http://localhost:4000/api/add';
    this.http.post(url,user).subscribe(res =>
      console.log('Added'));

  }
  getCoins() {
    const uri = 'http://localhost:4000/api';
    return this.http.get(uri).pipe(map(res => {return res; })
          );
  }

  editCoins(id){
    const uri = 'http://localhost:4000/api/edit/'+id;
    return this
    .http
    .get(uri).pipe(
    map(res => {
      return res;
    }));
}
updateCoin(user, id) {
  const uri = 'http://localhost:4000/api/update/' + id;

  
  this.http.post(uri, user).subscribe(res =>console.log('Updated'));
     this.getCoins();
}

deleteCoin(id) {
  const uri = 'http://localhost:4000/api/delete/' + id;

      return this
          .http
          .get(uri).pipe(
          map(res => {
            return res;
          }));
}

  }


