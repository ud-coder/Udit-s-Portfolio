let tablinks=document.getElementsByClassName("tab-links");
let tabcontents=document.getElementsByClassName("tab-contents");

function openTab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

let sideMenu = document.getElementById("side-menu");
let menu=document.getElementById("menu");
let cancel=document.getElementById("cancel");

 menu.addEventListener("click",()=>{
    sideMenu.style.right="0";
 });

 cancel.addEventListener("click",()=>{
    sideMenu.style.right="-200px";
 });

