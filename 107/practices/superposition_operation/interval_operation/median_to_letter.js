'use strict';

function median_to_letter(collection) {
var words = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
    var midd;
    if(collection.length % 2 == 0){
        midd = (collection[collection.length/2] + collection[collection.length/2-1]) / 2;
    }else{
        midd = collection[Math.floor(collection[collection.length / 2])];
    }
    midd = Math.ceil(midd);
    return words[Math.floor(midd/26) - 1] + words[midd - 26 - 1];
  //在这里写入代码
  
}

module.exports = median_to_letter;
