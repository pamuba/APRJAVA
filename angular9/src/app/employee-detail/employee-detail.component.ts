import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
  <h2>Employee Detail</h2>
   <ul *ngFor="let emp of employees">
    <li>{{emp.id}} {{emp.name}} {{emp.dept}}</li>
   </ul>
  `,
  styles: [
  ]
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [ ]
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees()
  }

}
