//public ,private,protected,readonly
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, old) {
        this.userName = name;
        this.age = old;
    }
    User.prototype.display = function () {
        console.log("Name:".concat(this.userName, " Age:").concat(this.age));
    };
    return User;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, old, studentid) {
        var _this = _super.call(this, name, old) || this;
        _this.studentId = studentid;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("Name:".concat(this.userName, " Age:").concat(this.age, " id:").concat(this.studentId));
    };
    Student.prototype.setStudentId = function (studentId) {
        this.studentId = studentId;
    };
    Student.prototype.getStudentId = function () {
        return this.studentId;
    };
    return Student;
}(User));
var user1 = new Student('Walidulhasan', 40, 1);
user1.setStudentId(10);
//user1.display();
console.log(user1.getStudentId());
var user2 = new User('robi', 3);
user2.age = 1;
user2.userName = 'Kamal Hossen';
console.log(user2);
