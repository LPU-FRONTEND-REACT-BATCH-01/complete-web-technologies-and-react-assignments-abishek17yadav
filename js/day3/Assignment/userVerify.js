let users=[
    {
        id:1,
        username:"Abishek",
        password:"12345a"
    },
    {
        id:2,
        username:"rahul",
        password:"rahul1234#"
    },
    {
        id:3,
        username:"Aryan",
        password:"ariy717@"
    },
]



let userInputData={
    username:"Abishek",
    password:"12345a"
}

// check if user name is there  or not if not then user not foundy then  check the password and if password is wrong tell wrong passsword if both are correct then tell lpogin sucessfull
// 1st chekc with some method a nd if usr there thne go with find method
// after find in this chekc if password is mathing or not 

let userExists = users.some(function(user) {
  return user.username === userInputData.username;
});

if (!userExists) {
  console.log("User not found");
} else {
  let foundUser = users.find(function(user) {
    return user.username === userInputData.username;
  });

  if (foundUser.password === userInputData.password) {
    console.log("Login successful");
  } else {
    console.log("Wrong password");
  }
}



