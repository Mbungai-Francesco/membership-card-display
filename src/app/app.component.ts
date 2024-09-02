import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./compinents/card/card.component";
import { FormComponent } from "./compinents/form/form.component";
import { User } from './types';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
