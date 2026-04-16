let account ={
    balance: 0,
    transaction :[],
}


function deposit(amount){
    if(amount >0){
        account.balance=account.balance+amount
        account.transaction.push("Deposited :"+ amount)
    }else{
            console.log("amount is invaid")
    }
}

function withdraw(amount){
    if(amount <=0){
        console.log("Invalid amount")
    }

    else if(amount >10000){
        console.log("Cannot withdraw more than rs 10000")
    }
    else if(amount>account.balance){
        console.log("Cannot withdraw more than balance")
    }
     else if (account.balance - amount < 500) {
        console.log("Minimum ₹500 must remain");
    } 
    else{
        account.balance= account.balance-amount;
        account.transaction.push("Withdrawn :"+ amount);

    }


}

function getBalance(){
    return account.balance;
}

function getTransactions(){

    account.transaction.map((value)=>{
        console.log(value);
    })

}

deposit(2000);
withdraw(2500);
// deposit(1000);

console.log("Balance: " + getBalance());
console.log("transactions: ---")
getTransactions();