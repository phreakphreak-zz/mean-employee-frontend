import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  URI_API: string = 'http://localhost:3000/api/employees';
  employeeSelected: Employee = {
    name: '',
    position: '',
    office: '',
    salary: 0,
  };
  employees: Employee[];
  getEmployees() {
    return this.httpClient.get<Employee[]>(this.URI_API);
  }

  createEmployee(employee: Employee) {
    return this.httpClient.post(this.URI_API, employee);
  }

  getEmployee(_id: string) {
    return this.httpClient.get<Employee>(`${this.URI_API}/${_id}`);
  }
  deleteEmployee(_id: string) {
    return this.httpClient.delete(`${this.URI_API}/${_id}`);
  }
  updateEmployee(employee:Employee) {
    return this.httpClient.put(`${this.URI_API}/${employee._id}`,employee);
  }
}
