var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function ShoppingList() {
    this.groceries = [];
}
ShoppingList.prototype.addItem = function (item) {
    this.groceries = this.groceries.concat([item]);
};
ShoppingList.prototype.removeItem = function (item) {
    this.groceries = this.groceries.filter(function (grocery) {
        return item !== grocery;
    });
};
var mylist = new ShoppingList();
mylist.addItem("Banana");
mylist.addItem("Apple");
console.log(mylist.groceries);
mylist.removeItem("Banana");
console.log(mylist.groceries);
var ShoppingList2 = /** @class */ (function () {
    function ShoppingList2() {
        this.groceries = [];
    }
    ShoppingList2.prototype.addItem = function (item) {
        this.groceries = __spreadArray(__spreadArray([], this.groceries), [item]);
    };
    ShoppingList2.prototype.removeItem = function (item) {
        this.groceries = this.groceries.filter(function (grocery) {
            return item !== grocery;
        });
    };
    return ShoppingList2;
}());
