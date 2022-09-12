//public ,private,protected,readonly

class User{
 public userName:string;
 public age:number;
  constructor(name:string,old:number){
    this.userName=name;
    this.age=old;
  }
  display():void{
    console.log(`Name:${this.userName} Age:${this.age}`);
  }
}


class Student extends User{
  private studentId:number
  constructor(name:string,old:number,studentid:number){
   super(name,old)
   this.studentId=studentid;
  }
  display():void{
    console.log(`Name:${this.userName} Age:${this.age} id:${this.studentId}`);
  }

  setStudentId(studentId:number):void{
    this.studentId=studentId;
  }
  getStudentId():number{
    return this.studentId;
  }

}

let user1=new Student('Walidulhasan',40,1);

user1.setStudentId(10);
//user1.display();
console.log(user1.getStudentId());

let user2=new User('robi',3)
user2.age=1;
user2.userName='Kamal Hossen'
console.log(user2);
