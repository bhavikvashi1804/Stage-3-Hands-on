import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  name = new FormControl(this.employee.name);

  //create a form Group
  empForm: FormGroup;

  constructor() {
    this.empForm = new FormGroup({
      name: new FormControl(this.employee.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    });
  }

  ngOnInit(): void {}

  save() {}
}
