'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {

 	var collection =[];
	for (var i = 0; i < collectionA.length; i++) {
        for (var j = 0; j < objectB.value.length; j++) {
            if (collectionA[i].key == objectB["value"][j]){
            	collectionA[i].count -= 1;
        	}
        }
	}
	collection = collectionA;
  	return collection;
}
