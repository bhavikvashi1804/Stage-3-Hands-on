import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Department } from '../Employee/department';
import { Employee } from '../Employee/employee';

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css'],
})
export class EditEmpReactiveComponent implements OnInit {
  //create a new employee property
  employee: Employee = {
    id: undefined,
    name: undefined,
    salary: undefined,
    permanent: undefined,
    department: undefined,
    skills: undefined,
  };

  //create a form Group
  empForm: FormGroup;

  //create a list of departments
  departments: Department[];

  constructor() {
    this.empForm = new FormGroup({
      name: new FormControl(this.employee.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      salary: new FormControl(this.employee.salary, Validators.required),
      permanent: new FormControl(false),
    });

    // assign the list of departments
    this.departments = [
      {
        id: 101,
        name: 'Payroll',
      },
      {
        id: 102,
        name: 'Support',
      },
      {
        id: 103,
        name: 'Admin',
      },
    ];
  }

  ngOnInit(): void {}

  get name() {
    return this.empForm.get('name');
  }

  get salary() {
    return this.empForm.get('salary');
  }

  onSubmit() {
    console.log('Is Invalid:' + this.empForm.invalid);
    console.log('Employee Name: ' + this.empForm.value.name);
    console.log('Employee Salary: ' + this.empForm.value.salary);
    console.log('Employee is Permanent: ' + this.empForm.value.permanent);
  }
}
