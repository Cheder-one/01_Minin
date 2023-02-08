const salaryOfJuniorDeveloper = 500;
console.log('salaryOfJuniorDeveloper:', salaryOfJuniorDeveloper);

const numberOfJuniorDevelopers = 3;
console.log('numberOfJuniorDevelopers:', numberOfJuniorDevelopers);

let taxPercentage = 13;
console.log('taxPercentage:', taxPercentage);

let totalJuniorDevelopersSalary = 0;
console.log('totalJuniorDevelopersSalary:', totalJuniorDevelopersSalary);

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
  const salaryWithTax = 
    salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage) / 100;
    console.log('salaryWithTax:', salaryWithTax);
  totalJuniorDevelopersSalary += salaryWithTax;
}
console.log("totalJuniorDevelopersSalary:", totalJuniorDevelopersSalary);
