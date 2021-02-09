import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/Employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((res) => {
      this.employeeService.employees = res;
    });
  }
  addEmployee(form: NgForm) {
    if (form.value._id) {
      this.employeeService.updateEmployee(form.value).subscribe(
        (res) => {
          this.getEmployees();
          form.reset();
        },
        (err) => console.log(err)
      );
    } else {
      this.employeeService.createEmployee(form.value).subscribe(
        (res) => {
          //console.log(res);
          this.getEmployees();
          form.reset();
        },
        (err) => console.log(err)
      );
    }
  }
  removeEmployee(_id: string) {
    this.employeeService.deleteEmployee(_id).subscribe(
      (res) => {
        this.getEmployees();
      },
      (err) => console.log(err)
    );
  }
  editEmployee(employee: Employee) {
    this.employeeService.employeeSelected = employee;
  }
  resetForm(form: NgForm) {
    form.reset();
  }
}
