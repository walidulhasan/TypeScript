var requestType;
(function (requestType) {
    requestType[requestType["readData"] = 1] = "readData";
    requestType[requestType["getData"] = 10] = "getData";
    requestType[requestType["deleteData"] = 20] = "deleteData";
})(requestType || (requestType = {}));
var requestType1;
(function (requestType1) {
    requestType1["myData"] = "Hello";
    requestType1[requestType1["id"] = 10] = "id";
})(requestType1 || (requestType1 = {}));
//console.log(requestType.deleteData);
console.log(requestType1.myData);
