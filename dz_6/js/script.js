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


// calculateStudentAverageMark(students[2])  
// calculateGroupAverageMark(students);

const resultStudent =students[2].marks.reduce((acc,item) => acc+ item, 0)/ students[2].marks.length
// console.log(resultStudent);

const groupMarks=[].concat(students[0].marks,students[1].marks,students[2].marks,students[3].marks)


const resultGroup = groupMarks.reduce((acc,item) => acc + item, 0)/groupMarks.length
// console.log(resultGroup)
 



 