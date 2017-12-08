export class Student {
	
  constructor(name,stuNum,ethnic,stuClass,mathScore,chiScore,engScore,proScore) {
    this.name = name;
  	this.stuNum = stuNum;
  	this.ethnic = ethnic;
  	this.stuClass = stuClass;
  	this.mathScore = mathScore;
  	this.chiScore = chiScore;
  	this.engScore = engScore;
  	this.proScore = proScore;
  }
}

module.exports = Student;