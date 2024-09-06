import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  usersDb?: string | null;
  constructor() { 
    this.usersDb = localStorage.getItem('users');
    if (this.usersDb) {
      this.usersSubject.next(JSON.parse(this.usersDb))      
    } else {
      localStorage.setItem('users', JSON.stringify([]));
    }
  }

  setUsers(users: User[]) {
    this.usersSubject.next(users)
    localStorage.setItem('users', JSON.stringify(users))
  }
  addUser(user: User) {
    const users = this.usersSubject.getValue();
    users.push(user)
    this.setUsers(users)
    localStorage.setItem('users', JSON.stringify(users))
  }
  updateUser(user: User){
    const users = this.usersSubject.getValue();
    users.filter( item => item.id == user.id ? user : item)
    this.setUsers(users)
    localStorage.setItem('users', JSON.stringify(users))
  }
  getUser(id: number){
    const users = this.usersSubject.getValue();
    for (const item of users) {
      if(item.id == id) return item
    }
    return undefined
  }
}
