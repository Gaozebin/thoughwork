'use strict';
var is_exist_element = function(collection,element){
	var result = false;
    collection.forEach(function (value, index) {
        if(index % 2 == 0 && value == element){
            result = true;
        }
    });
    return result
};
module.exports = is_exist_element;
