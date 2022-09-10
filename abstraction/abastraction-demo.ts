abstract class User{
  userName:string;
  age:number;
  constructor(name:string,old:number){
    this.userName=name;
    this.age=old;
  }
 abstract display():void;
}


class Student extends User{
  studentId:number
  constructor(name:string,old:number,studentid:number){
   super(name,old)
   this.studentId=studentid;
  }
  display():void{
    console.log(`Name:${this.userName} Age:${this.age} id:${this.studentId}`);
  }

}

let user1=new Student('Walidulhasan',40,1);

user1.display();
