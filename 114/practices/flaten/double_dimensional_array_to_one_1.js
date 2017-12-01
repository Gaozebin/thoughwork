'use strict';

function double_to_one(collection) {

  //在这里写入代码
  return collection.join().split(",")
  		 .map(function(item){
  		 	return parseInt(item);
  		 });
}

module.exports = double_to_one;
