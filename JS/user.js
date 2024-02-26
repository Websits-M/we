
// ////////////////////////////////////////////////////////////////////////////////////////
let userinfo = document.querySelector("#user_info")
let userData = document.querySelector("#user")
let links = document.querySelector("#links")

let logoutBtn = document.querySelector("#logout")


function run(){
  if(localStorage.getItem("username")){
     
  }else{
    window.location = "index.html"
  }
}
run()

if(localStorage.getItem("username")){
    // links.remove()
    userData.style.color ="yollow"
    userData.style.fontWeight = "900"
    userData.innerHTML = localStorage.getItem("username")
    userData.style.textTransform = "capitalize"
}



let sr = document.querySelector("#btn");

sr.addEventListener("click", add);

function add() {
  Swal.fire({
    title: "Warning!",
    text: "لازال قيد التحديث",
    icon: "warning",
  });
}

let close = document.querySelector("#close");
let btnf = document.querySelector(".btnf");

close.addEventListener("click", () => {
  btnf.style.display = "none";
});

let gets = document.getElementById('get')
gets.addEventListener('click' , get)
function get(){
window.location = "index3.html"
}
