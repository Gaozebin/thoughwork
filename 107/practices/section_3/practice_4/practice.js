function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection = [];
	for (var i = 0; i < collection_a.length; ) {
		var count = 0;
		var map ={};
		for (var j = i; j < collection_a.length; j++) {
			if(collection_a[i] == collection_a[j]){
				count++;
			}
		}
		if(collection_a[i].indexOf('-') > 0){
            map['key'] = collection_a[i].split("-")[0];
            map['count'] = parseInt(collection_a[i].split("-")[1]);
            collection.push(map);
            i ++;
            continue;
        }
		map.key = collection_a[i];
		map.count = count;
		collection.push(map);
		i += count;
	}
	for (var i = 0; i < collection.length; i++) {
        for (var j = 0; j < object_b.value.length; j++) {
            if (collection[i].key == object_b["value"][j]){
            	 	collection[i].count -= parseInt(collection[i]['count']/3);
        	}
        }
	}
  	return collection;

}

module.exports = create_updated_collection;
