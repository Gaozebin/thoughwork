function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
   var result = collection_a.filter(function(item){
  	 for (var i = 0; i < object_b["value"].length; i++) {
  	 	if(item.key == object_b["value"][i]){
  	 		return item["key"];

  	 	}
  	 }
  });
   var collection = [];
  for (var i = 0; i < result.length; i++) {
  	collection.push(result[i]["key"]);
  }
  return collection;
}

module.exports = collect_same_elements;
