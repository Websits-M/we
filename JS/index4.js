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
  let check3 = document.querySelector("#check3");
  let check4 = document.querySelector("#check4");
  let hid2 = document.querySelector("#hid2");
  let hid3 = document.querySelector("#hid3");
  let hid4 = document.querySelector("#hid4");
function showandhid(){
    hide.style.display = check.checked ? "block" : "none"
    hid2.style.display = check2.checked ? "block" : "none"
    hid3.style.display = check3.checked ? "block" : "none"
    hid4.style.display = check4.checked ? "block" : "none"
}


let q_0 = document.getElementById('q-0')
let script_0 = document.getElementById('script-0')
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
let q_9 = document.getElementById('q-9')
let script_9 = document.getElementById('script-9')
let q_10 = document.getElementById('q-10')
let script_10 = document.getElementById('script-10')
let q_11 = document.getElementById('q-11')
let script_11 = document.getElementById('script-11')
let q_12 = document.getElementById('q-12')
let script_12 = document.getElementById('script-12')
let q_13 = document.getElementById('q-13')
let script_13 = document.getElementById('script-13')
let q_14 = document.getElementById('q-14')
let script_14 = document.getElementById('script-14')
let q_15 = document.getElementById('q-15')
let script_15 = document.getElementById('script-15')
let q_16 = document.getElementById('q-16')
let script_16 = document.getElementById('script-16')

q_0.addEventListener("click" , ch1)
q_1.addEventListener("click" , ch1)
q_2.addEventListener("click" , ch1)
q_3.addEventListener("click" , ch1)
q_4.addEventListener("click" , ch1)
q_5.addEventListener("click" , ch1)
q_6.addEventListener("click" , ch1)
q_7.addEventListener("click" , ch1)
q_8.addEventListener("click" , ch1)
q_9.addEventListener("click" , ch1)
q_10.addEventListener("click" , ch1)
q_11.addEventListener("click" , ch1)
q_12.addEventListener("click" , ch1)
q_13.addEventListener("click" , ch1)
q_14.addEventListener("click" , ch1)
q_15.addEventListener("click" , ch1)
q_16.addEventListener("click" , ch1)



    function ch1(){
        script_0.style.display = q_0.checked ? "block" : "none"
        script_1.style.display = q_1.checked ? "block" : "none"
        script_2.style.display = q_2.checked ? "block" : "none"
        script_3.style.display = q_3.checked ? "block" : "none"
        script_4.style.display = q_4.checked ? "block" : "none"
        script_5.style.display = q_5.checked ? "block" : "none"
        script_6.style.display = q_6.checked ? "block" : "none"
        script_7.style.display = q_7.checked ? "block" : "none"
        script_8.style.display = q_8.checked ? "block" : "none"
        script_9.style.display = q_9.checked ? "block" : "none"
        script_10.style.display = q_10.checked ? "block" : "none"
        script_11.style.display = q_11.checked ? "block" : "none"
        script_12.style.display = q_12.checked ? "block" : "none"
        script_13.style.display = q_13.checked ? "block" : "none"
        script_14.style.display = q_14.checked ? "block" : "none"
        script_15.style.display = q_15.checked ? "block" : "none"
        script_16.style.display = q_16.checked ? "block" : "none"

    }
 


    function select() {
        var optionL = document.getElementById("optionL");
        var box1 = document.getElementById("box-1");
        var box2 = document.getElementById("box-2");
        var box3 = document.getElementById("box-3");
        var box4 = document.getElementById("box-4");
        if (optionL.value == 1) {
          box1.style.display = "block";
          box2.style.display = "none";
          box3.style.display = "none";
          box4.style.display = "none";


        } else if(optionL.value == 2) {
          box2.style.display = "block";
          box1.style.display = "none";
          box3.style.display = "none";
          box4.style.display = "none";

        
        }else if(optionL.value == 3) {
            box3.style.display = "block";
            box1.style.display = "none";
            box2.style.display = "none";
            box4.style.display = "none";

      }else if(optionL.value == 4) {
        box4.style.display = "block";
        box1.style.display = "none";
        box2.style.display = "none";
        box3.style.display = "none";
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

