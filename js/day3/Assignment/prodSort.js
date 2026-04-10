
let cartData=[

    {
        id:1,
        name :"Watch",
        price:2999,
        quantity:2
    },

    {
        id:2,
        name :"Shoes",
        price:199,
        quantity:5
    },

    {
        id:1,
        name :"EarPhone",
        price:299,
        quantity:10
    }
]



// console.log(cartData)

// cartData.sort(function(a, b) {
//   return a.price - b.price;
// });
// console.log("sort by price")
// console.log(cartData);


cartData.sort((a,b)=> a.price-b.price)
console.log("sort by price")
console.log(cartData);


cartData.sort((a,b)=>a.name-b.name)

// cartData.sort(function(a, b) {
//   return a.name.localeCompare(b.name);
// });
console.log("sort by name")
console.log(cartData);


cartData.sort(function(a, b) {
  return a.quantity - b.quantity;
});
console.log("sort by qunatity")
console.log(cartData);




