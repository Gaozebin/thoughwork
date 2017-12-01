'use strict';

function compute_median(collection) {
  //在这里写入代码
    var result = collection.sort(function(a,b){
			return a - b;
   	});
  if(result.length % 2 == 0){
  	  return (result[result.length/2] + result[(result.length/2)-1])/2;
  } else{
  	return parseInt(result[Math.floor(result.length/2)]);
  }
}

module.exports = compute_median;


