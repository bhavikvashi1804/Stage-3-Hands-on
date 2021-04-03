import { Employee } from "./employee";
import { Department } from "./department";
import { Skill } from "./skill";

class EmployeeTest {
  employee: Employee = {
    id: undefined,
    name: undefined,
    salary: undefined,
    permanent: undefined,
    department: undefined,
    skills: undefined,
  };

  constructor(
    id?: number,
    name?: string,
    salary?: number,
    deptId?: number,
    deptName?: string
  ) {
    this.employee.id = id;
    this.employee.name = name;
    this.employee.salary = salary;
    //this.employee.department.id = deptId;
    //this.employee.department.name = deptName;
  }

  display(): void {
    console.log("ID: " + this.employee.id);
    console.log("Name: " + this.employee.name);
    console.log("Salary: " + this.employee.salary);
    console.log("Department ID: " + this.employee.department.id);
    console.log("Department Name: " + this.employee.department.name);
    let skills = this.employee.skills;
    for (var _i = 0; _i < skills.length; _i++) {
      let skill: Skill = skills[_i];
      console.log("skill[" + _i + "]:" + skill.id + ", " + skill.name);
    }
  }
}

let employeeTest = new EmployeeTest(101, "Raj Patel", 10000, 1, "Payroll");
employeeTest.display();
