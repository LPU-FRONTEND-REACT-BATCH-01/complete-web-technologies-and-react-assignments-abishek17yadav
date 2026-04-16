interface Product {
  id: number;
  title: string;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    title: "Laptop",
    price: 50000
  },
  {
    id: 2,
    title: "Phone",
    price: 20000
  }
];

products.push({
  id: 3,
  title: "Tablet",
  price:5 
});







// if upi -10% discount 
// card - 5%
// cod - +50rs 
// netbanking - no offerf
// if cash -- return a string
// make a function