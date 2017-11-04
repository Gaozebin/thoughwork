'use strict';

module.exports = function countSameElements(collection) {
  var collectionA = [];
	for (var i = 0; i < collection.length; ) {
		var count = 0;
		var map ={};
		for (var j = i; j < collection.length; j++) {
			if(collection[i] == collection[j]){
				count++;
			}
		}
	 	if(collection[i].indexOf('-') > 0){
            map['key'] = collection[i].split("-")[0];
            map['count'] = parseInt(collection[i].split("-")[1]);
            collectionA.push(map);
            i ++;
            continue;
        }
		map.key = collection[i];
		map.count = count;
		collectionA.push(map);
		i += count;
	}
	return collectionA;
}
