'use strict';

function grouping_count(collection) {

  //在这里写入代码

	 function getWordCnt(){
	    return collection.reduce(function(prev,next){
	        prev[next] = (prev[next] + 1) || 1;
	        return prev;
	    },{});
	  }
	 
	return getWordCnt();
}

module.exports = grouping_count;
