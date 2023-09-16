// 9. Given the below salaries object, perform the following tasks.
let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
    };
    
    // a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
    
    Object.keys(salaries);
    Object.values(salaries);
    
    const allSalaries  = Object.values(salaries);
    const totalSalaries = allSalaries.reduce((accumulator, allSalaries) => {
        return accumulator + allSalaries;
    }, 0);
    
    console.log(totalSalaries);
    
    // b) Write a function topEarner(salaries) that calculates and returns the name of the person
    // earning the highest salary
    
    let salaryArr = Object.entries(salaries);
    salaryArr.sort((a,b) => a[1] - b[1]);
    let sortedSalary = Object.fromEntries(salaryArr);
    
    let highestSalary = 0;
    let highestSalaryEarner = "";
    
    for (let employee in salaries) {
        if (salaries[employee] > highestSalary) {
            highestSalary = salaries[employee];
            highestSalaryEarner = employee;
        };
    };
    
    console.log(`${highestSalaryEarner} is the highest earner`);