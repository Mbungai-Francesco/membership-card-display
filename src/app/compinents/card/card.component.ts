import { Component, Input } from '@angular/core';
import { User } from '../../types/';
import { RouterLink } from '@angular/router';

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

  @Input() user?: User;
  link = ''
  ngOnInit(){
    this.link = `/${this.user?.id}`
  } 
}
