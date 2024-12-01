const salaries = [10, 20, 30, 40, 60, 80, 80];

const median = calculateMedian(salaries);
// At this point, the array referenced by salaries has been mutated after calculateMedian(salaries), and a reference to the same array is given to calculateMean
const mean = calculateMean(salaries);

console.log(`The median salary is ${median}`);
console.log(`The mean salary is ${mean}`);
