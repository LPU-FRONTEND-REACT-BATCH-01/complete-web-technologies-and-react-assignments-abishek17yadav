type PaymentMethods = "UPI" | "COD" | "NetBanking" | "Card" | "Cash";

function calculatePayment(mode: PaymentMethods, price: number): number | string {
    if (mode === "UPI") {
        return price - price * 0.10; 
    }
    else if (mode === "Card") {
        return price - price * 0.05; 
    }
    else if (mode === "COD") {
        return price + 50;
    }
    else if (mode === "NetBanking") {
        return price; 
    }
    else { 
        return "Pay using cash only";
    }
}
console.log(calculatePayment("UPI", 1000));     
console.log(calculatePayment("Card", 1000));      
console.log(calculatePayment("COD", 1000));   
console.log(calculatePayment("NetBanking", 1000));
console.log(calculatePayment("Cash", 1000));       


// fetch data from dummy json and make diffent arrsy for each conditions price > 5 dolar , 10 dollar ,same do for all coditions    ,category --mens shirts , beauty , name of tite in alphabets order

//https://dummyjson.com/products/category-list

