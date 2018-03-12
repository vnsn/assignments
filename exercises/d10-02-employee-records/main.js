var employees = [];

function Employee(name, title, salary, status = "Full-Time") {  
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status;
}

Employee.prototype.printEmployeeForm = function() {
    console.log(`Name: ${this.name}, Job Title: ${this.title}, Salary: ${this.salary}, Status: ${this.status}`);
}

var hilda = new Employee("Hilda", "CEO", "$1 Million / week", "24/7");
var edward = new Employee("Eddie", "Janitor", "$40,000 / year");
var dak = new Employee("Dak", "Masseuse", "$1 / minute", "Contract");

console.log(`\nAdding new employees to the employees array. Please wait...`);

employees.push(hilda);
employees.push(edward);
employees.push(dak);

console.log(`\nHere's the array: `);
for (var i = 0; i < employees.length; i++) {
    console.log(employees[i]);
}

console.log(`\nChanging Edward to "Part-Time".`);
console.log(`\nHere's his record: `);
edward.printEmployeeForm();

console.log(`\nPrinting the employee form for each person...`);
for (var i = 0; i < employees.length; i++) {
    employees[i].printEmployeeForm();
}

console.log('\nAll done. Goodbye. \n');

