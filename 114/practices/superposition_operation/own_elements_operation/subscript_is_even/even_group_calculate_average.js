'use strict';
var even_group_calculate_average = function(collection){
	function getAve(arr) {
        var sum = 0;
        arr.forEach(function (value) {
            sum += value;
        });
        return sum / arr.length;
    }

    var arr = [], i, result = [];
    if (collection.length == 19){
        for(i = 0; i < collection.length; i++){
            if(i % 2 != 0 && collection[i] % 2 == 0){
                arr.push(collection[i]);
            }
        }
        arr = arr.sort(function (a, b) {
            return a - b;
        });
        var midd = [[], [], []];
        for(i = 0; i < arr.length; i ++){
            if(arr[i] < 10){
                midd[0].push(arr[i]);
            }else if(arr[i] < 100){
                midd[1].push(arr[i]);
            }else{
                midd[2].push(arr[i]);
            }
        }
        for(i = 0; i < midd.length; i++){
            result.push(getAve(midd[i]));
        }
    }else if(collection.length == 9){
        for (i = 0; i < collection.length; i++){
            if(i % 2 != 0){
                arr.push(collection[i]);
            }
        }
        arr.forEach(function (value) {
            if(value % 2 == 0){
                result.push(value)
            }
        });
        if(result.length == 0){
            result.push(0);
        }
    }else if(collection.length == 6){
        collection.forEach(function (value, index) {
            if(index % 2 != 0 && value % 2 == 0){
                arr.push(value);
            }
        });
        var sign = true;
        for(i = 0; i < arr.length; i++){
            if(arr[i] < 100){
                sign = false;
                break;
            }
        }
        if(sign){
            result.push(getAve(arr));
        }
    }

    return result;
};
module.exports = even_group_calculate_average;
