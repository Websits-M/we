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


let q_1 = document.getElementById('q-1')
let script_1 = document.getElementById('script-1')
let q_2 = document.getElementById('q-2')
let script_2 = document.getElementById('script-2')
let q_3 = document.getElementById('q-3')
let script_3 = document.getElementById('script-3')
let q_4 = document.getElementById('q-4')
let script_4 = document.getElementById('script-4')
let q_5 = document.getElementById('q-5')
let script_5 = document.getElementById('script-5')
let q_6 = document.getElementById('q-6')
let script_6 = document.getElementById('script-6')
let q_7 = document.getElementById('q-7')
let script_7 = document.getElementById('script-7')
let q_8 = document.getElementById('q-8')
let script_8 = document.getElementById('script-8')


q_1.addEventListener("click" , ch1)
q_2.addEventListener("click" , ch1)
q_3.addEventListener("click" , ch1)
q_4.addEventListener("click" , ch1)
q_5.addEventListener("click" , ch1)
q_6.addEventListener("click" , ch1)
q_7.addEventListener("click" , ch1)
q_8.addEventListener("click" , ch1)



    function ch1(){
        script_1.style.display = q_1.checked ? "block" : "none"
        script_2.style.display = q_2.checked ? "block" : "none"
        script_3.style.display = q_3.checked ? "block" : "none"
        script_4.style.display = q_4.checked ? "block" : "none"
        script_5.style.display = q_5.checked ? "block" : "none"
        script_6.style.display = q_6.checked ? "block" : "none"
        script_7.style.display = q_7.checked ? "block" : "none"
        script_8.style.display = q_8.checked ? "block" : "none"

    }
 


    function select() {
        var optionL = document.getElementById("optionL");
        var box1 = document.getElementById("box-1");
        var box2 = document.getElementById("box-2");
        var box3 = document.getElementById("box-3");
        if (optionL.value == 1) {
          box1.style.display = "block";
          box2.style.display = "none";
          box3.style.display = "none";

        } else if(optionL.value == 2) {
          box2.style.display = "block";
          box1.style.display = "none";
          box3.style.display = "none";
        
        }else if(optionL.value == 3) {
            box3.style.display = "block";
            box1.style.display = "none";
            box2.style.display = "none";
      }
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

