'use strict';
var even_asc_odd_desc = function(collection){
	var a1 = [], a2 = [];
    collection.forEach(function (value) {
        if(value % 2 == 0){
            a2.push(value);
        }else{
            a1.push(value);
        }
    });
    a1 = a1.sort(function (a, b) {
        return b - a;
    });
    a2 = a2.sort(function (a, b) {
        return a - b;
    });
    a2 = a2.concat(a1);
    return a2;
};
module.exports = even_asc_odd_desc;
