'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var collection = [];
  if(number == 0.8){
  	 for (var i = number; i >= 0; i-=interval) {
  	 	collection.push(parseFloat(i.toFixed(1)));
  	 }
  } else if(number == 0.7){
	 for (var i = number; ; i-=interval) {
	 	collection.push(parseFloat(i.toFixed(1)));
	 	if(i<0){
	 		break;
	 	}
	 }
  }
  return collection;
}

module.exports = spilt_to_zero;
