import { Routes } from '@angular/router';
import { EmployeesComponent } from './pages/employees/employees.component';
import { FormComponent } from './pages/form/form.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: ':id',
    component: DetailsComponent
  },
  
];
