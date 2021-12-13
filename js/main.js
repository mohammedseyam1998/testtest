// document.getElementById("test").innerHTML = "Hello from js";

// var myName = "Mohammed" ,
//     myAge = 24,
//     myBirth = 1998,
//     single = false,
//     hobbies = ["football" , "swimming" , "basketboll"]

    

    

// console.log( typeof myName);
// console.log( typeof myAge);

// console.log("your name is :" + myName + " " + " and your age is :" + myAge);


// console.log( typeof single);
// console.log( typeof hobbies);
// console.log(myAge + 9);



// var Age = prompt("please Enter your age");
// if(Age == 20){
//    document.getElementById("test").innerHTML = "Login success"
// }else if(Age > 20){
//     document.getElementById("test").innerHTML = "Login success You more than 20"
// }else{
//     document.getElementById("test").innerHTML = "Cant Login "
// }
// var price = document.getElementById("test");


// if(price.innerHTML >= 200){
//     price.innerHTML = price.innerHTML - 10;
// }
var age = 20;
var city = 'cairo';

if( age == 20 || city == 'gaza'){
console.log("success")
}
// var name = "Ali";

// function clacAge() {
//     var myAge = document.getElementById("age").value;
//     // var age = age * 365 ;   
//     // alert(name);
//     // alert(myAge * 365);
//     document.getElementById("result").innerHTML = "Your Age In Days : " + myAge * 365;
//     // return myAge * 365  ;
    
// }
// console.log(clacAge());


// var myAge = prompt("please enter you age");
// alert(myName(myAge));

// var names = ["mohammed","ahmed" ,"ali" , "rami","muhanned","braa","fatma"];
// // names.push("muhanned");
// // names.pop();
// console.log(names.length);
// for(var i = 0 ; i <= 5 ; i++){
//     // console.log(names[i]);
    
// }
// document.querySelector("h1").innerHTML = "This is a <span class='active'>mmmm</span>  head from js";
var mydiv = document.createElement("div");

var myhead = document.createElement("h1");
var mytext = document.createTextNode("this is a h1 from js");
myhead.appendChild(mytext);
mydiv.appendChild(myhead);

var myimg = document.createElement("img");

// mydiv.appendChild(myimg);
document.body.prepend(mydiv);
document.body.prepend(myimg);
// console.log(myimg.setAttribute("src" ,"img/m.jpg "));

// window.onload = function () {
//     console.log("test from js in load")
    
// };

var myele = document.getElementById("test");
var mydiv = document.getElementById("product");

myele.onclick = function () {
    // mydiv.className = "disable";
    mydiv.style.cssText = ("background-image : url(img/m.jpg) ; border : 10px solid #000");
    // mydiv.style.backgroundColor = "red";
    // mydiv.style.border = "10px solid #000";
}
// window.onscroll = function () {
    
//     console.log(window.screenY)
// };
//*//

// mydiv.classList.toggle("test1");
var mybtn = document.getElementById("mybtn"),
    ourDiv = document.getElementById("ourdiv");

mybtn.onclick = function () {
    ourDiv.style.border = "2px solid #000";
    ourDiv.classList.toggle("hidden");
    
};

var totop = document.getElementById("toTop");
console.log(window.scrollY);

window.onscroll = function () {
    if(window.scrollY >= "800"){
        totop.style.display = "block";
    }else{
       
        totop.style.display = "none";
    }
};
totop.onclick = function() {
    window.scrollTo({
        top : 0 ,
        behavior : "smooth"
    })
}


