

import Person from "../../src/practice_2/person.js";
export class Teacher extends Person {
	
  constructor(name, age,klass) {
    super(name, age);
    this.klass = klass;
  }


  introduce() {
  	if(this.klass != undefined){
    	return super.introduce() + " I am a Teacher. I teach Class " + this.klass.number + "." ;
  	} else{
    	return super.introduce() + " I am a Teacher. I teach No Class." ;
  	}
  }

  introduceWith(studentJerry){
    if(studentJerry.klass == this.klass){
      return super.introduce() + " I am a Teacher. I teach " + studentJerry.name + "." ;
    } else {
      return super.introduce() + " I am a Teacher. I don't teach " + studentJerry.name + "." ;

    }
  }
}

module.exports = Teacher;


