

function search() {
  let searchBar = document.querySelector(".search-input").value.toUpperCase().trim();
  let productlist = document.querySelector(".product-list");
  let product = document.querySelectorAll(".product");
  let productName = document.getElementsByTagName("h4");
  for (let i = 0; i < productName.length; i++) {
    if (productName[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0) {
      product[i].style.display = "";
    } else {
      product[i].style.display = "none";
    }
    
  }


}


function select() {
  var optionL = document.getElementById("optionL");
  var box1 = document.getElementById("box1");
  var box2 = document.getElementById("box2");
  if (optionL.value == 2) {
    box1.style.display = "none";
    box2.style.display = "flex";
    box1.style.borderColor = "none";
  } else {
    box1.style.display = "flex";
    box1.style.borderColor = "red";
    box2.style.display = "none";
  }
}
function answer() {
  let searchAnswer = document.querySelector(".input-answer").value.toUpperCase().trim();
  let productlist = document.querySelector(".product-list");
  let product = document.querySelectorAll(".product");
  let productName = document.getElementsByTagName("p");
  for (let i = 0; i < productName.length; i++) {
    if (productName[i].innerHTML.toUpperCase().indexOf(searchAnswer) >= 0) {
      product[i].style.display = "";
    } else {
      product[i].style.display = "none";
    }
  }
}

//--------------------------------

//------------------------

let productlist = document.querySelector(".product-list");

let pro = [
  {
    title: "Fixed Voice SR Problem>Voice Down>Follow Up After SLA",
    answer: "في حاله العميل بيتابع علي شكوي حراره والعميل مشترك معانا ارضي فقط وعدي ال 24 ساعه والعميل مايجريتد",
  },
  {
    title: "Fixed Voice SR Problem>Voice Down>Follow Up Within SLA",
    answer: "في حاله ان العميل بيتابع على شكوى حرارة والعميل مشترك معانا ارضى  فقط  وكان في خلال ال 24 ساعه  والعميل ميجريتيد",
  },
  {
    title: "Fixed Voice SR Problem>Voice Overlapping>Follow Up After SLA",
    answer: "في حاله ان العميل بيتابع على شكوى تعاكس إشارة والعميل مشترك معانا ارضى  فقط وكان عدى ال 24 ساعه  والعميل ميجريتيد",
  },
  {
    title: "Fixed Voice SR Problem>Voice Overlapping>Follow Up Within SLA",
    answer: "في حاله ان العميل بيتابع على شكوى تعاكس إشارة والعميل مشترك معانا ارضى  فقط وكان في خلال ال 24 ساعه  والعميل ميجريتيد",
  },
  {
    title: "Fixed Voice SR Problem>Weird Voice>Follow Up After SLA",
    answer: "في حاله ان العميل بيتابع على شكوى أصوات غريبه والعميل مشترك معانا ارضى  فقط وكان في خلال ال 24 ساعه  والعميل ميجريتيد",
  },
  
  {
    title: "Fixed Voice SR Problem>Weird Voice>Follow Up Within SLA",
    answer: "في حاله ان العميل بيتابع على شكوى شكوى أصوات والعميل مشترك معانا ارضى  فقط وكان في خلال ال 24 ساعه  والعميل ميجريتيد"
  },
  {
    title: "Fixed Voice SR Inquiry>Payment & Recharge>Renewal Date",
    answer: "لو العميل بيسأل على ميعاد تجديد باقه الارضى والعميل ميجريتيد"
  },
  {
    title: "Fixed Voice SR Inquiry>General Information>Unpaid TE Bill",
    answer: "لو العميل بوست بايد ومش مسدد الفاتورة"
  },
  {
    title: "Fixed Voice SR Inquiry>General Information>Balance",
    answer: "في حاله ان العميل بيسأل عن رصيدة"
  },
  {
    title: "Fixed Voice SR Inquiry>General Information>Bill Cycle",
    answer: "في حاله سؤال العميل عن مواعيد سداد الفاتورة بوست بايد"
  },
  {
    title: "Fixed Voice SR Inquiry>General Information>Billing Inquiry",
    answer: "في حاله سؤال العميل عن الفواتير الارضى"
  },
  {
    title: "Fixed Voice SR Inquiry>Payment & Recharge>Early Renewal Done",
    answer: "في حاله سؤال العميل عن التجديد المبكر سواء اتعمل او لا & او تم التجديد اوتوماتيك"
  },
  {
    title: "Fixed Voice SR Request>Payment & Recharge>Early Renewal Done",
    answer: "في حاله طلب العميل اننا نعمله تجديد مبكر لباقه الارضى"
  },
  {
    title: "Fixed Voice SR Inquiry>Services>Resume 24",
    answer: "في حاله استفسار العميل عن تفعيل خدمه ال24  ساعه"
  },
  {
    title: "Fixed Voice SR Request>Services>Resume 24",
    answer: "في حاله طلب تفعيل خدمه ال 24 ساعه"
  },
  {
    title: "Fixed Voice Complaint>Payment and Recharge>Aggregators Payment Not Clear",
    answer: "في حاله ان العميل دفع عن طريق اى ماكينه دفع والدفع مظهرش"
  },
  {
    title: "Fixed Voice Request>Online Payment>Refund the amount to the card",
    answer: "في حاله ان العميل شحن عن طريق الفيزا من تطبيق ماى وى وحب بيسترد الفلوس"
  },
  {
    title: "Fixed Voice SR Inquiry>Migration>Transfer from Post to Pre",
    answer: "في حاله سؤال العميل عن التحويل من بوست بايد ل بريبايد"
  },
  {
    title: "Fixed Voice Complaint>Policy and Procedures>Migration from Post To Pre",
    answer: "في حالة هنقدم للعميل طلب التحويل من بوست بايد ل بريبايد"
  },
  // Non Tech & Tech ////////////////////
  {
    title: "Done With No Concerns",
    answer: "تجديد مبكر من عندنا"
  },
  {
    title: "done from customer side",
    answer: "لو العميل عمل تجديد مبكر من عنده واتصل بينا يتأكد"
  },
  {
    title: "Early renewal done after restart port",
    answer: "لو العميل عمل تجديد مبكر من عندنا او من عنده والسرعه فضلت 256 مرفعتش معاه ف علمنا ريستارت بورت واشتلغت بعدها"
  },
  {
    title: "Early Renewal Follow Up",
    answer: "لو حد من زمايلنا عمل تجديد مبكر للعميل والعميل اتصل بينا يتأكد الباقه اتجددت ولالا ( بتتعمل مانوال )"
  },
  {
    title: "Early renewal Follow Up",
    answer: "لو العميل بيستفسر عن التجديد المبكر بس"
  },
  {
    title: "FBB Non-Tech Inquiry>Billing>Balance",
    answer: "لو العميل بيستفسر عن رصيده"
  },
  {
    title: "FBB Non-Tech Inquiry>Billing>Balance Transfer",
    answer: "لو العميل بيستفسر عن امكانيه تحويل الرصيد من خطه ل خط تانى"
  },
  {
    title: "FBB Non-Tech Inquiry>Service>Salfny",
    answer: "او العميل بيستفسر عن خدمه سلفنى"
  },
  {
    title: "FBB Non-Tech Inquiry>Service>Salfny added",
    answer: "لو ضفنا خدمه سلفنى للعميل"
  },
  {
    title: "FBB Non-Tech Request>Services>salfny already added before",
    answer: "لو العميل ضاف خدمه سلفنى واتصل بينا يتأكد اتضافت ولالا"
  },
  {
    title: "FBB Tech Inquiry>IVR-Tree>Salfny",
    answer: "لو العميل اتصل سأل ازاى يضيف سلفنى من القايمه الصوتيه"
  },
  {
    title: "FBB Non Tech Inquiry>Harassment>Harassment Calls",
    answer: "لو جالنا عميل شتم بأى الفاظ واضطرينا ننهى المكالمه بعد ما حذرناه مرتين"
  },
  {
    title: "FBB Non-Tech Inquiry>Internet Service>Ask for Suspension",
    answer: "لو عميل بيسأل عن الايقاف المؤقت"
  },
  {
    title: "FBB Non Tech Inquiry>Billing>Suspension Non payment",
    answer: "لو باقه العميل ساسبند واتصل بيسأل الخدمه واقفه ليه ولقناها واقفه بسبب فاتوره النت"
  },
  {
    title: "FBB Non-Tech Inquiry>Billing>Land line Bills",
    answer: "لو العميل بيسأل عن فاتوره الارضى والعميل مش ميجريتد"
  },
  {
    title: "Fixed Voice SR Inquiry>Line status>Suspended Due to landline bill",
    answer: "لو خط العميل ميجريتد ولقيناه ساسبند بسبب فاتوره الارضى"
  },
  {
    title: "Fixed Voice SR Inquiry>Internet Service>Disabled due to landline bills",
    answer: "لو خط العميل ميجريتد ولقيناه ديسابلد بسبب فاتوره الخط الارضى ( في حاله ان العميل مشترك معانا في الانترنت )"
  },
  {
    title: "FBB Non-Tech Inquiry>Branches>Working hours and Address",
    answer: "لو عميل دخل يسأل عن مواعيد وعناوين الفروع"
  },
  {
    title: "FBB Non Tech Inquiry>Products info>WE space annual packages",
    answer: "لو عميل سأل عن اسعار الباقات السنويه"
  },
  {
    title: "FBB Non-Tech Inquiry>Products info>WE space prices and quota",
    answer: "لو عميل سأل عن اسعار الباقات الشهريه عادى"
  },
  {
    title: "Technical Complaint>ADSL/VDSL>Escalation Call Back",
    answer: "لو مشكلته تكنكال وعايز يكلم مدير والطلب ده بيكون ف خلال ساعه"
  },
  {
    title: "Technical Complaint>ADSL/VDSL>Escalation On Time",
    answer: "لو مشكلته تكنكال وعايز يكلم مدير والطلب ده بيكون ف خلال 10 دقايق"
  },
  {
    title: "Broadband>Call Center>Complaint Non technical>Escalation>Asked to call manager",
    answer: "لو مشكلته نن تك وعايز يكلم مدير وده بيكون ف خلال ساعه"
  },
  {
    title: "Broadband>Complaint Non technical>Escalation On Time",
    answer: "لو مشكلته نن تك وعايز يكلم المدير وده بيكون ف خلال 10 دقايق"
  },
  {
    title: "FBB Non-Tech Inquiry>Usage>Basic Quota",
    answer: "لو العميل عايز يعرف باقته الاساسيه خلصت ولالا او فاضل كام جيجا ف الباقه الاساسيه"
  },
  {
    title: "FBB Non-Tech Inquiry>Usage>Extra Quota",
    answer: "لو العميل عايز يعرف باقته الاضافيه خلصت ولالا او فاضل كام جيجا ف الباقه الاضاقيه"
  },
  {
    title: "FBB Non Technical Complaint>Consumption>Main package",
    answer: "لو العميل بيشتكى من استهلاك باقته الاساسيه"
  },
  {
    title: "FBB Non Technical Complaint>Consumption>Extra Quota",
    answer: "لو العميل بيشتكى من استهلاك باقته الاضافيه"
  },
  {
    title: "FBB Non-Tech Inquiry>Products info>Level Up",
    answer: "لو العميل بيسأل عن باقات لفل اب"
  },
  {
    title: "FBB Non-Tech Inquiry>Products info>Level Up Subscription",
    answer: "لو العميل عايز يشترك ف باقات لفل اب"
  },
  {
    title: "FBB Non-Tech Inquiry>Products info>Level Up Cancellation",
    answer: "لو العميل مشترك ف باقه لفل اب وعايز يلغيها"
  },
  {
    title: "FBB Non-Tech Inquiry>Quota>Extra Quota One time",
    answer: "لو ضيفنا للعميل باقه اضافيه"
  },
  {
    title: "",
    answer: ""
  },
  {
    title: "",
    answer: ""
  },
  {
    title: "",
    answer: ""
  },
  {
    title: "",
    answer: ""
  },
  {
    title: "",
    answer: ""
  },
  {
    title: "",
    answer: ""
  },
  {
    title: "",
    answer: ""
  },
  {
    title: "",
    answer: ""
  },
  {
    title: "",
    answer: ""
  },
  {
    title: "",
    answer: ""
  },
  {
    title: "",
    answer: ""
  },
  {
    title: "",
    answer: ""
  },
  {
    title: "",
    answer: ""
  },
  {
    title: "",
    answer: ""
  },
  {
    title: "",
    answer: ""
  },
  {
    title: "",
    answer: ""
  },
  {
    title: "",
    answer: ""
  },
  {
    title: "",
    answer: ""
  },
  {
    title: "",
    answer: ""
  },
  {
    title: "",
    answer: ""
  },
  {
    title: "",
    answer: ""
  },
  {
    title: "",
    answer: ""
  },


];
lastUp= document.querySelector(".LastUp span")
  lastUp.innerHTML = " (5:10Am) 2024/3/20"


function drowItem() {
  let y = pro.map((item) => {
    return `
        <div class="product">
          <div class="product-deatils">
          <h4><i class="fa-solid fa-earth-americas"></i> ${item.title}</h4>
            <p><i class="fa-solid fa-language fa-fade"></i> <mark>${item.answer}</mark></p>
            <hr>
          </div>
        </div>
        `;
  });

  productlist.innerHTML = y.join("");
}
let n = document.getElementById("n");
for (var num in pro) {
  n.innerHTML = num;
  n.style.color = "red";
  n.style.fontWeight = "bold";
}
drowItem();
let show = document.getElementById("show");
let bd = document.getElementById("bd");

show.onchange = function () {
  home.style.backgroundColor = show.checked ? "black" : "#fff";
  home.style.color = show.checked ? "#fff" : "black";

  bd.style.backgroundColor = show.checked ? "black" : "#fff";
  home.style.borderColor = show.checked ? "#fff" : "black";
  home.style.borderWidth = show.checked ? "10px" : "0";
  home.style.border = show.checked ? "solid" : "0";
};

let userName = document.querySelector('#userName')
let password = document.querySelector('#password')

let getUsername = localStorage.getItem("userName")
let getPassword = localStorage.getItem("password")

let parent = document.querySelector(".parent")
let form = document.querySelector(".section-form")
let addItem = localStorage.getItem("username")? localStorage.getItem("username") : "";


// window.onload = function run(){
//   window.alert("تم تسجيل خروجك")
//   if(alert = true){
//     localStorage.clear()
//   }
  
//   if(localStorage.getItem("username")){

//   }else{
//     window.location = "index.html"
//   }
// }
// run()

/////////////////////////////////






