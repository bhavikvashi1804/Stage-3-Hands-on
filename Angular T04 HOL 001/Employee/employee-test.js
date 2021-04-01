"use strict";
exports.__esModule = true;
// Department for payroll
var payrollDept = {
    id: 1,
    name: "Payroll"
};
//list of skills
var htmlSkill = {
    id: 1,
    name: "HTML"
};
var cssSkill = {
    id: 2,
    name: "CSS"
};
var jsSkill = {
    id: 3,
    name: "JAVA Script"
};
// create an object of Employee
var ctsEmployee = {
    id: 100,
    name: "Raj Patel",
    salary: 100000,
    permanent: false,
    department: payrollDept,
    skills: [htmlSkill, cssSkill, jsSkill]
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
