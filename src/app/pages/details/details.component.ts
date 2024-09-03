import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  employeeId = -1; //dest for route info

  @Input()
  set id(value: number) {
    this.employeeId = value;
    console.log(this.employeeId);
  }
}
