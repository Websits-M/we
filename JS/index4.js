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
  let check5 = document.querySelector("#check5");
  let check6 = document.querySelector("#check6");
  let hid2 = document.querySelector("#hid2");
  let hid3 = document.querySelector("#hid3");
  let hid4 = document.querySelector("#hid4");
  let hid5 = document.querySelector("#hid5");
  let hid6 = document.querySelector("#hid6");
function showandhid(){
    hide.style.display = check.checked ? "block" : "none"
    hid2.style.display = check2.checked ? "block" : "none"
    hid3.style.display = check3.checked ? "block" : "none"
    hid4.style.display = check4.checked ? "block" : "none"
    hid5.style.display = check5.checked ? "block" : "none"
    hid6.style.display = check6.checked ? "block" : "none"
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
let q_17 = document.getElementById('q-17')
let script_17 = document.getElementById('script-17')
let q_18 = document.getElementById('q-18')
let script_18 = document.getElementById('script-18')
let q_19 = document.getElementById('q-19')
let script_19 = document.getElementById('script-19')
let q_20 = document.getElementById('q-20')
let script_20 = document.getElementById('script-20')
let q_21 = document.getElementById('q-21')
let script_21 = document.getElementById('script-21')
let q_22 = document.getElementById('q-22')
let script_22 = document.getElementById('script-22')

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
q_17.addEventListener("click" , ch1)
q_18.addEventListener("click" , ch1)
q_19.addEventListener("click" , ch1)
q_20.addEventListener("click" , ch1)
q_21.addEventListener("click" , ch1)
q_22.addEventListener("click" , ch1)



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
        script_17.style.display = q_17.checked ? "block" : "none"
        script_18.style.display = q_18.checked ? "block" : "none"
        script_19.style.display = q_19.checked ? "block" : "none"
        script_20.style.display = q_20.checked ? "block" : "none"
        script_21.style.display = q_21.checked ? "block" : "none"
        script_22.style.display = q_22.checked ? "block" : "none"

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
 function reset(){
    var optionL = document.getElementById("optionL");

    let box_select = document.querySelector("#box-1")
    let box_select2 = document.querySelector("#box-2")
    let box_select3 = document.querySelector("#box-3")
    let box_select4 = document.querySelector("#box-4")
    let box_select5 = document.querySelector("#box-5")
    
        box_select.style.display = "none"
        box_select2.style.display = "none"
        box_select3.style.display = "none"
        box_select4.style.display = "none"
        box_select5.style.display = "none"
      
       

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

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  
  let box_select = document.querySelectorAll(".op")
//   let box_select = document.getElementById("vv")
  let btn_x = document.getElementById('btn-cx')
  function xc(){

        box_select.style.display = "none"

    

  }
  
  let we_mobile = document.getElementById('we-mobile')
  function hideUnhide(id){
    const p1 = document.getElementById(id);
    if(p1.style.display == "none"){
        p1.style.display = "block";
        // we_mobile.style.backgroundColor = "#8a2be2" ;
    }else{
        p1.style.display = "none"
        // we_mobile.style.backgroundColor = "#ddd" ;

    }
  }

  let checkgreen =document.getElementById("checkgreen")
  let green = document.getElementById("green")
  let checkgreen2 =document.getElementById("checkgreen2")
  let green2 = document.getElementById("green2")
  let checkgreen3 =document.getElementById("checkgreen3")
  let green3 = document.getElementById("green3")
  let checkgreen4 =document.getElementById("checkgreen4")
  let green4 = document.getElementById("green4")
  let checkgreen5 =document.getElementById("checkgreen5")
  let green5 = document.getElementById("green5")
  let checkgreen6 =document.getElementById("checkgreen6")
  let green6 = document.getElementById("green6")
  let checkgreen7 =document.getElementById("checkgreen7")
  let green7 = document.getElementById("green7")
  let checkgreen8 =document.getElementById("checkgreen8")
  let green8 = document.getElementById("green8")
  let checkgreen9 =document.getElementById("checkgreen9")
  let green9 = document.getElementById("green9")
  let checkgreen10 =document.getElementById("checkgreen10")
  let green10 = document.getElementById("green10")
  let checkgreen11 =document.getElementById("checkgreen11")
  let green11 = document.getElementById("green11")
  let checkgreen12 =document.getElementById("checkgreen12")
  let green12 = document.getElementById("green12")
  let checkgreen13 =document.getElementById("checkgreen13")
  let green13 = document.getElementById("green13")
  let checkgreen14 =document.getElementById("checkgreen14")
  let green14 = document.getElementById("green14")
  let checkgreen15 =document.getElementById("checkgreen15")
  let green15 = document.getElementById("green15")
  let checkgreen16 =document.getElementById("checkgreen16")
  let green16 = document.getElementById("green16")
  let checkgreen17 =document.getElementById("checkgreen17")
  let green17 = document.getElementById("green17")

  let showStep = document.getElementById("showStep")

  function action1(){
   
        green.style.backgroundColor = checkgreen.checked ? "#0bcf5d" : "#f87676"
        green2.style.backgroundColor = checkgreen2.checked ? "#0bcf5d" : "#f87676"
        green3.style.backgroundColor = checkgreen3.checked ? "#0bcf5d" : "#f87676"
        green4.style.backgroundColor = checkgreen4.checked ? "#0bcf5d" : "#f87676"
        green5.style.backgroundColor = checkgreen5.checked ? "#0bcf5d" : "#f87676"
        green6.style.backgroundColor = checkgreen6.checked ? "#0bcf5d" : "#f87676"
        green7.style.backgroundColor = checkgreen7.checked ? "#0bcf5d" : "#f87676"
        green8.style.backgroundColor = checkgreen8.checked ? "#0bcf5d" : "#f87676"
        green9.style.backgroundColor = checkgreen9.checked ? "#0bcf5d" : "#f87676"
        green10.style.backgroundColor = checkgreen10.checked ? "#0bcf5d" : "#f87676"
        green11.style.backgroundColor = checkgreen11.checked ? "#0bcf5d" : "#f87676"
        green12.style.backgroundColor = checkgreen12.checked ? "#0bcf5d" : "#f87676"
        green13.style.backgroundColor = checkgreen13.checked ? "#0bcf5d" : "#f87676"
        green14.style.backgroundColor = checkgreen14.checked ? "#0bcf5d" : "#f87676"
        green15.style.backgroundColor = checkgreen15.checked ? "#0bcf5d" : "#f87676"
        green16.style.backgroundColor = checkgreen16.checked ? "#0bcf5d" : "#f87676"
        green17.style.backgroundColor = checkgreen17.checked ? "#0bcf5d" : "#f87676"
        if(checkgreen.checked && checkgreen2.checked && checkgreen3.checked && checkgreen4.checked && checkgreen5.checked && checkgreen6.checked ){
            showStep.style.display = "block"
        }else{
            showStep.style.display = "none"

        }

  }
//   function resultCheeck(){
//     // green.style.backgroundColor = checkgreen.checked ? "#0bcf5d" : "#f87676"

//         showStep.style.display = checkgreen.checked ? "block" : "none"

//   }
