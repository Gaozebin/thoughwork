'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var words = [
        '','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    var result = [], i;
    if (number_a < number_b){
        for(i = number_a; i <= number_b; i++){
            var str;
            if(i % 26 == 0){
                str = words[Math.floor(i / 26) - 1] + words[26];
            }else{
                str = words[Math.floor(i / 26)] + words[i % 26];
            }
            result.push(str);
        }
    }else if(number_a > number_b){
        for(i = number_a; i >= number_b; i--){
            var str;
            if(i % 26 == 0){
                str = words[Math.floor(i / 26) - 1] + words[26];
            }else{
                str = words[Math.floor(i / 26)] + words[i % 26];
            }
            result.push(str);
        }
    }else if(number_a == number_b){
          var str;
          if(number_a % 26 == 0){
              str = words[Math.floor(number_a / 26) - 1] + words[26];
          }else{
              str = words[Math.floor(number_a / 26)] + words[number_a % 26];
          }
          result.push(str);
    }
    return result;
}

module.exports = get_letter_interval_2;

