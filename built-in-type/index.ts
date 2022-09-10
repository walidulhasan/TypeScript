let userId:number;
let userName:string;
let isActivated:boolean;
let data:any;
let obj:object;

userId=101;
userName='Boniamin';
isActivated=false;
data=['Walid','helo'];
userName=userName.concat(data[0]);

function result(datas:any){
  datas: console.log(`${userId} ${userName} ${data[0]} ${datas}`);
  return datas;
}


if(isActivated===false){
  result(100);
}else{
  console.log('isActivated is True');
}