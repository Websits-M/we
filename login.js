let userName = document.querySelector("#userName");
let passward = document.querySelector("#passward");

let loginSubmit = document.querySelector("#sign-in");

localStorage.setItem("userName", "mostafa");
localStorage.setItem("password", "123");
getUser = localStorage.getItem("userName");
getpassward = localStorage.getItem("password");

loginSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  if (userName.value === "" || passward.value === "") {
    Swal.fire({
      title: "Warning!",
      text: "Please Fill Data",
      icon: "warning",
    });
  } else {
    if (getUser === userName.value.trim() && getpassward === passward.value) {
      setTimeout(() => {
        window.location = "index2.html";
      }, 1500);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "User Name or Password is wrong!",
      });
    }
  }
});

function togglePasswordVisibility() {
  if (passward.type === "password") {
    passward.type = "text";
  } else {
    passward.type = "password";
  }
}
