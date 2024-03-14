let check = document.querySelector("#check1");
let hide = document.querySelector("#hid");


function showandhid(){
    hide.style.display = check.checked ? "block" : "none"
}






let radioBtn = document.querySelectorAll("input[name='fruit']");
let result = document.getElementById("result")

let findSelected = () => {
    let selected = document.querySelector("input[name='fruit']:checked").value;
    result.style.display = "block"
    result.textContent = `${selected}`;
}
radioBtn.forEach(radioBtn =>{
    radioBtn.addEventListener("change" ,
    findSelected);
})
findSelected();


function checkme(){
    var cb = document.getElementById("abc")
    var text = document.getElementById("msg")
    if(cb.checked == true){
        text.style.display = "block";

    }else{
        text.style.display = "none"
    }
}

function BSS(){
    var cb = document.getElementById("b1")
    var text = document.getElementById("msg_bss")
    if(cb.checked == true){
        text.style.display = "block";

    }else{
        text.style.display = "none"
    }
}