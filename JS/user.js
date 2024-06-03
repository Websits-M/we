
// ////////////////////////////////////////////////////////////////////////////////////////
let userinfo = document.querySelector("#user_info")
let userData = document.querySelector("#user")
let links = document.querySelector("#links")

let logoutBtn = document.querySelector("#logout")

// function log(){
//   if(localStorage.getItem("username") == ("mostafa")){
//    localStorage.clear()
//   }
// }
// log()

function run(){
  if(localStorage.getItem("username")){
     
  }else{
    window.location = "index.html"
  }
}
run()

/////////////////////////////////////////////////////////////////////////////////
function log(){
  if(localStorage.getItem("username") == ("Ahmed94") || 
  localStorage.getItem("username") == ("Mostafa Mahmoud") ||
  localStorage.getItem("username") == ("MohamedSamy") ||
   localStorage.getItem("username") == ("mahmoudAli22")||
   localStorage.getItem("username") == ("Saleh.26") ||
   localStorage.getItem("username") == ("osamaAhmed") ||
   localStorage.getItem("username") == ("abdeLrhman") ||
   localStorage.getItem("username") == ("totySalem") ||
   localStorage.getItem("username") == ("nermeenN") ||
   localStorage.getItem("username") == ("ZaheR") ||
   localStorage.getItem("username") == ("IbrahemMohamed") ||
   localStorage.getItem("username") == ("Omar") ||
   localStorage.getItem("username") == ("Mostafa.Eid") ||
   localStorage.getItem("username") == ("Shaher") ||
   localStorage.getItem("username") == ("Mohamed.Emam") ||
   localStorage.getItem("username") == ("Hassan") ||
   localStorage.getItem("username") == ("Haidy.mahmoud")
  
  ){
    window.alert("انتهت صلاحية الوصول الي هذا الموقع")
      window.location = "index.html"
      localStorage.clear()

  }
}
 
  

log()


if(localStorage.getItem("username")){
    userData.style.color ="yollow"
    userData.style.fontWeight = "900"
    userData.innerHTML = localStorage.getItem("username")
    userData.style.textTransform = "capitalize"
}

logoutBtn.addEventListener("click" , logout)
function logout(){
  localStorage.clear()
}

let btn1 = document.querySelector("#btn");

btn1.addEventListener("click", add);

function add() {
  window.location = "index4.html"

}
let sr = document.querySelector("#sr");
sr.addEventListener("click", addsr);
function addsr() {
  window.location = "SR.html"

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

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

function timeout(){
  setTimeout(function(){
    localStorage.clear()
  } , 5000)
}
timeout()


