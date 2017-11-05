'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var result = [];
    collection.forEach(function (value) {
        if(value % 2 != 0){
            result.push(value * 3 + 2);
        }
    });
    return result;
}

module.exports = hybrid_operation_to_uneven;

