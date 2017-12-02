
export class Class {
	
  constructor(number) {
    this.number = number;
  }

  getDisplayName() {
    return "Class " + this.number;
  }

  assignLeader(student){
    if(student.klass.number == this.number){
      this.leader = student;
      if(this.teacher != undefined){
	      console.log("I am " + this.teacher.name +". I know "+ student.name+" become Leader of Class "+ this.number +".");
      }
    } else {
      this.leader = null;
      console.log("It is not one of us.");
    }
  }

  appendMember(student){
  	student.klass = this;
  	if(this.teacher != undefined){
		if(this.teacher.isTeaching(student)){
	  		console.log("I am "+ this.teacher.name+". I know "+ student.name +" has joined Class "+ student.klass.number +".")
	  	}
  	}
  	
  }

  registerAssignLeaderListener(teacher){
  	this.teacher = teacher;
  }

  registerJoinListener(teacher){
  	this.teacher = teacher;
  }

  isIn(){

  }
  


}

module.exports = Class;

