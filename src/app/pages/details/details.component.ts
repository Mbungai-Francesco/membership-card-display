import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../../types';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  users? : User[]
  user? : User

  constructor(private userService : UsersService){
    this.userService.users$.subscribe( item => {
      this.users = item
    })
  }
  employeeId = -1; //dest for route info

  ngOnInit(){
    this.user = this.userService.getUser(this.employeeId)
  }

  @Input()
  set id(value: number) {
    this.employeeId = value;
    console.log(this.employeeId);
  }
}
