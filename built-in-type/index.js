var userId;
var userName;
var isActivated;
var data;
var obj;
userId = 101;
userName = 'Boniamin';
isActivated = false;
data = ['Walid', 'helo'];
userName = userName.concat(data[0]);
function result(datas) {
    datas: console.log("".concat(userId, " ").concat(userName, " ").concat(data[0], " ").concat(datas));
    return datas;
}
if (isActivated === false) {
    result(100);
}
else {
    console.log('isActivated is True');
}
