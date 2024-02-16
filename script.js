function search() {
  let searchBar = document
    .querySelector(".search-input")
    .value.toUpperCase()
    .trim();
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

let productlist = document.querySelector(".product-list");

let pro = [
  {
    title: "Who can choose modify reason Operator Request?",
    answer: "• Agent",
  },
  {
    title:
      "Which of the below is responsible for assigning automatic LAN IP's to the private devices which are connected to the same CPE",
    answer: "• DHCP",
  },
  {
    title:
      "We will inform our customers about their Upload speed even if they did not ask for it:",
    answer: "• FALSE",
  },
  {
    title:
      "in Cpe configuration 'VDSL' Parameters XDSL Transfer Mode should be parameter XDSL Transfer Mode",
    answer: "• PTM",
  },
  {
    title: "CST can request to suspend his land line temporary",
    answer: "• True",
  },
  {
    title: "Land line delivery available for all Egypt",
    answer: "• False",
  },
  {
    title: "installation Visit Fees with VAT..?",
    answer: "• 85.5 LE",
  },
  {
    title: "We can make adjust status from which tool: ",
    answer: "• Matrix",
  },
  {
    title: "Any customer can call us only on 19777& 111 :",
    answer: "• FALSE",
  },
  {
    title: "Optimizing period for super up to 30 VDSL is : ",
    answer: "• 4 days",
  },
  {
    title: "In Case WO problem Automatic TT will be created...?",
    answer: "• True",
  },
  {
    title:
      "Which of the following responsible for remove welding from main wire ",
    answer: "• Rosetta",
  },
  {
    title:
      "In case we make any Request for CST on OSS and this massage appear (service number is migrated to BSS) that mean..",
    answer: "• CST migrated to BSS",
  },
  {
    title: "We can restart Port from which tool: ",
    answer: "• Matrix",
  },
  {
    title: "Super up to 30 Mb for package 140 GB price including VAT is: ",
    answer: "• 182.40",
  },
  {
    title:
      "if customer contracted speed is super 30 Mb and his operational speed is 40 Mb and he asks about his actual speed now, CCA will inform him : ",
    answer: "• 30 Mb",
  },
  {
    title:
      "if customer needs to change speed while installation period and call us, No need to make verification with him first: ",
    answer: "• FALSE",
  },
  {
    title: "In case of daley in activity WO Request CCA action will be...?",
    answer: "• created TT and inform CST SLA 1WD",
  },
  {
    title: "Waiting service is free with WE Ardy 20",
    answer: "• FALSE",
  },
  {
    title:
      "In CPE configuration , ADSL parameters should be VPI = 35 and VCI = 0 ?",
    answer: "• FALSE",
  },
  {
    title: "Recharge through Electronic machines is update within 48 H",
    answer: "• FALSE",
  },
  {
    title:
      "In CPE Configuration we must write username in capital letters such as (@TEDATA.NET.EG",
    answer: "• FALSE",
  },
  {
    title:
      "CCA Must make TT ...in case no technical data found on matrix tool after call back to CRM ",
    answer: "• create Matrix TT",
  },
  {
    title:
      "in instillation follow up cycle follow up team will follow with CST With...SLA, If cast has problem during instillation cycle from his side..",
    answer: "• 24 H",
  },
  {
    title: "Modify reason (Customer Request) will be done for free for..",
    answer: "• tow times",
  },
  {
    title: "check availability result must be ....To use it in new contracting",
    answer: "• Result Status : Valid | Availability Result : Available",
  },
  {
    title: "The Main wire come from the box to the CPE direct, this is a : ..",
    answer: "• Main Wire Connection",
  },
  {
    title:
      "DHCP is assigning automatic LAN IP's to the private devices but NAT is responsible for translating the private IP into Public IP: ",
    answer: "• True",
  },
  {
    title:
      "Service's Username + password Will be created in which activity ...?",
    answer: "• Network Activation",
  },
  {
    title:
      "We inform our customers by throttled speed even if he did not ask: ",
    answer: "• FALSE",
  },
  {
    title:
      "CCA Can Verify CST Data For any Verification Required from BSS only?",
    answer: "• True",
  },
  {
    title: "Check Free port means that...?",
    answer: "• No ports available on Matrix",
  },
  {
    title: "CST Can Change ....From My WE :",
    answer: "• Mobile Number & Mail",
  },
  {
    title:
      "in Case CST asked to subscribe on data & voice with us ,We Should not mark on Vouce&Data Flag in check availabilite request",
    answer: "• FALSE",
  },
  {
    title: "The Telephone cable ends with RJ :...",
    answer: "• 11",
  },
  {
    title: "To Review All created tickets CCA can choose...?",
    answer: "• Trouble Ticket",
  },
  {
    title:
      "CCA Can change package (order still not completed) From order still...?",
    answer:
      "• BSS-->sitemap-->integrated operations(New)-->order management-->order Query",
  },
  {
    title: "Which service customer can use static ip : ",
    answer: "• Option pack",
  },
  {
    title: "If Line has a problem Connection Cable CCA action will be...?",
    answer: "• inf cst شبكة ارضية - voice line not copper cannot connect data",
  },
  {
    title:
      "In case we make any modification on request, we must chose modify reason",
    answer: "• Customer Request",
  },
  {
    title:
      "Which of the below devices is responsible for assigning WAN IPs to CPEs : ",
    answer: "• BRAS",
  },
  {
    title:
      "Broad Hop is responsible for checking customer profile from our data base? ",
    answer: "• TRUE",
  },
  {
    title: "Device is using to split Data and Voice into 2 channels :",
    answer: "• Splitter",
  },
  {
    title:
      "Which of the below is the responsible for translating any domain name into IP and Vice Versa : ",
    answer: "• DNS",
  },
  {
    title: "The Ethernet cable ends with RJ :",
    answer: "• 45",
  },
  {
    title:
      "Which of the following makes it harder for hackers to breake the connection and steal the information   :",
    answer: "• HTTPS",
  },
  {
    title:
      "DHCP is assigning automatic LAN IP`s to the private devices but NAT is responsible for translating the Private IP into Public IP   :",
    answer: "• TRUE",
  },
  {
    title:
      "In Cpe configuration  “VDSL” Parameters XDSL Transfer Mode should be ",
    answer: "• PPPOE",
  },
  {
    title:
      "RADIUS is responsible to make sure that customer using his US & PW which are on our system & related to his line :  ",
    answer: "• TRUE",
  },
  {
    title: "We have two types of connections (Main wire and wall outlet) : ",
    answer: "• TRUE",
  },
  {
    title: "Survey SLA Is..",
    answer: "• 24H",
  },
  {
    title: "Requested data from customer for check availability ",
    answer: "• Full name, mobile, full address , ID number",
  },
  {
    title:
      "Case CCA found Automatic TT(Automatic TT FV>>Customer Subscription>>OSS TDM Registration)CCA Action will be..",
    answer:
      "• inform customer that someone will communicate with him within SLA 24 hours and in case of delay will renew SLA",
  },
  {
    title: "in check availability request ,, CCA can make Request by ",
    answer: "• National ID",
  },
  {
    title: "WE Ardy 25 Quarter price including fees is ",
    answer: "• 85.50 LE",
  },
  {
    title:
      "CCA must choose one of those choices when he make check availability request  ",
    answer: "• FTTH Compound  OthersMSAN FTTH Exchange",
  },
  {
    title:
      "cst want to renew his package ( WE Ardy 40 Quarter ) ,, CCA will inform him to pay ……. LE at least ",
    answer: "• 139",
  },
  {
    title: "Modify reason ( Customer Request ) will be done for free for.. ",
    answer: "• two times",
  },
  {
    title: "MSAN installation cycle SLA within 48 H",
    answer: "• True",
  },
  {
    title:
      "we can follow up on check availability request result through BSS from…",
    answer: "• Sitmap >> integrated  operations >> search availability PSTN",
  },
  {
    title: "we can move land line to another government",
    answer: "• True",
  },
  {
    title: "temporary suspension service Fees without VAT",
    answer: "• 20 LE",
  },
  {
    title:
      "Before renewal date there is SMS sending to CST to remind him to pay his bill ",
    answer: "• True",
  },
  {
    title: "CST can request to suspend his land line temporary",
    answer: "• True",
  },
  {
    title: "CST can change his line category Through 111",
    answer: "• False",
  },
  {
    title: "calling WE Mobil and Local calls are active without CST Request ",
    answer: "• True",
  },
  {
    title: "Recharge through Electronic machines is update within 48 H",
    answer: "• False",
  },
  {
    title:
      "CST can request to make his land line reciving only and do not pay his subscribtion fees",
    answer: "• False",
  },
  {
    title: "CST Can request change offering through 111",
    answer: "• True",
  },
  {
    title: "SLA for new Account is : ",
    answer: "• 48 WH",
  },
  {
    title: "Which Tool we Can Know any another( Q ) Working Hours :  ",
    answer: "• IVR",
  },
  {
    title: "Our customers can not submit any tkt from WE APP: ",
    answer: "• FALSE",
  },
  {
    title: "We can check customer if Blocked or not from which tool :  ",
    answer: "• Matrix",
  },
  {
    title:
      "One invoice postpaid corporate Customer want to make early renewal CCA action will be …? ",
    answer: "• Inform CST that he can't make early renewal + Create SR",
  },
  {
    title: "We can determined port configured speed from which tool : ",
    answer: "• Matrix",
  },
  {
    title: "New subscription can apply through :",
    answer: "• Branch only",
  },
  {
    title: "All Branches have same Working Hours and Days off  :",
    answer: "• FALSE",
  },
  {
    title: "Some Of Corporate Individual Postpaid Customers bill cycle on….? ",
    answer: "• Day 22 from each month",
  },
  {
    title: "Which service customer can use static IP : ",
    answer: "• Option  Pack",
  },
  {
    title: "Line Problem SLA Is …. ?",
    answer: "• 15 WD",
  },
  {
    title:
      "CST call from same landline number and ask for early renewal CCA will ask CST about … To Verification ? ",
    answer: "• No Need Any Verification Rules",
  },
  {
    title: "In Case Of Delay In Port Splitting Activity CCA Action Will Be…?",
    answer: "• Create TT And Inform CST SLA 48 WH",
  },
  {
    title: "To Review All created tickets CCA can choose …?",
    answer: "• Trouble Ticket",
  },
  {
    title: "TE Problem No Technical Data means …? ",
    answer: "• No technical Data for Line In TE",
  },
  {
    title: "Any SR will be Inquiry/offers except complain SR?",
    answer: "• TRUE",
  },
  {
    title:
      "CCA Must Make TT ….. In Case No Technical Data Found On Matrix Tool After Call Back To CRM ?",
    answer: "• Create Matrix TT",
  },
  {
    title:
      "In Case WO Request and there is problem happened sub activity will be….?",
    answer: "• WO Problem",
  },
  {
    title: "Check Free Port SLA …?",
    answer: "• No Estimated Time",
  },
  {
    title:
      "Any TT Must be Problem / Non-Om Problem when CCA choose from Additional Information ?",
    answer: "• FALSE",
  },
  {
    title:
      "CST has noise problem and has physical instability issue CCA will handle …?",
    answer: "• Physical instability",
  },
  {
    title: "Voice Down TT SLA is…?",
    answer: "• 1 Day",
  },
  {
    title:
      "CCA found that CST's landline number has work order رفع نهائي متأخرات أقساط  In Customer Profile Tool ..... CCA action will be…?",
    answer:
      "• Inform CST to pay all due installments and make new contract on landline",
  },
  {
    title:
      "Customer not migrated to BSS has problem that  voice is not working or out of service after pay bill after cut off and informed that issue started before cutoff date , CCA Right Action :",
    answer: "• Phone set available step",
  },
  {
    title:
      "CST Follow voice down ticket after 25 hour from escalating it and ticket still on IU CCA action will be …? ",
    answer:
      "• Inform CST Passed SLA + Create IR +create SR ​​FBB Tech Problem---​Voice Down​---Follow Up after SLA ",
  },
  {
    title:
      "in voice verification .. After calling CST's on landline number CCA found Record Massage ' الرقم مرفوع مؤقت من الخدمة' CCA action will be…?",
    answer: "• Consider Voice Down + Create TT ",
  },
  {
    title: "Voice Cases override any physical case …. ?",
    answer: "• TRUE",
  },
  {
    title: "Voice overlapping can happened between …. ?",
    answer: "• 2 numbers in the same exchange",
  },
  {
    title:
      "For CST Not Migrated To Bss :  has problem in Call waiting service CCA action will be ..?",
    answer: "• Transfer CST to fixed line VDN",
  },
  {
    title: "CCA must check voice verification before escalating ….. ?  ",
    answer: "• All physical cases except Need Optimization",
  },
  {
    title:
      "If CST has Ticket data down with update (Re-splitted done )  and Cst  connected his CPE From Main Wire Then ,,, CCA Will Inform cst Next Step :",
    answer: "• Check availability to test by another CPE ",
  },
  {
    title: "Escalation Data Down to IU SLA will be:",
    answer: "• 1 day",
  },
  {
    title:
      "In Case T.S Data Down Case and Cst has ( MSAN Type: Yes ) you will measure distance with: ",
    answer: "• 10 meters",
  },
  {
    title:
      "While T.S Data Down Case With Cst Adsl Led is Stable and line Become Up , CCA Action .... ",
    answer: "• Follow Instability troubleshoot",
  },
  {
    title:
      "If CST has Power Failure which of the following you will do with CST: ",
    answer: "• Check with another CPE with it's original adaptert",
  },
  {
    title: "The time that IU ends work per day is:",
    answer: "• 8:00 PM",
  },
  {
    title: "SLA for pending fixing TE will be: ",
    answer: "• 3 days",
  },
  {
    title: "Performing SELT test will inform us with: ",
    answer:
      "• Distance between exchange or cabin and CPE if line Cable disconnect from cpe",
  },
  {
    title:
      "Cst Calling Us And Informed (ADSL Led Is Down )While  has 3 logs in NST at 7:00 AM ,7:15 AM and 7:30 AM and called us at 1:00 PM at the same day  and informed that he has a problem in his service case will be :",
    answer: "• Down Cases",
  },
  {
    title:
      "If Data Down Case solved  after Cst Connect From Main Wall outlet and you will create TT to Pilot Follow Up Team , way of communication will be:",
    answer: "• Call only",
  },
  {
    title: "Power led not existed",
    answer: "• power led not working or working with red color",
  },
  {
    title:
      "In Case CCA will Re-escalate WCAP to IU as a second escalation , So the right SLA is :",
    answer: "• 1 Day",
  },
  {
    title:
      "In case CCA follow WCAP case and Cst Line Status from main : Down and Matrix : UP, No have Logs , So CCA right action :",
    answer: "• Escalate to IU",
  },
  {
    title:
      "If the Customer number belongs to Hayah Karima project and cst has Major Fault with no estimated time , SLA will be :",
    answer: "• 5 Days",
  },
  {
    title:
      "customer which has Major Fault update with no estimated time should follow on his case with us : ",
    answer: "• TRUE",
  },
  {
    title:
      "In case WCAP CST disconnect phone cable from CPE and ADSL still UP , It is CPE Problem : ",
    answer: "• TRUE",
  },
  {
    title:
      "In case the ticket returned with updated CPE problem close code 74  , Cst from Cairo and insist to check with another available CPE , CCA right action is :",
    answer:
      "• will inform the customer that he should check the CPE on CSO 'Mandatory'",
  },
  {
    title:
      "In case ticket returned with update ( Outside TEData ) , CCA right action according to the customer's case : ",
    answer:
      "• will create the below SR ( Broadband>Technical>ADSL/VDSL>CC service Activation>CPE Configuration )هنعمل ال SR دى ( Broadband>Technical>ADSL/VDSL>CC service Activation>CPE Configuration )",
  },
  {
    title:
      "Cst has Ticket Data Down with Update ( Close Code (82): External problem- cable maintenance needed ) , So CCA will Inform cst  SLA : ",
    answer:
      "• Case escalated to the responsible team and we are waiting for their update with 3 days SLA",
  },
  {
    title:
      "While follow with cst WACP Case and Cst Line Status is Down and Matrix Status is also Down so the next step is : ",
    answer: "• Troubleshoot as Data Down",
  },
  {
    title:
      "In wrong card and port or disable lines, CCA shouldn't search on Matrix using ADSL & customer account no. to avoid any indeterminate for duplicated matrix : ",
    answer: "• FALSE",
  },
  {
    title: "dd  ",
    answer: "• FALSE",
  },
];

function drowItem() {
  let y = pro.map((item) => {
    return `
        <div class="product">
          <div class="product-deatils">
          <h4>${item.title}</h4>
            <p><mark>${item.answer}</mark></p>
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
