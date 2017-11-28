const printInventory = require('../main/main');

describe('taxi fee', function () {
    it("taxi",function(){
    	var kilometers = 10;
    	var time = 10;
    	var result = printInventory(kilometers,time);

    	var expectText = 16;

    	expect(result).toEqual(expectText);
    });
});
