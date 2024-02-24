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
  let searchAnswer = document
    .querySelector(".input-answer")
    .value.toUpperCase()
    .trim();
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
    title: "Who can choose modify reason (Operator Request)?",
    answer: "• Supervisor",
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
    answer: "• create TT and inform CST SLA 1WD",
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
    title:
      " while troubleshooting physical instability , Clear View Result After Search 'No DSL Physical Layer is detected ' ,next action is :",
    answer:
      "• Check last fix date according to TTS and customer input at same time",
  },
  {
    title:
      "CST has Physical Instability ticket in your pool , and problem still the same , after troubleshooting , CCA will ​​Re Escalate ticket again to IU ,, right SR is :",
    answer: "• FBB Tech Problem > ​​Physical Instability > ​​Re Escalation",
  },
  {
    title:
      "while troubleshooting physical instability ,CCA found Landline bills is 80 LE and passed the grace period , CCA stop troubleshooting and inform CST that he has to pay his bills first, right SR is :",
    answer: "• FBB Tech Problem > ​​Physical Instability >TE-Billing",
  },
  {
    title:
      "Before escalating Physical Instability Case , should be check Voice Verification  ?",
    answer: "• TRUE",
  },
  {
    title: "SLA for Physical Instability Contradiction Case  ?",
    answer: "• 2 H",
  },
  {
    title:
      "While troubleshooting physical instability, After run clear view result is : Run Real Time Profile Optimization, right action is :",
    answer: "• Check Voice Verification then Escalate to IU",
  },
  {
    title:
      "If there 5 logs exist during last 12 hours with 1 log during last 3 hours  . Handle as ?",
    answer: "• physical instability",
  },
  {
    title:
      "while troubleshooting Physical Instability, CCA found voice is down ,  ticket will escalated as :",
    answer: "• Voice Down",
  },
  {
    title: "Physical Instability will be escalated to :",
    answer: "• IU",
  },
  {
    title:
      "Time Frame For Visit Performed Cases in Physical Instability  Case :",
    answer: "• 5 days",
  },
  {
    title: "Power led not existed",
    answer: "• Power led not working or working with red color",
  },
  {
    title:
      "If CST called us and informed that he has cut cable you will follow normal troubleshoot in ticket maker:",
    answer: "• FALSE",
  },
  {
    title:
      "If CST has Data and Voice Down case after connect from main wall outlet problem solved you will:",
    answer: "• Create TT for internal wiring",
  },
  {
    title: "If CST with another CPE and not necessary it's original adapter",
    answer: "• Check with another CPE with it's original adapter",
  },
  {
    title:
      "If we run SELT and customer's line connected with exchange you will measure distance with:",
    answer: "• 150 meters",
  },
  {
    title:
      "If CST has Data Down case and when you checked SELT you found that CST is not supported by ASSIA you will:",
    answer: "• Check connection type",
  },
  {
    title:
      "If CPE restarted automatically and power LED turned off while CPE restarted you will consider it as:",
    answer: "• Power Failure",
  },
  {
    title: "If customer's line in ASSIA no provisioned that means",
    answer: "• CST is not supported by ASSIA",
  },
  {
    title:
      "If powe led is down and CST uses original adapter next step will be:",
    answer: "• Try in another wall-plug",
  },
  {
    title: "SLA for internal wiring TT:",
    answer: "• 2 hours",
  },
  {
    title: "While Escalating Physical instabillity Case to IU , SLA will be :",
    answer: "• 1 Day",
  },
  {
    title:
      "Customer has ticket Physical instability in IU , CAA informed him that he within SLA , Right SR is :",
    answer: "• FBB Tech problem > physical instability > Follow Up",
  },
  {
    title:
      "While escalating physical instobility CCA Must inform customer to keep his CPE turned on :",
    answer: "• FALSE",
  },
  {
    title:
      "CCA must Ask customer for 2 mobiles numbers while escalating Physical instability case :",
    answer: "• TRUE",
  },
  {
    title:
      "In physical instability case we will escalate the ticket to ( Pilpt-Follow Up ) when problem solved after CST connected from main wall outlet :",
    answer: "• TRUE",
  },
  {
    title:
      "while troubleshooting physical instability , clear view result after search Technical dispatch is recommended , nex action is :",
    answer: "• Check connection type",
  },
  {
    title:
      "While Escalating Physical instability Case to IU for third time , SLA will be :",
    answer: "• 1 Day",
  },
  {
    title:
      "While troubleshooting physical instability, connection type : wall outlet , the next step is :",
    answer: "• Check if connection right or wrong",
  },
  {
    title:
      "while troubleshooting physical instability , connection is right the next step is :",
    answer: "• Check splitter existence before cpe",
  },
  {
    title:
      "CST has BLQ Case, Customer operational speed is 12 Mb after make selt result was 800 M so you will :",
    answer: "• Follow voice verification then escalate BLQ",
  },
  {
    title:
      "CST has ASSIA output: Line is out of sync, CCA action as first step:",
    answer: "• Ensure that the CPE is on",
  },
  {
    title:
      "CST has BLQ ,line supported by ASSIA clear view after search Technician Dispatch is recommended the next step will :",
    answer: "• Check connection type",
  },
  {
    title:
      "In Case Ticket BLQ have Update ( Main wire changed ) and Cst still have the same problem, noting that line Supported by ASSIA and no change in the connection setup after our technician visit’s, so the right action is :",
    answer: "• Re-Run the appropriate mode of Clear View",
  },
  {
    title: "Need Optimization case will Escalate to :",
    answer: "• Pilot-SLS",
  },
  {
    title:
      "If Customer complaint within TS BLQ case from Bad Box issue , the right SR is :",
    answer: "• Fbb Tech Problem>BLQ>Bad Box",
  },
  {
    title:
      "it's not mandatory to take screenshots from selected Clear View mode and its result ",
    answer: "• TRUE",
  },
  {
    title:
      "In case escalation of Need Optimization case ask customer to leave the CPE power turned on",
    answer: "• TRUE",
  },
  {
    title:
      "While TS BLQ case and CCA Check Line stability from line details from Assia and found that customer's line is Unstable so the next step is :",
    answer: "• Inform Customer to wait 3 days until tests done on the line",
  },
  {
    title:
      "CCA should check voice verification before Escalate BLQ case to confirm on voice status :",
    answer: "• TRUE",
  },
  {
    title:
      "CST has ticket Need Optimization escalated in 10.00 PM and CST calling at 11.30 PM in same day so you will :",
    answer: "• Inform CST waiting SLA",
  },
  {
    title: "CST has Ticket in IU pool and passed SLA so you will:",
    answer: "• Create delay ticket and inform cst sla with 1 day",
  },
  {
    title:
      "We should inform CST to leave CPE turned on while escalating BLQ case?",
    answer: "• FALSE",
  },
  {
    title: "Second time Escalation SLA in BLQ case is:",
    answer: "• 1 Day",
  },
  {
    title: "Line code for ADSL2+ is :",
    answer: "• G-992-5",
  },
  {
    title:
      "In BLQ case Clear View Result After Search is ( Technical dispatch is recommended ) , and after running the appropriate mode of Clear View result became ( No DSL Physical Layer is detected ) right action is :",
    answer: "• Check Diagnostic Tab in Line Details",
  },
  {
    title:
      "CST has BLQ ticket with update ( working from exchange ) without a visit update , right action is :",
    answer: "• Re-escalate case to IU pool",
  },
  {
    title: "line code is must set to adsl2+ or vdsl according to cst port",
    answer: "• TRUE",
  },
  {
    title:
      'If customer has ADSL package , VDSL CPE and Port is ADSL , CCA should follow change offering process to change port from ADSL to VDSL in addition to handling the main case "BLQ"',
    answer: "• TRUE",
  },
  {
    title:
      "ASSIA clear view result is, No immediate action is recommended, your action is?",
    answer:
      "• inform customer to wait 3 days until tests done on the line ( inform customer to leave CPE on during the 3 days )",
  },
  {
    title: "SLA for change speed need to Change Port is ……",
    answer: "• 48 Hours",
  },
  {
    title: "SLA for change speed need to Change Port and Card is ……",
    answer: "• 5 WD",
  },
  {
    title: "Customer can change Speed from VDSL to ADSL ?",
    answer: "• FALSE",
  },
  {
    title:
      "SLA if CST need to make change package Not require Change Port with Lower Amount after due date ………..",
    answer: "• On Spot",
  },
  {
    title: "There is no required data for Change phone number ?",
    answer: "• FALSE",
  },
  {
    title: "We can check Change phone number activity  from ……..",
    answer: "• OM & BSS Order query",
  },
  {
    title:
      "If CST need to change contact name but his account status is suspend  What is the right action ?",
    answer: "• Inform cst to pay all his due amount first",
  },
  {
    title: "No required paper needed for changing data via stores ?",
    answer: "• FALSE",
  },
  {
    title: "Cst asked about Extra Quota ( Recurring Recharge ), SR is…",
    answer: "• FBB Non-Tech Inquiry---Quota----Extra Quota Recurring",
  },
  {
    title:
      "Extra Quota ( Recurring Recharge ) renews every month automatically",
    answer: "• TRUE",
  },
  {
    title:
      "Customer Follow up his ticket (Wrong Card and port) and the TKT has update Major Fault passed SLA and still the same Update After Re-Escalation TKT , So tight SR :",
    answer: "• FBB Tech Problem>Wrong card and port>Major Fault after SLA",
  },
  {
    title:
      "While follow with cst WCAP Case and Cst Line Status is Down and Matrix Status is UP , so the next step is :",
    answer: "• Follow Data status from main step",
  },
  {
    title:
      "Cst has Ticket with update ( Abuser as per TE ) and Customer said that issue covered , So CCA right action is :",
    answer: "• Escalate normally",
  },
  {
    title:
      "CCA should not stop the escalation to IU due to any reason while making rest & configuration such as CPE page can't be accessed",
    answer: "• TRUE",
  },
  {
    title:
      "It's not mandatory to ask customer for 2 mobiles numbers while escalating any physical case",
    answer: "• FALSE",
  },
  {
    title:
      "Customer Follow up escalated ticket (Wrong Card and port) and the TKT still within SLA , So right SR is :",
    answer: "• FBB Tech Problem>Wrong Card and port>Follow Up",
  },
  {
    title:
      "Customer Follow up his ticket (Wrong Card and Port) and the TKT Has update Major Fault within First SLA , So right SR :",
    answer: "• FBB Tech Problem>Wrong card and port>Major Fault within SLA",
  },
  {
    title:
      "Cst has Ticket WCAP in IU Pool and TKT passed SLA , So CCA will inform cst SLA :",
    answer: "• 1 Day",
  },
  {
    title:
      "In case WACP CST disconnect phone cable from CPE and ADSL still UP , It is CPE Problem :",
    answer: "• TRUE",
  },
  {
    title:
      "Cst has TKT Data Down with Update ( Morkzat ) , So CCA will inform cst with SLA :",
    answer: "• 3 Days",
  },
  {
    title: "In case cst has (No service was found) log on NST TOOL your action",

    answer: "• Escalate to SLS",
  },
  {
    title: "Which actions is supported by HDM tool ??",

    answer: "• Reset CPE",
  },
  {
    title:
      "CCA should check the internet service when the cpe obtain wan ip in unable to obtain ip case",

    answer: "• True",
  },
  {
    title:
      "If unable to obtain ip problem solved after make reset and configuration it's mandatory to check MAC address and create suitable sr",

    answer: "• True",
  },
  {
    title:
      "Unable to obtain ip case escalated to the responsible team, and the tkt have update MAC not Learned what is the right action",

    answer: "• اعداة ضبط مصنع و عمل اعدادات للراوتر",
  },
  {
    title:
      "Cst has logical case and subscribed in option pack service,, the CCA must transfer cst to option pack Q ?",

    answer: "• True",
  },
  {
    title: "CCA can check if cst subscribed in any VAS from",

    answer: "• BSS Tool",
  },
  {
    title: "All CPE's  support HDM function",

    answer: "• False",
  },
  {
    title:
      "if the cst is new subscriber and had unable to obtain ip case and we found that Mac learned on matrix tool what is the next step",

    answer: "• إعادة ضبط مصنع و عمل الاعدادات",
  },
  {
    title:
      "In case we found (Accepted logs with wrong user and suspended account ) in NST Tool …what is your action",

    answer: "• Reconfigure the cpe with the right credentials",
  },
  {
    title: "For Escalation Browsing all site case status Will be  ?",

    answer: "• open",
  },
  {
    title: "For Escalation Browsing (Wrong Nas Port ID) case status Will be  ?",

    answer: "• Waiting for response",
  },
  {
    title:
      "Before escalation browsing all site case you should Activate ping option on CPE page - if available",

    answer: "• True",
  },
  {
    title: "if cst has redirection  tkt in SLS Pool and cst call after sla",

    answer: "• Will renew sla 72 h",
  },
  {
    title: "ipconfig command  responsible  to delete all DNS caches",

    answer: "• False",
  },
  {
    title:
      "It's not mandatory to inform Cst Ticket Number during escalation browsing case",

    answer: "• FALSE",
  },
  {
    title:
      "cst has browsing certain site and after check the web through http://www.iidrn.com the web site is  down ,, next action",

    answer:
      "• Inform Customer That Might Be A Global Problem In That Site Right Now",
  },
  {
    title:
      "cst has browsing certain site and after check the web site through proxy ,,the web site is working ,, next action",

    answer:
      "• Do Trace From Route Server To Customer's Wan IP and Attach It In TTS",
  },
  {
    title:
      "IF CST make Ping Bras and result is Request timed out from BRAS IP ,,next action is",

    answer: "• Check with another CPE",
  },
  {
    title:
      "customer can open YouTube / Facebook but contents doesn’t appeared ,,first step is ??",

    answer: "•IF CPE accessed try to adjust MTU and DNS [WE then Google DNS",
  },
  {
    title: "Escalation of logical instability ( No multiple login ) must be to …",

    answer: "• SLS",
  },
  {
    title: "When we Escalate Logical Instability we must inform CST to leave cpe power turned on",

    answer: "• TRUE",
  },
  {
    title: "In case of escalation logical instability cca must inform cst with TTS ticket ID",

    answer: "• TRUE",
  },
  {
    title: "In case of Delay for logical instability case , which SLA will inform cst",

    answer: "• from 2 to 5 Hr",
  },
  {
    title: "In case cst has many accepted logs in last 24 Hr , cca must be sure that not related to restart port or cpe",

    answer: "• TRUE",
  },
  {
    title: "Way of Communication For Unsupported case",

    answer: "• Phone call",
  },
  {
    title: "When CCA follow logical instability T.S with CST , CST must connect one lap top through wireless",

    answer: "• FALSE",
  },
  {
    title: "in case of Delay for unsupported cases SLA will be..",

    answer: "• 2 H",
  },
  {
    title: "SLA for Unsupported cases is ..",

    answer: "• 2 Hr",
  },
  {
    title: "CCA can check Customer Pool Of His Subscription from NST :",

    answer: "• Query LDAP Profile",
  },
  {
    title: "Escalation Suspended Account case SLA will be :",

    answer: "• 72 H",
  },
  {
    title: "While Cst has ( Wrong Nas Port ID Login ) and CCA will Escalate Ticket, SO SLA will be :",

    answer: "• 2:5 H",
  },
  {
    title: "CCA Can Change DNS from HDM Tool Function",

    answer: "• Wan Settings",
  },
  {
    title: "CCA can Change Default Gateway IP Address from which HDM Function",

    answer: "• DHCP Settings",
  },
  {
    title: "For Escalation Browsing all site case TT Will be ?",

    answer: "• Broadband->Technical->ADSL/VDSL->I Care->Browsing",
  },
  {
    title: "customer can open YouTube / Facebook but contents doesn't appeared ,,first step is ??",

    answer: "• IF CPE accessed try to adjust MTU and DNS [WE then Google DNS]"
  },
  {
    title: "In case Customer input that he paid the package bill within 24 hours, and line is Active on BSS, and Get Online Service in matrix Not blocked.",

    answer: "• Restart Port"
  },
  {
    title: "WE DNS IS ?",

    answer: "• 163.121.128.134 /// 163.121.128.135"
  },
  {
    title: "The first priority goes to ?",

    answer: "• WE DNS"
  },
  {
    title: "CCA can search by account number on BSS Tool?",

    answer: "• False"
  },
  {
    title: "To make Sure that all Installations completed Activity Must be...?",

    answer: "• Call Back To CRM"
  },
  {
    title: "IF cst already Subscribed with us which Automatic TT Will be Created...?",

    answer: "• Automatic TT-FBB ----- WO problem ---- CST Problem - Already Subscribed"
  },
  {
    title: "CCA Can Get CST's Account Number from BSS ONLY?",

    answer: "• FALSE"
  },
  {
    title: "New subscription Order SLA IS ......?",

    answer: "• 48 WH"
  },
  {
    title: "If CST need change Package Before installation it is mandatory to CCA To Verify With Customer",
    answer:"• True"
  },
  {
    title: "Customer can get US & PW from IVR 3 times per day :",
    answer: "• FALSE"
  },
  {
    title: "If Cst Solve the problem that happened in order installation CCA action will be ...?",
    answer: "• Add Midway Comment and create SR/inform CST SLA 1WD"
  },
  {
    title: "",
    answer: "• "
  },
  {
    title: "",
    answer: "• "
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
