"use strict";
exports.__esModule = true;
//import {studentName as name,studetnAge as age} from './student'
var Student = require("./student");
function displayInfo() {
    console.log("".concat(Student.studentName, ", ").concat(Student.studetnAge));
}
displayInfo();
