(function(){
'use strict'

var itemlist = [{name:'Orios', quantity: '5'},
  {name:'Sneakers', quantity:'3'},
    {name:'Potato Chips', quantity:'8'},
      {name:'Bandages', quantity:'10'},
        {name:'Computer Mouse', quantity:'1'}];

angular.module('shoppinglistApp',[])
.controller('shoppinglistBuy',shoppinglistBuy)
.controller('shoppinglistBought',shoppinglistBought)
.service('shoppinglistservice',shoppinglistservice);

shoppinglistBuy.$inject=['shoppinglistservice'];
function shoppinglistBuy(shoppinglistservice){
var BuyList = this;

BuyList.items = itemlist;
BuyList.moveitem = function(index){
  shoppinglistservice.additem(BuyList.items[index].name, BuyList.items[index].quantity);
BuyList.items.splice(index,1);
}

};
shoppinglistBought.$inject=['shoppinglistservice'];
function shoppinglistBought(shoppinglistservice){

var BoughtList = this;

BoughtList.items = shoppinglistservice.getitems();

};

function shoppinglistservice(){
var service = this;
var items =[];
service.additem = function (itemname,itemquantity){
  var item =
    {name: itemname,
      quantity: itemquantity}
  ;
  items.push(item);
};
  service.getitems = function(){
    return items;
  };

};

})();
