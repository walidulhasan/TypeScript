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
var user1 = new User('Walidulhasan', 40);
user1.display();
