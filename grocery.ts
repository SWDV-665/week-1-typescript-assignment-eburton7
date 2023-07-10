// grocery.ts

class Grocery {
    name: string;
    quantity: number;
    category: string;
    price: number;
  
    constructor(name: string, quantity: number, category: string, price: number) {
      this.name = name;
      this.quantity = quantity;
      this.category = category;
      this.price = price;
    }
  }
  
  // grocery items
  const groceries: Grocery[] = [
    new Grocery("Milk", 3, "Dairy", 2.99),
    new Grocery("Bread", 6, "Bakery", 1.99),
    new Grocery("Eggs", 11, "Dairy", 1.49),
  ];
  
  // HTML output
  const groceriesHtml = groceries.map(
    (item) => `
      <div>
        <p>Name: ${item.name}</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Category: ${item.category}</p>
        <p>Price: $${item.price.toFixed(2)}</p>
      </div>
    `
  );
  
  // groceries.html file save
  const fs = require("fs");
  fs.writeFileSync("groceries.html", groceriesHtml.join(""));
  