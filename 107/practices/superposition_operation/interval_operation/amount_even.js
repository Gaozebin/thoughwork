'use strict';

function amount_even(collection) {

  //在这里写入代码
   var sum = 0;
    collection.forEach(function (value) {
        if(value % 2 == 0){
            sum += value;
        }
    });
    return sum;
}

module.exports = amount_even;
