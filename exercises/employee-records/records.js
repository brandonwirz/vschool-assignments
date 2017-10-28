var employees = ["Josh", "Ray", "Ed","Sally"]
function Employee(name, jobTitle, salary, status){
  this.name = name;
  this.jobTitle = jobTitle;
  this.salary = salary;
  this.status = "Full time";
  this.printEmployeeForm = function() {
    console.log("Name:" + " " + name);
    console.log("Job Title:" + " " + jobTitle);
    console.log("Salary: " + "$" + salary);
    console.log("Status: " + this.status)
  }
}

var brandon = new Employee("Brandon", "Designer", 0);//instantiating person
var brad = new Employee("Brad", "Engineer", 100,000);//instantiating person
var dick = new Employee("Dick", "Teacher", 50,000);//instantiating person
brandon.status = 'Contract';

brandon.printEmployeeForm();
console.log(" ");
brad.printEmployeeForm();
console.log(" ");
dick.printEmployeeForm();
console.log(" ");
employees.push(brandon, brad, dick);
console.log(employees);
