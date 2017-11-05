'use strict';
var number_map_to_word_over_26 = function(collection){
	return collection.map(function(item){
		if(item % 26 == item){
			return String.fromCharCode(96 + parseInt(item));
		} else{
			return String.fromCharCode(96 + parseInt(item / 26))+ String.fromCharCode(96 + parseInt(item % 26))
		}
	});
};

module.exports = number_map_to_word_over_26;
