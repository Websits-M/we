

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
    title: "Voice Down TT SLA is…?",
    answer: "1 Day",
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
    title:
      "If CST has Ticket data down with update (Re-splitted done )  and Cst  connected his CPE From Main Wire Then ,,, CCA Will Inform cst Next Step :",
    answer: "Check availability to test by another CPE ",
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
      "While follow with cst WACP Case and Cst Line Status is Down and Matrix Status is also Down so the next step is : ",
    answer: "Troubleshoot as Data Down",
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
  {
    title:
      "If CST has Data and Voice Down case after connect from main wall outlet problem solved you will:",
    answer: "Create TT for internal wiring",
  },
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
    title: "We can check Change phone number activity  from ……..",
    answer: "OM & BSS Order query",
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
      "Cst has Ticket WCAP in IU Pool and TKT passed SLA , So CCA will inform cst SLA :",
    answer: "1 Day",
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
    title:
      "customer can open YouTube / Facebook but contents doesn’t appeared ,,first step is ??",

    answer: "IF CPE accessed try to adjust MTU and DNS [WE then Google DNS",
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
    title: "When CCA follow logical instability T.S with CST , CST must connect one lap top through wireless",

    answer: "FALSE",
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
    title: "In case cst has many accepted logs in last 24 Hr , cca must be sure that not related to restart port or cpe",
    answer: "TRUE "
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
    title: "first step in Redirection page case",
    answer: "Restart port"
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
    title: "If CST need to change contact name but his account status is suspend  What is the right action ?",
    answer: "Inform cst to pay all his due amount first"
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
    title: "if cst has redirection  tkt in SLS Pool and cst call after sla",
    answer: "Will renew sla 72 h"
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
  // {
  //   title: "",
  //   answer: ""
  // },


];
lastUp= document.querySelector(".LastUp span")
  lastUp.innerHTML = " (6:02pm) 3/2"


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
// localStorage.setItem()
// /////////////
let userName = document.querySelector('#userName')
let password = document.querySelector('#password')

let getUsername = localStorage.getItem("userName")
let getPassword = localStorage.getItem("password")

let parent = document.querySelector(".parent")
let form = document.querySelector(".section-form")
let addItem = localStorage.getItem("username")? localStorage.getItem("username") : "";



/////////////////////////////////






