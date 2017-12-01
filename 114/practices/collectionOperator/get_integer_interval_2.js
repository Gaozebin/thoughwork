'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var reslut = [], i;
  if (number_a < number_b){
    console.log("a")
    for(i = number_a; i <= number_b; i++){
      if(i % 2 == 0){
        reslut.push(i);
      }
    }
  }else if(number_a > number_b){
    for(i = number_a; i >= number_b; i--){
      if(i % 2 == 0){
        reslut.push(i);
      }
    }
  }else if(number_a == number_b){
    if(number_a % 2 == 0){
      reslut.push(number_a);
    }
  }
  return reslut;
}

module.exports = get_integer_interval_2;
