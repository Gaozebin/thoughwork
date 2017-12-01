'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var words = [
        '','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    var result = [], i;
    if(number_a < number_b){
        for (i = number_a; i <= number_b; i++){
            result.push(words[i]);
        }
    }else if(number_a > number_b){
        for(i = number_a; i >= number_b; i--){
            result.push(words[i]);
        }
    }else if(number_a == number_b){
        result.push(words[number_b]);
    }
    return result;
}

module.exports = get_letter_interval;
