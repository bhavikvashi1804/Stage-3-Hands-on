import { Employee } from "./employee";
import { Department } from "./department";

let payrollDept: Department = {
  id: 1,
  name: "Payroll",
};

let ctsEmployee: Employee = {
  id: 100,
  name: "Raj Patel",
  salary: 100000,
  permanent: false,
  department: payrollDept,
};

console.log("CTS Employee Details");
console.log("ID: " + ctsEmployee.id);
console.log("Name: " + ctsEmployee.name);
console.log("Salary: " + ctsEmployee.salary);
console.log("Department ID: " + ctsEmployee.department.id);
console.log("Department Name: " + ctsEmployee.department.name);
