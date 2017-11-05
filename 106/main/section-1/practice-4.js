'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
   var collection =[];
	for (var i = 0; i < collectionA.length; i++) {
            for (var j = 0; j < objectB.value.length; j++) {
                if (collectionA[i].key == objectB["value"][j]){
                	collection.push(collectionA[i].key);
            	}
            }
        }
  return collection;
}
