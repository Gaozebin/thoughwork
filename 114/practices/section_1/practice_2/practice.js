function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
   var result = collection_a.filter(function(item){
  	 // if(collection_b.indexOf(item) > 0){
  	 // 	return item;
  	 // }
  	 for (var i = 0; i < collection_b[0].length; i++) {
  	 	if(item == collection_b[0][i]){
  	 		return item;
  	 	}
  	 }
  });
  return result;
}

module.exports = collect_same_elements;
