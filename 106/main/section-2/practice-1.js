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
		map.key = collection[i];
		map.count = count;
		collectionA.push(map);
		i += count;
	}
	return collectionA;
}
