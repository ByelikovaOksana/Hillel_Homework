'use strict';

const students = [
  {
      id:10,
      name: 'John Smith',
      marks: [10, 8, 6, 9, 8, 7 ]
  },
  {
      id:11,
      name: 'John Doe',
      marks: [ 9, 8, 7, 6, 7 ]
  },
  {
      id:12,
      name: 'Thomas Anderson',
      marks: [6, 7, 10, 8 ]
  },
  {
      id:13,
      name: 'Jean-Baptiste Emanuel Zorg',
      marks: [10, 9, 8, 9 ]
  }
]


const result=calculateStudentAverageMark(students[2]);
const groupMarks= getGroupMarks(students);
const  groupResult=calculateGroupAverageMark(students);


function calculateStudentAverageMark(students){
      return students.marks.reduce((acc,item) => acc+ item, 0)/ students.marks.length
}
 console.log(result)



function getGroupMarks (students){
    for (let i = 0;  i< students.length; i++){
    return [].concat(students[0].marks,students[i].marks)
 } }

function calculateGroupAverageMark (students) {
    return groupMarks.reduce((acc,item) => acc + item, 0)/groupMarks.length

}
console.log(groupResult)

function getGroupMarks (students){
    for (let i = 0;  i< students.length; i++){
    return [].concat(students[0].marks,students[i].marks)
 } }
