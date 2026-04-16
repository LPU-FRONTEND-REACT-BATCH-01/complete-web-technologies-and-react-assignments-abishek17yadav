let username = prompt("Enter name");
let email = prompt("Enter the email");
let password = prompt("Enter password")



function validateUser(username , email, password){

    username=username.trim().toLowerCase();

    let emailArr = [];
    emailArr=email.toLowerCase().split("@");

    let msg;

    if(password.length >8 && password.include('@','*','/')){
        msg="strong password";
    }
    else{
        msg="Weak password";
    }


    return username+" "+emailArr[0]+" "+emailArr[1]+" "+msg;
    // email=email.toLowercase();

    // let em[]= email.split("@");


}


console.log(validateUser(username,email,password))
