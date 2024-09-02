import { Component, Input } from '@angular/core';
import { User } from '../../types/';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  // NgOnInit(){
  //   this.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd')
  // }

  @Input() user?: User;
}
