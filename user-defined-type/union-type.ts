//Union Symbol --> |
let data: string | number | boolean;

data:'Kamal Hossen';
data:10;
data:true;

function result(input:string|number){
  debugger
  console.log(`${input} `);
  if(input===10){
    console.log('I am 10');
  }else{
    return false;
  }
}

result(11);
