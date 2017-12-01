const main = require('../main/main');
const datbase  = require('../main/datbase');




describe('pos', function () {
    var allItems;
    var inputs;

    beforeEach(function () {
        allItems = datbase.loadAllItems();
        inputs = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000003-2',
            'ITEM000005',
            'ITEM000005',
            'ITEM000005'
        ];
    });

    it("is format correct ?", function(){
        var result = main.format(inputs);
        var expectText =[
                { 
                    barcode: 'ITEM000001', 
                    count: 5, name: '雪碧', 
                    unit: '瓶', 
                    price: 3, 
                    subtotal: 15 
                }, 
                { 
                    barcode: 'ITEM000003', 
                    count: 2, 
                    name: '荔枝', 
                    unit: '斤',
                    price: 15, 
                    subtotal: 30 
                 }, 
                 { 
                    barcode: 'ITEM000005', 
                    count: 3, 
                    name: '方便面', 
                    unit: '袋',
                    price: 4.5, 
                    subtotal: 13.5 
                }
        ];

        expect(result).toEqual(expectText);
    });

    it("is getPromotion correct ?", function(){
        var cart = main.format(inputs);
        var result = main.getPromotion(cart);
        var expectText =[ 
            { 
                barcode: 'ITEM000001', 
                name: '雪碧', 
                count: 1, 
                price: 3, 
                unit: '瓶'
            },
            { 
                barcode: 'ITEM000005', 
                name: '方便面', 
                count: 1, 
                price: 4.5, 
                unit: '袋' 
            }
        ];

        expect(result).toEqual(expectText);
    });

     it("is getTotal correct ?", function(){
        var cart = main.format(inputs);
        var promotion = main.getPromotion(cart);
        var result = main.getTotal(cart,promotion);
        var expectText =
         '***<没钱赚商店>购物清单***\n' +
            '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
            '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
            '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
            '----------------------\n' +
            '挥泪赠送商品：\n' +
            '名称：雪碧，数量：1瓶\n' +
            '名称：方便面，数量：1袋\n' +
            '----------------------\n' +
            '总计：51.00(元)\n' +
            '节省：7.50(元)\n' +
            '**********************';

        expect(result).toEqual(expectText);
    });

    it('should print correct text', function () {

        spyOn(console, 'log');

        var result = main.printInventory(inputs);


        var expectText =
            '***<没钱赚商店>购物清单***\n' +
            '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
            '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
            '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
            '----------------------\n' +
            '挥泪赠送商品：\n' +
            '名称：雪碧，数量：1瓶\n' +
            '名称：方便面，数量：1袋\n' +
            '----------------------\n' +
            '总计：51.00(元)\n' +
            '节省：7.50(元)\n' +
            '**********************';

        expect(result).toEqual(expectText);
       
    });
});
