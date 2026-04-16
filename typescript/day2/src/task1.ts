let a1:unknown="abc";



if(typeof(a1)=== "number"){
    a1=a1+100;

}
else if (typeof(a1)=== "string"){

    a1=a1.charAt(0).toUpperCase();
}
else if (typeof(a1)=== "boolean"){
if(a1==true){
        a1=false;
}
a1=false;
}
else{


}

console.log(a1);


// create a products objects array eacg prod should have id , title ,price and if i try to insert any obhet that isnot havong this three propertes its houls ==d not allow
//   in typescript with simple an deasy exaple

// define an object strucure and do it