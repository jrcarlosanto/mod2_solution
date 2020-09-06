(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;
  
  list1.toBuy = ShoppingListCheckOffService.getToBuy();
  
  list1.acquired = function (itemIndex, itemName, quantity) {
    ShoppingListCheckOffService.acquired(itemIndex, itemName, quantity);
  };  

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;

  list2.alreadyBought= ShoppingListCheckOffService.getAlreadyBought();

}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuy = [{name: "cookies", quantity: 10 },{name: "milk", quantity: 1 },{name: "donuts", quantity: 5 },
               {name: "chocolate", quantity: 10 },{name: "peanut butter", quantity: 4 }];
  
  var alreadyBought = [];

  service.getToBuy = function () {
    return toBuy;
  };

  service.getAlreadyBought = function () {
    return alreadyBought;
  };

  service.acquired = function (itemIndex , itemName, quantity){ //Add in alreadBought array and Remove in toBuy array
    var item = {
      name: itemName,
      quantity: quantity
    };
    alreadyBought.push(item); //add in alreadBought array
    toBuy.splice(itemIndex, 1); // remove in toBuy array
  };

}

})();
