
import Person from "../../src/practice_2/person.js";
export class Student extends Person {
  
  constructor(id,name,age,klass) {
    super(name,age,id)
    this.klass = klass;
  }


  introduce(){
  	if(this.klass.leader == undefined){
    	return super.introduce() + " I am a Student. I am at Class 2.";
  	} else {
      return super.introduce() + " I am a Student. I am Leader of Class "+ this.klass.number +"."
  	}
  }
}

module.exports = Student;



