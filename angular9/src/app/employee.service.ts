import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  public getEmployees(){
    return [
      {"id":1, "name":"John", "dept":"Sales"},
      {"id":1, "name":"John", "dept":"Sales"},
      {"id":1, "name":"John", "dept":"Sales"},
      {"id":1, "name":"John", "dept":"Sales"},
      {"id":1, "name":"John", "dept":"Sales"}
    ]
  }
}
