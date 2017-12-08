"use strict";
import chai from "chai";
import sinonChai from "sinon-chai";
const expect = chai.expect;
chai.use(sinonChai);

import Student from "./student.js";

module.exports = () => {
	var students =[];

	var flag = true;
	while(flag == true){
		console.log(`
			1. 添加学生
			2. 生成成绩单
			3. 退出
		`)  ;
		var question = require('cli-interact').question;
		var number = question('请输入你的选择（1～3）：');

		if (number == 1) {
			function checkFormat(addStudent) {
				var result = addStudent.split(",")
				function checkSubject(result){
					if(result.length > 4){
						var result_child = result.splice(4,result.length);
						for (let e of result_child) {
					        if (e.split(":").length !== 2) {
					            return false;
					        }
				    	}
			    		return true;
					} else {
						return false;
					}
				}
			    if((result.length == 8) && checkSubject(result)){
			    	return true;
			    } else{
			    	return false;
			    }
			}
			var flag_addStudent = true;
			while(flag_addStudent == true){
				var addStudent = question('请输入学生信息（格式：姓名, 学号, 民族, 班级, 数学: 成绩,语文：成绩，英语：成绩，编程：成绩），按回车提交：');
				if(checkFormat(addStudent)){
					var student = addStudent.split(",");
					var result = new Student(student[0],student[1],student[2],student[3],
											parseInt(student[4].split(":")[1]),parseInt(student[5].split(":")[1]),
											parseInt(student[6].split(":")[1]),parseInt(student[7].split(":")[1]));
					students.push(result);
					console.log("学生"+ student[0] +"的成绩被添加");
					flag_addStudent = false;
				} else{
					console.log("请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）");
					flag_addStudent = true;
				}
			}
			flag = true;
		} else if (number == 2){
			var student_number = question('请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：');
			var student_number_list = student_number.split(",");
			if(student_number_list > 0){

			}


			flag = true;
		} else if(number == 3){
			flag = false;
		}

	}
}

