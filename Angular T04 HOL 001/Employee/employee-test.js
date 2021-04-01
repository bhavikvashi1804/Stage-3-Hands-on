"use strict";
exports.__esModule = true;
var payrollDept = {
    id: 1,
    name: "Payroll"
};
var ctsEmployee = {
    id: 100,
    name: "Raj Patel",
    salary: 100000,
    permanent: false,
    department: payrollDept
};
console.log("CTS Employee Details");
console.log("ID: " + ctsEmployee.id);
console.log("Name: " + ctsEmployee.name);
console.log("Salary: " + ctsEmployee.salary);
console.log("Department ID: " + ctsEmployee.department.id);
console.log("Department Name: " + ctsEmployee.department.name);
