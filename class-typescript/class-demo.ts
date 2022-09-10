class User{
  userName:string;
  age:number;
  constructor(name:string,old:number){
    this.userName=name;
    this.age=old;
  }
  display():void{
    console.log(`Name:${this.userName} Age:${this.age}`);
  }
}

let user1=new User('Walidulhasan',40);
user1.display();
