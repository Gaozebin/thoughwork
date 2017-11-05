'use strict';

function average_uneven(collection) {
 var sum = 0, count = 0;
    collection.forEach(function (value) {
        if(value % 2 != 0){
            count ++;
            sum += value;
        }
    });
    return sum / count;
  //在这里写入代码
}

module.exports = average_uneven;
