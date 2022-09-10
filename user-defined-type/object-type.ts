let User:object[];
User=[];
let user1={userName:'Jamal',id:1};
let user2={userName:'Sumon',id:2}
User.push(user1);
User.push(user2);
//console.log(User.map(data=>data));
for (const key in User) {
  console.log(User[key][`${'userName'}`]);
}