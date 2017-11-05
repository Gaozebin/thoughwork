'use strict';
var single_element = function(collection){
	var result = [];
    var arr = [];
    collection.forEach(function (value, index) {
        if(index % 2 != 0){
            arr.push(value);
        }
    });
    for(var i = 1; i < arr.length; i++){
        if(arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
};
module.exports = single_element;
