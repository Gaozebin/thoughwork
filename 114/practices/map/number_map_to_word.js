'use strict';
var number_map_to_word = function(collection){
	return collection.map(function(item){
		if(item<=26 || item >=1){
			return String.fromCharCode(96 + parseInt(item));
		}
	});
};

module.exports = number_map_to_word;
