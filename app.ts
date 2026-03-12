var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var userTuple = ["Alex", 25, true];
function greetUser(data) {
    return "Hello, ".concat(data.name, "! Age: ").concat(data.age);
}
var products = [
    { id: 1, name: "Laptop", price: 1200, quantity: 5 },
    { id: 2, name: "Mouse", price: 25, quantity: 10 },
    { id: 3, name: "Keyboard", price: 150, quantity: 8 }
];
var allProducts = products;
var expensiveProducts = products.filter(function (p) { return p.price > 100; });
function calculateTotal(items) {
    return items.reduce(function (acc, item) { return acc + (item.price * item.quantity); }, 0);
}
var BaseStore = /** @class */ (function () {
    function BaseStore() {
    }
    return BaseStore;
}());
var ProductStore = /** @class */ (function (_super) {
    __extends(ProductStore, _super);
    function ProductStore() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Main Store";
        _this._items = [];
        return _this;
    }
    Object.defineProperty(ProductStore.prototype, "count", {
        get: function () {
            return this._items.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductStore.prototype, "addItem", {
        set: function (item) {
            this._items.push(item);
        },
        enumerable: false,
        configurable: true
    });
    ProductStore.prototype.updateQty = function (id, qty) {
        var item = this._items.find(function (p) { return p.id === id; });
        if (item)
            item.quantity = qty;
    };
    ProductStore.prototype.delete = function (id) {
        this._items = this._items.filter(function (p) { return p.id !== id; });
    };
    ProductStore.prototype.list = function () {
        console.log(this._items);
    };
    ProductStore.prototype.getInfo = function () {
        return "".concat(this.name, " has ").concat(this.count, " items.");
    };
    return ProductStore;
}(BaseStore));
var productData = {
    1: { id: 1, name: "Monitor", price: 300, quantity: 2 },
    2: { id: 2, name: "Phone", price: 800, quantity: 1 }
};
var store = new ProductStore();
store.addItem = products[0];
store.list();
console.log(store.getInfo());
