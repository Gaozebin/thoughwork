'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var collection = [];
	for (var i = 0; i < collectionA.length; ) {
		var count = 0;
		var map ={};
		for (var j = i; j < collectionA.length; j++) {
			if(collectionA[i] == collectionA[j]){
				count++;
			}
		}
		if(collectionA[i].indexOf('-') > 0){
            map['key'] = collectionA[i].split("-")[0];
            map['count'] = parseInt(collectionA[i].split("-")[1]);
            collection.push(map);
            i ++;
            continue;
        }
		map.key = collectionA[i];
		map.count = count;
		collection.push(map);
		i += count;
	}
	for (var i = 0; i < collection.length; i++) {
        for (var j = 0; j < objectB.value.length; j++) {
            if (collection[i].key == objectB["value"][j]){
            	 	collection[i].count -= parseInt(collection[i]['count']/3);
        	}
        }
	}
  	return collection;
}
