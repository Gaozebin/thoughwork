'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  var result = collection.filter(function(item){
	  	if(item % 3 == 0){
	  		return item; // 
	  	}
  });
  result.push(0);
  result.sort();
  return result;
}

module.exports = choose_multiples_of_three;
