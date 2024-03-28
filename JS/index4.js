let check = document.querySelector("#check1");
let hide = document.querySelector("#hid");


$(document).ready(function(){
    /* by default hide all radio_content div elements except first element */
    $(".content .radio_content").hide();
    $(".content .radio_content:first-child").show();

    /* when any radio element is clicked, Get the attribute value of that clicked radio element and show the radio_content div element which matches the attribute value and hide the remaining tab content div elements */
    $(".radio_wrap").click(function(){
      var current_raido = $(this).attr("data-radio");
      $(".content .radio_content").hide();
      $("."+current_raido).show();
    })
  });

function showandhid(){
    hide.style.display = check.checked ? "block" : "none"
}

let r1 = document.getElementById('r1')
let kalam = document.getElementById('kalam')
let r2 = document.getElementById('r2')
let kalam2 = document.getElementById('kalam2')
let r3 = document.getElementById('r3')
let kalam3 = document.getElementById('kalam3')
let r4 = document.getElementById('r4')
let kalam4 = document.getElementById('kalam4')
let r5 = document.getElementById('r5')
let kalam5 = document.getElementById('kalam5')
r1.addEventListener("click" , ch1)
r2.addEventListener("click" , ch1)
r3.addEventListener("click" , ch1)
r4.addEventListener("click" , ch1)
r5.addEventListener("click" , ch1)

    function ch1(){
        // if()
        kalam.style.display = r1.checked ? "block" : "none"
        kalam2.style.display = r2.checked ? "block" : "none"
        kalam3.style.display = r3.checked ? "block" : "none"
        kalam4.style.display = r4.checked ? "block" : "none"
        kalam5.style.display = r5.checked ? "block" : "none"
    }
 




// var radioBtn3 = document.querySelectorAll("input[name='fruit3']");
// var result3 = document.getElementById("result3")

// var findSelected3 = () => {
//     var selected = document.querySelector("input[name='fruit3']:checked").value;
//     result3.style.display = "block"
//     result3.textContent = `${selected}`;
// }
// radioBtn3.forEach(radioBtn3 =>{
//     radioBtn3.addEventListener("change" ,
//     findSelected3);
// })
// findSelected3();


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

function checkme2(){
    var cb = document.querySelector(".inp3")
    var text = document.getElementById("msg3")
    if(cb.checked == true){
        text.style.display = "block";

    }else{
        text.style.display = "none"
    }
}


