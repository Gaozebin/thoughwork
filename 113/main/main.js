"use strict";
module.exports = function printInventory(kilometers,time) {
   var sum = 0;
   // 等待时间收费
   sum += time * 0.25;

   // 公里收费
   if(kilometers >= 2 && kilometers <= 8){
   		sum += 6;     //两公里6元
   		sum += (kilometers-2) * 0.8;
   } else if(kilometers > 8){
   		sum += 6;
   		sum += 6 * 0.8;
   		sum += (kilometers - 8) * 1.2;
   } else if(kilometers > 0 && kilometers < 2){
   		sum += 6;
   } else{
   		return -1;
   }
   return parseInt(sum.toFixed(0));
};