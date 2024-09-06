import { Component, Input } from '@angular/core';
import { User } from '../../types/';
import { Router, RouterLink } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  // NgOnInit(){
  //   this.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd')
  // }

  constructor(private route : Router, private userService: UsersService){}

  @Input() user?: User;
  link = ''
  ngOnInit(){
    this.link = `/${this.user?.id}`
  } 
  onClick(){
    if(this.user){
      console.log('clicked');
      this.user.views++
      this.userService.updateUser(this.user)
      this.route.navigate([this.link])
    }
  }
}
