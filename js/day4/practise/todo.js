let input = document.querySelector("input")
let button = document.querySelector("button")

let ul = document.querySelector("ul")

button.addEventListener("click" , ()=>{
    let li =document.createElement("li");
    let inputText = input.value;

    let btn = document.createElement("button");
    btn.innerText="delete";
    
    let combtn = document.createElement("button");
    combtn.innerText="Done";



    btn.addEventListener("click" , ()=>{
        li.remove();
        btn.remove();
    })

   


    li.textContent=inputText;



     combtn.addEventListener("click" , ()=>{
        combtn.style.textDecoration="line-through";

    })
    ul.append(li );
    li.append(btn);
    li.append(combtn);


})