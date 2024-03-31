let check = document.querySelector("#check1");
let hide = document.querySelector("#hid");

$(function (){
    'use strict'
    $('.texx').click(function(){
        var current_r = $(this).attr("data-click");
        $(".content .radio_content").hide();
              $("."+current_r).show();


    })
})

$(document).ready(function(){
    $(".content .radio_content").hide();
    $(".content .radio_content:first-child");

    $(".radio_wrap").click(function(){
      var current_raido = $(this).attr("data-radio");
      $(".content .radio_content").hide();
      $("."+current_raido).show();
    })
  });


  let check2 = document.querySelector("#check2");
  let hid2 = document.querySelector("#hid2");
function showandhid(){
    hide.style.display = check.checked ? "block" : "none"
    hid2.style.display = check2.checked ? "block" : "none"
}


let r2 = document.getElementById('r2')
let kalam2 = document.getElementById('kalam2')
let r3 = document.getElementById('r3')
let kalam3 = document.getElementById('kalam3')
let r4 = document.getElementById('r4')
let kalam4 = document.getElementById('kalam4')
let r5 = document.getElementById('r5')
let kalam5 = document.getElementById('kalam5')
let r6 = document.getElementById('r6')
let kalam6 = document.getElementById('kalam6')
let r7 = document.getElementById('r7')
let kalam7 = document.getElementById('kalam7')

r2.addEventListener("click" , ch1)
r3.addEventListener("click" , ch1)
r4.addEventListener("click" , ch1)
r5.addEventListener("click" , ch1)
r6.addEventListener("click" , ch1)
r7.addEventListener("click" , ch1)


    function ch1(){
        kalam2.style.display = r2.checked ? "block" : "none"
        kalam3.style.display = r3.checked ? "block" : "none"
        kalam4.style.display = r4.checked ? "block" : "none"
        kalam5.style.display = r5.checked ? "block" : "none"
        kalam6.style.display = r6.checked ? "block" : "none"
        kalam7.style.display = r7.checked ? "block" : "none"

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


