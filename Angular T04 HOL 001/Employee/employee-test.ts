import { Employee } from "./employee";
import { Department } from "./department";
import { Skill } from "./skill";

// Department for payroll
let payrollDept: Department = {
  id: 1,
  name: "Payroll",
};

//list of skills
let htmlSkill: Skill = {
  id: 1,
  name: "HTML",
};
let cssSkill: Skill = {
  id: 2,
  name: "CSS",
};
let jsSkill: Skill = {
  id: 3,
  name: "JAVA Script",
};


// create an object of Employee
let ctsEmployee: Employee = {
  id: 100,
  name: "Raj Patel",
  salary: 100000,
  permanent: false,
  department: payrollDept,
  skills: [htmlSkill, cssSkill, jsSkill],
};


//print the details
console.log("CTS Employee Details");
console.log("ID: " + ctsEmployee.id);
console.log("Name: " + ctsEmployee.name);
console.log("Salary: " + ctsEmployee.salary);
console.log("Department ID: " + ctsEmployee.department.id);
console.log("Department Name: " + ctsEmployee.department.name);
ctsEmployee.skills.forEach(function (value) {
  console.log(value);
});
