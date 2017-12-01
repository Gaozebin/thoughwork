'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  var result = collection_a.filter(function(item){
  	  for (var i = 0; i < collection_b.length; i++) {
  	  	if(item % collection_b[i] == 0){
            return item;
  	  	}	
  	  }
  });
  return result;
}


module.exports = choose_divisible_integer;
