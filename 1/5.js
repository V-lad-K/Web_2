const startDate  = '2021-01-01';
const endDate    = '2021-30-11';


const diffInMs   = new Date() - new Date(startDate)
const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
console.log(diffInDays)