'use strict';
var calculate_median = function(collection){
 	var oushu = Math.floor(collection.length / 2);
    var arr = [];
    if (oushu % 2 ==  0){
        for(var i = 0; i < collection.length; i += 2){
            arr.push(collection[i]);
        }
    }else{
        for(var i = 1; i < collection.length; i += 2){
            arr.push(collection[i]);
        }
    }
    var midd;
    midd = collection[Math.floor(collection.length / 2)];
    return midd;
};
module.exports = calculate_median;
