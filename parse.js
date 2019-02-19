
let loader = require('csv-load-sync');
let students = loader('students.csv');
let courses = loader('courses.csv');
let marks = loader('marks.csv');
let tests = loader('tests.csv');
let sum = 0;
let count = 0;
let totalAverage = 0;
let courseAverage = 0;
var fs = require('fs');

//var data = "New File Contents";



students.forEach(function(element){

  const mark = marks.filter( x => x.student_id === element.id);
  courses.forEach(function(elementy){
    console.log(elementy);
    const test = tests.filter( x => x.course_id === elementy.id);
    //console.log(test);
    test.forEach(function(elementz){
      //console.log(elementz.weight);
      const course = mark.filter( z => z.test_id === elementz.id);
      //console.log(course)
      if (course.length > 0) {
        //console.log(elementy);
        sum += (parseInt(course[0].mark) / 100) * (parseInt(elementz.weight) / 100) ;
       //console.log(course[0].mark);
      }

    })
    courseAverage = Number(sum * 100).toFixed(2);
    console.log('final grade = ', courseAverage );
    if (sum > 0){
      count += 1;
    }

    totalAverage += parseInt(courseAverage);
    sum = 0;

  })
  // console.log(totalAverage);
  // console.log (count);
  console.log(element);
  console.log('Total Average: ', Number(totalAverage / count).toFixed(2));
  count = 0;
  courseAverage = 0;

  //console.log(mark);
  var data = 'Student ID: ' + element.id + ' name: ' +  element.name + '/n' + 'Total Average: ' + totalAverage;
  fs.writeFile('temp.txt', data, function(err, data){
    if (err) console.log(err)
    console.log("Successfully Written to File.");
  totalAverage = 0;
});
 });


    //const course = courses.filter(x => x.course_id === )
