function search() {
  let searchBar = document.querySelector(".search-input").value.toUpperCase();
  let productlist = document.querySelector(".product-list");
  let product = document.querySelectorAll(".product");
  let productName = document.getElementsByTagName("h5");

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
    title: "1-Who can choose modify reason Operator Request?",
    answer: "• Agent",
  },
  {
    title:
      "2-Which of the below is responsible for assigning automatic LAN IP's to the private devices which are connected to the same CPE",
    answer: "• DHCP",
  },
  {
    title:
      "3-We will inform our customers about their Upload speed even if they did not ask for it:",
    answer: "• FALSE",
  },
  {
    title:
      "4-in Cpe configuration 'VDSL' Parameters XDSL Transfer Mode should be parameter XDSL Transfer Mode",
    answer: "• PTM",
  },
  {
    title: "5-CST can request to suspend his land line temporary",
    answer: "• True",
  },
  {
    title: "6- Land line delivery available for all Egypt",
    answer: "• False",
  },
  {
    title: "7- installation Visit Fees with VAT..?",
    answer: "• 85.5 LE",
  },
  {
    title: "8- We can make adjust status from which tool: ",
    answer: "• Matrix",
  },
  {
    title: "9- Any customer can call us only on 19777& 111 :",
    answer: "• FALSE",
  },
  {
    title: "10 - Optimizing period for super up to 30 VDSL is : ",
    answer: "• 4 days",
  },
  {
    title: "11- In Case WO problem Automatic TT will be created...?",
    answer: "• True",
  },
  {
    title:
      "12- Which of the following responsible for remove welding from main wire ",
    answer: "• Rosetta",
  },
  {
    title:
      "13- In case we make any Request for CST on OSS and this massage appear (service number is migrated to BSS) that mean..",
    answer: "• CST migrated to BSS",
  },
  {
    title: "14- We can restart Port from which tool: ",
    answer: "• Matrix",
  },
  {
    title: "15- Super up to 30 Mb for package 140 GB price including VAT is: ",
    answer: "• 182.40",
  },
  {
    title:
      "16- if customer contracted speed is super 30 Mb and his operational speed is 40 Mb and he asks about his actual speed now, CCA will inform him : ",
    answer: "• 30 Mb",
  },
  {
    title:
      "17- if customer needs to change speed while installation period and call us, No need to make verification with him first: ",
    answer: "• FALSE",
  },
  {
    title:
      "18 - In case of daley in activity WO Request CCA action will be...?",
    answer: "• created TT and inform CST SLA 1WD",
  },
  {
    title: "19- Waiting service is free with WE Ardy 20",
    answer: "• FALSE",
  },
  {
    title:
      "20- In CPE configuration , ADSL parameters should be VPI = 35 and VCI = 0 ?",
    answer: "• FALSE",
  },
  {
    title: "21- Recharge through Electronic machines is update within 48 H",
    answer: "• FALSE",
  },
  {
    title:
      "22- In CPE Configuration we must write username in capital letters such as (@TEDATA.NET.EG",
    answer: "• FALSE",
  },
  {
    title:
      "23- CCA Must make TT ...in case no technical data found on matrix tool after call back to CRM ",
    answer: "• create Matrix TT",
  },
  {
    title:
      "24- in instillation follow up cycle follow up team will follow with CST With...SLA, If cast has problem during instillation cycle from his side..",
    answer: "• 24 H",
  },
  {
    title: "25- Modify reason (Customer Request) will be done for free for..",
    answer: "• tow times",
  },
  {
    title:
      "26- check availability result must be ....To use it in new contracting",
    answer: "• Result Status : Valid | Availability Result : Available",
  },
  {
    title:
      "27- The Main wire come from the box to the CPE direct, this is a : ..",
    answer: "• Main Wire Connection",
  },
  {
    title:
      "28- DHCP is assigning automatic LAN IP's to the private devices but NAT is responsible for translating the private IP into Public IP: ",
    answer: "• True",
  },
  {
    title:
      "29- Service's Username + password Will be created in which activity ...?",
    answer: "• Network Activation",
  },
  {
    title:
      "30- We inform our customers by throttled speed even if he did not ask: ",
    answer: "• FALSE",
  },
  {
    title:
      "31- CCA Can Verify CST Data For any Verification Required from BSS only?",
    answer: "• True",
  },
  {
    title: "32- Check Free port means that...?",
    answer: "• No ports available on Matrix",
  },
  {
    title: "33- CST Can Change ....From My WE :",
    answer: "• Mobile Number & Mail",
  },
  {
    title:
      "34- in Case CST asked to subscribe on data & voice with us ,We Should not mark on Vouce&Data Flag in check availabilite request",
    answer: "• FALSE",
  },
  {
    title: "35- The Telephone cable ends with RJ :...",
    answer: "• 11",
  },
  {
    title: "36- To Review All created tickets CCA can choose...?",
    answer: "• Trouble Ticket",
  },
  {
    title:
      "37- CCA Can change package (order still not completed) From order still...?",
    answer:
      "• BSS-->sitemap-->integrated operations(New)-->order management-->order Query",
  },
  {
    title: "38- Which service customer can use static ip : ",
    answer: "• Option pack",
  },
  {
    title: "39- If Line has a problem Connection Cable CCA action will be...?",
    answer: "• inf cst شبكة ارضية - voice line not copper cannot connect data",
  },
  {
    title:
      "40- In case we make any modification on request, we must chose modify reason",
    answer: "• Customer Request",
  },
  {
    title:
      "41- Which of the below devices is responsible for assigning WAN IPs to CPEs : ",
    answer: "• BRAS",
  },
  {
    title:
      "42- Broad Hop is responsible for checking customer profile from our data base? ",
    answer: "• TRUE",
  },
  {
    title: "43- Device is using to split Data and Voice into 2 channels :",
    answer: "• Splitter",
  },
  {
    title:
      "44- Which of the below is the responsible for translating any domain name into IP and Vice Versa : ",
    answer: "• DNS",
  },
  {
    title: "45- The Ethernet cable ends with RJ :",
    answer: "• 45",
  },
  {
    title:
      "46- Which of the following makes it harder for hackers to breake the connection and steal the information   :",
    answer: "• HTTPS",
  },
  {
    title:
      "47- DHCP is assigning automatic LAN IP`s to the private devices but NAT is responsible for translating the Private IP into Public IP   :",
    answer: "• TRUE",
  },
  {
    title:
      "48- In Cpe configuration  “VDSL” Parameters XDSL Transfer Mode should be ",
    answer: "• PPPOE",
  },
  {
    title:
      "49- RADIUS is responsible to make sure that customer using his US & PW which are on our system & related to his line :  ",
    answer: "• TRUE",
  },
  {
    title:
      "50- We have two types of connections (Main wire and wall outlet) : ",
    answer: "• TRUE",
  },
  {
    title: "51- Survey SLA Is..",
    answer: "• 24H",
  },
  {
    title: "52- Requested data from customer for check availability ",
    answer: "• Full name, mobile, full address , ID number",
  },
  {
    title:
      "53- In Case CCA found Automatic TT(Automatic TT FV>>Customer Subscription>>OSS TDM Registration)CCA Action will be..",
    answer:
      "• inform customer that someone will communicate with him within SLA 24 hours and in case of delay will renew SLA",
  },
  {
    title: "54- in check availability request ,, CCA can make Request by ",
    answer: "• National ID",
  },
  {
    title: "55- WE Ardy 25 Quarter price including fees is ",
    answer: "• 85.50 LE",
  },
  {
    title:
      "56- CCA must choose one of those choices when he make check availability request  ",
    answer: "• FTTH Compound  OthersMSAN FTTH Exchange",
  },
  {
    title: "56 -cst want to renew his package ( WE Ardy 40 Quarter ) ,, CCA will inform him to pay ……. LE at least ",
    answer: "• 139",
  },
  {
    title: "57- Modify reason ( Customer Request ) will be done for free for.. ",
    answer: "• two times",
  },
  {
    title: "58- MSAN installation cycle SLA within 48 H",
    answer: "• True",
  },
  {
    title: "59- we can follow up on check availability request result through BSS from…",
    answer: "• Sitmap >> integrated  operations >> search availability PSTN",
  },
  {
    title: "60- we can move land line to another government",
    answer: "• True",
  },
  {
    title: "61- temporary suspension service Fees without VAT",
    answer: "• 20 LE",
  },
  {
    title: "62- Before renewal date there is SMS sending to CST to remind him to pay his bill ",
    answer: "• True",
  },
  {
    title: "63- CST can request to suspend his land line temporary",
    answer: "• True",
  },
  {
    title: "64- CST can change his line category Through 111",
    answer: "• False",
  },
  {
    title: "65- calling WE Mobil and Local calls are active without CST Request ",
    answer: "• True",
  },
  {
    title: "67- Recharge through Electronic machines is update within 48 H",
    answer: "• False",
  },
  {
    title: "68- CST can request to make his land line reciving only and do not pay his subscribtion fees",
    answer: "• False",
  },
  {
    title: "69- CST Can request change offering through 111",
    answer: "• True",
  },
  {
    title: "70- SLA for new Account is : ",
    answer: "• 48 WH",
  },
  {
    title: "71- Which Tool we Can Know any another( Q ) Working Hours :  ",
    answer: "• IVR",
  },
  {
    title: "72- Our customers can not submit any tkt from WE APP: ",
    answer: "• FALSE",
  },
  {
    title: "73- We can check customer if Blocked or not from which tool :  ",
    answer: "• Matrix",
  },
  {
    title: "74- One invoice postpaid corporate Customer want to make early renewal CCA action will be …? ",
    answer: "• Inform CST that he can't make early renewal + Create SR",
  },
  {
    title: "75- We can determined port configured speed from which tool : ",
    answer: "• Matrix",
  },
  {
    title: "76- New subscription can apply through :",
    answer: "• Branch only",
  },
  {
    title: "77- All Branches have same Working Hours and Days off  :",
    answer: "• FALSE",
  },
  {
    title: "78- Some Of Corporate Individual Postpaid Customers bill cycle on….? ",
    answer: "• Day 22 from each month",
  },
  {
    title: "79- Which service customer can use static IP : ",
    answer: "• Option  Pack",
  },
  {
    title: "80- Line Problem SLA Is …. ?",
    answer: "• 15 WD",
  },
  {
    title: "81- CST call from same landline number and ask for early renewal CCA will ask CST about … To Verification ? ",
    answer: "• No Need Any Verification Rules",
  },
  {
    title: "82- In Case Of Delay In Port Splitting Activity CCA Action Will Be…?",
    answer: "• Create TT And Inform CST SLA 48 WH",
  },
  {
    title: "83- To Review All created tickets CCA can choose …?",
    answer: "• Trouble Ticket",
  },
  {
    title: "84- TE Problem No Technical Data means …? ",
    answer: "• No technical Data for Line In TE",
  },
  {
    title: "85- Any SR will be Inquiry/offers except complain SR?",
    answer: "• TRUE",
  },
  {
    title: "86- CCA Must Make TT ….. In Case No Technical Data Found On Matrix Tool After Call Back To CRM ?",
    answer: "• Create Matrix TT",
  },
  {
    title: "87- In Case WO Request and there is problem happened sub activity will be….?",
    answer: "• WO Problem",
  },
  {
    title: "88- Check Free Port SLA …?",
    answer: "• No Estimated Time",
  },
  {
    title: "89- Any TT Must be Problem / Non-Om Problem when CCA choose from Additional Information ?",
    answer: "• FALSE",
  },
  {
    title: "90- CST has noise problem and has physical instability issue CCA will handle …?",
    answer: "• Physical instability",
  },
  {
    title: "91- Voice Down TT SLA is…?",
    answer: "• 1 Day",
  },
  {
    title: "92 CCA found that CST's landline number has work order رفع نهائي متأخرات أقساط  In Customer Profile Tool ..... CCA action will be…?",
    answer: "• Inform CST to pay all due installments and make new contract on landline",
  },
  {
    title: "93- Customer not migrated to BSS has problem that  voice is not working or out of service after pay bill after cut off and informed that issue started before cutoff date , CCA Right Action :",
    answer: "• Phone set available step",
  },
  {
    title: "94- CST Follow voice down ticket after 25 hour from escalating it and ticket still on IU CCA action will be …? ",
    answer: "• Inform CST Passed SLA + Create IR +create SR ​​FBB Tech Problem---​Voice Down​---Follow Up after SLA ",
  },
  {
    title: "95- in voice verification .. After calling CST's on landline number CCA found Record Massage ' الرقم مرفوع مؤقت من الخدمة' CCA action will be…?",
    answer: "• Consider Voice Down + Create TT ",
  },
  {
    title: "96- Voice Cases override any physical case …. ?",
    answer: "• TRUE",
  },
  {
    title: "97- Voice overlapping can happened between …. ?",
    answer: "• 2 numbers in the same exchange",
  },
  {
    title: "98- For CST Not Migrated To Bss :  has problem in Call waiting service CCA action will be ..?",
    answer: "• Transfer CST to fixed line VDN",
  },
  {
    title: "99- CCA must check voice verification before escalating ….. ?  ",
    answer: "• All physical cases except Need Optimization",
  },
  {
    title: "100- If CST has Ticket data down with update (Re-splitted done )  and Cst  connected his CPE From Main Wire Then ,,, CCA Will Inform cst Next Step :",
    answer: "• Check availability to test by another CPE ",
  },
  {
    title: "101- Escalation Data Down to IU SLA will be:",
    answer: "• 1 day",
  },
  {
    title: "102- In Case T.S Data Down Case and Cst has ( MSAN Type: Yes ) you will measure distance with: ",
    answer: "• 10 meters",
  },
  {
    title: "103- While T.S Data Down Case With Cst Adsl Led is Stable and line Become Up , CCA Action .... ",
    answer: "• Follow Instability troubleshoot",
  },
  {
    title: "104- If CST has Power Failure which of the following you will do with CST: ",
    answer: "• Check with another CPE with it's original adaptert",
  },
  {
    title: "105- The time that IU ends work per day is:",
    answer: "• 8:00 PM",
  },
  {
    title: "106- SLA for pending fixing TE will be: ",
    answer: "• 3 days",
  },
  {
    title: "107- Performing SELT test will inform us with: ",
    answer: "• Distance between exchange or cabin and CPE if line Cable disconnect from cpe",
  },
  {
    title: "108- Cst Calling Us And Informed (ADSL Led Is Down )While  has 3 logs in NST at 7:00 AM ,7:15 AM and 7:30 AM and called us at 1:00 PM at the same day  and informed that he has a problem in his service case will be :",
    answer: "• Down Cases",
  },
  {
    title: "109- If Data Down Case solved  after Cst Connect From Main Wall outlet and you will create TT to Pilot Follow Up Team , way of communication will be:",
    answer: "• Call only",
  },
  {
    title: "110- Power led not existed",
    answer: "• power led not working or working with red color",
  },
];

function drowItem() {
  let y = pro.map((item) => {
    return `
        <div class="product">
          <div class="product-deatils">
            <h5>${item.title}</h5>
            <p><mark>${item.answer}</mark></p>
            <hr>
          </div>
        </div>
        `;
  });
  productlist.innerHTML = y;
}
drowItem();
