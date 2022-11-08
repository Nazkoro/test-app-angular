import { Injectable } from '@angular/core';
import { getData } from '../store/data';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getPreparedData() {
    return getData().data.map((user) => {
      return {
        ...user,
        amount: Math.round(Math.random() * 100),
      };
    });
  }
}
