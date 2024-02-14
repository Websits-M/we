let sr = document.querySelector("#sr");

sr.addEventListener("click", add);

function add() {
  alert("انت بالفعل في الصفحة الرأسية");
}


let close = document.querySelector("#close")
let btnf = document.querySelector(".btnf")

close.addEventListener("click" , () =>{
  btnf.style.display = "none"
})