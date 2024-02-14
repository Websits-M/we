function search() {
  let searchBar = document.querySelector(".search-input").value.toUpperCase();
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
];

function drowItem() {
  let y = pro.map((item) => {
    return `
        <div class="product">
          <div class="product-deatils">
            <h4>${item.title}</h4>
            <h5><mark>${item.answer}</mark></h5>
          </div>
        </div>
        `;
  });
  productlist.innerHTML = y;
}
drowItem();
