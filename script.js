

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
    title: "Who can choose modify reason (Operator Request)?",
    answer: "Supervisor",
  },
  {
    title:
      "Which of the below is responsible for assigning automatic LAN IP's to the private devices which are connected to the same CPE",
    answer: "DHCP",
  },
  {
    title:
      "We will inform our customers about their Upload speed even if they did not ask for it:",
    answer: " FALSE",
  },
  {
    title:
      "in Cpe configuration 'VDSL' Parameters XDSL Transfer Mode should be parameter XDSL Transfer Mode",
    answer: "PTM",
  },
  {
    title: "Land line delivery available for all Egypt",
    answer: "False",
  },
  {
    title: "installation Visit Fees with VAT..?",
    answer: "85.5 LE",
  },
  {
    title: "We can make adjust status from which tool: ",
    answer: "Matrix",
  },
  {
    title: "Any customer can call us only on 19777& 111 :",
    answer: "FALSE",
  },
  {
    title: "Optimizing period for super up to 30 VDSL is : ",
    answer: "4 days",
  },
  {
    title: "In Case WO problem Automatic TT will be created...?",
    answer: "True",
  },
  {
    title:
      "Which of the following responsible for remove welding from main wire ",
    answer: "Rosetta",
  },
  {
    title:
      "In case we make any Request for CST on OSS and this massage appear (service number is migrated to BSS) that mean..",
    answer: "CST migrated to BSS",
  },
  {
    title: "We can restart Port from which tool: ",
    answer: "Matrix",
  },
  {
    title: "Super up to 30 Mb for package 140 GB price including VAT is: ",
    answer: "182.40",
  },
  {
    title:
      "if customer contracted speed is super 30 Mb and his operational speed is 40 Mb and he asks about his actual speed now, CCA will inform him : ",
    answer: "30 Mb",
  },
  {
    title:
      "if customer needs to change speed while installation period and call us, No need to make verification with him first: ",
    answer: "FALSE",
  },
  {
    title: "In case of daley in activity WO Request CCA action will be...?",
    answer: "create TT and inform CST SLA 1WD",
  },
  {
    title: "Waiting service is free with WE Ardy 20",
    answer: "FALSE",
  },
  {
    title:
      "In CPE configuration , ADSL parameters should be VPI = 35 and VCI = 0 ?",
    answer: "FALSE",
  },
  {
    title: "Recharge through Electronic machines is update within 48 H",
    answer: "FALSE",
  },
  {
    title:
      "In CPE Configuration we must write username in capital letters such as (@TEDATA.NET.EG",
    answer: "FALSE",
  },
  {
    title:
      "in instillation follow up cycle follow up team will follow with CST With...SLA, If cast has problem during instillation cycle from his side..",
    answer: "24 H",
  },
  {
    title: "Modify reason (Customer Request) will be done for free for..",
    answer: "tow times",
  },
  {
    title: "check availability result must be ....To use it in new contracting",
    answer: "Result Status : Valid | Availability Result : Available",
  },
  {
    title: "The Main wire come from the box to the CPE direct, this is a : ..",
    answer: "Main Wire Connection",
  },
  {
    title:
      "DHCP is assigning automatic LAN IP's to the private devices but NAT is responsible for translating the private IP into Public IP: ",
    answer: "True",
  },
  {
    title:
      "Service's Username + password Will be created in which activity ...?",
    answer: "Network Activation",
  },
  {
    title:
      "We inform our customers by throttled speed even if he did not ask: ",
    answer: "FALSE",
  },
  {
    title:
      "CCA Can Verify CST Data For any Verification Required from BSS only?",
    answer: "True",
  },
  {
    title: "Check Free port means that...?",
    answer: "No ports available on Matrix",
  },
  {
    title: "CST Can Change ....From My WE :",
    answer: "Mobile Number & Mail",
  },
  {
    title:
      "in Case CST asked to subscribe on data & voice with us ,We Should not mark on Vouce&Data Flag in check availabilite request",
    answer: "FALSE",
  },
  {
    title: "The Telephone cable ends with RJ :...",
    answer: "11",
  },
  {
    title:
      "CCA Can change package (order still not completed) From order still...?",
    answer:
      "BSS-->sitemap-->integrated operations(New)-->order management-->order Query",
  },
  {
    title: "If Line has a problem Connection Cable CCA action will be...?",
    answer: "inf cst شبكة ارضية - voice line not copper cannot connect data",
  },
  {
    title:
      "In case we make any modification on request, we must chose modify reason",
    answer: "Customer Request",
  },
  {
    title:
      "Which of the below devices is responsible for assigning WAN IPs to CPEs : ",
    answer: "BRAS",
  },
  {
    title:
      "Broad Hop is responsible for checking customer profile from our data base? ",
    answer: "TRUE",
  },
  {
    title: "Device is using to split Data and Voice into 2 channels :",
    answer: "Splitter",
  },
  {
    title:
      "Which of the below is the responsible for translating any domain name into IP and Vice Versa : ",
    answer: "DNS",
  },
  {
    title: "The Ethernet cable ends with RJ :",
    answer: "45",
  },
  {
    title:
      "Which of the following makes it harder for hackers to breake the connection and steal the information   :",
    answer: "HTTPS",
  },
  {
    title:
      "In Cpe configuration  “VDSL” Parameters XDSL Transfer Mode should be ",
    answer: "PPPOE",
  },
  {
    title:
      "RADIUS is responsible to make sure that customer using his US & PW which are on our system & related to his line :  ",
    answer: "TRUE",
  },
  {
    title: "We have two types of connections (Main wire and wall outlet) : ",
    answer: "TRUE",
  },
  {
    title: "Survey SLA Is..",
    answer: "24H",
  },
  {
    title: "Requested data from customer for check availability ",
    answer: "Full name, mobile, full address , ID number",
  },
  {
    title:
      "Case CCA found Automatic TT(Automatic TT FV>>Customer Subscription>>OSS TDM Registration)CCA Action will be..",
    answer:
      "inform customer that someone will communicate with him within SLA 24 hours and in case of delay will renew SLA",
  },
  {
    title: "in check availability request ,, CCA can make Request by ",
    answer: "National ID",
  },
  {
    title: "WE Ardy 25 Quarter price including fees is ",
    answer: "85.50 LE",
  },
  {
    title:
      "CCA must choose one of those choices when he make check availability request  ",
    answer: "FTTH Compound  OthersMSAN FTTH Exchange",
  },
  {
    title:
      "cst want to renew his package ( WE Ardy 40 Quarter ) ,, CCA will inform him to pay ……. LE at least ",
    answer: "139",
  },
  {
    title: "Modify reason ( Customer Request ) will be done for free for.. ",
    answer: "two times",
  },
  {
    title: "MSAN installation cycle SLA within 48 H",
    answer: "True",
  },
  {
    title:
      "we can follow up on check availability request result through BSS from…",
    answer: "Sitmap >> integrated  operations >> search availability PSTN",
  },
  {
    title: "we can move land line to another government",
    answer: "True",
  },
  {
    title: "temporary suspension service Fees without VAT",
    answer: "20 LE",
  },
  {
    title:
      "Before renewal date there is SMS sending to CST to remind him to pay his bill ",
    answer: "True",
  },
  {
    title: "CST can request to suspend his land line temporary",
    answer: "True",
  },
  {
    title: "CST can change his line category Through 111",
    answer: "False",
  },
  {
    title: "calling WE Mobil and Local calls are active without CST Request ",
    answer: "True",
  },
  {
    title: "Recharge through Electronic machines is update within 48 H",
    answer: "False",
  },
  {
    title:
      "CST can request to make his land line reciving only and do not pay his subscribtion fees",
    answer: "False",
  },
  {
    title: "CST Can request change offering through 111",
    answer: "True",
  },
  {
    title: "SLA for new Account is : ",
    answer: "48 WH",
  },
  {
    title: "Which Tool we Can Know any another( Q ) Working Hours :  ",
    answer: "IVR",
  },
  {
    title: "Our customers can not submit any tkt from WE APP: ",
    answer: "FALSE",
  },
  {
    title: "We can check customer if Blocked or not from which tool :  ",
    answer: "Matrix",
  },
  {
    title:
      "One invoice postpaid corporate Customer want to make early renewal CCA action will be …? ",
    answer: "Inform CST that he can't make early renewal + Create SR",
  },
  {
    title: "We can determined port configured speed from which tool : ",
    answer: "Matrix",
  },
  {
    title: "New subscription can apply through :",
    answer: "Branch only",
  },
  {
    title: "All Branches have same Working Hours and Days off  :",
    answer: "FALSE",
  },
  {
    title: "Some Of Corporate Individual Postpaid Customers bill cycle on….? ",
    answer: "Day 22 from each month",
  },
  {
    title: "Which service customer can use static IP : ",
    answer: "Option  Pack",
  },
  {
    title: "Line Problem SLA Is …. ?",
    answer: "15 WD",
  },
  {
    title:
      "CST call from same landline number and ask for early renewal CCA will ask CST about … To Verification ? ",
    answer: "No Need Any Verification Rules",
  },
  {
    title: "In Case Of Delay In Port Splitting Activity CCA Action Will Be…?",
    answer: "Create TT And Inform CST SLA 48 WH",
  },
  {
    title: "To Review All created tickets CCA can choose …?",
    answer: "Trouble Ticket",
  },
  {
    title: "TE Problem No Technical Data means …? ",
    answer: "No technical Data for Line In TE",
  },
  {
    title: "Any SR will be Inquiry/offers except complain SR?",
    answer: "TRUE",
  },
  {
    title:
      "CCA Must Make TT ….. In Case No Technical Data Found On Matrix Tool After Call Back To CRM ?",
    answer: "Create Matrix TT",
  },
  {
    title:
      "In Case WO Request and there is problem happened sub activity will be….?",
    answer: "WO Problem",
  },
  {
    title: "Check Free Port SLA …?",
    answer: "No Estimated Time",
  },
  {
    title:
      "Any TT Must be Problem / Non-Om Problem when CCA choose from Additional Information ?",
    answer: "FALSE",
  },
  {
    title:
      "CST has noise problem and has physical instability issue CCA will handle …?",
    answer: "Physical instability",
  },
 
  {
    title:
      "CCA found that CST's landline number has work order رفع نهائي متأخرات أقساط  In Customer Profile Tool ..... CCA action will be…?",
    answer:
      "Inform CST to pay all due installments and make new contract on landline",
  },
  {
    title:
      "Customer not migrated to BSS has problem that  voice is not working or out of service after pay bill after cut off and informed that issue started before cutoff date , CCA Right Action :",
    answer: "Phone set available step",
  },
  {
    title:
      "CST Follow voice down ticket after 25 hour from escalating it and ticket still on IU CCA action will be …? ",
    answer:
      "Inform CST Passed SLA + Create IR +create SR ​​FBB Tech Problem---​Voice Down​---Follow Up after SLA ",
  },
  {
    title:
      "in voice verification .. After calling CST's on landline number CCA found Record Massage ' الرقم مرفوع مؤقت من الخدمة' CCA action will be…?",
    answer: "Consider Voice Down + Create TT ",
  },
  {
    title: "Voice Cases override any physical case …. ?",
    answer: "TRUE",
  },
  {
    title: "Voice overlapping can happened between …. ?",
    answer: "2 numbers in the same exchange",
  },
  {
    title:
      "For CST Not Migrated To Bss :  has problem in Call waiting service CCA action will be ..?",
    answer: "Transfer CST to fixed line VDN",
  },
  {
    title: "CCA must check voice verification before escalating ….. ?  ",
    answer: "All physical cases except Need Optimization",
  },

  {
    title: "Escalation Data Down to IU SLA will be:",
    answer: "• 1 day",
  },
  {
    title:
      "In Case T.S Data Down Case and Cst has ( MSAN Type: Yes ) you will measure distance with: ",
    answer: "10 meters",
  },
  {
    title:
      "While T.S Data Down Case With Cst Adsl Led is Stable and line Become Up , CCA Action .... ",
    answer: "Follow Instability troubleshoot",
  },
  {
    title:
      "If CST has Power Failure which of the following you will do with CST: ",
    answer: "Check with another CPE with it's original adaptert",
  },
  {
    title: "The time that IU ends work per day is:",
    answer: "8:00 PM",
  },
  {
    title: "SLA for pending fixing TE will be: ",
    answer: "3 days",
  },
  {
    title: "Performing SELT test will inform us with: ",
    answer:
      "Distance between exchange or cabin and CPE if line Cable disconnect from cpe",
  },
  {
    title:
      "Cst Calling Us And Informed (ADSL Led Is Down )While  has 3 logs in NST at 7:00 AM ,7:15 AM and 7:30 AM and called us at 1:00 PM at the same day  and informed that he has a problem in his service case will be :",
    answer: "Down Cases",
  },
  {
    title:
      "If Data Down Case solved  after Cst Connect From Main Wall outlet and you will create TT to Pilot Follow Up Team , way of communication will be:",
    answer: "Call only",
  },
  {
    title:
      "In Case CCA will Re-escalate WCAP to IU as a second escalation , So the right SLA is :",
    answer: "1 Day",
  },
  {
    title:
      "In case CCA follow WCAP case and Cst Line Status from main : Down and Matrix : UP, No have Logs , So CCA right action :",
    answer: "Escalate to IU",
  },
  {
    title:
      "If the Customer number belongs to Hayah Karima project and cst has Major Fault with no estimated time , SLA will be :",
    answer: "5 Days",
  },
  {
    title:
      "customer which has Major Fault update with no estimated time should follow on his case with us : ",
    answer: "TRUE",
  },
  {
    title:
      "In case WCAP CST disconnect phone cable from CPE and ADSL still UP , It is CPE Problem : ",
    answer: "TRUE",
  },
  {
    title:
      "In case the ticket returned with updated CPE problem close code 74  , Cst from Cairo and insist to check with another available CPE , CCA right action is :",
    answer:
      "will inform the customer that he should check the CPE on CSO 'Mandatory'",
  },
  {
    title:
      "In case ticket returned with update ( Outside TEData ) , CCA right action according to the customer's case : ",
    answer:
      "will create the below SR ( Broadband>Technical>ADSL/VDSL>CC service Activation>CPE Configuration )هنعمل ال SR دى ( Broadband>Technical>ADSL/VDSL>CC service Activation>CPE Configuration )",
  },
  {
    title:
      "Cst has Ticket Data Down with Update ( Close Code (82): External problem- cable maintenance needed ) , So CCA will Inform cst  SLA : ",
    answer:
      "Case escalated to the responsible team and we are waiting for their update with 3 days SLA",
  },
  {
    title:
      "In wrong card and port or disable lines, CCA shouldn't search on Matrix using ADSL & customer account no. to avoid any indeterminate for duplicated matrix : ",
    answer: "FALSE",
  },
  {
    title:
      " while troubleshooting physical instability , Clear View Result After Search 'No DSL Physical Layer is detected ' ,next action is :",
    answer:
      "Check last fix date according to TTS and customer input at same time",
  },
  {
    title:
      "CST has Physical Instability ticket in your pool , and problem still the same , after troubleshooting , CCA will ​​Re Escalate ticket again to IU ,, right SR is :",
    answer: "FBB Tech Problem > ​​Physical Instability > ​​Re Escalation",
  },
  {
    title:
      "while troubleshooting physical instability ,CCA found Landline bills is 80 LE and passed the grace period , CCA stop troubleshooting and inform CST that he has to pay his bills first, right SR is :",
    answer: "FBB Tech Problem > ​​Physical Instability >TE-Billing",
  },
  {
    title:
      "Before escalating Physical Instability Case , should be check Voice Verification  ?",
    answer: "TRUE",
  },
  {
    title: "SLA for Physical Instability Contradiction Case  ?",
    answer: "2 H",
  },
  {
    title:
      "While troubleshooting physical instability, After run clear view result is : Run Real Time Profile Optimization, right action is :",
    answer: "Check Voice Verification then Escalate to IU",
  },
  {
    title:
      "If there 5 logs exist during last 12 hours with 1 log during last 3 hours  . Handle as ?",
    answer: "physical instability",
  },
  {
    title:
      "while troubleshooting Physical Instability, CCA found voice is down ,  ticket will escalated as :",
    answer: "Voice Down",
  },
  {
    title: "Physical Instability will be escalated to :",
    answer: "IU",
  },
  {
    title:
      "Time Frame For Visit Performed Cases in Physical Instability  Case :",
    answer: "5 days",
  },
  {
    title: "Power led not existed",
    answer: "Power led not working or working with red color",
  },
  {
    title:
      "If CST called us and informed that he has cut cable you will follow normal troubleshoot in ticket maker:",
    answer: "FALSE",
  },
 ,
  {
    title: "If CST with another CPE and not necessary it's original adapter",
    answer: "Check with another CPE with it's original adapter",
  },
  {
    title:
      "If we run SELT and customer's line connected with exchange you will measure distance with:",
    answer: "150 meters",
  },
  {
    title:
      "If CST has Data Down case and when you checked SELT you found that CST is not supported by ASSIA you will:",
    answer: "Check connection type",
  },
  {
    title:
      "If CPE restarted automatically and power LED turned off while CPE restarted you will consider it as:",
    answer: "Power Failure",
  },
  {
    title: "If customer's line in ASSIA no provisioned that means",
    answer: "CST is not supported by ASSIA",
  },
  {
    title:
      "If powe led is down and CST uses original adapter next step will be:",
    answer: "Try in another wall-plug",
  },
  {
    title: "SLA for internal wiring TT:",
    answer: "2 hours",
  },
  {
    title: "While Escalating Physical instabillity Case to IU , SLA will be :",
    answer: "1 Day",
  },
  {
    title:
      "Customer has ticket Physical instability in IU , CAA informed him that he within SLA , Right SR is :",
    answer: "FBB Tech problem > physical instability > Follow Up",
  },
  {
    title:
      "While escalating physical instobility CCA Must inform customer to keep his CPE turned on :",
    answer: "FALSE",
  },
  {
    title:
      "CCA must Ask customer for 2 mobiles numbers while escalating Physical instability case :",
    answer: "TRUE",
  },
  {
    title:
      "In physical instability case we will escalate the ticket to ( Pilpt-Follow Up ) when problem solved after CST connected from main wall outlet :",
    answer: "TRUE",
  },
  {
    title:
      "while troubleshooting physical instability , clear view result after search Technical dispatch is recommended , nex action is :",
    answer: "Check connection type",
  },
  {
    title:
      "While Escalating Physical instability Case to IU for third time , SLA will be :",
    answer: "1 Day",
  },
  {
    title:
      "While troubleshooting physical instability, connection type : wall outlet , the next step is :",
    answer: "Check if connection right or wrong",
  },
  {
    title:
      "while troubleshooting physical instability , connection is right the next step is :",
    answer: "Check splitter existence before cpe",
  },
  {
    title:
      "CST has BLQ Case, Customer operational speed is 12 Mb after make selt result was 800 M so you will :",
    answer: "Follow voice verification then escalate BLQ",
  },
  {
    title:
      "CST has ASSIA output: Line is out of sync, CCA action as first step:",
    answer: "Ensure that the CPE is on",
  },
  {
    title:
      "CST has BLQ ,line supported by ASSIA clear view after search Technician Dispatch is recommended the next step will :",
    answer: "Check connection type",
  },
  {
    title:
      "In Case Ticket BLQ have Update ( Main wire changed ) and Cst still have the same problem, noting that line Supported by ASSIA and no change in the connection setup after our technician visit’s, so the right action is :",
    answer: "Re-Run the appropriate mode of Clear View",
  },
  {
    title: "Need Optimization case will Escalate to :",
    answer: "Pilot-SLS",
  },
  {
    title:
      "If Customer complaint within TS BLQ case from Bad Box issue , the right SR is :",
    answer: "Fbb Tech Problem>BLQ>Bad Box",
  },
  {
    title:
      "it's not mandatory to take screenshots from selected Clear View mode and its result ",
    answer: "TRUE",
  },
  {
    title:
      "In case escalation of Need Optimization case ask customer to leave the CPE power turned on",
    answer: "TRUE",
  },
  {
    title:
      "While TS BLQ case and CCA Check Line stability from line details from Assia and found that customer's line is Unstable so the next step is :",
    answer: "Inform Customer to wait 3 days until tests done on the line",
  },
  {
    title:
      "CCA should check voice verification before Escalate BLQ case to confirm on voice status :",
    answer: "TRUE",
  },
  {
    title:
      "CST has ticket Need Optimization escalated in 10.00 PM and CST calling at 11.30 PM in same day so you will :",
    answer: "Inform CST waiting SLA",
  },
  {
    title: "CST has Ticket in IU pool and passed SLA so you will:",
    answer: "Create delay ticket and inform cst sla with 1 day",
  },
  {
    title:
      "We should inform CST to leave CPE turned on while escalating BLQ case?",
    answer: "FALSE",
  },
  {
    title: "Second time Escalation SLA in BLQ case is:",
    answer: "1 Day",
  },
  {
    title: "Line code for ADSL2+ is :",
    answer: "G-992-5",
  },
  {
    title:
      "In BLQ case Clear View Result After Search is ( Technical dispatch is recommended ) , and after running the appropriate mode of Clear View result became ( No DSL Physical Layer is detected ) right action is :",
    answer: "Check Diagnostic Tab in Line Details",
  },
  {
    title:
      "CST has BLQ ticket with update ( working from exchange ) without a visit update , right action is :",
    answer: "Re-escalate case to IU pool",
  },
  {
    title: "line code is must set to adsl2+ or vdsl according to cst port",
    answer: "TRUE",
  },
  {
    title:
      'If customer has ADSL package , VDSL CPE and Port is ADSL , CCA should follow change offering process to change port from ADSL to VDSL in addition to handling the main case "BLQ"',
    answer: "TRUE",
  },
  {
    title:
      "ASSIA clear view result is, No immediate action is recommended, your action is?",
    answer:
      "inform customer to wait 3 days until tests done on the line ( inform customer to leave CPE on during the 3 days )",
  },
  {
    title: "SLA for change speed need to Change Port is ……",
    answer: "48 Hours",
  },
  {
    title: "SLA for change speed need to Change Port and Card is ……",
    answer: "5 WD",
  },
  {
    title: "Customer can change Speed from VDSL to ADSL ?",
    answer: "FALSE",
  },
  {
    title:
      "SLA if CST need to make change package Not require Change Port with Lower Amount after due date ………..",
    answer: "On Spot",
  },
  {
    title: "There is no required data for Change phone number ?",
    answer: "FALSE",
  },
  {
    title:
      "If CST need to change contact name but his account status is suspend  What is the right action ?",
    answer: "Inform cst to pay all his due amount first",
  },
  {
    title: "No required paper needed for changing data via stores ?",
    answer: "FALSE",
  },
  {
    title: "Cst asked about Extra Quota ( Recurring Recharge ), SR is…",
    answer: "FBB Non-Tech Inquiry---Quota----Extra Quota Recurring",
  },
  {
    title:
      "Customer Follow up his ticket (Wrong Card and port) and the TKT has update Major Fault passed SLA and still the same Update After Re-Escalation TKT , So tight SR :",
    answer: "FBB Tech Problem>Wrong card and port>Major Fault after SLA",
  },
  {
    title:
      "While follow with cst WCAP Case and Cst Line Status is Down and Matrix Status is UP , so the next step is :",
    answer: "Follow Data status from main step",
  },
  {
    title:
      "Cst has Ticket with update ( Abuser as per TE ) and Customer said that issue covered , So CCA right action is :",
    answer: "Escalate normally",
  },
  {
    title:
      "CCA should not stop the escalation to IU due to any reason while making rest & configuration such as CPE page can't be accessed",
    answer: "TRUE",
  },
  {
    title:
      "It's not mandatory to ask customer for 2 mobiles numbers while escalating any physical case",
    answer: "FALSE",
  },
  {
    title:
      "Customer Follow up escalated ticket (Wrong Card and port) and the TKT still within SLA , So right SR is :",
    answer: "FBB Tech Problem>Wrong Card and port>Follow Up",
  },
  {
    title:
      "Customer Follow up his ticket (Wrong Card and Port) and the TKT Has update Major Fault within First SLA , So right SR :",
    answer: "FBB Tech Problem>Wrong card and port>Major Fault within SLA",
  },

  {
    title:
      "In case WACP CST disconnect phone cable from CPE and ADSL still UP , It is CPE Problem :",
    answer: "TRUE",
  },
  {
    title:
      "Cst has TKT Data Down with Update ( Morkzat ) , So CCA will inform cst with SLA :",
    answer: "3 Days",
  },
  {
    title: "In case cst has (No service was found) log on NST TOOL your action",

    answer: "Escalate to SLS",
  },
  {
    title: "Which actions is supported by HDM tool ??",

    answer: "Reset CPE",
  },
  {
    title:
      "CCA should check the internet service when the cpe obtain wan ip in unable to obtain ip case",

    answer: "True",
  },
  {
    title:
      "Unable to obtain ip case escalated to the responsible team, and the tkt have update MAC not Learned what is the right action",

    answer: "اعداة ضبط مصنع و عمل اعدادات للراوتر",
  },
  {
    title:
      "Cst has logical case and subscribed in option pack service,, the CCA must transfer cst to option pack Q ?",

    answer: "True",
  },
  {
    title: "CCA can check if cst subscribed in any VAS from",

    answer: "BSS Tool",
  },
  {
    title: "All CPE's  support HDM function",

    answer: "False",
  },
  {
    title:
      "if the cst is new subscriber and had unable to obtain ip case and we found that Mac learned on matrix tool what is the next step",

    answer: "إعادة ضبط مصنع و عمل الاعدادات",
  },
  {
    title: "For Escalation Browsing all site case status Will be  ?",

    answer: "open",
  },
  {
    title: "For Escalation Browsing (Wrong Nas Port ID) case status Will be  ?",

    answer: "Waiting for response",
  },
  {
    title:
      "Before escalation browsing all site case you should Activate ping option on CPE page - if available",

    answer: "True",
  },
  {
    title: "if cst has redirection  tkt in SLS Pool and cst call after sla",

    answer: "Will renew sla 72 h",
  },
  {
    title: "ipconfig command  responsible  to delete all DNS caches",

    answer: "False",
  },
  {
    title:
      "It's not mandatory to inform Cst Ticket Number during escalation browsing case",

    answer: "FALSE",
  },
  {
    title:
      "cst has browsing certain site and after check the web through http://www.iidrn.com the web site is  down ,, next action",

    answer:
      "Inform Customer That Might Be A Global Problem In That Site Right Now",
  },
  {
    title:
      "cst has browsing certain site and after check the web site through proxy ,,the web site is working ,, next action",

    answer:
      "Do Trace From Route Server To Customer's Wan IP and Attach It In TTS",
  },
  {
    title:
      "IF CST make Ping Bras and result is Request timed out from BRAS IP ,,next action is",

    answer: "Check with another CPE",
  },
  {
    title: "Escalation of logical instability ( No multiple login ) must be to …",

    answer: "SLS",
  },
  {
    title: "When we Escalate Logical Instability we must inform CST to leave cpe power turned on",

    answer: "TRUE",
  },
  {
    title: "In case of escalation logical instability cca must inform cst with TTS ticket ID",

    answer: "TRUE",
  },
  {
    title: "In case of Delay for logical instability case , which SLA will inform cst",

    answer: "from 2 to 5 Hr",
  },
  {
    title: "In case cst has many accepted logs in last 24 Hr , cca must be sure that not related to restart port or cpe",

    answer: "TRUE",
  },
  {
    title: "Way of Communication For Unsupported case",

    answer: "Phone call",
  },
  {
    title: "in case of Delay for unsupported cases SLA will be..",

    answer: "2 H",
  },
  {
    title: "SLA for Unsupported cases is ..",

    answer: "2 Hr",
  },
  {
    title: "CCA can check Customer Pool Of His Subscription from NST :",

    answer: "Query LDAP Profile",
  },
  {
    title: "Escalation Suspended Account case SLA will be :",

    answer: "72 H",
  },
  {
    title: "While Cst has ( Wrong Nas Port ID Login ) and CCA will Escalate Ticket, SO SLA will be :",

    answer: "2:5 H",
  },
  {
    title: "CCA Can Change DNS from HDM Tool Function",

    answer: "Wan Settings",
  },
  {
    title: "CCA can Change Default Gateway IP Address from which HDM Function",

    answer: "DHCP Settings",
  },
  {
    title: "For Escalation Browsing all site case TT Will be ?",

    answer: "Broadband->Technical->ADSL/VDSL->I Care->Browsing",
  },
  {
    title: "customer can open YouTube / Facebook but contents doesn't appeared ,,first step is ??",

    answer: "IF CPE accessed try to adjust MTU and DNS [WE then Google DNS]"
  },
  {
    title: "In case Customer input that he paid the package bill within 24 hours, and line is Active on BSS, and Get Online Service in matrix Not blocked.",

    answer: "Restart Port"
  },
  {
    title: "WE DNS IS ?",

    answer: "163.121.128.134 /// 163.121.128.135"
  },
  {
    title: "The first priority goes to ?",

    answer: "WE DNS"
  },
  {
    title: "CCA can search by account number on BSS Tool?",

    answer: "False"
  },
  {
    title: "To make Sure that all Installations completed Activity Must be...?",

    answer: "Call Back To CRM"
  },
  {
    title: "IF cst already Subscribed with us which Automatic TT Will be Created...?",

    answer: "Automatic TT-FBB ----- WO problem ---- CST Problem - Already Subscribed"
  },
  {
    title: "CCA Can Get CST's Account Number from BSS ONLY?",

    answer: "FALSE"
  },
  {
    title: "New subscription Order SLA IS ......?",

    answer: "48 WH"
  },
  {
    title: "If CST need change Package Before installation it is mandatory to CCA To Verify With Customer",
    answer:"• True"
  },
  {
    title: "Customer can get US & PW from IVR 3 times per day :",
    answer: "FALSE"
  },
  {
    title: "If Cst Solve the problem that happened in order installation CCA action will be ...?",
    answer: "Add Midway Comment and create SR/inform CST SLA 1WD"
  },
 
  {
    title: "Ping -t command is used to ...",
    answer: "calculate packet loss percentage"
  },
  {
    title: "In case packet lose is Equal or less than 20%, its mean",
    answer: "NO problem from network Side"
  },
  {
    title: "In case Packet lose percentage was 30% „ Next step will be..",
    answer: "ping -t on cpe ip"
  },
  {
    title: "Line Supported bu ASSIA and clear view result was ( Technical dispatch ) , CCA Action",
    answer: "Handle physical instability problem"
  },
  {
    title: "its mandatory to follow logical verification before handle logical instability",
    answer: "TRUE"
  },
  {
    title: "When CCA follow logical instability T.S with CST , CST must connect one laptop through wireless",
    answer: "FALSE"
  },
  {
    title: "In case we found packet loss from cpe IP = 0 % after we found packet loss from google was = 35% „ CCA Action",
    answer: "Escalate to SLS"
  },
  {
    title: "Escalation of logical instability ( multiple login ) must be to ...",
    answer: "NOC"
  },
  {
    title: "while Escalation of logical instability case SLA is ...",
    answer: "from 2 to 5 Hr"
  },
  {
    title: "In case CST informs us to not close the ticket till testing the service from his side Which SR CCA will create..?",
    answer: "FBB Tech Problem will test the service Voice Down CST"
  },
  {
    title: "Customer not migrated to BSS has problem that Voice is Not working or Out Of Service after pay all landline bills after cutoff date and cst confirmed that problem started with him from this date CCA action ?",
    answer: "Create UCRM ( RCR Complaint )"
  },
  {
    title: "Voice Down TT SLA is...?",
    answer: "1 Day"
  },
  {
    title: "While T.S Voice Verification with CST is calling from different landline number and inform us that voice is working CCA action will be ...?",
    answer: "Confirm that customer tested voice before call with phone set"
  },
  {
    title: "In case Customer has outage send via email ,, you will inform Customer with number of : ",
    answer: "SR number "
  },
  {
    title: "In-case CCA found major fault outage and down outage in the same time ,, your action is :",
    answer: "inform the customer major fault outage script and SLA only"
  },
  {
    title: "Customer has outage  Data Down ,, first SLA is :",
    answer: "2 Hours"
  },
  {
    title: "In case we found Submit error or Submit normally with no ticket created on TTS ,, your action  is :",
    answer: "All the above  = CCA will create ticket on Ireport /cases + Attach Snapshot from Error + Mentioned Mobile Number and all troubleshooting on Description"
  },
  {
    title: "In case no password in Cst 360 ,, and create  ireport/cases. ,, sla",
    answer: "1 Day"
  },
  {
    title: "cst has Wrong Profile on Matrix , ADSL UP ,, right action is :",
    answer: "Run PO  on Assia"
  },
  {
    title: "In case any tool became down within T.S except BSS tool ,,  CCA will create SR >>  FBB Tech Problem>>Outage – tool>>​Wrap up message",
    answer: "TRUE"
  },
  {
    title: "For any specific Dslam /Card/ Frame we can check outage comment",
    answer: "TRUE"
  },
  {
    title: "Customer has  outage Data Down on CST 360 and call us after  2 hours   ,, right SR is  :",
    answer: "FBB Tech Problem >> Outage - Data Down >> No estimated time"
  },
  {
    title: "customer has Port Time out on Matrix , Customer is UP ,  , no outage , and has voice down ,, right action is :",
    answer: "handle Port Time out  and voice down "
  },
  {
    title: "CST has noise problem after checking from Another phone set Not solved After connecting it from main directly noise Problem solved CCA next action will be ...?",
    answer: "inform the customer solvent and ideal connection +Create SR"
  },
  {
    title: "SLA for Ticket data and voice down (stolen cable) in pop „, In (pending fixing TE) pool ?",
    answer: "3 days"
  },
  {
    title: "CST has noise problem not related to physical issue CCA next action will be ...?",
    answer: "Let CST test with another phone set and it should not be a cordless phone"
  },
  {
    title: "In case line is disable / down and no due bills CCA action will be",
    answer: "Adjust Status on matrix"
  },
  {
    title: "If CST has Ticket data down with update (Re-splitted done ) and Cst connected his CPE From Main Wire Then „, CCA Will Inform cst Next Step :",
    answer: "Check availability to test by another CPE"
  },
  {
    title: "If CST has Data and Voice Down case after connect from main wall outlet problem solved you will:",
    answer: "Create TT for internal wiring"
  },
  {
    title: "IF Cst Has Ticket Data Down With Updated (visit performed) in TTS and CST called us after 2 days from this update you will:",
    answer: "Re-troubleshoot with the CST"
  },
  {
    title: "In-case of delay in second escalation for Data Down case, ticket:",
    answer: "FALSE"
  },
  {
    title: "If you escalate ticket to IU with no troubleshooting because of cut cable , way of communication will be:",
    answer: "Call or SMS or Recorded message"
  },
  {
    title: "While follow with cst WACP Case and Cst Line Status is Down and Matrix Status is also Down so the next step is :",
    answer: "Troubleshoot as Data Down"
  },
  {
    title: "CCA will Re-escalated ticket (VVrong Card and Port) to IU , So the right SR :",
    answer: "FBB Tech Problem>Wrong Card and port>Re Escalation"
  },
  {
    title: "Cst has Ticket WCAP in IU Pool and TKT Passed SLA , So CCA will inform cst SLA :",
    answer: "1 Day"
  },
  {
    title: "WCAP Ticket Escalated to IU so In case of delay , CCA will inform customer with SLA :",
    answer: "1 Day"
  },
  {
    title: "SLA for Wrong card and Port is :",
    answer: "1 Day"
  },
  {
    title: "CCA Shouldn't Check Voice verification before escalating WCAP case :",
    answer: "False"
  },
  {
    title: "Ticket have Update ( Political Circumstance ) SLA will be :",
    answer: "No estimated time"
  },
  {
    title: "Ticket with IJpdate Global number of ports, mail sent to responsible team and there is outage exist on Cst 360 tool , So CCA right action is :",
    answer: "CCA will act according to the outage rules"
  },
  {
    title: "In case customer has TKT Data Down with Update Major Fault update with No Estimated time while No outage on CST360 , So CCA right action is :",
    answer: "will inform cst SLA 3 Days"
  },
  {
    title: "Ticket update customer already has FCC ticket outside Te-data",
    answer: "CCA will act normally on IU SLA"
  },
  {
    title: "While escalating Physical Instability CCA Must inform customer to keep his CPE turned on :",
    answer: "FALSE"
  },
  {
    title: "While troubleshooting physical instability, After run clear view result is :  No action can be recommended because some DSL- Expresse modules are down , right action is :",
    answer: "Troubleshoot as not supported by ASSIA"
  },
  {
    title: "CCA must inform customer with ticket number while escalating Physical Instability case :",
    answer: "TRUE"
  },
  {
    title: "while troubleshooting physical instability , connection type : wall outlet , CST informed us he will connect from his main and call us later , right SR is :",
    answer: "FBB Tech Problem > Physical Instability > Will connect from main"
  },
  {
    title: "physical instability case escalate at 15-Sep 10:20 PM and CST called us at 17- Sep 9:20 PM , and ticket still in IU ,right SR is :",
    answer: "FBB Tech Problem > Physical Instability > Follow up After SLA"
  },
  {
    title: "before re escalate physical instability CCA should check voice verification to avoid any rejection on his tkt ?",
    answer: "TRUE"
  },
  {
    title: "CST has Physical Instability ticket with update ( Ganzara removed ) and CST has the same problem , noting that line Supported by ASSIA, right action is :",
    answer: "Re-Run the appropriate mode of Clear View „ If there is no change in the connection setup after our technician visit's"
  },
  {
    title: "While Troubleshoot BLQ case and line not Supported by Assia , attainable speed less than Satisfactory speed so the next step is :",
    answer: "check connection type step"
  },
  {
    title: "If Customer complaint within TS BLQ case from Bad Box issue the right SR is :",
    answer: "Fbb Tech Problem>BLQ>Bad Box"
  },
  {
    title: "In Case Assia Clear view Result after run Fix is No DSL Physical Layer is detected , Line Code is set to VDSL , Line is Stable from Line details and Operational speed Less than the Service Recommendation Speed , so CCA need to",
    answer: "Need Optimization"
  },
  {
    title: "Bad Line Quality ticket with update (Visit Performed) yesterday . and Customer called us after 2 days . and informed that he didn't get the visit , So CCA right action is :",
    answer: "CCA will Re-escalate the ticket to IU with updating the customer's input"
  },
  {
    title: "Customer POP Utilization Status Within Ratio CCA follow with cst Slowness Case , so CCA right action :",
    answer: "Stop troubleshooting and Inform customer with script"
  },
  {
    title: "In Case CCA will escalate Unable To Obtain IP Case at 2 PM , CCA not mandatory to check on call Before escalation :",
    answer: "TRUE"
  },
  {
    title: "While escalate Unable To Obtain IP Case , CCA shouldn't check and mention on call Before escalation (Note: Escalation in 9 PM)",
    answer: "FALSE"
  },
  {
    title: "In Case Unable To Obtain IP Router ADSL LED matches with Matrix Status while restaring :",
    answer: "TRUE"
  },
  {
    title: "In case CST is not available to follow troubleshooting steps according to his input, Noting that we should tru to help the customer as much as we can , The right SR :",
    answer: "FBB Tech Problem>UnabIe to Obtain IP>CST can not troubleshoot"
  },
  {
    title: "It's mandatory when Escalation Unable To Obtain IP to ask customer to leave the CPE power turned on",
    answer: "TRUE"
  },
  {
    title: "Cst which Subscriber in option pack . CCA can follow with cst a Physical cases :",
    answer: "FALSE"
  },
  {
    title: "It's not mandatory within the call to change the default password for CPE once CCA found admin as default password",
    answer: "False"
  },
  {
    title: "CST has Port Time Out on Matrix , No Outage , ADSL led is Down in his CPE , No records created on IR , right action is",
    answer: "Create Record on IR Cases and inform customer 2 Hours SLA"
  },
  {
    title: "Outages that related to Specific port or frame „ SLA is :",
    answer: "5 working days"
  },
  {
    title: "Customer has Planned Outage (Down ) and call us after estimated time And Has Data Down Case „ your action is :",
    answer: "Handle case normally"
  },
  {
    title: "In case we found DSL Exchange name is missing while creating ticket „ SLA is :",
    answer: "2 WD"
  },
  {
    title: "Port time out and Access denied cases override Disable as it consider a normal behavior",
    answer: "TRUE"
  },
  {
    title: "Customer has outage Data Down on CST 360 and call us within first 2 hours „ right SR is :",
    answer: "FBB Tech Problem >> Outage - Data Down>> within SLA"
  },
  {
    title: "In case customer follow up after the wrap up „ your action is :",
    answer: "CCA will continue the troubleshooting which exist on I-Report"
  },
  {
    title: "In case we found Submit error or Submit normally with no ticket created on TTS „ SLA is :",
    answer: "3 WD"
  },
  {
    title: "In case BSS became down within troubleshooting with customer , CCA will update full troubleshooting steps done on I-Report TKT." || "In case BSS became down within troubleshooting with customer , CCA will update full troubleshooting steps done on I-Report TKT",
    answer: "TRUE"
  },
  {
    title: "CST has Access denied on Matrix , there is Outage Data Down on CST 360 „ right action is",
    answer: "Act as outage rules"
  },
  {
    title: "Cst can Get compensation for any ticket with :",
    answer: "Balance Or Free Quota as per cst need"
  },
  {
    title: "if cst ask about stolen cable concession and found data and voice down tkt on TTS ,your action",
    answer: "Follow Technical concession process"
  },
  {
    title: "In Case cst Refused Concession Result CCA Action Will create TT and should Mention",
    answer: "Secondary mobile & TT serial number"
  },
  {
    title: "SLA For Technical Concession Revalidation   Will Be",
    answer: "24H"
  },
  {
    title: "In case Normal  cst has Ticket data and voice down with Tittle  (Major Fault Problem ) and call us asked about Concession CCA Right Action",
    answer: "Create TT  ( FBB Non Technical Request>Billing Adjustment >Tech Concession Global problem or outage )"
  },
  {
    title: "IF CST not satisfied about concession result we will ….",
    answer: "Create TT and inform cst 24 h"
  },
  {
    title: "Telephonet Cst call us Today and  has Ticket BLQ Closed in 1-3-2022 and need compensation about his ticket CCA Action",
    answer: "Inform cst Concession Process and Create(FBB Non-Tech Inquiry>Billing Adjustment>Technical"
  },
  {
    title: "We can compensate cst for tkt closed since …..",
    answer: "3  months"
  },
  {
    title: "We can compensate cst about not paid period",
    answer: "False"
  },
  {
    title: "if there is no outage ID From CST360 , next step",
    answer: "we will check BSS SR related to outage"
  },
  {
    title: "CST need to subscribe in Option pack service CCA Action :",
    answer: "There is no new subscription for Option Pack until further notice"
  },
  {
    title: "Check POP Utilization Status From :",
    answer: "Matrix Tool"
  },
  {
    title: "After follow slowness case T S, Customer download not accepted CCA Action :",
    answer: "Check Download Rate In Safe Mode"
  },
  {
    title: " CST has slowness issue in Streaming  your Action :",
    answer: "Check streaming on YouTube on Auto Quality"
  },
  {
    title: "If Download Rate Accepted after check it from Safe Mode CCA Action :",
    answer: "Inform the customer that the problem in his os"
  },
  {
    title: "In case cst has Ping result from Google IP 35% , and there was packet loss from CPE IP , and the problem solved after make Reset & Reconfigure , So the right SR will be :",
    answer: "Logical Instability"
  },
  {
    title: "Escalation Speed Variance case SLA will be :",
    answer: "72 Working Hour"
  },
  {
    title: "Before troubleshooting Slowness case CCA should inform customer to close all opened applications that are using the internet connection :",
    answer: "TRUE"
  },
  {
    title: "If CST using IDM and download rate is not accepted from the first file CCA Action :",
    answer: "Check download with Safe Mode"
  },
  {
    title: "we will call cst in the case of approved concession",
    answer: "FALSE"
  },
  {
    title: "We Can compensate cst has suspend account",
    answer: "FALSE"
  },
  {
    title: "if cst ask about stolen cable concession and no data and voice down tkt on TTS ,your action",
    answer: "we will create TT and inform cst he will receive call or sms within 21 WD"
  },
  {
    title: "The compensation request can be submitted starting from ... for outage issue",
    answer: "12 h"
  },
  {
    title: "if cst ask about concession and no outage id on CS T 360 and no bss SR related to outage we must check change location in matrix logs",
    answer: "TRUE"
  },
  {
    title: "complain concession will be created from",
    answer: "complain team or Team leaders"
  },
  {
    title: "The compensation Cst For Outage starting from",
    answer: "12 hours"
  },
  {
    title: "concession complain will be Add-ons",
    answer: "True"
  },
  {
    title: "we can compensate CST for Tkt Wireless issue",
    answer: "False"
  },
  {
    title: "SLA for Technical concession case",
    answer: "2 WH"
  },
  {
    title: "in case customer is asking about wps , So the right SR will be :",
    answer: "FBB Tech inquiry>Technical Inquiry>CPE-WPS"
  },
  {
    title: "In case cst has slowness ticket in NOC  escalated @ 1 PM and call us to Follow @ 9 PM right SR will Be",
    answer: "FBB Tech Problem > Slowness > Follow up after SLA"
  },
  {
    title: "If CST using browser in download from first file  and download rate not accepted CCA Action",
    answer: "Need to download 3 files"
  },
  {
    title: " customer ask to hide WIFI SSID  , action done from HDM ,, right SR is :",
    answer: "FBB Tech Problem —Wireless Hidden SSID Name"
  },
  
  {
    title: "CST has Wireless problem , he connected to his WLAN but no internet access , First  action is :",
    answer: "Check if the internet is working via cable or not"
  },
  
  {
    title: "We can check slowness in browsing via",
    answer: "Te.eg"
  },
  
  {
    title: "CST Complaint From Slowness issue Trace Result 1st Hop = 5MS CCA Action :",
    answer: "Inform customer that it is CPE problem"
  },
  
  {
    title: "OTS Sla Will Be :",
    answer: "5WD"
  },
  {
    title: "In case cst his pop Congested CCA : will inform cst",
    answer: "في مشكلة حاليا في اجهزتنا الموجودة في السنترال بس مفيش حاليا وقت متوقع لحل المشكلة ممكن حضرتك تتابع معنا بعد اسبوعين"
  },
  {
    title: "Line not supported by assia and cst suffering from instability , DSL Led disconnecting when service became down, its mean cst has Logical instability",
    answer: "False"
  },
  {
    title: "if CST need to make early renewal CCA should advise him to use mobile app & E-care & IVR for easily way next time",
    answer: "TRUE"
  },
  {
    title: "if the customer paid through E care or Mobile App and the payment is not clear we will inform CST to Call us After 1 Hour from Payment",
    answer: "TRUE"
  },
  {
    title: "in case CST recharge by mistake CCA will create IR with sla :",
    answer: "30 min"
  },
  {
    title: "CST charged Extra Quota and call us after 3 Hr and he didn’t restore his original speed,, CCA Action",
    answer: "Restart Port هنعمل ريستارت للبورت"
  },
  {
    title: "We can send fraction request for cst maximum",
    answer: "3 LE"
  },
  {
    title: "CST paid his bill through ( Fawry ) Machine and balance did not add to his account on BSS, No outage was found, CCA Action :",
    answer: "Will create TT with 48WHs SLA"
  },
  {
    title: "if cst asked about his balance CCA will create SR :",
    answer: "FBB Non-Tech Inquiry--Billing--Balance"
  },
  {
    title: "SLA for Enabled By Mistake TT is",
    answer: "2 WH"
  },
  {
    title: "In case customer is inquiring about his offer and already renewed on BBS automatically CCA will create SR :",
    answer: "FBB Non-Tech Inquiry-- Billing--​Offer Renewed"
  },
  {
    title: "If there is an error in the data on the Matrix (for example, if the government code is not the same as the Order) ,, right action is : ",
    answer: "will create FBB Non Technical Request  >> Internet Service >> Matrix Correction"
  },
  {
    title: "if the cst can't make any TS steps what is the suitable sr ? noting that we help our cst as much as we can",
    answer: "FBB Tech Problem>Unable to Obtain IP>CST can not troubleshoot"
  },
  {
    title: "If CST informed that WE change his\her phone number but we didn’t found any order on system. What action needed ?",
    answer: "Create TT"
  },
  {
    title: "if cst problem solved without any TS from our side and the line has no any technical issue what is the suitable sr",
    answer: "FBB Tech Problem>Unable to obtain IP>Solved without T.S"
  },
  {
    title: "Customer has outage Major Fault and number belongs to Haya Karima  ,,  SLA is",
    answer: "5 days"
  },
  {
    title: "IF CST not satisfied about concession we will ….",
    answer: "Create TT and inform cst 24 h"
  },
  {
    title: "In Case CCA Check HDM Tool and found it offline so CCA right action",
    answer: "Restart Port"
  },
  {
    title: "In case the customer has ticket in 3rd level pool at the same time the pop has related outage ,, your action is :",
    answer: "inform customer by the 3rd level and outage  SLA "
  },
  {
    title: "If CST make Change phone number with same ADSL number but internet service is not working. What is the right action ?",
    answer: "Handle case as a technical problem"
  },
  {
    title: "In Case CST has enabled account On MATRIX Tool and at the same time CST has Suspended Service on NST Tool  ....  you will remove the suspension from ",
    answer: "CST 360"
  },
  {
    title: "in browsing case adsl led must be",
    answer: "UP"
  },
  {
    title: "After Cst recharges extra quota cst will restore his original speed within…",
    answer: "1 H"
  },
  {
    title: "ll CPE's  support HDM function",
    answer: "False"
  },
  {
    title: "Extra Quota ( Recurring Recharge ) renews every month automatically",
    answer: "TRUE"
  },
  {
    title: "In case we found (Accepted logs with wrong user and suspended account ) in NST Tool …what is your action ",
    answer: "Reconfigure the cpe with the right credentials"
  },
  {
    title: "if cst has unable to obtain ip problem and cst not beside his cpe the suitable sr is",
    answer: "FBB Tech Problem>Unable To Obtain>Not beside CPE"
  },
  {
    title: "CST can make change package Before Due Date Via ……",
    answer: "All of the above = All of the above + Stores + Call Center"
  },
  {
    title: "Before escalation of logical instability, must mention if on call : (Yes) OR   (No",
    answer: "TRUE"
  },
  {
    title: "Escalation Browsing Certain Site case TT will be ?",
    answer: "Broadband -> Technical -> ADSL/VDSL -> MCU Call Center -> Browsing"
  },
  {
    title: "While Following Slowness Case With cst has Ping result from Google IP 35% next step will Ping Cpe Ip ,, that mean Cst Issue Is ",
    answer: "Logical Instability"
  },
  {
    title: "incase cst has (wrong NAS Port ID ) on nst logs and we will escalate the sla will be :",
    answer: "2:5 H"
  },
  {
    title: "No required paper needed for changing package via stores ?",
    answer: "FALSE"
  },
  {
    title: "In case customer hasn't Password on CST 360 , right SR is : ",
    answer: "FBB Tech Inquiry >> ​User name and Password  >> ​No Password on CST 360"
  },
  {
    title: "we can compensate CST  for tkt",
    answer: "data down"
  },
  {
    title: "if cst ask about concession and no outage id on CST360 and no bss SR related to outage we must check change location in matrix logs ",
    answer: "TRUE"
  },
  {
    title: "While Following Logical Instability Case( No Multiple logs)  with Cst : we found packet loss from cpe IP = 0 % after , we found packet loss from google was = 35% ,, CCA Action",
    answer: "Escalate to SLS"
  },
  {
    title: "CCA can handle any technical issue with cst if subscribe on Family Service :",
    answer: "FALSE"
  },
  {
    title: "we can create outage concession  starting from 12 H for case ",
    answer: "Data down outage"
  },
  {
    title: "incase we need to escalate unable to obtain ip case at 2 PM, its not mandatory to ask cst about ON Call before escalation ",
    answer: "True"
  },
  {
    title: "IF Redirection page Case not solved tkt SLA will be ",
    answer: "72 H"
  },
  {
    title: "Slowness Case Escalated To :",
    answer: "NOC"
  },
  {
    title: "Customer has  outage Data Down on CST 360 and call us within first 2 hours  ,, right SR is  :",
    answer: "FBB Tech Problem >> Outage - Data Down>> within SLA"
  },
  {
    title: "in case CCA face any issue in HDM Portal CCA must snapshot of the error and make the Suitable SR",
    answer: "True "
  },
  {
    title: "Cst suffering from instability in ADSL services , Line Supported by ASSIA and clear view result was ( Technical dispatch ) , CCA Action ......",
    answer: "Handle physical instability problem"
  },
  {
    title: "first step in Redirection page case Redirection",
    answer: "Restart port"
  },
  {
    title: "Incase CST subscribed on option pack service and at the same time has physical instability case ...you will follow the troubleshoot normally with the CST",
    answer: "FALSE"
  },
  {
    title: "if CST need to make change package with Higher or Same Amount Not Required Change Port after due date Via 111 CCA should inform cst to Recharge and call us through ….",
    answer: "1 H or Less"
  },

  {
    title: "If unable to obtain ip problem solved after make reset and configuration it's mandatory to check MAC address and create suitable sr",
    answer: "True"
  },
  {
    title: "we can compensate CST  for tkt",
    answer: "data down"
  },
  {
    title: "in unable to obtain ip case, ADSL Led in the cpe should be match matrix status",
    answer: "TRUE"
  },
  {
    title: "concession complain will be Add-ons and amount Add-ons",
    answer: "FALSE"
  },
  {
    title: "CST can subscribe in  Play Station packages From 111",
    answer: "FALSE"
  },
  {
    title: "Cst has Issue while watching videos CCA Action Handle Case :",
    answer: "Slowness In Streaming"
  },
  {
    title: "Incase cst has enabled account on Matrix Tool and has Suspended logs on Nst Tool at the same time and you can remove the suspension  from CST360 Tool  .....what is the right action",
    answer: "complete the troubleshoot normally"
  },
  {
    title: "if unable to obtain ip case escalated that's mean the cpe configured done and still can't obtain ip",
    answer: "True"
  },
  {
    title: "The Second priority For DNS Will Be :",
    answer: "Google DNS"
  },
  {
    title: " in case cst has unable to obtain ip and we found that cst subscribed in family service  .... what is the right action",
    answer: "Transfer cst to Family service Q"
  },
  {
    title: "CST can Change to a Package with Lower Amount If Account is Suspend due to Life Cycle reason ?",
    answer: "TRUE"
  },
  {
    title: "Customer has  outage Data Down on CST 360 and call us after  2 hours   ,, right SR is  : ",
    answer: "FBB Tech Problem >> Outage - Data Down >> No estimated time"
  },
 
  {
    title: "IF Redirection page Case not solved tkt will escalated to",
    answer: "SLS Second Level Suppor"
  },
  {
    title: "In case customer has Delete Matrix and ask about concession , the problem not solved , CCA informed customer when problem solved call us again ,, right SR :",
    answer: "FBB Non-Tech Inquiry--Billing Adjustment--Disapproved Concession"
  },
  {
    title: "We can check Change phone number activity  from ……..",
    answer: " OM & BSS Order query"
  },
  {
    title: "we will send SMS to cst in case approved concession or unreachable",
    answer: "TRUE"
  },
  {
    title: "if cst had unable to obtain ip case and the same time Mac Learned on matrix and the cst isn't new subscriber and did not make any change in cpe page what is the next step",
    answer: "Escalate direct to NOC"
  },
  {
    title: "SLA for Suspended account CST :",
    answer: "72 H"
  },
  {
    title: "Browsing Certain Sites is Customer up with no network problem, but can't browse any site?",
    answer: "False"
  },
  {
    title: "Customer has outage Data Down ,, first SLA is :",
    answer: "2 Hours"
  },
  {
    title: "CST Can Transfer Points on Old Mobile Number to The New Mobile Number",
    answer: "True"
  },
  {
    title: "unable to obtain ip tkt with NOC team has update (configure with the right user name and password) what is the right action",
    answer: "بشكل سليم username & Password كتابة"
  },
  {
    title: "If HDM is not opened with CPE data CCA not mandatory to inform customer to leave his CPE connected",
    answer: "FALSE"
  },
  {
    title: "Unable To Obtain IP Case will Re-escalate to :",
    answer: "NOC"
  },
  {
    title: "For Third Escalation Browsing all site case SLA Will be ?",
    answer: "2:5H"
  },
  {
    title: "CST can change package to super 200 GB Via branches ?",
    answer: "TRUE"
  },
  {
    title: "Customer has outage Wrong Card and Port „ first SLA is",
    answer: "No estimated time"
  },
  {
    title: "we will create concession tkt for cst if he has active account on BSS",
    answer: "TRUE"
  },
  {
    title: "NO need to verify with CST if he/she need to change package through us ?",
    answer: "FALSE"
  },
  {
    title: "IF browsing Case not solved tkt SLA will be",
    answer: "2 :5 h"
  },
  {
    title: "If there is an error in the data on the Matrix (for example, if the government code is not the same as the Order) „ right action is :",
    answer: "will create FBB Non Technical Request >> Internet Service >> Matrix Correction"
  },
  {
    title: "In case order activity is WO problem ( Change phone number order ) . Is it Same Process for Installation follow Up ?",
    answer: "TRUE"
  },
  {
    title: "Extra Package will be valid for 40 Days",
    answer: "FALSE"
  },
  {
    title: "It's mandatory for CCA to make logical verification steps before make unable to obtain ip steps",
    answer: "TRUE"
  },
  {
    title: "CST has Unable to Obtain IP case and at the same time cst Obtained from 2 Pools (WE Pool and Option Pack Pool) what is the right action ?",
    answer: "Transfer CST to Option Pack Queue"
  },
  {
    title: "CCA Can't Change MTU from HDM Tool :",
    answer: "False"
  },
  {
    title: "In case Delay in change VDSL port CCA right action is ?",
    answer: "Create Delay TT"
  },
  {
    title: "Corporate Deal One Invoice CST allowed to subscribe in Extra Quota From 111",
    answer: "FALSE"
  },
  {
    title: "While Escalate Unable to Obtain IP , CCA right TT :",
    answer: "Boradband->TechnciaI->ADSL/VDSL->l Care->Unable to obtain IP"
  },
  {
    title: "It's mandatory to inform cst let cpe turned on within escalation logical cases",
    answer: "TRUE"
  },
  {
    title: "In case there is HDM portal outage, CCA should",
    answer: "handle all HDM related cases manually"
  },
  {
    title: "Customer has Planned Outage and call us after estimated time but outage still exists on CST 360 „ your action is",
    answer: "Handle case normally"
  },
  {
    title: "complain concession will be created from complain team or Team leaders",
    answer: "True"
  },
  {
    title: "TTS should contain any update with Engineering Inspection to create concession for CST",
    answer: "FALSE"
  },
  {
    title: "While CCA change number of connected devices from HDM Tool , CPE must be restarted",
    answer: "TRUE"
  },
  {
    title: "Cst is calling has browsing all site and after Ping Google Domain Not Replay Then Ping Google IP is Reply „ next step",
    answer: "Do flush Dns Is Using Pc/Laptop OR Add Dns WE"
  },
  {
    title: "Way of communication incase we escalated the suspension case ? ",  
    answer: "All above"
  },
  
  {
    title: "incase cst has (wrong NAS : Port ID ) on nst logs and we will escalate the sla will be",
    answer: "2:5 H"
  },
  {
    title: "we can compensate CST for tkt",
    answer: "data down"
  },
  {
    title: "Redirection page its meaning that cst",
    answer: "consumed 80% or 100 % from his quota"
  },
  {
    title: "CST can make change ( mobile number & e-mail ) through",
    answer: "All of the above"
  },
  {
    title: "Customer has outage Major Fault SLA is",
    answer: "3 Days"
  },
  {
    title: "Corporate Customer ( individual ) Can change speed from 111 ?",
    answer: "TRUE"
  },
  {
    title: "we can compensate cst for Data Down tkt starting from 12 hours",
    answer: "True"
  },
  {
    title: "CCA Can Getting the default CPE page password",
    answer: "HDM tool"
  },
  {
    title: "while escalate unable to obtain ip case it's not mandatory to check ON Call process before escalation",
    answer: "FALSE"
  },
  {
    title: "it's mandatory for CCA while escalating unable to obtain ip to inform CST to leave his CPE ON during escalation period",
    answer: "True"
  },
  {
    title: "No Need Any attach screenshot from Assia While Handle Slowness With Cst",
    answer: "FALSE"
  },
  {
    title: "CCA can check cst subscription from NST tool from :",
    answer: "Query LDAP Profile"
  },
  {
    title: "while escalate unsupported case CCA must inform CST with Ticket ID",
    answer: "TRUE"
  },
  {
    title: "customer has Port Time out on Matrix , Customer is UP , , no outage , and has voice down „ right action is :",
    answer: "handle Port Time out and voice down"
  },
  {
    title: "if cst has unable to obtain ip and the reason is Wrong Credentials and problem solved after adjust him and the cpe obtained ip and internet working fine what is the suitable sr",
    answer: " FBB Tech Problem>Unable to obtain IP>Wrong credentials"
  },
  {
    title: "if unable to obtain ip case solved after make cpe configuration what is the suitable sr",
    answer: "FBB Tech Problem>Unable to Obtain IP>CPE Configuration"
  },
  {
    title: "cst will be compensated with amount or Extra quota",
    answer: "True"
  },
  {
    title: "CST has Port Time out  on Matrix , there is  Outage Down Management on  CST 360  ,, right action is",
    answer: "follow TS Port Time out Port Time"
  },
  {
    title: "No need to verify with CST if he/she need to change mobile number ?",
    answer: "FALSE"
  },
  {
    title: "While handle  Logical Instability Case with Cst : Packet loss For Google Ip percentage was 30% ,, Next step will be..",
    answer: "ping -t on cpe ip"
  },
  {
    title: "CST can make change package with Higher or Same Amount After Due Date Via ……",
    answer: "Both of them"
  },
  {
    title: "  CCA must check WPS led from CPE if it's turned on or off for the CPE configuration & Re-configuration scenarios and offer on customer to turn it off for more security",
    answer: "True"
  },
  {
    title: "If HDM is opened with CPE data but faced any action issue , right SR : ",
    answer: "FBB Tech Problem>HDM Tool>Function Issue"
  },
  {
    title: "customer has order call back to CRM , and  no  matrix ,, right action is :",
    answer: "will create FBB Non Technical Request  >> Internet Service >> Matrix Creation"
  },
  {
    title: "We have three type of Change phone number ?",
    answer: "FALSE"
  },
  {
    title: "if cst subscribed on super 100 G and ask to make early renewal from CSO will be available ?",
    answer: "FALSE"
  },
  {
    title: "if cst asked about payment methods CCA will create SR :",
    answer: "FBB Non-Tech Inquiry--Paument Methods-- General Info"
  },
  {
    title: "if the customer paid through Fawry and the payment is not clear If we find Outage we will inform CST to wait 24 h from the time he pay",
    answer: "TRUE"
  },
  {
    title: "In case customer inquiring about his recharged balance but added on wrong service number CCA will create SR :",
    answer: "FBB Non-Tech Inquiry --BiIIing--Recharge on Wrong number"
  },
  {
    title: "if cst downgraded by mistake CCA will create TT with sla :",
    answer: "2 WH"
  },
  {
    title: "If cst asked about renewal date CCA will create SR :",
    answer: "FBB Non-Tech Inquiry-- Billing-- Renewal date"
  },
  {
    title: "in case CST disabled by mistake CCA will create TT with sla :",
    answer: "1 WH"
  },
  {
    title: "In case the speed of the customer on the Matrix is less than his speed on BSS, we will make TT with SLA 24 hours",
    answer: "FALSE"
  },
  {
    title: "We can Compensate cst if he change his offering By mistake through E-care within........... from his Action",
    answer: "24 h"
  },
  {
    title: "CST asked about ( Bank check ) payment method, SR will be",
    answer: "FBB Non-Tech Inquiry--Payment Methods--Bank Check"
  },
  {
    title: "If customer Ask for Suspension , It will be without Required Papers",
    answer: "FALSE"
  },
  {
    title: "Customer paid his landline bill, matrix disabled and still within the automatic reactivation SLA ,  CCA will create SR:",
    answer: "FBB Non Tech Inquiry --Disabled Matrix-- Paid TE Bill-within Reactivation SLA"
  },
  {
    title: "In case Customer Want to make  resume the service ( after suspension Upon Customer Request) Can Make It Through :",
    answer: "111 & Branches"
  },
  {
    title: "In case CST asked about ( resumption after suspension ), Right SR :",
    answer: "FBB Non-Tech Inquiry>Internet Service>Resumption after Suspension"
  },
  {
    title: "The account on BSS  will be transferred to Deactivation  , if the customer has not paid for …….. days since the last day of the last invoice",
    answer: "180 Days"
  },
  {
    title: "In Case Cst has suspended account with reason (Fraud Broadband Migration) SLA is :",
    answer: "3 WD"
  },
  {
    title: "In case cst Type is  (Corporate Individual OR AL ) want to Migration To FTTH CCA Right Action :",
    answer: "Create TT (Corporate Broadband > Non tech Request > FTTH Migration ) With 24WH"
  },
  {
    title: "In case cst has Order Migration with status (Check Compound Direct support) CCA Right action",
    answer: "Transfer to FTTH Team Q"
  },
  {
    title: "In case customer account  Black List ,,  customer is available to make :",
    answer: "He can charge abalance to renew the current package"
  },
  {
    title: "SLA From FTTH Migration Order status ( Survey ) Will be :",
    answer: "3 WD"
  },
  {
    title: "In case ( Corporate Customer ) Requests cancel the service , CCA should :",
    answer: "Direct cst to the delegate or the corporate department"
  },
  {
    title: "If CST Complain from Cancellation Process , Right SR :",
    answer: "FBB Non-Tech Complaint>>Service Cancellation>>Ask for Cancellation"
  },
  {
    title: "Customer should call us from the same service number or mobile number which is updated on BSS to start offering ( retention front line matrix )",
    answer: "True"
  },
  {
    title: "If the customer asking about Refund , Right SR :",
    answer: "FBB Non-Tech Inquiry---Service Cancellation----Ask for Refund"
  },
  {
    title: "CCA should ask customer about reason for cancellation ( Before ) follow cancellation request:",
    answer: "True"
  },
  {
    title: "In Retention Offering, Agent should offer the Free quota add-ons then offer the same package discount add-ons :",
    answer: "True"
  },
  {
    title: "Retention Team working hours :",
    answer: "From 10AM  to 9 PM"
  },
  {
    title: "Corporate customer requests a refund, CCA action:",
    answer: "Direct cst to the delegate or the corporate department"
  },
  {
    title: "SLA for cancellation request from (We app & E-care) is :",
    answer: "4WH"
  },
  {
    title: "In case customer requests about ( Cancellation number ), the number appears on the System, CCA will inform the cst it and create SR :",
    answer: "FBB Non Tech follow up--Service Cancellation--Call back to CRM"
  },
  {
    title: "WHICH OF THE FOLLOWING IS APPIPA IP",
    answer: "168.254.0.1"
  },
  {
    title: "WHICH OF THE FOLLOWING IS RESPONSIBLE FOR REMOVING THE WELDING FROM MAIN WIRE",
    answer: "ROSSETTA"
  },
  {
    title: "WHICH OF THE BELOW IS RESPONSIBLE FOR ASSIGING AUTOMATIC LAN IP`S TO THE PRIVATE DEVICES WHICH ARE",
    answer: "DHCP"
  },
  {
    title: "If your device is one of 50 devices connected with each other in the same place throw the switch, so it means that you are in",
    answer: "LAN"
  },
  {
    title: "CHECK AVAILABILITY RESULT MUST BE ……. T O USE IT IN NEW CONTRACTING",
    answer: "[RESULT STATUS : VALID] [AVAILABILITY RESULT : AVAILABLE]"
  },
  {
    title: "The ideal connection for main wire connection is coming the line from the BOX to splitter, then CPE and telephone set",
    answer: "TRUE"
  },
  {
    title: "you can use Ethernet Cable only to make CPE configuration",
    answer: "FALSE"
  },
  {
    title: "The right connection for the PBX to connect it after the splitter",
    answer: "TRUE"
  },
  {
    title: "While configuration we should not change CPE password page if it was admin",
    answer: "FALSE"
  },
  {
    title: "We have two types of connections (Main wire and wall outlet)",
    answer: "TRUE"
  },
  {
    title: "Which of the below is the responsible for translating any domain name into IP and Vice Versa",
    answer: "DNS"
  },
  {
    title: "Which of the following makes it harder for hackers to breake the connection and steal the information",
    answer: "HTTPS"
  },
  {
    title: "Which of the below devices is responsible for assigning WAN IPs to CPEs",
    answer: "BRAS"
  },
  {
    title: "DHCP is assigning automatic LAN IP`s to the private devices but NAT is responsible for translating the Private IP into Public IP",
    answer: "TRUE"
  },
  {
    title: "RADIUS is responsible to make sure that customer using his US & PW which are on our system & related to his line",
    answer: "TRUE"
  },
  {
    title: "In Cpe configuration “VDSL” Parameters XDSL Transfer Mode should be",
    answer: "PTM"
  },
  {
    title: "In case line is FTTH .. Contracting done first for second phone NO then the first phone NO",
    answer: "TRUE"
  },
  {
    title: "Requested date Frome CTS for check avialability",
    answer: "Full name Mobile Full address Id number"
  },
  {
    title: "Cts can contract for new land line through",
    answer: ""
  },
  {
    title: "The period available for contracting in case availavility result was available is",
    answer: "14D"
  },
  {
    title: "There is sms will be send to cts contian check availability request SN",
    answer: "TRUE"
  },
  {
    title: "CCA MUST CHOOSE ONE OF THOSE CHOISES WHEN HE MAKE CHECK AVAILABLITY REQUEST",
    answer: "FTTH COMPOUND/OTHER/ MSAN FTTH EXCHANGE"
  },
  {
    title: "We can follow up on check availability request result through BSS From",
    answer: "Sitemap integrated operations search availability PSTN"
  },
  {
    title: "MSAN installation cycle SLA within 48 H",
    answer: "True"
  },
  {
    title: "cst want to renew his package ( WE Ardy 35 Quarter ) ,, CCA will inform him to pay ……. LE at least",
    answer: "122"
  },
  {
    title: "Modify reason ( Customer Request ) will be done for free for..",
    answer: "two times"
  },
  {
    title: "WE Ardy 20 Quarter price includind fees is",
    answer: "68.4 LE"
  },
  {
    title: "In Case CCA found Automatic TT(Automatic TT FV>>Customer Subscription>>OSS TDM Registration)CCA Action will be..",
    answer: "inform customer that someone will communicate with him within SLA 24 hours and in case of delay will renew SLA"
  },
  {
    title: "Before renewal date there is sms sending to CST to reminde him to pay his bill",
    answer: "TRUE"
  },
  {
    title: "SLA for waiting service (VAS) from 111 or exchange",
    answer: "On spot"
  },
  {
    title: "The period of temporary suspension for quarter new FV CST IS :",
    answer: "210D"
  },
  {
    title: "In case CTS didn`t pay his land line bill .. Line will be reciving only for Quarter new FV CST for ..",
    answer: "3D"
  },
  {
    title: "We can know all payment to FV CST from BSS",
    answer: "TRUE"
  },
  {
    title: "CTS can ask to move his land line through",
    answer: "SALES BRANCHES"
  },
  {
    title: "If CST subscribed in internet from another ISP .. He can ask to move land line without cancel service with the other ISP",
    answer: "FALSE"
  },
  {
    title: "SLA for change phone NO is",
    answer: "On spot"
  },
  {
    title: "In case CST consume his package … he can",
    answer: "ALL OF ABOVE"
  },
  {
    title: "Calling we mobile and local calls are active without CST Request",
    answer: "True"
  },
  {
    title: "Before renewal date there is SMS sending to CST to remind him to pay his bill",
    answer: "True"
  },
  {
    title: "CST can request to make his land line reciving only and do not pay his subscription fees",
    answer: "False"
  },
  {
    title: "CST can transfer from we to orange twice per year",
    answer: "False"
  },
  {
    title: "Start speed for Super up to 30 is :",
    answer: "2Mps"
  },
  {
    title: "Corporate CTS want to cancel corporate deal subscription CCA action will be :",
    answer: "Direct CTS to his spoc + create SR"
  },
  {
    title: "Postpaid one invoice bill cycle is",
    answer: "Day 1or Day22 from each month"
  },
  {
    title: "Any CST can call us only from 111 - 19777",
    answer: "False"
  },
  {
    title: "If CST want to subscribe with us we should check the following :",
    answer: "Check availability and landline bills"
  },
  {
    title: "If CST is only above 60 years old . CCA will consider him eligble for door to door",
    answer: "False"
  },
  {
    title: "We can search on Matrix using adsl NO only",
    answer: "False"
  },
  {
    title: "From which tool CCA can check port type",
    answer: "MATRIX"
  },
  {
    title: "Any CST can subscribe on option pack or family filter service now :",
    answer: "False"
  },
  {
    title: "The first tool to check land line bills should be :",
    answer: "CST PROFILE MANGEMENT"
  },
  {
    title: "we can get BRASS IP from MATRIX tool :",
    answer: "True"
  },
  {
    title: "We inform our CST by throttled speed even if he didn`t ask :",
    answer: "false"
  },
  {
    title: "If CST neet to transfer frome orange to we we should inform him go and get Cancellation NO",
    answer: "false"
  },
  {
    title: "WE can check CST WAN IP from MATRIX tool",
    answer: "True"
  },
  {
    title: "Corporate new subscription through :",
    answer: "SPOC + CORPRATE MANGEMANT"
  },
  {
    title: "CST can get US&PW from IVR 3 times per day .. ?",
    answer: "false"
  },
  {
    title: "If CST need to change package before installation it mandatory To CCA to verify with customer .. ?",
    answer: "True"
  },
  {
    title: "After adding CST`s landline NUMBER to make SR or TT CCA should press on .. ?",
    answer: "RETRIAVE"
  },
  {
    title: "CCA will press on …. To create SR or TT .. ?",
    answer: "submit"
  },
  {
    title: "CCA can change CST`s mobile number from BSS by choosing .. ?",
    answer: "Modify subscriber info + modify CST Information"
  },
  {
    title: "CCA can make SR or TT by choosing .. ?",
    answer: "Create Service Request"
  },
  {
    title: "Cca can add salfni service from … ?",
    answer: "Change offering"
  },
  {
    title: "Cca can make resuem and unbar to … ?",
    answer: "Remove Requested susbend"
  },
  {
    title: "CCA can know CST balance from BSS .. ?",
    answer: "True"
  },
  {
    title: "Network activation activity means that CST will have profile on .. Tool",
    answer: "Matrix"
  },
  {
    title: "Incase WO problem AUTOMATIC TT will be created .. ?",
    answer: "True"
  },
  {
    title: "CST has noise problem not related to physical issue after checking from cordless phone set no noise detected CCA next action will be ?",
    answer: "Create SR Phone set problem"
  },
  {
    title: "CST has noise problem after checking from cordless phone set connected from main directly noise still the same CCA next action will be",
    answer: "Escalate Voice Down"
  },
  {
    title: "IF CST has landline bill with amount 25 LE CCA action will be",
    answer: "continue TS"
  },
  {
    title: "In case C.ST informs us to not dose the ticket till testing the service from his side Which SR CCA will create...?",
    answer: "FBB Tech Problem Voice Down CST will test the service"
  },
  {
    title: "In case the customer faced any technical issue related to voice with no clear process",
    answer: "escalate voice down with following the normal escalation process Create SR"
  },
  {
    title: "CST has physical instability Issue and in the same time has voice down CCA action will be ...?",
    answer: "Escelate Voice down TT + Mention Troubleshooting In TTS Logs"
  },
  {
    title: "Voice Down Ticket With update (solved from the box) and CST still have the same problem CCA action will be ?",
    answer: "Troubleshoot as Voice Verification"
  },
  {
    title: "CST is calling from different landline number and inform us that voice is working after checking it from phone set connected from main CCA action will be...?",
    answer: "Consider Voice Up + Create SR"
  },
  {
    title: "while calling CST's landline number CCA found that line is busy CCA action will be...?",
    answer: "Consider Voice Down + Create TT"
  },
  {
    title: "A CST said that when he pickup the phone to call anyone he hears a sound of a cst CCA action will be ...?",
    answer: "Escalate as Voice Down"
  },
  {
    title: "Line blocked on matrix and CST has unpaid internet bill CCA action will be ...?",
    answer: "Inform CST to pay internet bill and create SR"
  },
  {
    title: "CST has noise problem not related to physical issue and hasn't cordless phone set CCA action will be ...?",
    answer: "Let customer check with another phone set and feed us back"
  },
  {
    title: "CST has problem in Call waiting service CCA action will be ..?",
    answer: "Transfer CST to fixed line VDN"
  },
  {
    title: "Customer problem voice not working or out of service after pay bill after cut off and informed that issue started before cutoff date , CCA Right Action",
    answer: "Phone set available step"
  },
  {
    title: "If Data Down case need to be escalated for the third time SLA will be:",
    answer: "1 DAY"
  },
  {
    title: "If you follow Data Down Case steps , SELT result is 50 meters and MSAN: Yes you will:",
    answer: "Check connection type"
  },
  {
    title: "If CST has Data Down and Power Failure ticket title & Category will be",
    answer: "Data Down Power Failure"
  },
  {
    title: "If CST has power failure and no availability to check with another CPE you will:",
    answer: "Try in another wall plug"
  },
  {
    title: "Voice is not working also ADSL LED in CPE blinking or turned off you will consider the case:",
    answer: "Data and Voice Down"
  },
  {
    title: "Way of communication with CST in escalation Data Down to IU will be:",
    answer: "Call or SMS or Recorded Message"
  },
  {
    title: "If all leds in CPE on except power led you will:",
    answer: "Consider there is no problem"
  },
  {
    title: "If CST has Data Down Case and connected form main wall outlet and problem solved you will:",
    answer: "Create TT for Pilot follow up team and inform CST with 2 hours SLA"
  },
  {
    title: "If CST has Data Down Case and need a visit, the technician can check the internal wiring or Change CPE:",
    answer: "FALSE"
  },
  {
    title: "If CST has Data Down case and ADSL led became up after SELT you will:",
    answer: "Follow Instability troubleshoot"
  },
  {
    title: "Its not mandatory in Data and Voice Down to keep CPE turned on:",
    answer: "FALSE"
  },
  {
    title: "If CST called us and informed that he has stolen cable you will consider the case as:",
    answer: "Data and Voice Down"
  },
  {
    title: "If you found a visit performed update in TTS and CST called us after 2days from this update you will:",
    answer: "Re troubleshoot with the CST"
  },
  {
    title: "Power Failure means:",
    answer: "Power led not working or working with red color"
  },
  {
    title: "In case CST has TKT with update Major Fault Problem with estimated time 4 Months, CCA right action :",
    answer: "Will inform cst with no estimated time"
  },
  {
    title: "In case of delay while customer has Major Fault update with no estimated time, still no outage on CST360 and Customer face the same problem CCA right action :",
    answer: "Will renew SLA 3 days"
  },
  {
    title: "CST has WCAP With Update ( Re splitted on correct Frame )CCA right action :",
    answer: "Re-Troubleshoot the case"
  },
  {
    title: "CCA will Re escalated ticket (Wrong Card and Port) to IU , So the right SR :",
    answer: "FBB Tech Problem>Wrong Card and port>Re Escalation"
  },
  {
    title: "While Escalate Ticket WCAP to IU , TTS status will be :",
    answer: "OPEN"
  },
  {
    title: "Cst has WCAP Problem and cst doesn't beside his CPE so the right SR :",
    answer: "FBB Tech Problem Wrong Card and port Not beside CPE"
  },
  {
    title: "In case CCA follow with CST WCAP Case and while CCA Check with cst Voice verification CST ask that he will Check his voice and call us again , So CCA right SR :",
    answer: "FBB Tech Problem>Data Down>Will Check Voice & FUB"
  },
  {
    title: "In Case Customer follow on his ticket Within SLA for Re escalated ticket , So the right SR :",
    answer: "after sla !fib tech problem>wrong card & port>follow up after re escalation within SLA"
  },
  {
    title: "In case customer has Major Fault update with no estimated time while no outage on CST360 and Passed SLA , CCA right action",
    answer: "will Re escalate the ticket again"
  },
  {
    title: "In case ticket returned with update ( Duplicated ), CCA right action according to the customer's case",
    answer: "will create the below SR ( Broadband>Technical>ADSL/VDSL>CC service Activation>Global Problem )"
  },
  {
    title: "Cst has Ticket Data Down with Update ( Morkzat ), So CCA right action",
    answer: "Update the ticket without withdrawing"
  },
  {
    title: "Cst has Ticket Data Down with Update ( Morkzat ) , So CCA will Inform cst with SLA",
    answer: "3 Days"
  },
  {
    title: "While escalating physical instability should check voice Verification first",
    answer: "TRUE"
  },
  {
    title: "What is the meaning of NO DSL PHYSICAL LAYERS ?",
    answer: "No physical problem is facing CST"
  },
  {
    title: "while troubleshooting physical instability , Clear View Result After Search No action can be recommended because some DSL are down  ,next action is :",
    answer: "continue as if it is not supported by ASSIA"
  },
  {
    title: "while troubleshooting Physical Instability, CCA found 68 L.E Bill passed grace period CCA action will be :",
    answer: "Stop troubleshooting and ask CST to pay the bill first"
  },
  {
    title: "while troubleshooting physical instability , connection type : wall outlet , the next step is :",
    answer: "Check if connection Right or Wrong"
  },
  {
    title: "while troubleshooting physical instability , connection type : wall outlet , connection is right the next step is :",
    answer: "Check splitter existence before cpe"
  },
  {
    title: "While escalating physical instability case CCA should check voice verification",
    answer: "TRUE"
  },
  {
    title: "what the meaning of clear view result after search NO dsl physical layer issue is detected",
    answer: "As per assia observation the cst problem not physical"
  },
  {
    title: "Customer has physical instability ticket with Update (CPE Problem ) and problem solved after checking with another CPE , right SR is",
    answer: "FBB Tech Problem > Physical Instability > CPE Problem"
  },
  {
    title: "while troubleshooting physical instability , CCA found Landline bills is 65 LE and passed the grace period , right action is",
    answer: "Stop troubleshooting and inform CST that he has to pay his bills first"
  },
  {
    title: "Third Escalation of Physical Instability case will be to",
    answer: "IU"
  },
  {
    title: "while troubleshooting physical instability , connection type : Main wire , CST informed us he will connect from his main and call us later , right SR is",
    answer: "FBB Tech Problem > Physical Instability > Will connect from main wire"
  },
  {
    title: "Customer has physical instability ticket with Update (CPE Problem ) and CST informed us he will try with another CPE and call us later right SR is",
    answer: "FBB Tech Problem > Physical Instability >Will try with another CPE"
  },
  {
    title: "Third Escalation of Physical Instability case , SLA will be",
    answer: "1 Day"
  },
  {
    title: "while troubleshooting physical instability Contradiction , No Faults Exist , CCA will advise customer to check with another CPE , if not available with CST another cpe , right action is :",
    answer: "Direct customer to check his CPE In CSO and get test CPE if needed"
  },
  {
    title: "In physical instability „ CCA should attach screenshots of selected mode and Clear View result and history in TTS logs",
    answer: "FALSE"
  },
  {
    title: "Customer has ticket Physical Instability in IU , and CST called us after 3 days and ticket still in IU , Right SR is",
    answer: "FBB Tech Problem > Physical Instability > Follow up After SLA"
  },
  {
    title: "Physical Instability Contradiction will be escalated to :",
    answer: "Second level advanced"
  },
  {
    title: "Delay SLA for Physical Instability is ...?",
    answer: "1 Day"
  },
  //day 12
  {
    title: "In BLQ Case, when make sett you must inform cst to disconnect g 11 from cpe",
    answer: "TRUE"
  },
  {
    title: "CST has BLQ ticket with update Welding Removed and no change done from cst side and after run assia clear view . result was No DSL physical layer issue detected so you will",
    answer: "ReTroubleshoot as BLQ Supported By ASSIA in Ticket Maker."
  },
  {
    title: "Cst has BLQ Case ,CST belong to north sinai and his operational speed is 15 M you will :",
    answer: "stop escalation and inform customer with script"
  },
  {
    title: "Customer asked that the Internet working but slow and after CCA check Quota found that customer Exceeded Quota . So CCA right SR is",
    answer: "F8B Tech Problem>Slowness DoemloackExcecel Quota"
  },
  {
    title: "In case CCA take screen shots from selected clear view mode and its result, History check should be included in the snapshots",
    answer: "FALSE"
  },
  {
    title: "CCA should attach screen shot from matrix ( Attainable & Configured Speed ) in case not Supported by Assia",
    answer: "TRUE"
  },
  {
    title: "Way of communication while escalating BLQ case will be (Call f SMS) Only?",
    answer: "FALSE"
  },
  {
    title: "if CST belong to north sinai and need to re escalation after 3rd level update , line is cabin and operational speed is 2 M you will:",
    answer: "Escalate BLQ"
  },
  {
    title: "In case of customer has BLQ case and during the troubleshooting , CCA found that Voice is down , CCA right action is",
    answer: "Escalate as voice down and mandatory add all BLQ TS steps"
  },
  {
    title: "IF customer number belongs to Haya Karima and Customer operational speed is 2 Mb so CCA right action is :",
    answer: "Follow normal troubleshooting for BLQ"
  },
  //day 13
  {
    title: "If CST informed that we change his/her phone number but we didn't found any order on system. What action needed ?",
    answer: "Create TT with sla 4"
  },
  {
    title: "CST can use WE BONUS POINTS On Old Mobile Number if he change the mobile number ?",
    answer: "TRUE"
  },
  {
    title: "If there is a delay in order Change phone number. CCA will :",
    answer: "renew SIA 48 hours again"
  },
  {
    title: "Change phone number SLA is ?",
    answer: "48 WH"
  },
  {
    title: "If CST need to Change speed requires Change Port On or After Due Date or Suspend Life Cycle. What is the right action ?",
    answer: "We will inform the customer that he pays for the current package and requests the change at least 7 days before the renewal date"
  },
  {
    title: "SLA if CST need to make change package with Higher or Same Amount Not Required Change Port after due date Via 111",
    answer: "1 WH"
  },
  {
    title: "If we didn't found any order on system Due To Change Phone Number To Cst CCA Will Create TT",
    answer: "FBB Non Technical Request Change phone number MSAN"
  },
  {
    title: "CST can make change ( mobile number & e mail ) through :",
    answer: "Mobile App or E-Care Stores Call Center"
  },
  {
    title: "We can check from …….If Change phone number is MSAN or CST Request",
    answer: "OM"
  },
  {
    title: "If Corporate CST on Super 250 GB and asks to make Downgrade to super 200 GB ?",
    answer: "FALSE"
  },
  {
    title: "Account status should be active if CST need to change mobile number",
    answer: "TRUE"
  },
  {
    title: "يمكنك كممثل للدعم الفني معرفة اذا كان العميل مشترك علي أي خدمة من الخدمات الإضافية عن طريق",
    answer: "BSS Tool"
  },
  {
    title: "CCA can change CPE PW from HDM tool",
    answer: "FALSE"
  },
  {
    title: "In Case Unable To Obtain IP , Router ADSL LED matches with Matrix Status while restarting :",
    answer: "True"
  },
  {
    title: "While Customer Account is enabled on Matrix but suspended senfice on NIST and it's available to remove suspension from customer 360 Case . CCA light action",
    answer: "complete troubleshooting"
  },
  {
    title: "Delay SLA for Unable To Obtain IP is",
    answer: "2-5 H"
  },
  {
    title: "Customer Follow up escalated ticket ( Unable To Obtain IP ) but it was pass SLA , So right SR is",
    answer: "FBB Tech Problem>Unable to Obtain IP>Follow up After SLA"
  },
  {
    title: "In case problem is solved without troubleshooting and there is no other technical issue effects on customers line according to his input and system , So the right SR :",
    answer: "FBB Tech Problem>Unable to obtain IP <Solved without TS"
  },
  {
    title: "While Escalate Unable to Obtain P , CCA right TT",
    answer: "Boradband Techncial -->AD 51,0 SL ICare -->Unable to obtain IP"
  },
  {
    title: "While follow with cst Unable to Obtain T.S and from Matrix MAC leaned , So the next step :",
    answer: "Ask customer if there is any changes on CPE configurations"
  },
  {
    title: "HDM must used for all CPE`s",
    answer: "FALSE"
  },
  {
    title: "If Unable to obtain case is solved with CPE configuration , So the right SR",
    answer: "FBB Tech Problem>Unable to Obtain IP>CPE Configuration"
  },
  {
    title: "Unable To Obtain IP Case will Re escalate to :",
    answer: "NOC"
  },
  {
    title: "Unable To Obtain IP Case with update ( Configure with the right UN & PW ) so CCA right action is :",
    answer: "Adjust ADSL Credentials"
  },
  {
    title: "In Case Customer ask 1 St he has unable To Obtain Issue but cst CPE not connected and cst ask that he will Connected",
    answer: "IFBB Tech Problem>Unable To Obtain>Not beside CPE"
  },
  {
    title: "Customer has Unable To Obtain case and obtained from 2 pools from WE Pool and Option pack ,So CCA right action is :",
    answer: "Transfer CST to option Pack Queue"
  },
  {
    title: "While Customer Account is enabled on Matrix but suspended service on NST , CCA can remove suspension from",
    answer: "CST 360"
  },
  {
    title: "While Customer Account is enabled on Matrix but suspended service on NST and not available to remove suspension from customer 360 Case will be escalated",
    answer: "SLS"
  },
  {
    title: "In Case came with cst Unable To Obtain IP case and Customer subscribed in a value added service ( Family Filter ) , CCA right action :",
    answer: "Transfer CST to Family Queue"
  },
  {
    title: "its mandatory to inform cst let cpe turned on within escalation",
    answer: "TRUE"
  },
  {
    title: "cst has browsing case (one site only is working) cst has ? browsing certain site",
    answer: "browsing all site"
  },
  {
    title: "For Escalation Browsing all site case sla Will be ?",
    answer: "2:5H"
  },
  {
    title: "For Escalation Browsing certain site case support group Will be ?",
    answer: "Second Level Support"
  },
  {
    title: "In case CST has Locked CPE , we can direct cst to CSO to configure it",
    answer: "FALSE"
  },
  {
    title: "IF CST has logical instability and Multiple Login more than 3 min your next step is",
    answer: "Reset and reconfigure"
  },
  {
    title: "If CST has logical instability case and need to make reset and configuration CCA must use HDM tool if CST has CPE (WE)",
    answer: "TRUE"
  },
  {
    title: "IF CST has packet loss from CPE IP 5 %, CCA Action...",
    answer: "Inform Customer that there is no problem from WE Side and We will help as much as we can"
  },
  {
    title: "IF CST has logical instability no multiple Login CST has smart phone and after ping on Google IP you find packet loss 35 %, your action",
    answer: "Ping CPE IP using PC or lab top connected vith Cable"
  },
  {
    title: "IF CST has logical instability multiple Login less than or equal 3 min ,cpe Rested and reconfigured but still the same issue„ CCA Action",
    answer: "Escalate to NOC"
  },
  {
    title: "CST has logical instability no multiple Login you can follow with him by using smart phone",
    answer: "TRUE"
  },
  {
    title: "TTS tickt logical instability and has update( No problem from network side let customer check his CPE) „ CCA Action",
    answer: "Let customer check with another CPE"
  },
  {
    title: "In case CST informs as to not close the ticket till testing the service from his side",
    answer: "FBB Tech Problem» Logical ,stability »CST will test the service"
  },
  {
    title: "ticket logical instability in NOC Pool and CCA informed CST he within SLA and most create SR",
    answer: "FBB Tech Problem» Logical Instability -Multiple Logs»Follow Up"
  },
  {
    title: "We support all customer issues or requests unless there was clear update that this issue, problem, service, .... not supported from outside",
    answer: "TRUE"
  },
  {
    title: "If customer asked about port 5060.. CCA Action",
    answer: "inform him that ( We provide internet service only and not responsible for any mobile application )"
  },
  {
    title: "In case cst has Line is congested or within ratio While Handle With Cst Ping Issue and not solved after T.S CCA Right Action",
    answer: "Deliver the script to customer"
  },
  {
    title: "In case cst has Ping result from Google IP 25% Next Step Will be",
    answer: "Ping Cpe 1p"
  },
  {
    title: "CST was using wireless and has download Issue CCA Action your action",
    answer: "Ping CPE Ip -t To make sure that respond time less than or equal <= 2and Lose 0%"
  },
  {
    title: "In case cst has slowness in Browsing After Adding WE DNs not solved CCA Action",
    answer: "Add DNS Google Then Restart port"
  },
  {
    title: "In case cst has slowness issue and Download Accepted Right SR",
    answer: "FBB Tech Problem > Slowness Download > Download Accepted"
  },
  {
    title: "SLA For Slowness Case Will Be",
    answer: "2:5 H"
  },
  {
    title: "In case cst his pop within ratio CCA will inform cst",
    answer: "Dsl دي تعتبر حاجه طبيعية بالنسبة لخدمة Shared bandwidth لانها تعتبر ويمكن حضرتك تحس بالبطئ في الوقت اللي بيكون فيه ضغط علي الشبكة"
  },
  {
    title: "CST has ticket with updated (Capacity Planning mail ) CCA Right Action",
    answer: "Inform Cst OTS Sla"
  },
  {
    title: "Escalation for Speed Variance case will be with SLA",
    answer: "72 WH"
  },
  {
    title: "CST Can make Trace Step Using Wifi",
    answer: "TRUE"
  },
  {
    title: "Escalation for Speed Variance case will be to :",
    answer: "Second level Support"
  },
  {
    title: "In case cst his Ping Google IP Result 0% loss Next Step Will be",
    answer: "Trace Google from customer side Using cable"
  },
  {
    title: "If CST has more than one device while T.S Slowness Case CCA Action",
    answer: "Check availability for connecting one device connect one device change wifi settings SSID and password"
  },
  {
    title: "In case CST line Congested Status in Matrix is ( Within Ratio ) and CST is complaining from Slowness, your action is",
    answer: "Stop troubleshoot and inform him with the script"
  },
  {
    title: "If customer was just asking about the existence of utilization problem in the pop, you can answer his/her question only without any troubleshooting",
    answer: "TRUE"
  },
  {
    title: "CST has Wireless problem No WLAN detected First action is",
    answer: "ensure that customer didn't hide his/her SSID"
  },
  {
    title: "CCA can offer on customer a technical visit to solve the coverage issue or to use a repeater ?",
    answer: "TRUE"
  },
  {
    title: "in case customer asked any general into related to repeater Or access point , the right SR will be",
    answer: "FBB Non-Tech Inquiry--Devices--WIFI repeater"
  },
  {
    title: "In case customer asked to configure wireless and the steps not done , So the right will be",
    answer: "FBB Tech Problem>Wireless>Wireless Configuration — Not done"
  },
  {
    title: "It's not mandatory when Customer Follow ( Unable to Connect to Wireless ) to Inform cst to be near the CPE as much as he/she can",
    answer: "FALSE"
  },
  {
    title: "In Case problem is solved after enable wlan button so the right SR",
    answer: "FBB Tech Problem>Wireless>Enable WLAN Button"
  },
  {
    title: "In Case Customer WLAN is connected but No internet Access and after check the internet via cable Still the same problem so CCA right action",
    answer: "Troubleshoot as Browsing case"
  },
  {
    title: "In Case Customer WLAN is connected but No internet Access and after check via cable Internet working so CCA next step",
    answer: "remove preferred network"
  },
  {
    title: "Case Customer only ask about his wireless password < so the right SR",
    answer: "FBB Tech Problem>Wireless>Need WI-FI password"
  },
  {
    title: "Customer has outage Data Down on CST 360 and call us after 2 hours ,, right SR is :",
    answer: "FBB Tech Problem >> Outage - Data Down >> No estimated time"
  },
  {
    title: "In case we found Submit error or Submit normally with no ticket created on TTS ,, your action is :",
    answer: "CCA will create ticket on Ireport /cases Attach Snapshot from Error Mentioned Mobile Number and all troubleshooting on Description"
  },
  {
    title: "Deleted Matrix Concession ,, SLA is :",
    answer: "2H"
  },
  {
    title: "Tools Outage „ SLA is",
    answer: "after 1 hour"
  },
  {
    title: "customer has Unplanned outage ( Wrong Card and Port ) started on 02:00 PM ;customer Called us 1st time at 03:30 PM ; Right SLA is",
    answer: "No estimated time"
  },
  {
    title: "We must inform the customer with the outage ID that if available on the cst 360 ?",
    answer: "TRUE"
  },
  {
    title: "customer has Data Down unplanned outage start from 1:00 PM „ customer called us at 4:00 pm and still the same problem „ right SR is",
    answer: "FBB Tech Problem >> Outage - Data Down >> No estimated time"
  },
  {
    title: "customer has order call back to CRM ; and no matrix ; will create FBB Non Technical Request >> Internet Service >> Matrix Creation",
    answer: "2 WD"
  },
  {
    title: "Port Time out and Access denied on Matrix „first SLA is :",
    answer: "2 hours"
  },
  {
    title: "CST has Port Time out on Matrix No Outage on CST 360 . ADSL UP . no logs „ next action is",
    answer: "Reset and configuration"
  },
  {
    title: "customer has Port Time out on Matrix start at 1:00 PM CCA informed within 2 hours . customer called us at 4:00 pm again „ SLA is",
    answer: "No estimated time"
  },
  {
    title: "cst has Wrong Profile on Matrix ..SLA",
    answer: "2-5 HOURS"
  },
  {
    title: "In case Normal cst has Ticket data and voice down with Tittle (Major Fault Problem ) and call us asked about Concession CCA Right Action",
    answer: "Create TT ( FBB Non Technical Request>Billing Adjustment >Tech Concession Global problem or outage )"
  },
  {
    title: "Telephonet Cst call us Today and has Ticket BLQ Closed in 1-3-2022 and need compensation about his ticket CCA Action",
    answer: "Inform cst Concession Process and Create (FBB Non-Tech Inquiry>Billing Adjustment>Technical Concession)"
  },
  {
    title: "SLA For Concession Revalidation Will Be",
    answer: "24H"
  },
  {
    title: "CST has tkt data down didn't esdated to 3rd level pool and cst need concession your action",
    answer: "dont create concession tkt and inform cst about concession process"
  },
  {
    title: "if cst subscribed on super 20 G and ask to make early renewal from 111 will be available ?",
    answer: "False"
  },
  {
    title: "if cst subscribed on super 100 G and ask to make early renewal from 111 will be available ?",
    answer: "False"
  },
  {
    title: "if cst is not eligible for balance fraction CCA will create SR",
    answer: "BB Non-Tech Complaint --Billing--Balance Fraction"
  },
  {
    title: "if cst make early renewal he will lose the old quota ?",
    answer: "True"
  },
  {
    title: "if CST need to make early renewal CCA should make verification with him",
    answer: "True"
  },
  {
    title: "cst can recharge his recharge card from",
    answer: "111 & IVR"
  },
  {
    title: "There are payment fees in the case of payment via KHADAMATY",
    answer: "True"
  },
  {
    title: "If Cst Paid From Fawry Service Will Working On Spot",
    answer: "True"
  },
  {
    title: "In Case Cst Paid From Online Methoud And Payment Not Clear On Bss The Right Action Will Be :",
    answer: "Inform Cst To wait 1H After Payment"
  },
  {
    title: "If Cst Paid From Bank Check And Payment Not Clear We Will Direct Cst To The Branch:",
    answer: "False"
  },
  {
    title: "IF CST PAID FROM BRANCHES AND PAYMENT NOT CLEAR SHOULD CREAT TT",
    answer: "False"
  },
  {
    title: "In case CST make Change Package Or Early Renewal and before Due Date package removed bye root operator What action needed ?",
    answer: "Create TT"
  },
  {
    title: "Can we compensate CST If he/she didn't informed with start date ?",
    answer: "TRUE"
  },
  {
    title: "If CST package on Matrix is lower than BSS and problem solved. Can we compensate CST for his paid period",
    answer: "TRUE"
  },
  {
    title: "Daily usage can show from BSS",
    answer: "TRUE"
  },
  {
    title: "if cst subscribed on super 100 G and ask to make early renewal from CSO will be available?",
    answer: "False"
  },
  {
    title: "If 180 days have passed since the last day of the last invoice and Customer ( not paid for this period ) The account on BSS will be transferred to Deactivation",
    answer: "True"
  },
  {
    title: "In case the account on BSS ( Deactivation ) and the Customer wants to pay and activate the service ( There is a Cancellation Note) , CCA action",
    answer: "Follow New Account process"
  },
  {
    title: "TE Sold, new line owner wants a new contract and (Didn't Have order cancellation for old user) ,right action is",
    answer: "Direct customer to cso for new subsaiption"
  },
  {
    title: "In case the reason of suspension is ( Manual Suspend HK ) , CCA Action",
    answer: "Inform Customer that this is because ( did not receive the ONT ) for Hayah Karima"
  },
  {
    title: "Which tool can check order migration from ADSL/VDSL TO FTTH service",
    answer: "OM Tool"
  },
  {
    title: "Migration to FTTH will be for free",
    answer: "True"
  },
  {
    title: "In case cst has migration to FTTH will recive",
    answer: "FREE ONT"
  },
  {
    title: "If CSt Need TO Know His Line Is Eligible To ration FTTH Can Know From :",
    answer: "Call Center"
  },
  {
    title: "In case Cst has Landline Only Can Migrate To FTTH",
    answer: "TRUE"
  },
  {
    title: "In Case Cst Has migration To FTTH Will Pay For New ONT Device",
    answer: "False"
  },
  {
    title: "In migration FTTH Cst Can Make Early Renewal",
    answer: "TRUE"
  },
  {
    title: "In Case Cst Has migrabon To FTTH His phone number will Be changed",
    answer: "False"
  },
  {
    title: "In Case Cst Has migration To FTTH Cst Will Pay Any Cost For This migration",
    answer: "False"
  },
  {
    title: "In Case Cst Has Suspended Account Can Make migration To FTTH",
    answer: "TRUE"
  },
  {
    title: "CCA can check from …. that the service is suspended due to Non-payment of the landline bill through ( Suspended Customer )",
    answer: "MATRIX"
  },
  {
    title: "In case the account on BSS ( Deactivation ) and the Customer wants to pay and activate the service ( There is no Cancellation Num ) , CCA action :",
    answer: "Transferred Cst to cancellation Q"
  },
  {
    title: "Customer can request Temporary suspension Through:",
    answer: "Branches"
  },
  {
    title: "Temporary suspension SLA :",
    answer: "On Spot"
  },
  {
    title: "In case Customer paid the package bill within 24 hours, and line is Active on BSS, and Get Online Service in matrix Not Blocked, CCA restarted port Problem solved) , CCA",
    answer: "Create SR ( FBB Non-Tech Inquiry-- Billing--Restart Port )"
  },
  {
    title: "Cst From Aswan And Has Order Migration With status ( Home Visit Dispatch ) SLA Will be :",
    answer: "5 WD"
  },
  {
    title: "Indigo FMC is available to migrate to Hayat karima",
    answer: "True"
  },
  {
    title: "In case CST is eligible and refused to create the order for him You will Create SR and mention his refusal in the service content or eligible but suspended",
    answer: "FBB Non Tech Inquiry-- Offers and Campaigns-- FTTH Migration"
  },
  {
    title: "Which Tool Can make Migration From Adsl To FTTH Service?",
    answer: "BSS"
  },
  {
    title: "SLA For Migration Cycle To FTTH In Cairo , Giza And Alex :",
    answer: "2 WDs"
  },
  {
    title: "The customer canThe customer can get ( cancellation form ) whether he requests it or not",
    answer: "FALSE"
  },
  {
    title: "If normal customer need to cancel the internet service, CCA should inform the customer with any due amount like CPE penalty, suspension fees ",
    answer: "TRUE"
  },
  {
    title: "In Retention Offering, CCA will not offer retention on CST if cancellation reason was :",
    answer: "Wrong info from CCA OR bad attitude"
  },
  {
    title: "The customer can cancel the service from exchange without Required papers :",
    answer: "FALSE"
  },
  {
    title: "If cst complain from refund process, Right sr :",
    answer: "FBB Non-Tech Complaint -- Service Cancellation--Ask for Refund"
  },
  {
    title: "Direct CST can request Refund VIA WE APP",
    answer: "FALSE"
  },
  {
    title: "The customer can make a Refund from branch without Required papers :",
    answer: "FALSE"
  },
  {
    title: "CCA should follow cancellation request with CST without asking him about reason for cancellation:",
    answer: "FALSE"
  },
  {
    title: "In case Customer asking about cancellation, Right SR will be :",
    answer: "FBB Non-Tech Inquiry -- Service Cancellation--Ask for Cancellation"
  },
  {
    title: "SLA for cancellation request from Flagships is :",
    answer: "1 WD"
  },
  {
    title: "If the customer request is follow on his cancellation request, CCA will transfer the call to",
    answer: "Cancellation Q"
  },
  {
    title: "In case Cancellation, CCA must inform CS( with penalty Fees )",
    answer: "TRUE"
  },
  {
    title: "SLA for Refund Will be",
    answer: "5 WD"
  },
  {
    title: "In case the customer requested the refund and before the amount was ready, the cst wanted to restart the service again and cancel the refund request right action is",
    answer: "Make verification & Create TT"
  },
  {
    title: "Direct CST can request Refund through",
    answer: "BRANCHES"
  },
  {
    title: "Corporate customers can request a Refund from Call Center",
    answer: "FALSE"
  },
  {
    title: "In case the customer requests about (the cancellation num) and the number appears on System , CCA action:",
    answer: "Will inform customer the cancellation num and will not transfer the call to Retention Q"
  },
  {
    title: "The customer can request a refund ,in the event of a technical problem after the installation that prevents the ADSL service from running on the telephone line :",
    answer: "TRUE"
  },
  {
    title: "The Customer can cancel the service from any branch",
    answer: "FALSE"
  },
  {
    title: "In case the customer asking about Cancellation . CCA should add cancellation reason at the service content",
    answer: "TRUE"
  },
  {
    title: "If the customer requested cancellation before ( installation ) and wants a refund, CCA should follow",
    answer: "Refund process"
  },
  {
    title: "The cancellation num will appear on witch tool",
    answer: "OM TOOL"
  },
  // {
  //   title: "",
  //   answer: ""
  // },


];
lastUp= document.querySelector(".LastUp span")
  lastUp.innerHTML = " (3:10pm) 3/4"


function drowItem() {
  let y = pro.map((item) => {
    return `
        <div class="product">
          <div class="product-deatils">
          <h4><i class="fa-solid fa-circle-info fa-sm"></i> ${item.title}</h4>
            <p><i class="fa-solid fa-circle-check fa-lg" style="color: #5bc876;"></i> <mark>${item.answer}</mark></p>
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
