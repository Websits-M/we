let sr = document.querySelector("#btn");

sr.addEventListener("click", add);

function add() {
  alert("لازال قيد التحديث");
}

let close = document.querySelector("#close");
let btnf = document.querySelector(".btnf");

close.addEventListener("click", () => {
  btnf.style.display = "none";
});


