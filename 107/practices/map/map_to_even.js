'use strict';
function map_to_even(collection){
	return collection.map(function(item){
		return item * 2;
	});
}
module.exports = map_to_even;
