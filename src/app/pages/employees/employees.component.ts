import { Component } from '@angular/core';
import { User } from '../../types';
import { UsersService } from '../../services/users.service';
import { CardComponent } from '../../compinents/card/card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CardComponent, RouterLink],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  // 9:20
  title = 'Exercises';
  users : User[] = []

  getUsers = () =>{
    this.userService.users$.subscribe((users) => {
      this.users = users
    });
    // console.log(this.users); 
  }

  constructor( private userService: UsersService) {}

  ngOnInit(){
    this.getUsers()
  }
}
