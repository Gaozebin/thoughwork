'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  return collection.reduce(function(prev,next){
  	return prev + next ;
  });
}

module.exports = calculate_elements_sum;

