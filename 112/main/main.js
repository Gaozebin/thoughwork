const loadAllItems = require("./datbase").loadAllItems;
const loadPromotions = require("./datbase").loadPromotions;

"use strict";

module.exports.printInventory = function printInventory(inputs){
    var cart = this.format(inputs);
    var promotion = this.getPromotion(cart);
    var result = this.getTotal(cart, promotion);
    return result;
}

/**
    format 一个订单数组形如:
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00,
        count: 3,
        subtotal: 9     //总价
    }
**/
module.exports.format = function format(inputs){
    var result = [];
    var allItems = loadAllItems();
    for (var i = 0; i < inputs.length;) {
        var count = 0;
        var map ={};
        for (var j = i; j < inputs.length; j++) {
            if(inputs[i] == inputs[j]){
                count++;
            }
        }
        if(inputs[i].indexOf('-') > 0){
            map['barcode'] = inputs[i].split("-")[0];
            map['count'] = parseInt(inputs[i].split("-")[1]);
            for (var k = 0; k < allItems.length; k++) {
                if(map.barcode == allItems[k].barcode){
                    map.name = allItems[k].name;
                    map.unit = allItems[k].unit;
                    map.price = allItems[k].price;
                    map.subtotal = map.count * map.price; 
                }
            }
            result.push(map);
            i++;
            continue;
        }
        map.barcode = inputs[i];
        map.count = count;
        for (var k = 0; k < allItems.length; k++) {
            if(map.barcode == allItems[k].barcode){
                map.name = allItems[k].name;
                map.unit = allItems[k].unit;
                map.price = allItems[k].price;
                map.subtotal = map.count * map.price; 
            }
        }
        result.push(map);
        i += count;
    }
    return result;
}

/**
    获得优惠商品
**/
module.exports.getPromotion = function getPromotion(cart){
    var promotion = [];
    var nowPromotions = loadPromotions()[0]["barcodes"];    //真坑。
    for (var element in cart) {
        for (var item in nowPromotions) {
            if(cart[element]["barcode"] == nowPromotions[item] && cart[element]["count"] > 2){
                promotion.push({
                    "barcode": cart[element]["barcode"],
                    "name": cart[element]["name"],
                    "count": 1,  
                    "price": cart[element]["price"],
                    "unit": cart[element]["unit"]
                });
            }
        }
    }
    return promotion;
}

/**
    合计+打印
**/
module.exports.getTotal = function getTotal(cart, promotion){
    var total = 0;
    var promotions = 0;
    for(var i in cart){
        total += cart[i]["subtotal"];
    }
    for(var i in promotion){
        promotions += promotion[i]["price"] * promotion[i]["count"];
    }
    total -= promotions;
    var result = {"total": total, "promotions": promotions};


    var expectText = '***<没钱赚商店>购物清单***\n'
    for(var i in cart){
        expectText += '名称：' + cart[i]["name"] + "，数量：" + cart[i]["count"] + cart[i]["unit"] + "，单价：" + cart[i]["price"].toFixed(2) + "(元)，小计：";
        var subtotal = cart[i]["subtotal"];
        for(var j in promotion){
            if(cart[i]["barcode"] == promotion[j]["barcode"]){
                subtotal -= parseFloat(promotion[j]["price"]);
            }
        }
        subtotal = parseFloat(subtotal).toFixed(2);
        expectText += subtotal + "(元)\n";
    }
    expectText += "----------------------\n";
    expectText += '挥泪赠送商品：\n';
    for(var k in promotion){
        expectText += "名称：" + promotion[k]["name"] + "，数量：" + promotion[k]["count"] + promotion[k]["unit"] + "\n";
    }
    expectText += "----------------------\n";
    expectText += "总计：" + result["total"].toFixed(2) + "(元)\n";
    expectText += "节省：" + result["promotions"].toFixed(2) + "(元)\n";
    expectText += "**********************";

    return expectText;
}