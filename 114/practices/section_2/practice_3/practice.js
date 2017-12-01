function count_same_elements(collection) {
  //在这里写入代码
   Array.prototype.removeByValue = function(val) {
	  for(var i=0; i<this.length; i++) {
	    if(this[i] == val) {
	      this.splice(i, 1);
	      break;
	    }
	  }
  }
  function check(collection){
  	for (var i = 0; i < collection.length; i++) {
  		if(collection[i].indexOf("-") > 0){
	  		for (var j = 0; j < parseInt(collection[i].split("-")[1]); j++) {
	  			collection.push(collection[i].split("-")[0]);
	  		}
	        collection.removeByValue(collection[i]);
  		} else if(collection[i].indexOf(":") > 0){
  			for (var j = 0; j < parseInt(collection[i].split(":")[1]); j++) {
	  			collection.push(collection[i].split(":")[0]);
	  		}
	        collection.removeByValue(collection[i]);
  		} else if(collection[i].lastIndexOf("-") > 0){
  			for (var j = 0; j < parseInt(collection[i].split("-")[1]); j++) {
	  			collection.push(collection[i].split("-")[0]);
	  		}
	        collection.removeByValue(collection[i]);
  		} else if(collection[i].lastIndexOf("[") > 0){
  			for (var j = 0; j < parseInt(collection[i].split("[")[1]); j++) {
	  			collection.push(collection[i].split("[")[0]);
	  		}
	        collection.removeByValue(collection[i]);
  		} else if(collection[i].indexOf("[") > 0){
			for (var j = 0; j < parseInt(collection[i].split("[")[1]); j++) {
	  			collection.push(collection[i].split("[")[0]);
	  		}
	        collection.removeByValue(collection[i]);
  		}
  	}
  }

  check(collection);
  var result = collection.reduce(function(prev,next)
  		prev[next] = (prev[next]) + 1 || 1;
      // () ? (prev[next] + 1 ) : 1
  		return prev;
  },{});

  // console.log(result);
  var arr = [];
  for(var i in result){
  	var map = {};
  	map.name = i;
  	map.summary = result[i];
  	arr.push(map);
  }
  return arr;
  // console.log(arr);

}

module.exports = count_same_elements;
