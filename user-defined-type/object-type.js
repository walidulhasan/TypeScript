var User;
User = [];
var user1 = { userName: 'Jamal', id: 1 };
var user2 = { userName: 'Sumon', id: 2 };
User.push(user1);
User.push(user2);
//console.log(User.map(data=>data));
for (var key in User) {
    console.log(User[key]["".concat('userName')]);
}
