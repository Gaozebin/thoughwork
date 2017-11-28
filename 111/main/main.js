"use strict";

module.exports = function printInventory(number){
    var str = "";
    while(number >= 0){
        if(number > 2){
            str += number.toString() + " bottles of beer on the wall, " + number.toString() + " bottles of beer.\n" +
                   "Take one down and pass it around, " + (number-1).toString() + " bottles of beer on the wall.\n";
        }
        if(number == 2){
            str += "2 bottles of beer on the wall, " + "2 bottles of beer.\n" +
                   "Take one down and pass it around, " + "1 bottle of beer on the wall.\n";
        }
        if(number == 1){
            str += "1 bottle of beer on the wall, " + "1 bottle of beer.\n" +
                   "Take one down and pass it around, " + "no more bottles of beer on the wall.\n";
        }
        if(number == 0){
            str += "No more bottles of beer on the wall, " + "no more bottles of beer.\n" +
                   "Go to the store and buy some more, " + "99 bottles of beer on the wall.\n";
        }
        number--;
    }
    return str;

}

