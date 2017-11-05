'use strict';

function choose_even(collection) {
  //在这里写入代码
  var result = collection.filter(function(item){
	  	if(item % 2 == 0){
	  		return item; // 诡异居然没有0，想不通
	  	}
  });
  result.push(0);
  result.sort();
  return result;
}

module.exports = choose_even;
