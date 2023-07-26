let ipname = document.querySelector("#name");
let ipcardnum = document.querySelector("#cardnumber");
let ipexpirationdate = document.querySelector("#expirationdate");
let ipsecuritycode = document.querySelector("#securitycode");

let getnumber = document.querySelector("#svgnumber");
let getname = document.querySelector("#svgname");
let getexpire = document.querySelector("#svgexpire");
let getsecurity = document.querySelector("#svgsecurity");
const cardBack = document.querySelector(".back");
const cardFront = document.querySelector(".front");
const card = document.querySelector("#Rectangle-1_2_");

function getName() {
   getname.innerHTML = ipname.value;
   document.querySelector("#svgnameback").innerHTML = ipname.value;
}
function getFlipName() {
   document.querySelector(".creditcard").classList.remove("flipped");
}


function getNumber() {
   getnumber.innerHTML = ipcardnum.value;
}
function getFlipNumber() {
   document.querySelector(".creditcard").classList.remove("flipped");
}


function getExpire() {
   getexpire.innerHTML = ipexpirationdate.value;
}
function getFlipExpire() {
   document.querySelector(".creditcard").classList.remove("flipped");
}


function getSecurity() {
   getsecurity.innerHTML = ipsecuritycode.value;
}
function getFlipSecur() {
   document.querySelector(".creditcard").classList.add("flipped");

}

ipname.addEventListener("keyup", getName);
ipcardnum.addEventListener("keyup", getNumber);
ipexpirationdate.addEventListener("keyup", getExpire);
ipsecuritycode.addEventListener("keyup", getSecurity);

ipname.addEventListener("focus", getFlipName);
ipcardnum.addEventListener("focus", getFlipNumber);
ipexpirationdate.addEventListener("focus", getFlipExpire);
ipsecuritycode.addEventListener("focus", getFlipSecur);
