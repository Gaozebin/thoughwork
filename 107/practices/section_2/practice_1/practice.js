function count_same_elements(collection) {
  //在这里写入代码
  var result = collection.reduce(function(prev,next){
  		prev[next] = (prev[next]) + 1 || 1;
  		return prev;
  },{});
  // console.log(result);
  var arr = [];
  for(var i in result){
  	var map = {};
  	map.key = i;
  	map.count = result[i];
  	arr.push(map);
  }
  return arr;
  // console.log(arr);
}

module.exports = count_same_elements;
