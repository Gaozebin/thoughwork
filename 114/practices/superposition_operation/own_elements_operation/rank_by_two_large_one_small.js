'use strict';
function rank_by_two_large_one_small(collection){
  collection = collection.sort(function (a, b) {
        return a - b;
    });
    var temp;
    for(var i = 0; i < collection.length; i += 3){
        temp = collection[i];
        for(var j = i; j < i + 3; j ++){
            if(i + 2 < collection.length){
              collection[j] = collection[j + 1];
            }
        }
        if(i + 2 < collection.length){
            collection[i + 2] = temp;
        }
    }
    return collection;
}
module.exports = rank_by_two_large_one_small;
