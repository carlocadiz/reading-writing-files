const csv = require('csv-parser');
const fs = require('fs');
const results = [];
const marks = [];
//const student = a();
 // fs.createReadStream('students.csv')
 //  .pipe(csv())
 //  .on('data', student.push)
 //  // .on('data', (row) => {
 //  //   temp.push(row);

 //  .on('end', () => {
 //  //   console.log('CSV file successfully processed');
 // // student.push(row);
 //     console.log(student);
 //   //return temp;
 //   });


fs.createReadStream('marks.csv')
  .pipe(csv())
  .on('data', (row) => {
    marks.push(row);
    //console.log(row);
  })
   .on('end', () => {
  //   console.log('CSV file successfully processed');
 // student.push(row);
  console.log(marks);
   });

 fs.createReadStream('students.csv')
  .pipe(csv())
  .on('data', results.push)
  .on('end', () => {
    console.log(results);
    // [
    //   { NAME: 'Daffy Duck', AGE: 24 },
    //   { NAME: 'Bugs Bunny', AGE: 22 }
    // ]
  });
// let student = a();
// //console.log(student.id[1]);
// console.log(student);