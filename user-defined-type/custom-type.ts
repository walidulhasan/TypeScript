type Users={ userName: string; userId: number };
let User:Object[];
User=[];
let user1:Users;
user1={userName:'Jamal',userId:2}
User.push(user1);
let user2: Users;
user2 = { userName: 'Kamal Hossen', userId: 1 };
User.push(user2);
let data=User.map(d=>d)
console.log(data);

type RequestType='GET'|'POST'
let getResponst:RequestType;
getResponst='GET'
