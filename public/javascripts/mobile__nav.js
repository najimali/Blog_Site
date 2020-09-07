let openNav  =   document.querySelector("#openNav");
let closeNav    =   document.querySelector("#closeNav");

openNav.addEventListener("click",()=>{
        document.querySelector(".overlay").style.width="40%";
       
});
closeNav.addEventListener("click",()=>{
    document.querySelector(".overlay").style.width="0";
    
});