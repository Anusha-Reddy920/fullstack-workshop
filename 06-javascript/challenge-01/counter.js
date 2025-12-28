
// const Prac =document.getElementById("click");

let count = 0;
let value = 1
let header0 = document.getElementById('val');
const btnadd = document.getElementById("add");
btnadd.addEventListener("click", add1);
add.style.color = 'green';
function add1(){
    count=count+value;
    console.log(header0.textContent);
    console.log(count);
    header0.textContent = count;
}
const btnsub = document.getElementById("sub");
btnsub.addEventListener("click", sub1);
sub.style.color = 'red';
function sub1(){
    count=count-value;
    console.log(header0.textContent);
    console.log(count);
    header0.textContent = count;
}
const btnreset = document.getElementById("Reset");
btnreset.addEventListener("click", reset1);
function reset1(){
    count=0;
    console.log(header0.textContent);
    console.log(count);
    header0.textContent = count;

}
const btnone = document.getElementById("one");
btnone.addEventListener("click", one);
function one(){
    count=count+value;
    console.log(header0.textContent);
    console.log(count);
    header0.textContent = count;

}
const btnfive = document.getElementById("five");
btnfive.addEventListener("click", five);
 
function five(){
    value=5;
    count=count+value;
    console.log(header0.textContent);
    console.log(count);
    header0.textContent = count;

}
const btnten = document.getElementById("ten");
btnten.addEventListener("click", ten);
 
function ten(){
    value=10;
    count=count+value;
    console.log(header0.textContent);
    console.log(count);
    header0.textContent = count;

}



