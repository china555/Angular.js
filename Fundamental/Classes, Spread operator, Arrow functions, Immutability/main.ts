function ShoppingList() {
  this.groceries = [];
}

ShoppingList.prototype.addItem = function (item: string) {
  this.groceries = this.groceries.concat([item]);
};

ShoppingList.prototype.removeItem = function (item: string) {
  this.groceries = this.groceries.filter((grocery: string) => {
    return item !== grocery;
  });
};

const mylist = new ShoppingList();
mylist.addItem("Banana");
mylist.addItem("Apple");
console.log(mylist.groceries);
mylist.removeItem("Banana");
console.log(mylist.groceries);

class ShoppingList2 {
  groceries: string[];
  constructor() {
    this.groceries = [];
  }
  addItem(item: string) {
    this.groceries = [...this.groceries, item];
  }
  removeItem(item: string) {
    this.groceries = this.groceries.filter(
      (grocery: string) => item !== grocery
    );
  }
}
