const menu = document.getElementById("menu");

menu.firstElementChild.addEventListener("click",()=>{
  menu.classList.toggle("open");
})