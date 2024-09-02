import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import moment from 'moment';
import { UsersService } from '../../services/users.service';
import { User } from '../../types';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
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

  loginForm = new FormGroup({
    name: new FormControl(''),
    mail: new FormControl(''),
    membership: new FormControl(''),
    photo: new FormControl(null),
  });

  nameHandler = (e: Event) =>{
    const val = e.target as HTMLInputElement
    console.log(val.value);
    this.loginForm.patchValue({
      name: val.value,
    });
  }
  mailHandler = (e: Event) =>{
    const val = e.target as HTMLInputElement
    console.log(val.value);
    this.loginForm.patchValue({
      mail: val.value,
    });
  }
  subHandler = (e: Event) =>{
    const val = e.target as HTMLInputElement
    console.log(val.value);
    this.loginForm.patchValue({
      membership: val.value,
    });
  }

  onSelectFile(event: Event): void {
    const input = event.target as HTMLInputElement;
    console.log(input.files); 
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const res = e.target.result;
        this.loginForm.patchValue({
          photo: res,
        });
      };
      reader.readAsDataURL(file);
    }
  }
  createUser = (e: Event) => {
    e.preventDefault();   
    console.log('clicked');
    const val = this.loginForm.value;
    console.log(val);
    if(val.mail && val.name && val.membership && val.photo){
      const user : User = {
        name: val.name,
        email: val.mail,
        sub: val.membership,
        photo: val.photo,
        id: this.users.length,
        exp: moment().add(2, 'years').calendar()
      }
      this.userService.addUser(user)
    }
  };
}
