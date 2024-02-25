
let loginSubmit = document.querySelector("#sign-in");

localStorage.setItem("userName", "mostafa");
localStorage.setItem("password", "123");
// /////////////
let userName = document.querySelector('#userName')
let password = document.querySelector('#password')

let getUsername = localStorage.getItem("userName")
let getPassword = localStorage.getItem("password")

let parent = document.querySelector(".parent")
let form = document.querySelector(".section-form")

let addItem = localStorage.getItem("username")? localStorage.getItem("username") : "";
if(addItem){
    parent.style.display = "block";
    form.style.display = "none";
}
loginSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  if (password.value === "") {
    Swal.fire({
      title: "Warning!",
      text: "Please Fill Data",
      icon: "warning",
    });
  } else {
    if (getUsername === userName.value.trim() && getPassword === password.value) {
        setTimeout(() => {
            window.location = "index2.html";
          }, 1500);
        localStorage.setItem("code" , Math.floor(Math.random()*100))

      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password is wrong!",
      });
    }
  }
});

