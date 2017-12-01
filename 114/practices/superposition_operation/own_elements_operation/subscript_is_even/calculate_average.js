'use strict';
var calculate_average = function(collection){
	var sum = 0, count = 0;
    for(var i = 1; i < collection.length; i += 2){
        sum += collection[i];
        count ++;
    }
    return sum / count;
};
module.exports = calculate_average;
