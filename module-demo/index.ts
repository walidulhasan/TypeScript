//import {studentName as name,studetnAge as age} from './student'
import * as Student from './student'

function displayInfo():void{
  console.log(`${Student.studentName}, ${Student.studetnAge}`)
}
displayInfo();