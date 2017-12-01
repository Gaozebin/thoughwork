const printInventory = require('../main/main');

describe('taxi fee', function () {
    

    it("0 < x < 2", () => {
    	var kilometers = 2;
    	var time = 10;
    	var result = printInventory(kilometers,time);
    	expect(result).toEqual(9);
    });

    it("2 < x < 8", () => {
    	var kilometers = 6;
    	var time = 10;
    	var result = printInventory(kilometers,time);
    	expect(result).toEqual(12);
    });

    it("x > 8",function(){
    	var kilometers = 10;
    	var time = 10;
    	var result = printInventory(kilometers,time);

    	var expectText = 16;

    	expect(result).toEqual(expectText);
    });

});
