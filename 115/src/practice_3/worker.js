import Person from "../../src/practice_2/person.js";
export class Worker extends Person {
	
  constructor(name, age) {
    super(name, age)
  }

  introduce() {
    return "I am a Worker. I have a job.";
  }
}

module.exports = Worker;

