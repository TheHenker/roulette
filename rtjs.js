function addNewHChild(outcome){
var div = document.createElement("DIV");
	div.className = "hchild";
	div.innerHTML = outcome;
	switch(outcome){
      case 0:
         div.style.background = "#009901";
          break;
    case 1:
    case 3:
    case 5:
    case 7:          
    case 9:
    case 12:
    case 14:
    case 16:
    case 18:
    case 19:
    case 21:
    case 23:
    case 25:
    case 27:
    case 30:
    case 32:
    case 34:
    case 36:
           div.style.background = "#a90329";
          break;
  }	
	
	var parent = document.getElementById("history");
	
	if(parent.children.length<16){
	document.getElementById("history").appendChild(div);
	}else{
	parent.children[0].remove();
			document.getElementById("history").appendChild(div);
	}
	
	
}



function createNewRow(parent,id,wager,profit,outcome){
var tr = document.createElement("TR");
var td = ["","","",""];
for (var x = 0; x< td.length; x++){
td[x] = document.createElement("TD");
}

var a = document.createElement("A");
a.innerHTML = id;
a.href = "https://moneypot.com/bets/" + id;
a.style.background = "none";
a.style.color = "white";
td[0].appendChild(a);
td[1].innerHTML = wager/100 + " bits";
	
td[2].innerHTML = profit/100 + " bits";
if(profit>0){
td[2].style.color = "#009901";
}
if(profit<0){
td[2].style.color = "red";
}	
td[3].innerHTML = outcome;	
td[3].style.background = "black";
td[3].style.color = "white";
	switch(outcome){
      case 0:
         td[3].style.background = "#009901";
          break;
    case 1:
    case 3:
    case 5:
    case 7:          
    case 9:
    case 12:
    case 14:
    case 16:
    case 18:
    case 19:
    case 21:
    case 23:
    case 25:
    case 27:
    case 30:
    case 32:
    case 34:
    case 36:
           td[3].style.background = "#a90329";
          break;
  }	
tr.appendChild(td[0]);
tr.appendChild(td[1]);
tr.appendChild(td[2]);
tr.appendChild(td[3]);
if(parent.children.length >1){
parent.insertBefore(tr, parent.children[1]);
} else{
parent.appendChild(tr);
}
}


function clearAllChips(){
var chipSets = ["chip", "SVchip", "SHchip", "cnChip", "dozenChip", "halfChip", "streetChip", "dsChip", "s1Chip", "s2Chip", "s3Chip", "tri1Chip", "tri2Chip", "fourChip"];	
for(var x = 0; x< chipSets.length; x++){
var  currChip = document.getElementsByClassName(chipSets[x]);
while(currChip[0]){
	currChip[0].remove();
}
}
	
for(var c = 0; c<payout.length;c++){
payout[c] = 0;
};	
TWWagered = 0;
document.getElementById("total-wagered").innerHTML = TWWagered + " bits"; 
}


function rtToggle(parent) {
document.getElementById('r-table').classList.add("game-show");
document.getElementById('r-table').classList.remove("game-hide");
document.getElementById('diceGame').classList.remove("game-show");
document.getElementById('diceGame').classList.add("game-hide");
parent.classList.add('activeSelection');
    document.getElementById('dTrigger').classList.remove('activeSelection');
}

function diceToggle(parent){
document.getElementById('diceGame').classList.add("game-show");
document.getElementById('diceGame').classList.remove("game-hide");  
document.getElementById('r-table').classList.remove("game-show");
document.getElementById('r-table').classList.add("game-hide");  
parent.classList.add('activeSelection');
    document.getElementById('rTrigger').classList.remove('activeSelection');
}


function chatToggle(parent){
		msgcount = 0;
		document.getElementById("cTrigger").innerHTML =  "Chat ";
		document.getElementById("cTrigger").style.color = "white";
document.getElementById('chatBox').classList.toggle("chat-show");
document.getElementById('chatBox').classList.toggle("chat-hide");    
document.getElementById('betStats').classList.add("stat-hide"); 
document.getElementById('betStats').classList.remove("stat-show");
    parent.classList.toggle('activeSelection');
    document.getElementById('bTrigger').classList.remove('activeSelection');
}

function statToggle(parent){
document.getElementById('betStats').classList.toggle("stat-show");
document.getElementById('betStats').classList.toggle("stat-hide");   
document.getElementById('chatBox').classList.remove("chat-show");    
document.getElementById('chatBox').classList.add("chat-hide");    
      parent.classList.toggle('activeSelection');
     document.getElementById('cTrigger').classList.remove('activeSelection');
    
}

var rangeParam =[];
var payout =[];
var disableChips = false;

payout.length = 37;
for(var c = 0; c<payout.length;c++){
payout[c] = 0;
};

function setRangeParam(){
rangeParam =[];
for(var x = 0; x < 37; x++){
    rangeParam.push(
        {
            from: Math.floor((Math.pow(2,32)*x)/37),
            to: Math.floor((Math.pow(2,32)*(x+1))/37),
            value: payout[x]
        }
    );
}
}


function convertRawToNumber(outcome){
for(var x = 0; x<rangeParam.length; x++){
if(outcome>=rangeParam[x].from && outcome<rangeParam[x].to){
var number = x;
}    
}
return number;    
}


function highlightChips(outcome, totalwagered, bonus){
var totalProfit = 0;
var totalLoss = 0;
var green = "green";
var red = "red";
var SVC = document.getElementsByClassName("SVchip");
var SHC = document.getElementsByClassName("SHchip");
var Chip = document.getElementsByClassName("chip");
var CNC = document.getElementsByClassName("cnChip");
var DZC = document.getElementsByClassName("dozenChip");
var HC = document.getElementsByClassName("halfChip");
var STC = document.getElementsByClassName("streetChip");
var DSTC = document.getElementsByClassName("dsChip");
var FC = document.getElementsByClassName("fourChip");
var S3C = document.getElementsByClassName("s3Chip");	
var S2C = document.getElementsByClassName("s2Chip");	
var S1C = document.getElementsByClassName("s1Chip");	
var T1C = document.getElementsByClassName("tri1Chip");
var T2C = document.getElementsByClassName("tri2Chip");	
	
for(var x = 0;x<STC.length;x++){
if(STC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == outcome ||STC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == (outcome-1)||STC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == (outcome -2)){
STC[x].style.background = green;
totalProfit += 11 * parseFloat(STC[x].innerHTML);
}else{
STC[x].style.background = red;
totalLoss += parseFloat(STC[x].innerHTML);
}
};
	
for(var x = 0;x<DSTC.length;x++){
if(
	DSTC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == outcome ||
	DSTC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == (outcome-1)||
	DSTC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == (outcome -2)||
DSTC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == (outcome -3)||
	DSTC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == (outcome -4)||
	DSTC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == (outcome -5))

{
DSTC[x].style.background = green;
totalProfit += 5 * parseFloat(DSTC[x].innerHTML);
}else{
DSTC[x].style.background = red;
totalLoss += parseFloat(DSTC[x].innerHTML);
}
};		
	
	
for(var x = 0;x<FC.length;x++){
if(outcome == 0 ||outcome == 1 ||outcome == 2|| outcome == 3){
FC[x].style.background = green;
totalProfit += 8 * parseFloat(FC[x].innerHTML);
}else{
FC[x].style.background = red;
totalLoss += parseFloat(FC[x].innerHTML);
}
};		
	
for(var x = 0;x<S3C.length;x++){
if(outcome == 0 || outcome == 3){
S3C[x].style.background = green;
totalProfit += 17 * parseFloat(S3C[x].innerHTML);
}else{
S3C[x].style.background = red;
totalLoss += parseFloat(S3C[x].innerHTML);
}
};		
	
for(var x = 0;x<S2C.length;x++){
if(outcome == 0 || outcome == 2){
S2C[x].style.background = green;
totalProfit += 17 * parseFloat(S2C[x].innerHTML);
}else{
S2C[x].style.background = red;
totalLoss += parseFloat(S2C[x].innerHTML);
}
};		
	
for(var x = 0;x<S1C.length;x++){
if(outcome == 0 || outcome == 1){
S1C[x].style.background = green;
totalProfit += 17 * parseFloat(S1C[x].innerHTML);
}else{
S1C[x].style.background = red;
totalLoss += parseFloat(S1C[x].innerHTML);
}
};		
	
	
for(var x = 0;x<T1C.length;x++){
if(outcome == 0 || outcome == 2 || outcome == 3){
T1C[x].style.background = green;
totalProfit += 11 * parseFloat(T1C[x].innerHTML);
}else{
T1C[x].style.background = red;
totalLoss += parseFloat(T1C[x].innerHTML);
}
};		
	
	
	
for(var x = 0;x<T2C.length;x++){
if(outcome == 0 || outcome == 2 || outcome == 1){
T2C[x].style.background = green;
totalProfit += 11 * parseFloat(T2C[x].innerHTML);
}else{
T2C[x].style.background = red;
totalLoss += parseFloat(T2C[x].innerHTML);
}
};		
	
	
	
	
	
	
	
	
	
	
	
    
for(var x = 0;x<SVC.length;x++){
if(SVC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == outcome ||SVC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == (outcome -3)){
SVC[x].style.background = green;
totalProfit += 17 * parseFloat(SVC[x].innerHTML);
}else{
SVC[x].style.background = red;
totalLoss += parseFloat(SVC[x].innerHTML);
}
};
 
for(var x = 0;x<SHC.length;x++){
if(SHC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == outcome ||SHC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == (outcome +1)){
SHC[x].style.background = green;
totalProfit += 17 * parseFloat(SHC[x].innerHTML);
}else{
SHC[x].style.background = red;
totalLoss += parseFloat(SHC[x].innerHTML);
}
};

for(var x = 0;x<Chip.length;x++){
if(Chip[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == outcome){
Chip[x].style.background = green;
totalProfit += 35 * parseFloat(Chip[x].innerHTML);
}else{
Chip[x].style.background = red;
totalLoss += parseFloat(Chip[x].innerHTML);
}
};    

for(var x = 0;x<CNC.length;x++){
if(CNC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == outcome ||CNC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == (outcome +1)||CNC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == (outcome -3)||CNC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == (outcome -2)){
CNC[x].style.background = green;
totalProfit += 8 * parseFloat(CNC[x].innerHTML);
}else{
CNC[x].style.background = red;
totalLoss += parseFloat(CNC[x].innerHTML);
}
};    

for(var x = 0;x<DZC.length;x++){
if(DZC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == "1-12"){
if(outcome >= 1 && outcome <=12){    
DZC[x].style.background = green;
totalProfit += 2 * parseFloat(DZC[x].innerHTML);
}else{
DZC[x].style.background = red;
totalLoss += parseFloat(DZC[x].innerHTML);
}
}
    
if(DZC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == "13-24"){
if(outcome >= 13 && outcome <=24){    
DZC[x].style.background = green;
totalProfit += 2 * parseFloat(DZC[x].innerHTML);
}else{
DZC[x].style.background = red;
totalLoss += parseFloat(DZC[x].innerHTML);
}
};
if(DZC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == "25-36"){
if(outcome >= 25 && outcome <=36){    
DZC[x].style.background = green;
totalProfit += 2 * parseFloat(DZC[x].innerHTML);
}else{
DZC[x].style.background = red;
totalLoss += parseFloat(DZC[x].innerHTML);
}
};

if(DZC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == "R1"){
if(outcome%3 == 0){    
DZC[x].style.background = green;
totalProfit += 2 * parseFloat(DZC[x].innerHTML);
}else{
DZC[x].style.background = red;
totalLoss += parseFloat(DZC[x].innerHTML);
}
};

if(DZC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == "R2"){
if(outcome%3 == 2 || outcome == 2){    
DZC[x].style.background = green;
totalProfit += 2 * parseFloat(DZC[x].innerHTML);
}else{
DZC[x].style.background = red;
totalLoss += parseFloat(DZC[x].innerHTML);
}
};    

if(DZC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == "R3"){
if(outcome%3 == 1 || outcome == 1){    
DZC[x].style.background = green;
totalProfit += 2 * parseFloat(DZC[x].innerHTML);
}else{
DZC[x].style.background = red;
totalLoss += parseFloat(DZC[x].innerHTML);
}
}; 
    
};
    
for(var x = 0;x<HC.length;x++){

if(HC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == "1-18"){
if(outcome >=1 && outcome<=18){
HC[x].style.background = green;
totalProfit += parseFloat(HC[x].innerHTML);
}else{
HC[x].style.background = red;
totalLoss += parseFloat(HC[x].innerHTML);
}
};    

if(HC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == "19-36"){
if(outcome >=19 && outcome<=36){
HC[x].style.background = green;
totalProfit += parseFloat(HC[x].innerHTML);
}else{
HC[x].style.background = red;
totalLoss += parseFloat(HC[x].innerHTML);
}
}; 

if(HC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == "Odd"){
if(outcome%2 == 1){
HC[x].style.background = green;
totalProfit += parseFloat(HC[x].innerHTML);
}else{
HC[x].style.background = red;
totalLoss += parseFloat(HC[x].innerHTML);
}
}; 

if(HC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == "Even"){
if(outcome%2 == 0){
HC[x].style.background = green;
totalProfit += parseFloat(HC[x].innerHTML);

}else{
HC[x].style.background = red;
totalLoss += parseFloat(HC[x].innerHTML);
}
};   
    
if(HC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == "Red"){
if(outcome == 1||outcome == 3||outcome == 5||outcome == 7||outcome == 9||outcome == 12||outcome == 14||outcome == 16||outcome == 18||outcome == 19||outcome == 21||outcome == 23||outcome == 25||outcome == 27||outcome == 30||outcome == 32||outcome == 34||outcome == 36){
HC[x].style.background = green;
totalProfit += parseFloat(HC[x].innerHTML);
}else{
HC[x].style.background = red;
totalLoss += parseFloat(HC[x].innerHTML);
}
};      

if(HC[x].parentElement.parentElement.getElementsByTagName('p')[0].innerHTML == "Black"){
if(outcome == 2||outcome == 4||outcome == 6||outcome == 8||outcome == 10||outcome == 11||outcome == 13||outcome == 15||outcome == 17||outcome == 20||outcome == 22||outcome == 24||outcome == 26||outcome == 28||outcome == 29||outcome == 31||outcome == 33||outcome == 35){
HC[x].style.background = green;
totalProfit += parseFloat(HC[x].innerHTML);
}else{
HC[x].style.background = red;
totalLoss += parseFloat(HC[x].innerHTML);
}
};       

};
    
if(outcome == 0){
totalProfit += (totalwagered/100) * (bonus/100);
}



document.getElementById('bet-profit').innerHTML = totalProfit.toFixed(2) + " bits";    
if(totalProfit !=0){
    document.getElementById('bet-profit').style.color = "green";
}else{
 document.getElementById('bet-profit').style.color = "white";
}
document.getElementById('bet-loss').innerHTML = "-"+ totalLoss.toFixed(2) + " bits";    
if(totalLoss !=0){
    document.getElementById('bet-loss').style.color = "red";
}else{
 document.getElementById('bet-loss').style.color = "white";
}
    
};


var disableSingleBet = false;
var streetBet = document.getElementsByClassName('street-bet');
for(var x = 0; x<streetBet.length;x++){


streetBet[x].onmouseover = function(){
var cur = parseInt(this.parentElement.getElementsByTagName('p')[0].innerHTML);

disableSingleBet = true;
this.parentElement.classList.add("select");
document.getElementsByClassName(cur+1)[0].classList.add("select");
document.getElementsByClassName(cur+2)[0].classList.add("select");

}
streetBet[x].onmouseout = function(){
var cur = parseInt(this.parentElement.getElementsByTagName('p')[0].innerHTML);
    disableSingleBet = false;
this.parentElement.classList.remove("select");
	document.getElementsByClassName(cur+1)[0].classList.remove("select");
document.getElementsByClassName(cur+2)[0].classList.remove("select");

}


streetBet[x].onclick = function(){
var num1 = parseInt(this.parentElement.getElementsByTagName('P')[0].innerHTML);
var num2 = num1 +1;
var num3 = num1 +2;
var numbers = [num1, num2, num3];
addChips(this, "streetChip", numbers,12);

};    
streetBet[x].oncontextmenu = function(){
var num1 = parseInt(this.parentElement.getElementsByTagName('P')[0].innerHTML);
var num2 = num1 +1;
var num3 = num1 +2;
var numbers = [num1, num2,num3];
removeChips(this,numbers,12);
};    


}


var dsBet = document.getElementsByClassName('ds-bet');
for(var x = 0; x<dsBet.length;x++){


dsBet[x].onmouseover = function(){
var cur = parseInt(this.parentElement.getElementsByTagName('p')[0].innerHTML);

disableSingleBet = true;
this.parentElement.classList.add("select");
document.getElementsByClassName(cur+1)[0].classList.add("select");
document.getElementsByClassName(cur+2)[0].classList.add("select");
document.getElementsByClassName(cur+3)[0].classList.add("select");
document.getElementsByClassName(cur+4)[0].classList.add("select");
document.getElementsByClassName(cur+5)[0].classList.add("select");


}
dsBet[x].onmouseout = function(){
var cur = parseInt(this.parentElement.getElementsByTagName('p')[0].innerHTML);
    disableSingleBet = false;
this.parentElement.classList.remove("select");
	document.getElementsByClassName(cur+1)[0].classList.remove("select");
document.getElementsByClassName(cur+2)[0].classList.remove("select");
document.getElementsByClassName(cur+3)[0].classList.remove("select");
document.getElementsByClassName(cur+4)[0].classList.remove("select");
document.getElementsByClassName(cur+5)[0].classList.remove("select");

}


dsBet[x].onclick = function(){
var num1 = parseInt(this.parentElement.getElementsByTagName('P')[0].innerHTML);
var num2 = num1 +1;
var num3 = num1 +2;
var num4 = num1 +3;
var num5 = num1 +4;
var num6 = num1 +5;
var numbers = [num1, num2, num3, num4, num5, num6];
addChips(this, "dsChip", numbers,6);

};    
dsBet[x].oncontextmenu = function(){
var num1 = parseInt(this.parentElement.getElementsByTagName('P')[0].innerHTML);
var num2 = num1 +1;
var num3 = num1 +2;
var num4 = num1 +3;
var num5 = num1 +4;
var num6 = num1 +5;
var numbers = [num1, num2, num3, num4, num5, num6];
removeChips(this,numbers,6);
};  


}

var fourBet = document.getElementsByClassName('four-bet');
for(var x = 0; x<fourBet.length;x++){


fourBet[x].onmouseover = function(){
var cur = parseInt(this.parentElement.getElementsByTagName('p')[0].innerHTML);

disableSingleBet = true;
this.parentElement.classList.add("select");
document.getElementsByClassName(cur+1)[0].classList.add("select");
document.getElementsByClassName(cur+2)[0].classList.add("select");
document.getElementsByClassName(cur+3)[0].classList.add("select");



}
fourBet[x].onmouseout = function(){
var cur = parseInt(this.parentElement.getElementsByTagName('p')[0].innerHTML);
    disableSingleBet = false;
this.parentElement.classList.remove("select");
	document.getElementsByClassName(cur+1)[0].classList.remove("select");
document.getElementsByClassName(cur+2)[0].classList.remove("select");
document.getElementsByClassName(cur+3)[0].classList.remove("select");

}

fourBet[x].onclick = function(){
var num1 = parseInt(this.parentElement.getElementsByTagName('P')[0].innerHTML);
var num2 = num1 +1;
var num3 = num1 +2;
var num4 = num1 +3;

var numbers = [num1, num2, num3, num4];
addChips(this, "fourChip", numbers,9);

};    
fourBet[x].oncontextmenu = function(){
var num1 = parseInt(this.parentElement.getElementsByTagName('P')[0].innerHTML);
var num2 = num1 +1;
var num3 = num1 +2;
var num4 = num1 +3;

var numbers = [num1, num2, num3, num4];
removeChips(this,numbers,9);
};  






}

var s03Bet = document.getElementsByClassName('split03-bet');
for(var x = 0; x<s03Bet.length;x++){


s03Bet[x].onmouseover = function(){
var cur = parseInt(this.parentElement.getElementsByTagName('p')[0].innerHTML);

disableSingleBet = true;
this.parentElement.classList.add("select");

document.getElementsByClassName(cur+3)[0].classList.add("select");



}
s03Bet[x].onmouseout = function(){
var cur = parseInt(this.parentElement.getElementsByTagName('p')[0].innerHTML);
    disableSingleBet = false;
this.parentElement.classList.remove("select");

document.getElementsByClassName(cur+3)[0].classList.remove("select");

}



s03Bet[x].onclick = function(){
var num1 = parseInt(this.parentElement.getElementsByTagName('P')[0].innerHTML);
var num4 = num1 +3;

var numbers = [num1, num4];
addChips(this, "s3Chip", numbers,18);

};    
s03Bet[x].oncontextmenu = function(){
var num1 = parseInt(this.parentElement.getElementsByTagName('P')[0].innerHTML);
var num4 = num1 +3;

var numbers = [num1,num4];
removeChips(this,numbers,18);
};  
















}

var s02Bet = document.getElementsByClassName('split02-bet');
for(var x = 0; x<s02Bet.length;x++){


s02Bet[x].onmouseover = function(){
var cur = parseInt(this.parentElement.getElementsByTagName('p')[0].innerHTML);

disableSingleBet = true;
this.parentElement.classList.add("select");

document.getElementsByClassName(cur+2)[0].classList.add("select");



}
s02Bet[x].onmouseout = function(){
var cur = parseInt(this.parentElement.getElementsByTagName('p')[0].innerHTML);
    disableSingleBet = false;
this.parentElement.classList.remove("select");

document.getElementsByClassName(cur+2)[0].classList.remove("select");

}

s02Bet[x].onclick = function(){
var num1 = parseInt(this.parentElement.getElementsByTagName('P')[0].innerHTML);
var num2 = num1 +2;

var numbers = [num1, num2];
addChips(this, "s2Chip", numbers,18);

};    
s02Bet[x].oncontextmenu = function(){
var num1 = parseInt(this.parentElement.getElementsByTagName('P')[0].innerHTML);
var num2 = num1 +2;

var numbers = [num1,num2];
removeChips(this,numbers,18);
};  







}
var s01Bet = document.getElementsByClassName('split01-bet');
for(var x = 0; x<s01Bet.length;x++){


s01Bet[x].onmouseover = function(){
var cur = parseInt(this.parentElement.getElementsByTagName('p')[0].innerHTML);

disableSingleBet = true;
this.parentElement.classList.add("select");

document.getElementsByClassName(cur+1)[0].classList.add("select");



}
s01Bet[x].onmouseout = function(){
var cur = parseInt(this.parentElement.getElementsByTagName('p')[0].innerHTML);
    disableSingleBet = false;
this.parentElement.classList.remove("select");

document.getElementsByClassName(cur+1)[0].classList.remove("select");

}



s01Bet[x].onclick = function(){
var num1 = parseInt(this.parentElement.getElementsByTagName('P')[0].innerHTML);
var num2 = num1 +1;

var numbers = [num1, num2];
addChips(this, "s1Chip", numbers,18);

};    
s01Bet[x].oncontextmenu = function(){
var num1 = parseInt(this.parentElement.getElementsByTagName('P')[0].innerHTML);
var num2 = num1 +1;

var numbers = [num1,num2];
removeChips(this,numbers,18);
};  



}


var tri1Bet = document.getElementsByClassName('tri1-bet');
for(var x = 0; x<tri1Bet.length;x++){


tri1Bet[x].onmouseover = function(){
var cur = parseInt(this.parentElement.getElementsByTagName('p')[0].innerHTML);

disableSingleBet = true;
this.parentElement.classList.add("select");

document.getElementsByClassName(cur+2)[0].classList.add("select");
document.getElementsByClassName(cur+3)[0].classList.add("select");



}
tri1Bet[x].onmouseout = function(){
var cur = parseInt(this.parentElement.getElementsByTagName('p')[0].innerHTML);
    disableSingleBet = false;
this.parentElement.classList.remove("select");

document.getElementsByClassName(cur+2)[0].classList.remove("select");
document.getElementsByClassName(cur+3)[0].classList.remove("select");

}


tri1Bet[x].onclick = function(){

var numbers = [0,2,3];
addChips(this, "tri1Chip", numbers,12);

};    
tri1Bet[x].oncontextmenu = function(){

var numbers = [0,2,3];
removeChips(this,numbers,12);
};  






}

var tri2Bet = document.getElementsByClassName('tri2-bet');
for(var x = 0; x<tri2Bet.length;x++){


tri2Bet[x].onmouseover = function(){
var cur = parseInt(this.parentElement.getElementsByTagName('p')[0].innerHTML);

disableSingleBet = true;
this.parentElement.classList.add("select");

document.getElementsByClassName(cur+1)[0].classList.add("select");
document.getElementsByClassName(cur+2)[0].classList.add("select");



}
tri2Bet[x].onmouseout = function(){
var cur = parseInt(this.parentElement.getElementsByTagName('p')[0].innerHTML);
    disableSingleBet = false;
this.parentElement.classList.remove("select");

document.getElementsByClassName(cur+1)[0].classList.remove("select");
document.getElementsByClassName(cur+2)[0].classList.remove("select");

}




tri2Bet[x].onclick = function(){

var numbers = [0,2,1];
addChips(this, "tri2Chip", numbers,12);

};    
tri2Bet[x].oncontextmenu = function(){

var numbers = [0,2,1];
removeChips(this,numbers,12);
};  








}
var SBV = document.getElementsByClassName('split-betV');

for(var b = 0; b<33; b++){

SBV[b].onmouseover = function(){
disableSingleBet = true;
this.parentElement.classList.add("select");
this.parentElement.nextElementSibling.classList.add("select");
};

SBV[b].onmouseout = function(){
    disableSingleBet = false;
this.parentElement.classList.remove("select");
this.parentElement.nextElementSibling.classList.remove("select");
};
    
SBV[b].onclick = function(){
var num1 = parseInt(this.parentElement.getElementsByTagName('P')[0].innerHTML);
var num2 = num1 +3;
var numbers = [num1, num2];
addChips(this, "SVchip", numbers,18);

};    
SBV[b].oncontextmenu = function(){
var num1 = parseInt(this.parentElement.getElementsByTagName('P')[0].innerHTML);
var num2 = num1 +3;
var numbers = [num1, num2];
removeChips(this,numbers,18);
};    
    
};

var SBH = document.getElementsByClassName('split-betH');

for(var b = 0; b<24; b++){

SBH[b].onmouseover = function(){
disableSingleBet = true;
this.parentElement.classList.add("select");

for(var u = 0; u < this.parentElement.classList.length; u++){
switch(this.parentElement.classList[u]){
    case "3":
     case "6":
         case "9":
         case "12":
         case "15":
         case "18":
         case "21":
         case "24":
         case "27":
        case "30":
        case "33":
        case "36":
        case "2":
        case "5":
         case "8":
         case "11":
         case "14":
         case "17":
         case "20":
         case "23":
         case "26":
        case "29":
        case "32":
        case "35":
        var tmpIndex = parseInt(this.parentElement.classList[u]) - 1;
        document.getElementsByClassName(tmpIndex)[0].classList.add("select");
        break;
};
 
};
    
};
    
SBH[b].onmouseout = function(){
    disableSingleBet = false;
this.parentElement.classList.remove("select");
for(var u = 0; u < this.parentElement.classList.length; u++){
switch(this.parentElement.classList[u]){
    case "3":
     case "6":
         case "9":
         case "12":
         case "15":
         case "18":
         case "21":
         case "24":
         case "27":
        case "30":
        case "33":
        case "36":
        case "2":
        case "5":
         case "8":
         case "11":
         case "14":
         case "17":
         case "20":
         case "23":
         case "26":
        case "29":
        case "32":
        case "35":
        var tmpIndex = parseInt(this.parentElement.classList[u]) - 1;
        document.getElementsByClassName(tmpIndex)[0].classList.remove("select");
        break;
};
 
};
};
    
SBH[b].onclick = function(){

var num1 = parseInt(this.parentElement.getElementsByTagName('P')[0].innerHTML);
var num2 = num1 -1;
var numbers = [num1, num2];
addChips(this, "SHchip", numbers,18);
};    
SBH[b].oncontextmenu = function(){
var num1 = parseInt(this.parentElement.getElementsByTagName('P')[0].innerHTML);
var num2 = num1 -1;
var numbers = [num1, num2];    
removeChips(this, numbers,18);
};      
    
    
};

var CB = document.getElementsByClassName('corner-bet');

for(var t = 0; t<22; t++){
    CB[t].onmouseover = function(){
        disableSingleBet = true;
        this.parentElement.classList.add("select");
        for(var u = 0; u < this.parentElement.classList.length; u++){
switch(this.parentElement.classList[u]){
    case "3":
     case "6":
         case "9":
         case "12":
         case "15":
         case "18":
         case "21":
         case "24":
         case "27":
        case "30":
        case "33":
        case "2":
        case "5":
         case "8":
         case "11":
         case "14":
         case "17":
         case "20":
         case "23":
         case "26":
        case "29":
        case "32":
        var tmpIndex1 = parseInt(this.parentElement.classList[u]) - 1;
        var tmpIndex2 = parseInt(this.parentElement.classList[u]) +2;
        var tmpIndex3 = parseInt(this.parentElement.classList[u]) +3;
        document.getElementsByClassName(tmpIndex1)[0].classList.add("select");
        document.getElementsByClassName(tmpIndex2)[0].classList.add("select");
        document.getElementsByClassName(tmpIndex3)[0].classList.add("select");
        break;
};
 
};
        
        
    };
    CB[t].onmouseout = function(){
        disableSingleBet = false;
        this.parentElement.classList.remove("select");
                for(var u = 0; u < this.parentElement.classList.length; u++){
switch(this.parentElement.classList[u]){
    case "3":
     case "6":
         case "9":
         case "12":
         case "15":
         case "18":
         case "21":
         case "24":
         case "27":
        case "30":
        case "33":
        case "2":
        case "5":
         case "8":
         case "11":
         case "14":
         case "17":
         case "20":
         case "23":
         case "26":
        case "29":
        case "32":
        var tmpIndex1 = parseInt(this.parentElement.classList[u]) - 1;
        var tmpIndex2 = parseInt(this.parentElement.classList[u]) +2;
        var tmpIndex3 = parseInt(this.parentElement.classList[u]) +3;
        document.getElementsByClassName(tmpIndex1)[0].classList.remove("select");
        document.getElementsByClassName(tmpIndex2)[0].classList.remove("select");
        document.getElementsByClassName(tmpIndex3)[0].classList.remove("select");
        break;
};
 
};
       
    };
    
    CB[t].onclick = function(){
var num1 = parseInt(this.parentElement.getElementsByTagName('P')[0].innerHTML);
var num2 = num1 +3;
var num3 = num1 -1;
var num4 = num1 +2;
var numbers = [num1, num2,num3, num4];
addChips(this, "cnChip", numbers,9);
};    
CB[t].oncontextmenu = function(){
var num1 = parseInt(this.parentElement.getElementsByTagName('P')[0].innerHTML);
var num2 = num1 +3;
var num3 = num1 -1;
var num4 = num1 +2;
var numbers = [num1, num2,num3, num4];
removeChips(this, numbers,9);
};  
};


var tgRed = document.getElementsByClassName('tg-red');
var tgRedAlt = document.getElementsByClassName('tg-red-alt')[0];
tgRedAlt.onmouseover = function() {
  for (var i = 0; i < tgRed.length; i++) {
    tgRed[i].classList.add("select");

  }
}

tgRedAlt.onmouseout = function() {
  for (var j = 0; j < tgRed.length; j++) {
    tgRed[j].classList.remove("select");
  }
}

var tgBlack = document.getElementsByClassName('tg-black');
var tgBlackAlt = document.getElementsByClassName('tg-black-alt')[0];
tgBlackAlt.onmouseover = function() {
  for (var k = 0; k < tgBlack.length; k++) {
    tgBlack[k].classList.add("select");
  }
}

tgBlackAlt.onmouseout = function() {
  for (var l = 0; l < tgBlack.length; l++) {
    tgBlack[l].classList.remove("select");
  }
}
var tgOddElms = document.getElementsByClassName("odd");

var tgOddBet = document.getElementsByClassName("tg-blue-alt r3")[0];

tgOddBet.onmouseover = function() {
  for (var y = 0; y < tgOddElms.length; y++) {
    tgOddElms[y].classList.add("select");
  }
}

tgOddBet.onmouseout = function() {
  for (var y = 0; y < tgOddElms.length; y++) {
    tgOddElms[y].classList.remove("select");
  }
}

var tgEvElms = document.getElementsByClassName("even");
var tgEvBet = document.getElementsByClassName("tg-blue-alt r3")[1];

tgEvBet.onmouseover = function() {
  for (var z = 0; z < tgEvElms.length; z++) {
    tgEvElms[z].classList.add("select");
  }
}

tgEvBet.onmouseout = function() {
  for (var z = 0; z < tgEvElms.length; z++) {
    tgEvElms[z].classList.remove("select");
  }
}

var tgFH = document.getElementsByClassName("tg-blue-alt r2")[0];
var tgFHElm = document.getElementsByClassName("fh");

tgFH.onmouseover = function() {
  for (var z = 0; z < tgFHElm.length; z++) {
    tgFHElm[z].classList.add("select");
  }
}

tgFH.onmouseout = function() {
  for (var z = 0; z < tgFHElm.length; z++) {
    tgFHElm[z].classList.remove("select");
  }
}
var tgSH = document.getElementsByClassName("tg-blue-alt r2")[1];
var tgSHElm = document.getElementsByClassName("sh");

tgSH.onmouseover = function() {
  for (var z = 0; z < tgSHElm.length; z++) {
    tgSHElm[z].classList.add("select");
  }
}

tgSH.onmouseout = function() {
  for (var z = 0; z < tgSHElm.length; z++) {
    tgSHElm[z].classList.remove("select");
  }
}

var tgFT = document.getElementsByClassName("tg-blue-alt r1")[0];
var tgFTElm = document.getElementsByClassName("ft");

tgFT.onmouseover = function() {
  for (var z = 0; z < tgFTElm.length; z++) {
    tgFTElm[z].classList.add("select");
  }
}

tgFT.onmouseout = function() {
  for (var z = 0; z < tgFTElm.length; z++) {
    tgFTElm[z].classList.remove("select");
  }
}

var tgST = document.getElementsByClassName("tg-blue-alt r1")[1];
var tgSTElm = document.getElementsByClassName("st");

tgST.onmouseover = function() {
  for (var z = 0; z < tgSTElm.length; z++) {
    tgSTElm[z].classList.add("select");
  }
}

tgST.onmouseout = function() {
  for (var z = 0; z < tgSTElm.length; z++) {
    tgSTElm[z].classList.remove("select");
  }
}

var tgTT = document.getElementsByClassName("tg-blue-alt r1")[2];
var tgTTElm = document.getElementsByClassName("tt");

tgTT.onmouseover = function() {
  for (var z = 0; z < tgTTElm.length; z++) {
    tgTTElm[z].classList.add("select");
  }
}

tgTT.onmouseout = function() {
  for (var z = 0; z < tgTTElm.length; z++) {
    tgTTElm[z].classList.remove("select");
  }
}

var tgFR = document.getElementsByClassName("tg-blue")[0];
var tgFRElm = document.getElementsByClassName("fr");

tgFR.onmouseover = function() {
  for (var z = 0; z < tgFRElm.length; z++) {
    tgFRElm[z].classList.add("select");
  }
}

tgFR.onmouseout = function() {
  for (var z = 0; z < tgFRElm.length; z++) {
    tgFRElm[z].classList.remove("select");
  }
}

var tgSR = document.getElementsByClassName("tg-blue")[1];
var tgSRElm = document.getElementsByClassName("sr");

tgSR.onmouseover = function() {
  for (var z = 0; z < tgSRElm.length; z++) {
    tgSRElm[z].classList.add("select");
  }
}

tgSR.onmouseout = function() {
  for (var z = 0; z < tgSRElm.length; z++) {
    tgSRElm[z].classList.remove("select");
  }
}

var tgTR = document.getElementsByClassName("tg-blue")[2];
var tgTRElm = document.getElementsByClassName("tr");

tgTR.onmouseover = function() {
  for (var z = 0; z < tgTRElm.length; z++) {
    tgTRElm[z].classList.add("select");
  }
}

tgTR.onmouseout = function() {
  for (var z = 0; z < tgTRElm.length; z++) {
    tgTRElm[z].classList.remove("select");
  }
}

var TWWagered = 0;

function checkAverageBet(){

	
	
var averageBet = (worldStore.state.user.betted_wager/worldStore.state.user.betted_count)/100;
    
  var ratio = 0;   
    if(averageBet > 0 && averageBet <101){
        ratio = 10;
    };
    
    if(averageBet > 100 && averageBet < 151){
        ratio = 15;
    };
    
    if(averageBet > 150 && averageBet < 201){
        ratio = 20;
    };
    if(averageBet > 200 && averageBet < 351){
         ratio = 25;
    };
    if(averageBet > 350 && averageBet < 501){
         ratio = 30;
    };
    
    if(averageBet > 500 && averageBet < 751){
         ratio = 40;
    };
    
    
    if(averageBet > 750 && averageBet < 1001){
         ratio = 50;
    };
    
    if(averageBet > 1000 && averageBet < 1501){
        ratio = 60;
    };
    
    if(averageBet > 1500 && averageBet < 2001){
        ratio = 70;
    };
    
    if(averageBet > 2000 && averageBet < 5001){
         ratio = 80;
    };
    
    if(averageBet > 5000){
        ratio = 90;
    };

    
    
return ratio;  
};



function createChips(chipType, numbers, multiplier) {

var baseBet = parseInt(document.getElementById("cs-Input").value);
    for(s = 0; s < numbers.length; s++){
        payout[numbers[s]] += baseBet*multiplier;
    };

    var div = document.createElement('div');
            TWWagered += baseBet;
            
    document.getElementById("total-wagered").innerHTML = TWWagered + " bits"; 
          div.className = chipType;
    div.style.background = "#FFB84D";
  div.innerHTML = baseBet;
    
  return div;
}

function addChips(parent, chipType, numbers, multiplier) {
    if(disableChips == false){
    multiplier = multiplier *100;
var baseBet = parseInt(document.getElementById("cs-Input").value);
  if (parent.children.length == 0) {
    parent.appendChild(createChips(chipType, numbers, multiplier));
  } else {
    for(s = 0; s < numbers.length; s++){
        payout[numbers[s]] += baseBet*multiplier;
    };  

    var newVal = parseInt(parent.children[0].innerHTML) + baseBet;
     TWWagered += baseBet;
          document.getElementById("total-wagered").innerHTML = TWWagered + " bits"; 
    parent.children[0].innerHTML = newVal.toString();
    parent.children[0].style.background = "#FFB84D";
  }
    }
}

function removeChips(parent, numbers, multiplier) {
    if(disableChips == false){
    multiplier = multiplier *100;
    var baseBet = parseInt(document.getElementById("cs-Input").value);
  if (parent.children.length == 1) {
    var newVal = parseInt(parent.children[0].innerHTML) - baseBet;
      if (newVal<1){
        for(s = 0; s < numbers.length; s++){
        payout[numbers[s]] -= (baseBet+newVal)*multiplier;
        };  

          
       TWWagered -= (baseBet + newVal);
      } else if (newVal > 0){
          for(s = 0; s < numbers.length; s++){
        payout[numbers[s]] -= baseBet*multiplier;
        };  

          TWWagered -= (baseBet);
      
      
      
      }
          document.getElementById("total-wagered").innerHTML = TWWagered + " bits"; 
    parent.children[0].innerHTML = newVal.toString();
    parent.children[0].style.background = "#FFB84D";

    if (newVal < 1) {
        
      parent.removeChild(parent.children[0]);
        
    }

  }
    }
}


var singleBetCV = document.getElementsByClassName("chipCV");

for(var y = 0; y < singleBetCV.length; y++){
singleBetCV[y].onclick = function(){
      if(disableSingleBet != true){      
        if(this.parentElement.className == "tg-blue-alt r2" || this.parentElement.className == "tg-blue-alt r3"||this.parentElement.className == "tg-red-alt r3" || this.parentElement.className == "tg-black-alt r3" ){
                switch(this.parentElement.getElementsByTagName('P')[0].innerHTML){
            case "1-18":
            var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
            addChips(this,"halfChip", numbers, 2);
            break;
            case "19-36":
            var numbers = [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
            addChips(this,"halfChip", numbers, 2);
            break;
            case "Odd":
            var numbers = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35];
            addChips(this,"halfChip", numbers, 2);
            break;
            case "Even":
            var numbers = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36];
            addChips(this,"halfChip", numbers, 2);
            break;
            case "Red":
            var numbers = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
            addChips(this,"halfChip", numbers, 2);
            break;
            case "Black":
            var numbers = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];
            addChips(this,"halfChip", numbers, 2);
            break;

        }
   
        }else{
        if(this.parentElement.className == "tg-blue-alt r1" || this.parentElement.className == "tg-blue"){
        switch(this.parentElement.getElementsByTagName('P')[0].innerHTML){
            case "R1":
            var numbers = [3,6,9,12,15,18,21,24,27,30,33,36];
            addChips(this,"dozenChip", numbers, 3);
            break;
            case "R2":
            var numbers = [2,5,8,11,14,17,20,23,26,29,32,35];
            addChips(this, "dozenChip", numbers, 3);
            break;
            case "R3":
            var numbers = [1,4,7,10,13,16,19,22,25,28,31,34];
            addChips(this, "dozenChip", numbers, 3);
            break;
            case "1-12":
            var numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
            addChips(this, "dozenChip", numbers, 3);
            break;
            case "13-24":
            var numbers = [13,14,15,16,17,18,19,20,21,22,23,24];
            addChips(this, "dozenChip", numbers, 3);
            break;
            case "25-36":
            var numbers = [25,26,27,28,29,30,31,32,33,34,35,36];
            addChips(this, "dozenChip", numbers, 3);
            break;
        }
        }else{
            var numbers = [parseInt(this.parentElement.getElementsByTagName('P')[0].innerHTML)]
            addChips(this, "chip", numbers, 36);
        }
        }
    
    }
};
    
singleBetCV[y].oncontextmenu = function(){
     if(disableSingleBet != true){      
   if(this.parentElement.className == "tg-blue-alt r2" || this.parentElement.className == "tg-blue-alt r3"||this.parentElement.className == "tg-red-alt r3" || this.parentElement.className == "tg-black-alt r3" ){
                switch(this.parentElement.getElementsByTagName('P')[0].innerHTML){
            case "1-18":
            var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
            removeChips(this, numbers, 2);
            break;
            case "19-36":
            var numbers = [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
                 removeChips(this, numbers, 2);
            break;
            case "Odd":
            var numbers = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35];
                 removeChips(this, numbers, 2);
            break;
            case "Even":
            var numbers = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36];
                 removeChips(this, numbers, 2);
            break;
            case "Red":
            var numbers = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
                 removeChips(this, numbers, 2);
            break;
            case "Black":
            var numbers = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];
                 removeChips(this, numbers, 2);
            break;

        }
   
        }else{
        if(this.parentElement.className == "tg-blue-alt r1" || this.parentElement.className == "tg-blue"){
        switch(this.parentElement.getElementsByTagName('P')[0].innerHTML){
            case "R1":
            var numbers = [3,6,9,12,15,18,21,24,27,30,33,36];
                 removeChips(this, numbers, 3);
            break;
            case "R2":
            var numbers = [2,5,8,11,14,17,20,23,26,29,32,35];
            removeChips(this, numbers, 3);
            break;
            case "R3":
            var numbers = [1,4,7,10,13,16,19,22,25,28,31,34];
            removeChips(this, numbers, 3);
            break;
            case "1-12":
            var numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
           removeChips(this, numbers, 3);
            break;
            case "13-24":
            var numbers = [13,14,15,16,17,18,19,20,21,22,23,24];
            removeChips(this, numbers, 3);
            break;
            case "25-36":
            var numbers = [25,26,27,28,29,30,31,32,33,34,35,36];
          removeChips(this, numbers, 3);
            break;
        }
        }else{
            var numbers = [parseInt(this.parentElement.getElementsByTagName('P')[0].innerHTML)]
            removeChips(this, numbers, 36);
        }
        }
     }
};
    
};

/*

$(window).mousedown(function(e) {
  var x = e.pageX,
    y = e.pageY;
  var res = [];
  var desiredTG = [];
  var ele = document.elementFromPoint(x, y);
  while (ele && ele.tagName != "BODY" && ele.tagName != "HTML") {
 if(ele.className == "chipCV" && desiredTG.length < 1){
      desiredTG.push(ele);
    } else{
    res.push(ele);
    ele.style.display = "none";
    ele = document.elementFromPoint(x, y);  
    }
  }

  for (var i = 0; i < res.length; i++) {
    res[i].style.display = "";
  }
 


  switch (event.which) {
    case 1:
    if(disableSingleBet != true){      
        if(desiredTG[0].parentElement.className == "tg-blue-alt r2" || desiredTG[0].parentElement.className == "tg-blue-alt r3"||desiredTG[0].parentElement.className == "tg-red-alt r3" || desiredTG[0].parentElement.className == "tg-black-alt r3" ){
        addChips(desiredTG[0], "halfChip");
        }else{
        if(desiredTG[0].parentElement.className == "tg-blue-alt r1" || desiredTG[0].parentElement.className == "tg-blue"){
        addChips(desiredTG[0], "dozenChip");
        }else{
            addChips(desiredTG[0], "chip");
        }
        }
    
    }
      break;
    case 3:
            if(disableSingleBet != true){      
   
      removeChips(desiredTG[0]);
            }
      break;
  }

});

*/



function sendAllBets(button) {



	

disableChips = true;
   document.getElementById('bet-button').disabled = true;

    var bonus = checkAverageBet();
    payout[0] += TWWagered * bonus;
    setRangeParam();

    var payouts = rangeParam;

    var wager = TWWagered *100;
    var hash = betStore.state.nextHash;
   
    var bodyParams = {
    client_seed:Math.floor(Math.random()*(Math.pow(2,32))),
    hash: hash,
    payouts: payouts,
    wager: wager,
    max_subsidy:0
	}
	


MoneyPot.placeCustomBet(bodyParams, {
        success: function(bet) {
            payout[0] -= TWWagered * bonus;
          // Update next bet hash
            Dispatcher.sendAction('SET_NEXT_HASH', bet.next_hash);
            var target = convertRawToNumber(bet.outcome)
            animateRoll(target, bet, wager, bonus);
        
        },
        error: function(xhr) {
 
            payout[0] -= TWWagered * bonus;
          console.log('Error');
          if (xhr.responseJSON && xhr.responseJSON) {
            alert(xhr.responseJSON.error);
		
          } else {
            alert('Internal Error');
          
          }
        
		              document.getElementById('bet-button').disabled = false;   
		
		},
        complete: function() {

          // Force re-validation of wager
          Dispatcher.sendAction('UPDATE_WAGER', {
            str: betStore.state.wager.str
          });
        }
      }); 
}



var config = {
  // - Your app's id on moneypot.com
  app_id: 529,                             // <----------------------------- EDIT ME!
  // - Displayed in the navbar
  app_name: 'sat.oshi.xyz',
  // - For your faucet to work, you must register your site at Recaptcha
  // - https://www.google.com/recaptcha/intro/index.html
  recaptcha_sitekey: '6LdNvggTAAAAANd3cn-AD54gQFOYFu4Si3FYSPq0',  // <----- EDIT ME!
  redirect_uri: 'https://sat.oshi.xyz',
  mp_browser_uri: 'https://www.moneypot.com',
  mp_api_uri: 'https://api.moneypot.com',
  chat_uri: '//socket.moneypot.com',
  // - Show debug output only if running on localhost
  debug: isRunningLocally(),
  // - Set this to true if you want users that come to http:// to be redirected
  //   to https://
  //force_https_redirect: !isRunningLocally()
    
  chat_buffer_size: 250,
  // - The amount of bets to show on screen in each tab
  bet_buffer_size: 25
};



//Auto bet global variables
var toggle = true;
var RenderNow = function(){
if(toggle == true){
clearInterval(refreshBet);
setInterval(refreshBet, 5000);
React.createElement(AllBetsTabContent, null); 
}else{};

};

//refresh bet
var refreshBet =  function(){
    setTimeout(function(){
    if(getAllBetData(lastBetID,10).length != 0 ){
        
        
        FirstBuffer.push(getAllBetData(lastBetID ,10));
        SecondBuffer.reverse();
        ThirdBuffer = new CBuffer(100);
        
        for (j = (FirstBuffer.toArray()[0].length-1); j > -1; j--) { 
            SecondBuffer.push(FirstBuffer.toArray()[0][j]);
            ThirdBuffer.push(FirstBuffer.toArray()[0][j]);
            
        };
        SecondBuffer.reverse();
 
   lastBetID = SecondBuffer.first().id;
        
    
        if(document.getElementById('ABTable') != null){
           for (k =0; k < ThirdBuffer.toArray().length; k++) { 
            var row = document.createElement("TR");
            var playercol = document.createElement("TD");
            playercol.innerHTML = ThirdBuffer.toArray()[k].uname;
            var betidcol = document.createElement("TD");
               var a = document.createElement("a");
               a.href = "https://www.moneypot.com/bets/" + ThirdBuffer.toArray()[k].id;
            betidcol.appendChild(a);
               a.innerHTML = ThirdBuffer.toArray()[k].id;
               a.style.color = 'white';
               
            var wagercol = document.createElement("TD");
               wagercol.innerHTML = ThirdBuffer.toArray()[k].wager/100 + ' bits';
           
               
            var profitcol = document.createElement("TD");
               profitcol.innerHTML = ThirdBuffer.toArray()[k].profit/100 + ' bits';
            
                 var multipliercol = document.createElement("TD");
              multipliercol.innerHTML = ((ThirdBuffer.toArray()[k].wager + (ThirdBuffer.toArray()[k].profit > 0? ThirdBuffer.toArray()[k].profit : ThirdBuffer.toArray()[k].profit*-1 )      )/ThirdBuffer.toArray()[k].wager).toFixed(2) + 'x'
               
               
               if(ThirdBuffer.toArray()[k].profit < 0){
               profitcol.style.color = 'rgb(204, 0, 0)';
               }else{profitcol.style.color = 'rgb(0, 255, 51)'; };
           
               row.appendChild(playercol);  
               row.appendChild(betidcol); 
               row.appendChild(wagercol); 
               row.appendChild(profitcol); 
               row.appendChild(multipliercol); 
               document.getElementById('ABTable').insertBefore(row, document.getElementById('ABTable').childNodes[0]);
               
           };
        };
        
        
      }else{};
    
}, 1000)


};


    var FirstBuffer = new CBuffer(1);
    var SecondBuffer = new CBuffer(100);
    var lastBetID = 0;



////////////////////////////////////////////////////////////
// You shouldn't have to edit anything below this line
////////////////////////////////////////////////////////////

if (config.force_https_redirect && window.location.protocol !== "https:") {
  window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);
}

// Hoist it. It's impl'd at bottom of page.
var socket;

// :: Bool
function isRunningLocally() {
  return /^localhost/.test(window.location.host);
}

var el = React.DOM;

// Generates UUID for uniquely tagging components
var genUuid = function() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
};

var helpers = {};


// For displaying HH:MM timestamp in chat
//
// String (Date JSON) -> String
helpers.formatDateToTime = function(dateJson) {
  var date = new Date(dateJson);
  return _.padLeft(date.getHours().toString(), 2, '0') +
    ':' +
    _.padLeft(date.getMinutes().toString(), 2, '0');
};

helpers.randomHouseEdge = function(multiplier,wager){
     console.assert(typeof multiplier === 'number');
     console.assert(typeof wager === 'number');
  
    if (multiplier*wager <= 20000){
        return 0.5 + (0.5*Math.random());
    }
    
    if (multiplier*wager < 200000 && multiplier*wager > 20000){
        return 0.1 + (0.4*Math.random());
    }
    
    if (multiplier*wager <2000000 && multiplier*wager > 200000){
        return 0.01 + (0.09*Math.random());
    
    }

};

// Number -> Number in range (0, 1)
helpers.multiplierToWinProb = function(multiplier, edge) {
  console.assert(typeof multiplier === 'number');
  console.assert(multiplier > 0);
    var advantage = (Math.random()*1) / 100;
    
    if (advantage == 0){
    advantage = 0.0001;
    }
    
    if (advantage > 0.01){
    advantage = 0.01;
    }
    
    var winNum = (1/multiplier)
    var result = winNum - (winNum*advantage);
    var resultString = result.toString();
    resultString = resultString.substring(0,6);
    result = parseFloat(resultString);
    
    if(multiplier>9999||multiplier<1.01){
        result = 0;
    }
    
    
    return result;
  //return (1 - (0.1*edge)) / multiplier;
    
    
};

helpers.calcNumber = function(cond, winProb) {
  console.assert(cond === '<' || cond === '>');
  console.assert(typeof winProb === 'number');

  if (cond === '<') {
    var target = winProb * 100; 
    document.getElementById('targetoutcome').innerHTML = '< ' + target.toFixed(2); 
    return target;  
  } else {
    var target = 99.99 - (winProb * 100);
    document.getElementById('targetoutcome').innerHTML = '> ' + target.toFixed(2); 
    return target;
  }
};

helpers.roleToLabelElement = function(role) {
  switch(role) {
    case 'ADMIN':
      return el.span({style:{
		   background:'green',
     	padding:'5px',
 
        'borderRadius':  '6px'
      }}, 'MP Staff');
    case 'MOD':
      return el.span({style:{
      background:'green',
     	padding:'5px',
        'borderRadius':  '6px'
      }}, 'Mod');
    case 'OWNER':
      return el.span({style:{
		 background:'green',
     	padding:'5px',
        'borderRadius':  '6px'
      }}, 'Owner');
    default:
      return '';
  }
};

// -> Object
helpers.getHashParams = function() {
  var hashParams = {};
  var e,
      a = /\+/g,  // Regex for replacing addition symbol with a space
      r = /([^&;=]+)=?([^&;]*)/g,
      d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
      q = window.location.hash.substring(1);
  while (e = r.exec(q))
    hashParams[d(e[1])] = d(e[2]);
  return hashParams;
};

// getPrecision('1') -> 0
// getPrecision('.05') -> 2
// getPrecision('25e-100') -> 100
// getPrecision('2.5e-99') -> 100
helpers.getPrecision = function(num) {
  var match = (''+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  if (!match) { return 0; }
  return Math.max(
    0,
    // Number of digits right of decimal point.
    (match[1] ? match[1].length : 0) -
    // Adjust for scientific notation.
    (match[2] ? +match[2] : 0));
};

////////////////////////////////////////////////////////////
var getUserStats = function(username){
    var userData;
    var url = 'https://api.moneypot.com/v1/user-stats?access_token=' + worldStore.state.accessToken + '&&app_id=' + config.app_id + '&&uname=' + username;
      $.ajax({
      url:      url,
      dataType: 'json', // data type of response
      async: false, 
      method:   'GET',
      headers: {
        'Content-Type': 'text/plain'
      },
      
      success: function(data){
       userData = data;
      }

    });
    
        return userData;
}

var getAllBetData = function(lastBetID, limit, betData) {
   var betData = null;

    
    var url = 'https://api.moneypot.com/v1/list-bets?access_token=' + worldStore.state.accessToken + '&&limit=' + limit + '&&app_id=' + config.app_id + '&&greater_than=' + lastBetID;
    
  $.ajax({
      url:      url,
      dataType: 'json', // data type of response
      async: false, 
      method:   'GET',
      headers: {
        'Content-Type': 'text/plain'
      },
      
      success: function(data){
       betData = data;
      }

    });
    
    return betData;
    
  };




// A weak MoneyPot API abstraction
var MoneyPot = (function() {

  var o = {};

  o.apiVersion = 'v1';

  // method: 'GET' | 'POST' | ...
  // endpoint: '/tokens/abcd-efgh-...'
  var noop = function() {};
  var makeMPRequest = function(method, bodyParams, endpoint, callbacks) {

    if (!worldStore.state.accessToken)
      throw new Error('Must have accessToken set to call MoneyPot API');

    var url = config.mp_api_uri + '/' + o.apiVersion + endpoint +
              '?access_token=' + worldStore.state.accessToken + '&&app_id=' + config.app_id;
  
    $.ajax({
      url:      url,
      dataType: 'json', // data type of response
      method:   method,
      data:     bodyParams ? JSON.stringify(bodyParams) : undefined,
      headers: {
        'Content-Type': 'text/plain'
      },
      // Callbacks
      success:  callbacks.success  || noop,
      error:    callbacks.error    || noop,
      complete: callbacks.complete || noop
    });
  };



  


  o.getTokenInfo = function(callbacks) {
    var endpoint = '/token';
    makeMPRequest('GET', undefined, endpoint, callbacks);
  };



  o.generateBetHash = function(callbacks) {
    var endpoint = '/hashes';
    makeMPRequest('POST', undefined, endpoint, callbacks);
  };

  o.getDepositAddress = function(callbacks) {
    var endpoint = '/deposit-address';
    makeMPRequest('GET', undefined, endpoint, callbacks);
  };

  // gRecaptchaResponse is string response from google server
  // `callbacks.success` signature	is fn({ claim_id: Int, amoutn: Satoshis })
  o.claimFaucet = function(gRecaptchaResponse, callbacks) {
    console.log('Hitting POST /claim-faucet');
    var endpoint = '/claim-faucet';
    var body = { response: gRecaptchaResponse };
    makeMPRequest('POST', body, endpoint, callbacks);
  };




  // bodyParams is an object:
  // - wager: Int in satoshis
  // - client_seed: Int in range [0, 0^32)
  // - hash: BetHash
  // - cond: '<' | '>'
  // - number: Int in range [0, 99.99] that cond applies to
  // - payout: how many satoshis to pay out total on win (wager * multiplier)
  o.placeSimpleDiceBet = function(bodyParams, callbacks) {
    var endpoint = '/bets/simple-dice';
    makeMPRequest('POST', bodyParams, endpoint, callbacks);
  };
    
    o.placeCustomBet = function(bodyParams, callbacks) {
    var endpoint = '/bets/custom';
    makeMPRequest('POST', bodyParams, endpoint, callbacks);
  };
    
 

  return o;
})();

////////////////////////////////////////////////////////////

var Dispatcher = new (function() {
  // Map of actionName -> [Callback]
  this.callbacks = {};

  var self = this;

  // Hook up a store's callback to receive dispatched actions from dispatcher
  //
  // Ex: Dispatcher.registerCallback('NEW_MESSAGE', function(message) {
  //       console.log('store received new message');
  //       self.state.messages.push(message);
  //       self.emitter.emit('change', self.state);
  //     });
  this.registerCallback = function(actionName, cb) {
   

    if (!self.callbacks[actionName]) {
      self.callbacks[actionName] = [cb];
    } else {
      self.callbacks[actionName].push(cb);
    }
  };

  this.sendAction = function(actionName, payload) {


    // Ensure this action has 1+ registered callbacks
    if (!self.callbacks[actionName]) {
      throw new Error('Unsupported actionName: ' + actionName);
    }

    // Dispatch payload to each registered callback for this action
    self.callbacks[actionName].forEach(function(cb) {
      cb(payload);
    });
  };
});

////////////////////////////////////////////////////////////

var Store = function(storeName, initState, initCallback) {

  this.state = initState;
  this.emitter = new EventEmitter();

  // Execute callback immediately once store (above state) is setup
  // This callback should be used by the store to register its callbacks
  // to the dispatcher upon initialization
  initCallback.call(this);

  var self = this;

  // Allow components to listen to store events (i.e. its 'change' event)
  this.on = function(eventName, cb) {
    self.emitter.on(eventName, cb);
  };

  this.off = function(eventName, cb) {
    self.emitter.off(eventName, cb);
  };
};

////////////////////////////////////////////////////////////

// Manage access_token //////////////////////////////////////
//
// - If access_token is in url, save it into localStorage.
//   `expires_in` (seconds until expiration) will also exist in url
//   so turn it into a date that we can compare

var access_token, expires_in, expires_at;

if (helpers.getHashParams().access_token) {
  console.log('[token manager] access_token in hash params');
  access_token = helpers.getHashParams().access_token;
  expires_in = helpers.getHashParams().expires_in;
  expires_at = new Date(Date.now() + (expires_in * 1000));

  localStorage.setItem('access_token', access_token);
  localStorage.setItem('expires_at', expires_at);
} else if (localStorage.access_token) {
  console.log('[token manager] access_token in localStorage');
  expires_at = localStorage.expires_at;
  // Only get access_token from localStorage if it expires
  // in a week or more. access_tokens are valid for two weeks
  if (expires_at && new Date(expires_at) > new Date(Date.now() + (1000 * 60 * 60 * 24 * 7))) {
    access_token = localStorage.access_token;
  } else {
    localStorage.removeItem('expires_at');
    localStorage.removeItem('access_token');
  }
} else {
  console.log('[token manager] no access token');
}

// Scrub fragment params from url.
if (window.history && window.history.replaceState) {
  window.history.replaceState({}, document.title, "/");
} else {
  // For browsers that don't support html5 history api, just do it the old
  // fashioned way that leaves a trailing '#' in the url
  window.location.hash = '#';
}

////////////////////////////////////////////////////////////

var chatStore = new Store('chat', {
  messages: new CBuffer(config.chat_buffer_size),
  waitingForServer: false,
  userList: {},
  showUserList: false,
  loadingInitialMessages: true
}, function() {
  var self = this;

  // `data` is object received from socket auth
  Dispatcher.registerCallback('INIT_CHAT', function(data) {
    console.log('[ChatStore] received INIT_CHAT');
    // Give each one unique id
    var messages = data.chat.messages.map(function(message) {
      message.id = genUuid();
      return message;
    });

    // Reset the CBuffer since this event may fire multiple times,
    // e.g. upon every reconnection to chat-server.
    self.state.messages.empty();

    self.state.messages.push.apply(self.state.messages, messages);

    // Indicate that we're done with initial fetch
    self.state.loadingInitialMessages = false;

    // Load userList
    self.state.userList = data.chat.userlist;
    self.emitter.emit('change', self.state);
    self.emitter.emit('init');
  });

  Dispatcher.registerCallback('NEW_MESSAGE', function(message) {
    console.log('[ChatStore] received NEW_MESSAGE');
    message.id = genUuid();
    self.state.messages.push(message);

    self.emitter.emit('change', self.state);
    self.emitter.emit('new_message');
  });

  Dispatcher.registerCallback('TOGGLE_CHAT_USERLIST', function() {
    console.log('[ChatStore] received TOGGLE_CHAT_USERLIST');
    self.state.showUserList = !self.state.showUserList;
    self.emitter.emit('change', self.state);
  });

  // user is { id: Int, uname: String, role: 'admin' | 'mod' | 'owner' | 'member' }
  Dispatcher.registerCallback('USER_JOINED', function(user) {
    console.log('[ChatStore] received USER_JOINED:', user);
    self.state.userList[user.uname] = user;
    self.emitter.emit('change', self.state);
  });

  // user is { id: Int, uname: String, role: 'admin' | 'mod' | 'owner' | 'member' }
  Dispatcher.registerCallback('USER_LEFT', function(user) {
    console.log('[ChatStore] received USER_LEFT:', user);
    delete self.state.userList[user.uname];
    self.emitter.emit('change', self.state);
  });

  // Message is { text: String }
  Dispatcher.registerCallback('SEND_MESSAGE', function(text) {
    console.log('[ChatStore] received SEND_MESSAGE');
    self.state.waitingForServer = true;
    self.emitter.emit('change', self.state);
    socket.emit('new_message', { text: text }, function(err) {
      if (err) {
        alert('Chat Error: ' + err);
      }
    });
  });
});

var betStore = new Store('bet', {
  nextHash: undefined,
clientSeed: undefined,
  wager: {
    str: '1',
    num: 1,
    error: undefined
  },
  multiplier: {
    str: '2.00',
    num: 2.00,
    error: undefined
  },
  hotkeysEnabled: false
}, function() {
  var self = this;

  Dispatcher.registerCallback('SET_NEXT_HASH', function(hexString) {
    
    self.state.nextHash = hexString;
    document.getElementById("ServerHash").value = hexString;
    document.getElementById("ClientSeed").value = (Math.floor(Math.random()*4294967296)).toString();
    self.emitter.emit('change', self.state);
   
  });

  Dispatcher.registerCallback('UPDATE_WAGER', function(newWager) {
    self.state.wager = _.merge({}, self.state.wager, newWager);

    var n = parseInt(self.state.wager.str, 10);

    // If n is a number, ensure it's at least 1 bit
    if (isFinite(n)) {
      n = Math.max(n, 1);
      self.state.wager.str = n.toString();
    }

    // Ensure wagerString is a number
    if (isNaN(n) || /[^\d]/.test(n.toString())) {
      self.state.wager.error = 'INVALID_WAGER';
    // Ensure user can afford balance
    } else if (n * 100 > worldStore.state.user.balance) {
      self.state.wager.error = 'CANNOT_AFFORD_WAGER';
      self.state.wager.num = n;
    } else {
      // wagerString is valid
      self.state.wager.error = null;
      self.state.wager.str = n.toString();
      self.state.wager.num = n;
    }

    self.emitter.emit('change', self.state);
  });

  Dispatcher.registerCallback('UPDATE_MULTIPLIER', function(newMult) {
    self.state.multiplier = _.merge({}, self.state.multiplier, newMult);
    self.emitter.emit('change', self.state);
  });
});

// The general store that holds all things until they are separated
// into smaller stores for performance.
var worldStore = new Store('world', {
  isLoading: true,
  user: undefined,
  accessToken: access_token,
  isRefreshingUser: false,
  hotkeysEnabled: false,
  currTab: 'MY_BETS',
  bets: new CBuffer(25),
  allBets: new CBuffer(25),
  grecaptcha: undefined
}, function() {
  var self = this;

  // TODO: Consider making these emit events unique to each callback
  // for more granular reaction.

  // data is object, note, assumes user is already an object
  Dispatcher.registerCallback('UPDATE_USER', function(data) {
    self.state.user = _.merge({}, self.state.user, data);
    self.emitter.emit('change', self.state);

	  
	
    document.getElementById('level').innerHTML = "Bonus " + checkAverageBet() + "%";
  });

    
    
  // deprecate in favor of SET_USER
  Dispatcher.registerCallback('USER_LOGIN', function(user) {
    self.state.user = user;
    self.emitter.emit('change', self.state);
    self.emitter.emit('user_update');
  });

  // Replace with CLEAR_USER
  Dispatcher.registerCallback('USER_LOGOUT', function() {
    self.state.user = undefined;
    self.state.accessToken = undefined;
    localStorage.removeItem('expires_at');
    localStorage.removeItem('access_token');
    self.state.bets.empty();
    self.emitter.emit('change', self.state);
  });

  Dispatcher.registerCallback('START_LOADING', function() {
    self.state.isLoading = true;
    self.emitter.emit('change', self.state);
  });

  Dispatcher.registerCallback('STOP_LOADING', function() {
    self.state.isLoading = false;
    self.emitter.emit('change', self.state);
  });

  Dispatcher.registerCallback('CHANGE_TAB', function(tabName) {
    console.assert(typeof tabName === 'string');
    self.state.currTab = tabName;
    self.emitter.emit('change', self.state);
  });

  Dispatcher.registerCallback('NEW_BET', function(bet) {
    console.assert(typeof bet === 'object');
    self.state.bets.push(bet);
    prevBetStats.push(bet);
    self.emitter.emit('change', self.state);
  });

  Dispatcher.registerCallback('TOGGLE_HOTKEYS', function() {
    self.state.hotkeysEnabled = !self.state.hotkeysEnabled;
    self.emitter.emit('change', self.state);
  });

  Dispatcher.registerCallback('DISABLE_HOTKEYS', function() {
    self.state.hotkeysEnabled = false;
    self.emitter.emit('change', self.state);
  });

  Dispatcher.registerCallback('START_REFRESHING_USER', function() {
    self.state.isRefreshingUser = true;
    self.emitter.emit('change', self.state);
    MoneyPot.getTokenInfo({
      success: function(data) {
        console.log('Successfully loaded user from tokens endpoint', data);
        var user = data.auth.user;
        self.state.user = user;
        self.emitter.emit('change', self.state);
        self.emitter.emit('user_update');
      },
      error: function(err) {
        console.log('Error:', err);
      },
      complete: function() {
        Dispatcher.sendAction('STOP_REFRESHING_USER');
      }
    });
  });

  Dispatcher.registerCallback('STOP_REFRESHING_USER', function() {
    self.state.isRefreshingUser = false;
    self.emitter.emit('change', self.state);
  });

  Dispatcher.registerCallback('GRECAPTCHA_LOADED', function(_grecaptcha) {
    self.state.grecaptcha = _grecaptcha;
    self.emitter.emit('grecaptcha_loaded');
  });

});

////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////

var UserBox = React.createClass({
  displayName: 'UserBox',
  _onStoreChange: function() {
    this.forceUpdate();
  },
  componentDidMount: function() {
    worldStore.on('change', this._onStoreChange);
    betStore.on('change', this._onStoreChange);
  },
  componentWillUnount: function() {
    worldStore.off('change', this._onStoreChange);
    betStore.off('change', this._onStoreChange);
  },
  _onLogout: function() {
    Dispatcher.sendAction('USER_LOGOUT');
  },
  _onRefreshUser: function() {
    Dispatcher.sendAction('START_REFRESHING_USER');
  },
  _openWithdrawPopup: function() {
    var windowUrl = config.mp_browser_uri + '/dialog/withdraw?app_id=' + config.app_id;
    var windowName = 'manage-auth';
    var windowOpts = [
      'width=420',
      'height=450',
      'left=100',
      'top=100'
    ].join(',');
    var windowRef = window.open(windowUrl, windowName, windowOpts);
    windowRef.focus();
    return false;
  },
  _openDepositPopup: function() {
    var windowUrl = config.mp_browser_uri + '/dialog/deposit?app_id=' + config.app_id;
    var windowName = 'manage-auth';
    var windowOpts = [
      'width=420',
      'height=450',
      'left=100',
      'top=100'
    ].join(',');
    var windowRef = window.open(windowUrl, windowName, windowOpts);
    windowRef.focus();
    return false;
     

      
  },
  render: function() {

    var innerNode;
    if (worldStore.state.isLoading) {

      innerNode = el.span(
          {className: ''},
        'Loading...'
      );
    } else if (worldStore.state.user) {

      innerNode = 
        // Logged in as...
        el.div(
          {
        onClick:this._onRefreshUser,
           style:{  
               paddingRight: '1%',
               paddingLeft: '1%'
          }
          
          },

          el.span({className: 'font-resize-2'}, worldStore.state.user.uname), 
          el.span({className: 'font-resize-2',id: 'level',style:{marginLeft:'2%'}}, "Bonus " + checkAverageBet() + "%"), 
     
        el.span(
            {className: 'font-resize-2',style:{marginLeft:'2%'}},
        (worldStore.state.user.balance / 100).toFixed(2) + ' bits'
        ), 
          
          
          
          el.ul(
              {id:'userboxresize',style:{width:'100.4%',marginRight:'-1px'}},
        el.li({style:{borderRight: '1px solid #c6d0da'}},el.a({className: 'font-resize-2',onClick:this._openDepositPopup},'Deposit')),el.li({style:{borderRight: '1px solid #c6d0da'}},el.a({className: 'font-resize-2',onClick:this._openWithdrawPopup},'Withdraw')),el.li({style:{borderRight: '1px solid #c6d0da'}},el.a({className: 'font-resize-2',onClick:this._onLogout},'Logout'))
            
            
            
        )
     );
          
          
          
          
          
    } else {
      // User needs to login
    document.getElementById('bet-button').disabled = true;
      innerNode =     el.a(
          {
         
            href: config.mp_browser_uri + '/oauth/authorize' +
              '?app_id=' + config.app_id +
              '&redirect_uri=' + config.redirect_uri,
            className: '',
            style:{}
          },
          el.span({className: 'font-resize-2'},'Login with Moneypot')
        )}

    return innerNode;
  
  }
});

var Navbar = React.createClass({
  displayName: 'Navbar',
  render: function() {
    return React.createElement(UserBox, null);
 
  }
});

var ChatBoxInput = React.createClass({
  displayName: 'ChatBoxInput',
  _onStoreChange: function() {
    this.forceUpdate();
  },
  componentDidMount: function() {
    chatStore.on('change', this._onStoreChange);
    worldStore.on('change', this._onStoreChange);
  },
  componentWillUnmount: function() {
    chatStore.off('change', this._onStoreChange);
    worldStore.off('change', this._onStoreChange);
  },
  //
  getInitialState: function() {
    return { text: '' };
  },
  // Whenever input changes
  _onChange: function(e) {
    this.setState({ text: e.target.value });
  },
  // When input contents are submitted to chat server
  _onSend: function() {
    var self = this;
    Dispatcher.sendAction('SEND_MESSAGE', this.state.text);
    this.setState({ text: '' });
  },
  _onFocus: function() {
    // When users click the chat input, turn off bet hotkeys so they
    // don't accidentally bet
    if (worldStore.state.hotkeysEnabled) {
      Dispatcher.sendAction('DISABLE_HOTKEYS');
    }
  },
  _onKeyPress: function(e) {
    var ENTER = 13;
    if (e.which === ENTER) {
      if (this.state.text.trim().length > 0) {
        this._onSend();
      }
    }
  },
  render: function() {
    return (
      el.div(
        {style:{width:'100%'},
			
			className: 'row'},
        el.div(
          {className: 'col-md-9'},
          chatStore.state.loadingInitialMessages ?
            el.div(
              {
                style: {marginTop: '7px'},
                className: 'text-muted'
              },
              el.span(
                {className: 'glyphicon glyphicon-refresh rotate'}
              ),
              ' Loading...'
            )
          :
            el.input(
              {
                id: 'chat-input',
                style:{  border: '1px solid black', background: '#5E778F', outline:'none', borderRadius: '5px', color: 'white', marginLeft:'35px', width:'100%', height: '30px'},
                type: 'text',
                value: this.state.text,
                placeholder: worldStore.state.user ?
                  'Chat' :
                  'Login to chat',
                onChange: this._onChange,
                onKeyPress: this._onKeyPress,
                onFocus: this._onFocus,
                ref: 'input',
                // TODO: disable while fetching messages
                disabled: !worldStore.state.user || chatStore.state.loadingInitialMessages
              }
            )
        ),
        el.div(
          {className: 'col-md-3'},
          el.button(
            {
                 style:{position:'absolute', height: '30px',left:'0', top:'0', marginLeft:'113%', marginTop:'0px'},
              type: 'button',
              className: 'chatButton',
              disabled: !worldStore.state.user ||
                chatStore.state.waitingForServer ||
                this.state.text.trim().length === 0,
              onClick: this._onSend
            },
            'Send'
          )
        )
      )
    );
  }
});

var ChatUserList = React.createClass({
  displayName: 'ChatUserList',
  render: function() {
    return (
      el.div(
        {className: 'panel panel-default'},
        el.div(
          {style:{overflowY: 'auto',listStyle:'none',position:'absolute', top:'2.5%',right:'0',marginRight:'20%'}},
          'UserList'
        ),
        el.div(
          {style:{textAlign:'left',listStyle:'none',position:'absolute', top:'0',left:'0', marginTop:'35px',marginLeft:'70%'}},
          el.ul(
            {style:{listStyle:'none', height: '50px'}},
            _.values(chatStore.state.userList).map(function(u) {
              return el.li(
                {style:{listStyle:'none', height: '50px'},
                  key: u.uname
                },
                helpers.roleToLabelElement(u.role),
                ' ' + u.uname
              );
            })
          )
        )
      )
    );
  }
});

var msgcount = 0;

function playSoundChat(){
document.getElementById("chatAlertSound").play();
}

var ChatBox = React.createClass({
  displayName: 'ChatBox',
  _onStoreChange: function() {
    this.forceUpdate();
  },
  // New messages should only force scroll if user is scrolled near the bottom
  // already. This allows users to scroll back to earlier convo without being
  // forced to scroll to bottom when new messages arrive
  _onNewMessage: function() {
	if(document.getElementById("chatBox").className == "chat-hide"){
		playSoundChat();
		msgcount++;
		if(msgcount > 99){
		msgcount = "99+";
		}
		document.getElementById("cTrigger").innerHTML =  "Chat " + msgcount;
		document.getElementById("cTrigger").style.color = "yellow"
	}
	  
    var node = this.refs.chatListRef.getDOMNode();

    // Only scroll if user is within 100 pixels of last message
    var shouldScroll = function() {
      var distanceFromBottom = node.scrollHeight - ($(node).scrollTop() + $(node).innerHeight());
      console.log('DistanceFromBottom:', distanceFromBottom);
      return distanceFromBottom <= 250;
    };

    if (shouldScroll()) {
      this._scrollChat();
    }
  },
  _scrollChat: function() {
    var node = this.refs.chatListRef.getDOMNode();
    $(node).scrollTop(node.scrollHeight);
  },
  componentDidMount: function() {
    chatStore.on('change', this._onStoreChange);
    chatStore.on('new_message', this._onNewMessage);
    chatStore.on('init', this._scrollChat);
  },
  componentWillUnmount: function() {
    chatStore.off('change', this._onStoreChange);
    chatStore.off('new_message', this._onNewMessage);
    chatStore.off('init', this._scrollChat);
  },
  //
  _onUserListToggle: function() {
    Dispatcher.sendAction('TOGGLE_CHAT_USERLIST');
  },
  render: function() {
    return el.div(
      {id: 'chat-box'},
      el.div(
        {className: 'panel panel-default'},
        el.div(
          {className: 'panel-body', style:{}},
          el.ul(
            {id: "cpheight",style:{lineHeight:'2.7',listStyle:'none', float:'left',textAlign:'left',
    height: "360px",
	
    width: '50%',
    overflowY: 'scroll'}, ref: 'chatListRef'},
            chatStore.state.messages.toArray().map(function(m) {
              return el.li(
                {
                  // Use message id as unique key
                  key: m.id
                },
                el.span(
                  {
                    style: {
                   	background:'#475360',
                    borderRadius:'5px',
                    padding:'5px',
                    marginRight:'5px'
                    }
                  },
                  helpers.formatDateToTime(m.created_at),
                  ' '
                ),
                m.user ? helpers.roleToLabelElement(m.user.role) : '',
                m.user ? ' ' : '',
                el.code(
					{style:{background:'#5E778F',borderRadius:'5px',padding:'5px'}},
                  m.user ?
                    // If chat message:
                    m.user.uname :
                    // If system message:
                    'SYSTEM :: ' + m.text
                ),el.br(null,null),
                m.user ?
                  // If chat message
                  el.span({style:{padding:'10px', paddingLeft:'0px'}}, ' ' + m.text) :
                  // If system message
                  ''
              );
            })
          )
        ),
        el.div(
          {style:{position:'absolute',bottom:'15px',width:'50%'}},
          React.createElement(ChatBoxInput, null)
        )
      ),
      // After the chatbox panel
      el.p(
        {
          className: 'text-right text-muted',
          style: {position:'absolute',bottom:'0',right:'0', marginRight:'5%', marginBottom:'15px'}
        },
        'Users online: ' + Object.keys(chatStore.state.userList).length + ' '
        // Show/Hide userlist button
       
      ),
      // Show userlist
      React.createElement(ChatUserList, null)
    );
  }
});


var BetBoxChance = React.createClass({
  displayName: 'BetBoxChance',
  // Hookup to stores
  _onStoreChange: function() {
    this.forceUpdate();
  },
  componentDidMount: function() {
    betStore.on('change', this._onStoreChange);
    worldStore.on('change', this._onStoreChange);
  },
  componentWillUnmount: function() {
    betStore.off('change', this._onStoreChange);
    worldStore.off('change', this._onStoreChange);
  },
  //
  render: function() {
    // 0.00 to 1.00
    var houseEdge = helpers.randomHouseEdge(betStore.state.multiplier.num, betStore.state.wager.num);
    
    var winProb = helpers.multiplierToWinProb(betStore.state.multiplier.num, houseEdge);
    
    var baseProb = 1/betStore.state.multiplier.num; 
    var minProb = baseProb - (baseProb*0.01);
    var minString = minProb.toString();
    minString = minString.substring(0,6);
    minProb = 100* parseFloat(minString);
    minProb = minProb.toFixed(2);
      
    var maxProb = baseProb - (baseProb*0.0001);
    var maxString = maxProb.toString();
    maxString = maxString.substring(0,6);
    maxProb = 100 * parseFloat(maxString);  
    maxProb = maxProb.toFixed(2);
      
    var isError = betStore.state.multiplier.error || betStore.state.wager.error;

    // Just show '--' if chance can't be calculated
    var innerNode;
    if (isError) {
        
        innerNode = el.span(
        {className: 'h1'},
        ' ' + minProb + '% - ' + maxProb + '%'
      );
      /*innerNode = el.span(
        {className: 'lead'},
        ' --'
      );*/
    } else {
      innerNode = el.span(
        {className: 'h1'},
       ' ' + minProb + '% - ' + maxProb + '%'
      );
    }

    return el.div(
      {},
      el.span(
        {className: 'h1', style: { 
            'marginRight': '5px',
            fontWeight: 'bold' }},
        'Chance:'
      ),
      innerNode
    );
  }
});

var BetBoxProfit = React.createClass({
  displayName: 'BetBoxProfit',
  // Hookup to stores
  _onStoreChange: function() {
    this.forceUpdate();
  },
  componentDidMount: function() {
    betStore.on('change', this._onStoreChange);
    worldStore.on('change', this._onStoreChange);
  },
  componentWillUnmount: function() {
    betStore.off('change', this._onStoreChange);
    worldStore.off('change', this._onStoreChange);
  },
  //
  render: function() {
    var profit = betStore.state.wager.num * (betStore.state.multiplier.num - 1);

    var innerNode;
    if (betStore.state.multiplier.error || betStore.state.wager.error) {
        innerNode = el.span(
        {
          className: 'h1',
        },
        profit.toFixed(2) + ' bits'
      );
        
        /*innerNode = el.span(
        {className: 'lead'},
        '--'
      );*/
    } else {
      innerNode = el.span(
        {
          className: 'h1',
        },
       profit.toFixed(2) + ' bits'
      );
    }

    return el.div(
      null,
      el.span(
        {className: 'h1', style: { 
            'marginRight': '20px',
            fontWeight: 'bold' }},
        'Profit: '
      ),
      innerNode
    );
  }
});

var BetBoxMultiplier = React.createClass({
  displayName: 'BetBoxMultiplier',
  // Hookup to stores
  _onStoreChange: function() {
    this.forceUpdate();
  },
  componentDidMount: function() {
    betStore.on('change', this._onStoreChange);
    worldStore.on('change', this._onStoreChange);
  },
  componentWillUnmount: function() {
    betStore.off('change', this._onStoreChange);
    worldStore.off('change', this._onStoreChange);
  },
  //
  _validateMultiplier: function(newStr) {
    var num = parseFloat(newStr, 10);

    // If num is a number, ensure it's at least 0.01x
    // if (Number.isFinite(num)) {
    //   num = Math.max(num, 0.01);
    //   this.props.currBet.setIn(['multiplier', 'str'], num.toString());
    // }

    var isFloatRegexp = /^(\d*\.)?\d+$/;

    // Ensure str is a number
    if (isNaN(num) || !isFloatRegexp.test(newStr)) {
      Dispatcher.sendAction('UPDATE_MULTIPLIER', { error: 'INVALID_MULTIPLIER' });
      // Ensure multiplier is >= 1.00x
    } else if (num < 1.01) {
      Dispatcher.sendAction('UPDATE_MULTIPLIER', { error: 'MULTIPLIER_TOO_LOW' });
      // Ensure multiplier is <= max allowed multiplier (100x for now)
    } else if (num > 9999) {
      Dispatcher.sendAction('UPDATE_MULTIPLIER', { error: 'MULTIPLIER_TOO_HIGH' });
      // Ensure no more than 2 decimal places of precision
    } else if (helpers.getPrecision(num) > 2) {
      Dispatcher.sendAction('UPDATE_MULTIPLIER', { error: 'MULTIPLIER_TOO_PRECISE' });
      // multiplier str is valid
    } else {
      Dispatcher.sendAction('UPDATE_MULTIPLIER', {
        num: num,
        error: null
      });
    }
  },
  _onMultiplierChange: function(e) {
    console.log('Multiplier changed');
    var str = e.target.value;
    console.log('You entered', str, 'as your multiplier');
    Dispatcher.sendAction('UPDATE_MULTIPLIER', { str: str });
    this._validateMultiplier(str);
  },
  render: function() {
    return el.div(
      {className: 'align-left form-group'},
    
        el.h2(
          {
            style: betStore.state.multiplier.error ? { color: 'rgb(204, 0, 0)' } : {}
          },
          'Multiplier'),
     

        el.input(
          {
            type: 'text',
            value: betStore.state.multiplier.str,
            className: 'align-left form-control input-lg',
            style: {
            width: '50%',
          
            'marginBottom': '25px',
            //'backgroundColor': 'transparent',
            //'border': '1px solid #ffffff',
            'fontWeight': '300'
          
          },
            onChange: this._onMultiplierChange,
            disabled: !!worldStore.state.isLoading
          }
        )
    );
  }
});

var BetBoxWager = React.createClass({
  displayName: 'BetBoxWager',
  // Hookup to stores
  _onStoreChange: function() {
    this.forceUpdate();
  },
  _onBalanceChange: function() {
    // Force validation when user logs in
    // TODO: Re-force it when user refreshes
    Dispatcher.sendAction('UPDATE_WAGER', {});
  },
  componentDidMount: function() {
    betStore.on('change', this._onStoreChange);
    worldStore.on('change', this._onStoreChange);
    worldStore.on('user_update', this._onBalanceChange);
  },
  componentWillUnmount: function() {
    betStore.off('change', this._onStoreChange);
    worldStore.off('change', this._onStoreChange);
    worldStore.off('user_update', this._onBalanceChange);
  },
  _onWagerChange: function(e) {
    var str = e.target.value;
    Dispatcher.sendAction('UPDATE_WAGER', { str: str });
  },
  _onHalveWager: function() {
    var newWager = Math.round(betStore.state.wager.num / 2);
    Dispatcher.sendAction('UPDATE_WAGER', { str: newWager.toString() });
  },
  _onDoubleWager: function() {
    var n = betStore.state.wager.num * 2;
    Dispatcher.sendAction('UPDATE_WAGER', { str: n.toString() });

  },
  _onMaxWager: function() {
    // If user is logged in, use their balance as max wager
    var balanceBits;
    if (worldStore.state.user) {
      balanceBits = Math.floor(worldStore.state.user.balance / 100);
    } else {
      balanceBits = 42000;
    }
    Dispatcher.sendAction('UPDATE_WAGER', { str: balanceBits.toString() });
  },
  //
  render: function() {
   
    return el.div(
      {className: 'align-right form-group', style:{}},
   
        el.h2(
          // If wagerError, make the label red
          betStore.state.wager.error ? { style: {color: 'rgb(204, 0, 0)'} } : '#444',
          'Wager')
      ,
      el.input(
        {
          value: betStore.state.wager.str,
          type: 'text',
          className: 'align-right form-control input-lg',
          style: {
              'marginLeft': '50%',
            'marginBottom': '25px',
         //   'backgroundColor': 'transparent',
           // 'border': '1px solid #ffffff',
            'fontWeight': '300',
            width:'50%'
          
          },
          onChange: this._onWagerChange,
          disabled: !!worldStore.state.isLoading,
          placeholder: 'Bits'
        }
      ),
      el.div(
        {className: 'align-right ', style:{marginLeft:'40%'}},
        el.div(
          {className: 'btn-group',style: {paddingLeft:'16%',marginBottom: '10%' }},
          el.button(
            {
            
                className: 'button big',
              type: 'button',
              style: {border:'solid 1px white', width:'120px', paddingLeft:'5px', paddingRight:'5px'},
              onClick: this._onHalveWager
            },
            '1/2x', worldStore.state.hotkeysEnabled ? el.kbd(null, '(X)') : ''
          )
        ),
        el.div(
          {className: 'btn-group',style: {paddingLeft:'4%',marginBottom: '10%'}},
          el.button(
            {
                style: {border:'solid 1px white', width:'120px', paddingLeft:'5px', paddingRight:'5px'},
              className: 'button big',
              type: 'button',
              onClick: this._onDoubleWager
            },
            '2x ', worldStore.state.hotkeysEnabled ? el.kbd(null, '(C)') : ''
          )
        ),
        el.div(
          {className: 'btn-group',style: {paddingLeft:'4%',marginBottom: '10%'}},
          el.button(
            {style: {border:'solid 1px white', width:'120px',paddingLeft:'5px', paddingRight:'5px'},
              className: 'button big',
              type: 'button',
              onClick: this._onMaxWager
            },
            'Max', worldStore.state.hotkeysEnabled ? el.kbd(null, '(V)') : ''
          )
        )
      )
    
       
                 
                 
                 
                 );
  }
});

var BetBoxButton = React.createClass({
  displayName: 'BetBoxButton',
  _onStoreChange: function() {
    this.forceUpdate();
  },
  componentDidMount: function() {
    worldStore.on('change', this._onStoreChange);
    betStore.on('change', this._onStoreChange);
  },
  componentWillUnmount: function() {
    worldStore.off('change', this._onStoreChange);
    betStore.off('change', this._onStoreChange);
  },
  getInitialState: function() {
    return { waitingForServer: false };
  },
  // cond is '>' or '<'
  _makeBetHandler: function(cond) {
    var self = this;

    console.assert(cond === '<' || cond === '>');

    return function(e) {
      console.log('Placing bet...');

      // Indicate that we are waiting for server response
      self.setState({ waitingForServer: true });

      var hash = betStore.state.nextHash;
      console.assert(typeof hash === 'string');
        
    var clientSeed = parseInt(document.getElementById("ClientSeed").value);

      var wagerSatoshis = betStore.state.wager.num * 100;
      var multiplier = betStore.state.multiplier.num;
      var payoutSatoshis = wagerSatoshis * multiplier;

      var number = helpers.calcNumber(
        cond, helpers.multiplierToWinProb(multiplier)
      );

      var params = {
        wager: wagerSatoshis,
        client_seed: clientSeed, // TODO
        hash: hash,
        cond: cond,
        target: number,
        payout: payoutSatoshis
      };

      MoneyPot.placeSimpleDiceBet(params, {
        success: function(bet) {
            bet.meta = {
            wager:wagerSatoshis/100,
            multiplier:payoutSatoshis/wagerSatoshis,
            cond: cond,
            number: number,
            hash: hash,
            isFair: CryptoJS.SHA256(bet.secret + '|' + bet.salt).toString() === hash
          };
        var numAnim = new CountUp(bet.profit,bet.meta.cond, bet.meta.number, "outcomeanim", 0.00, 99.99, 2, 0.4);
        numAnim.update(bet.outcome.toFixed(2));  
        document.getElementById("PrevBetID").children[0].innerHTML = bet.bet_id;
        document.getElementById("PrevBetID").children[0].href = "https://www.moneypot.com/bets/" + parseInt(bet.bet_id);
        document.getElementById("PrevBetID").children[0].innerHTML = bet.bet_id;
         document.getElementById("PrevServerHash").innerHTML = bet.meta.hash;
             document.getElementById("PrevClientSeed").innerHTML = clientSeed;
            
             document.getElementById("PrevBetFair").innerHTML = Math.floor(10000*(((bet.secret + clientSeed)%Math.pow(2,32))/4294967296))/100 === bet.outcome ? "Verified" : "Something went wrong, please check on the detailed ";
          console.log('Successfully placed bet:', bet);
          // Append to bet list
            Dispatcher.sendAction('NEW_BET', bet);
            
            
          // Update next bet hash
          Dispatcher.sendAction('SET_NEXT_HASH', bet.next_hash);
            
            
            
          setTimeout(function(){
    // We don't get this info from the API, so assoc it for our use
        

           
        
          // Update user balance
            
            
          Dispatcher.sendAction('UPDATE_USER', {
            balance: worldStore.state.user.balance + bet.profit
          });
        
}, 100); 
            
            
            
        
        
        
        
        
        
        },
        error: function(xhr) {
          console.log('Error');
          if (xhr.responseJSON && xhr.responseJSON) {
            alert(xhr.responseJSON.error);
          } else {
            alert('Internal Error');
          }
        },
        complete: function() {
          self.setState({ waitingForServer: false });
          // Force re-validation of wager
          Dispatcher.sendAction('UPDATE_WAGER', {
            str: betStore.state.wager.str
          });
        }
      });
    };
  },
  render: function() {
    var innerNode;

    // TODO: Create error prop for each input
    var error = betStore.state.wager.error || betStore.state.multiplier.error;

    if (worldStore.state.isLoading) {
      // If app is loading, then just disable button until state change
      innerNode = el.button(
        {type: 'button', disabled: true, className: 'button big'},
        'Loading...'
      );
    } else if (error) {
      // If there's a betbox error, then render button in error state

      var errorTranslations = {
        'CANNOT_AFFORD_WAGER': 'You cannot afford wager',
        'INVALID_WAGER': 'Invalid wager',
        'INVALID_MULTIPLIER': 'Invalid multiplier',
        'MULTIPLIER_TOO_PRECISE': 'Multiplier too precise',
        'MULTIPLIER_TOO_HIGH': 'Multiplier too high',
        'MULTIPLIER_TOO_LOW': 'Multiplier too low'
      };

      innerNode = el.button(
        {type: 'button',
         disabled: true,
         className: 'button small',
        style:{marginBottom:'5%'}},
        errorTranslations[error] || 'Invalid bet'
      );
    } else if (worldStore.state.user) {
      // If user is logged in, let them submit bet
      innerNode =
        el.div(
          {className: 'row', style:{width:'50%'}},
          // bet hi
          el.div(
            {className: 'col-xs-6'},
            el.button(
              {
                id: 'bet-hi',
                type: 'button',
                className: 'button big',
               style:{
                                       paddingLeft:'20%',
               'marginLeft':'0px',
                border:'solid 1px white',
                width:'120px',
                   height:'80px'
               },
                  
                  
                onClick: this._makeBetHandler('>'),
                disabled: !!this.state.waitingForServer
              },
              'High ', worldStore.state.hotkeysEnabled ? el.kbd(null, '(H)') : ''
            )
          ),
          // bet lo
          el.div(
            {className: 'col-xs-6'},
            el.button(
              {
                id: 'bet-lo',
                type: 'button',
                className: 'button big', 
                style:{
                    marginTop:'15%',
                     marginBottom:'15%',
                    paddingLeft:'20%',
               'marginLeft':'0px',
                border:'solid 1px white',
                    width:'120px',
                    height:'80px'
               },
                onClick: this._makeBetHandler('<'),
                disabled: !!this.state.waitingForServer
              },
              'Low ', worldStore.state.hotkeysEnabled ? el.kbd(null, '(L)') : ''
            )
          )
        );
    } else {
      // If user isn't logged in, give them link to /oauth/authorize
      innerNode = el.a(
        {
          href: config.mp_browser_uri + '/oauth/authorize' +
            '?app_id=' + config.app_id +
            '&redirect_uri=' + config.redirect_uri,
          className: 'button small',
            style: {
            border:'solid 1px',
            marginBottom:'5%'
                
            }
        },
        'Login with MoneyPot'
      );
    }

    return   el.div(
        {className: 'align-left'},
      el.div(
        {className: 'col-md-2',style: { marginTop: '15px' }},
        (this.state.waitingForServer) ?
          el.span(
            {
              className: 'glyphicon glyphicon-refresh rotate',
              style: { marginTop: '15px' }
            }
          ) : ''
      ),
      el.div(
        {className: 'col-md-8'},
        innerNode
      ), el.div(
        {className:'align-left'},
              el.div(
                {className: 'col-sm-6'},
                React.createElement(BetBoxProfit, null)
              ),
              el.div(
                {className: 'col-sm-6'},
                React.createElement(BetBoxChance, null)
              ),
                 el.h1( null,
                worldStore.state.user?'Balance: ' + (worldStore.state.user.balance / 100).toFixed(2) + ' bits':'')
               
            )
        
        
        
        
    );
  }
});

var HotkeyToggle = React.createClass({
  displayName: 'HotkeyToggle',
  _onClick: function() {
    Dispatcher.sendAction('TOGGLE_HOTKEYS');
  },
    
_onStoreChange: function() {
    this.forceUpdate();
  },
  componentDidMount: function() {
    worldStore.on('change', this._onStoreChange);
  },
  componentWillUnmount: function() {
    worldStore.off('change', this._onStoreChange);
  },
    
  render: function() {
    return (
      el.div(
        {className: 'align-left',   style: { paddingLeft: '4.6%' }},
        el.button(
          {
            type: 'button',
            className: 'button small',
            onClick: this._onClick,
            style: { }
          },
          'Hotkeys: ',
          worldStore.state.hotkeysEnabled ?
            el.span({className: 'label label-success'}, 'ON') :
          el.span({className: 'label label-default'}, 'OFF')
        )
      )
    );
  }
});

var BetBox = React.createClass({
  displayName: 'BetBox',
  _onStoreChange: function() {
    this.forceUpdate();
  },
  componentDidMount: function() {
    worldStore.on('change', this._onStoreChange);
  },
  componentWillUnmount: function() {
    worldStore.off('change', this._onStoreChange);
  },
  render: function() {
    return el.div(
      null,
      el.div(
        {
        style:{

        marginRight: '7%'

            
        },    
        className: '',
       
        
        },
        el.div(
          {className: 'panel-body',            style:{
    width: '100%',          
    paddingLeft: '5%',
    paddingRight: '5%'

               }},
          
          el.div(
            {className: 'row',  style:{
    width: '100%'
               }},
            el.div(
              {className: 'col-xs-6',style:{
    width: '100%'
               }
              
              },
                React.createElement(BetBoxWager, null),
                React.createElement(BetBoxMultiplier, null)
            ),
        
            // HR
            el.div(
              {className: 'row'},
              el.div(
                {className: 'col-xs-12'},
                el.hr(null)
              )
            )
        
          )
        ),
        el.div(
          {className: 'panel-footer clearfix', style:{paddingLeft:'5%'}},
          React.createElement(BetBoxButton, null)
        )
      ),
      React.createElement(HotkeyToggle, null)
    );
  }
});

var Tabs = React.createClass({
  displayName: 'Tabs',
  _onStoreChange: function() {
    this.forceUpdate();
  },


  _makeTabChangeHandler: function(tabName) {
    var self = this;
    return function() {
      Dispatcher.sendAction('CHANGE_TAB', tabName);
    };
  },
  render: function() {
    return el.ul(
      {className: 'row nav nav-tabs',
       style: {
       'listStyle': 'none',

        'marginLeft': '15px',
        'paddingLeft': '0px'
           
           
       }
      
      
      },
      el.li(
        {
    
            
            className: worldStore.state.currTab === 'ALL_BETS' ? 'active' : ''},
        el.a(
          {
             style:{
            border:'solid 1px'
            },
            className: 'button small',
            id: 'abbutton',
            href: 'javascript:void(0)',
            onClick: this._makeTabChangeHandler('ALL_BETS')
              
              
              
          },
          'All Bets'
        )
      ),
      el.li(
        {className: worldStore.state.currTab === 'MY_BETS' ? 'active' : ''},
        el.a(
          {
            style:{
            border:'solid 1px'
            },
              className: 'button small',  
               id: 'mbbutton',
            href: 'javascript:void(0)',
            onClick: this._makeTabChangeHandler('MY_BETS')
          },
          'My Bets'
        )
      ),
      !config.recaptcha_sitekey ? '' :
        el.li(
          {className: worldStore.state.currTab === 'FAUCET' ? 'active' : ''},
          el.a(
            {
                 style:{
            border:'solid 1px'
            },
                className: 'button small',  
                 id: 'fbutton',
              href: 'javascript:void(0)',
              onClick: this._makeTabChangeHandler('FAUCET')
            },
            el.span(null, 'Faucet ')
          )
        )
    );
  }
});





var AllBetsTabContent = React.createClass({
  displayName: 'AllBetsTabContent',
  _onStoreChange: function() {
    this.forceUpdate();
  },
 componentDidMount: function() {
    if(worldStore.state.accessToken != undefined){
    this.interval = setInterval(refreshBet, 2000); 
    }
 
  },
  componentWillUnmount: function() {
     clearInterval(this.interval);
  },
 


    
  render: function() {
toggle = false;
console.log('rendered once');
    if(worldStore.state.accessToken != undefined){
      if(getAllBetData(lastBetID,10).length != 0 ){
        //console.log('update ' + lastBetID);  
        
        FirstBuffer.push(getAllBetData(lastBetID ,10));
        SecondBuffer.reverse();
        for (j = (FirstBuffer.toArray()[0].length-1); j > -1; j--) { 
            SecondBuffer.push(FirstBuffer.toArray()[0][j]);
        };
        SecondBuffer.reverse();
 
   lastBetID = SecondBuffer.first().id;
        
        
        
      } else{};
      
             return el.div(
          {style:{
          
           'overflowY': 'auto',
            height: '400px',
            width:'100%'
          
          }}
          
          
          ,
      el.table(
        {className: 'table',
         style:{
           color: 'white',
           'marginLeft':'0px'
          
          }
        
        
        
        
        },
        el.thead(
          null,
          el.tr(
            null,
            el.th({style:{
            color: 'white'
          
          }}, 'Player'),
            el.th({style:{
            color: 'white'
          
          }}, 'Bet ID'),
            el.th({style:{
            color: 'white'
          
          }}, 'Wager'),
            el.th({style:{
            color: 'white'
          
          }}, 'Profit'), el.th({style:{
            color: 'white'
          
          }}, 'Multiplier'),
           
            config.debug ? el.th(null, 'Dump') : ''
          )
        ),
        
        el.tbody(
            {id:'ABTable'},
       
           SecondBuffer.toArray().map(function(bet) {
          return  el.tr({key:bet.id}, 
          
            el.td(null, bet.uname),
               
                        
            el.td(null, 
                 
                  el.a(
                  {href: 'https://www.moneypot.com/bets/' + bet.id,
                   style:{
                     color: '#FFFFFF'
                   }
                  
                  
                  
                  },
                  bet.id
                )
                 
                 
                 ),
            el.td(null, bet.wager/100 + ' bits'), 
                        
            el.td(
                {style: {color: bet.profit > 0 ? 'rgb(0, 255, 51)' : 'rgb(204, 0, 0)'}},
                bet.profit > 0 ?
                  '+' + bet.profit/100  + ' bits' :
                  bet.profit/100  + ' bits'
              ),
                         el.td(null,
               ((bet.wager + (bet.profit > 0? bet.profit : bet.profit*-1 )      )/bet.wager).toFixed(2) + 'x'
              )
   
            
            )
      
      
      
            })
            
        )
      )
    );
      
 
  }
      else{
          return el.h1(null, 'Log in first to view All Bets')
      
      }
  
  
  
  }
});










var MyBetsTabContent = React.createClass({
  displayName: 'MyBetsTabContent',
  _onStoreChange: function() {
    this.forceUpdate();
  },
  componentDidMount: function() {
    worldStore.on('change', this._onStoreChange);
  },
  componentWillUnmount: function() {
    worldStore.off('change', this._onStoreChange);
  },
    
  render: function() {
      toggle = true;
    return el.div(
      {style:{
          
           'overflowY': 'auto',
            height: '400px',
            width:'100%'
          
          }},
      el.table(
        {className: 'table',
        
        style:{
            color: 'white',
           'marginLeft':'0px'
          
          }
        
        },
        el.thead(
          null,
          el.tr(
            null,
            el.th({style:{
            color: 'white'
          
          }}, 'ID'),    
            el.th({style:{
            color: 'white'
          
          }}, 'Wager'),
            el.th({style:{
            color: 'white'
          
          }}, 'Profit'),    
            el.th({style:{
            color: 'white'
          
          }}, 'Multiplier'),
            el.th({style:{
            color: 'white'
          
          }}, 'Outcome'),
            el.th({style:{
            color: 'white'
          
          }}, 'Target'),
            config.debug ? el.th(null, 'Dump') : ''
          )
        ),
        el.tbody(
          null,
          worldStore.state.bets.toArray().map(function(bet) {
            return el.tr(
              {
                key: bet.bet_id
              },
              // bet id
              el.td(
                null,
                el.a(
                  {href: config.mp_browser_uri + '/bets/' + bet.bet_id,
                  style:{
                     color: '#FFFFFF'
                   }
                  },
                  bet.bet_id
                )
              ),
                
                el.td(
                null,bet.meta.wager + ' bits'),
                
              // profit
              el.td(
                {style: {color: bet.profit > 0 ? 'rgb(0, 255, 51)' : 'rgb(204, 0, 0)'}},
                bet.profit > 0 ?
                  '+' + bet.profit/100 + ' bits' :
                  bet.profit/100 + ' bits'
              ),
                
                el.td(
                null,bet.meta.multiplier.toFixed(2) + 'x'),
              // outcome
              el.td(
                null,
                bet.outcome + ' '
                
              ),
              // target
              el.td(
                null,
                bet.meta.cond + ' ' + bet.meta.number.toFixed(2)
              ),
              // dump
              !config.debug ? '' :
                el.td(
                  null,
                  el.pre(
                    {
                      style: {
                        maxHeight: '75px',
                        overflowY: 'auto'
                      }
                    },
                    JSON.stringify(bet, null, '  ')
                  )
                )
            );
          }).reverse()
        )
      )
    );
  }
});

var FaucetTabContent = React.createClass({
  displayName: 'FaucetTabContent',
  getInitialState: function() {
    return {
      // SHOW_RECAPTCHA | SUCCESSFULLY_CLAIM | ALREADY_CLAIMED | WAITING_FOR_SERVER
      faucetState: 'SHOW_RECAPTCHA',
      // :: Integer that's updated after the claim from the server so we
      // can show user how much the claim was worth without hardcoding it
      // - It will be in satoshis
      claimAmount: undefined
    };
  },
  // This function is extracted so that we can call it on update and mount
  // when the window.grecaptcha instance loads
  _renderRecaptcha: function() {
    worldStore.state.grecaptcha.render(
      'recaptcha-target',
      {
        sitekey: config.recaptcha_sitekey,
        callback: this._onRecaptchaSubmit
      }
    );
  },
  // `response` is the g-recaptcha-response returned from google
  _onRecaptchaSubmit: function(response) {
    var self = this;
    console.log('recaptcha submitted: ', response);

    self.setState({ faucetState: 'WAITING_FOR_SERVER' });

    MoneyPot.claimFaucet(response, {
      // `data` is { claim_id: Int, amount: Satoshis }
      success: function(data) {
        Dispatcher.sendAction('UPDATE_USER', {
          balance: worldStore.state.user.balance + data.amount
        });
        self.setState({
          faucetState: 'SUCCESSFULLY_CLAIMED',
          claimAmount: data.amount
        });
        // self.props.faucetClaimedAt.update(function() {
        //   return new Date();
        // });
      },
      error: function(xhr, textStatus, errorThrown) {
        if (xhr.responseJSON && xhr.responseJSON.error === 'FAUCET_ALREADY_CLAIMED') {
          self.setState({ faucetState: 'ALREADY_CLAIMED' });
        }
      }
    });
  },
  // This component will mount before window.grecaptcha is loaded if user
  // clicks the Faucet tab before the recaptcha.js script loads, so don't assume
  // we have a grecaptcha instance
  componentDidMount: function() {
    if (worldStore.state.grecaptcha) {
      this._renderRecaptcha();
    }

    worldStore.on('grecaptcha_loaded', this._renderRecaptcha);
  },
  componentWillUnmount: function() {
    worldStore.off('grecaptcha_loaded', this._renderRecaptcha);
  },
  render: function() {
      toggle = true;

    // If user is not logged in, let them know only logged-in users can claim
    if (!worldStore.state.user) {
      return el.p(
        {className: 'lead'},
        'You must login to claim faucet'
      );
    }

    var innerNode;
    // SHOW_RECAPTCHA | SUCCESSFULLY_CLAIMED | ALREADY_CLAIMED | WAITING_FOR_SERVER
    switch(this.state.faucetState) {
    case 'SHOW_RECAPTCHA':
      innerNode = el.div(
        { id: 'recaptcha-target' },
        !!worldStore.state.grecaptcha ? '' : 'Loading...'
      );
      break;
    case 'SUCCESSFULLY_CLAIMED':
      innerNode = el.div(
          {style:{
          'marginLeft': '0px'
          
          
          
          }},
        'Successfully claimed ' + this.state.claimAmount/100 + ' bits.' +
          // TODO: What's the real interval?
          ' You can claim again in 5 minutes.'
      );
      break;
    case 'ALREADY_CLAIMED':
      innerNode = el.div(
        null,
        'ALREADY_CLAIMED'
      );
      break;
    case 'WAITING_FOR_SERVER':
      innerNode = el.div(
        null,
        'WAITING_FOR_SERVER'
      );
      break;
    default:
      alert('Unhandled faucet state');
      return;
    }

    return el.div(
      null,
      innerNode
    );
  }
});

var TabContent = React.createClass({
  displayName: 'TabContent',
  _onStoreChange: function() {
      if(worldStore.state.currTab === 'ALL_BETS' && toggle === true){
    this.forceUpdate();
      }
      
      if(worldStore.state.currTab != 'ALL_BETS'){
    this.forceUpdate();
      }
      
  },
  componentDidMount: function() {
    worldStore.on('change', this._onStoreChange);
  },
  componentWillUnmount: function() {
    worldStore.off('change', this._onStoreChange);
  },
  render: function() {
    switch(worldStore.state.currTab) {
       case 'ALL_BETS':
            
        document.getElementById('abbutton').style.backgroundColor = 'rgb(122, 191, 122)';
                   document.getElementById('fbutton').style.backgroundColor = ' #3BA666';
                document.getElementById('mbbutton').style.backgroundColor = ' #3BA666';
         return React.createElement(AllBetsTabContent, null);
        
        
        case 'FAUCET':
        toggle = true;
              document.getElementById('fbutton').style.backgroundColor = 'rgb(122, 191, 122)';
                   document.getElementById('mbbutton').style.backgroundColor = ' #3BA666';
                document.getElementById('abbutton').style.backgroundColor = ' #3BA666';
        return React.createElement(FaucetTabContent, null);
      case 'MY_BETS':
         toggle = true;
              document.getElementById('mbbutton').style.backgroundColor = 'rgb(122, 191, 122)';
                document.getElementById('fbutton').style.backgroundColor = ' #3BA666';
                document.getElementById('abbutton').style.backgroundColor = ' #3BA666';
        return React.createElement(MyBetsTabContent, null);
      
      default:
        alert('Unsupported currTab value: ', worldStore.state.currTab);
        break;
    }
  }
});

var Footer = React.createClass({
  displayName: 'Footer',
  render: function() {
    return el.div(
      {
        className: 'text-center text-muted',
        style: {
          marginTop: '200px'
         
        }
        
      },
      
     
      'Powered by ',
      
      
      el.a(
        {
          href: 'https://www.moneypot.com'
        },
        'Moneypot'
      )
    );
  }
});


// If not accessToken,
// If accessToken, then
if (!worldStore.state.accessToken) {
  Dispatcher.sendAction('STOP_LOADING');
  connectToChatServer();
} else {
  // Load user from accessToken
  MoneyPot.getTokenInfo({
    success: function(data) {
      console.log('Successfully loaded user from tokens endpoint', data);
      var user = data.auth.user;
      Dispatcher.sendAction('USER_LOGIN', user);
    },
    error: function(err) {
      console.log('Error:', err);
    },
    complete: function() {
      Dispatcher.sendAction('STOP_LOADING');
      connectToChatServer();
    }
  });
  // Get next bet hash
  MoneyPot.generateBetHash({
    success: function(data) {
      Dispatcher.sendAction('SET_NEXT_HASH', data.hash);
    }
  });
}

////////////////////////////////////////////////////////////
// Hook up to chat server

function connectToChatServer() {
  console.log('Connecting to chat server. AccessToken:',
              worldStore.state.accessToken);

  socket = io(config.chat_uri);

  socket.on('connect', function() {
    console.log('[socket] Connected');

    socket.on('disconnect', function() {
      console.log('[socket] Disconnected');
    });

    // When subscribed to DEPOSITS:

    socket.on('unconfirmed_balance_change', function(payload) {
      console.log('[socket] unconfirmed_balance_change:', payload);
      Dispatcher.sendAction('UPDATE_USER', {
        unconfirmed_balance: payload.balance
      });
    });

    socket.on('balance_change', function(payload) {
      console.log('[socket] (confirmed) balance_change:', payload);
      Dispatcher.sendAction('UPDATE_USER', {
        balance: payload.balance
      });
    });

    // message is { text: String, user: { role: String, uname: String} }
    socket.on('new_message', function(message) {
      console.log('[socket] Received chat message:', message);
      Dispatcher.sendAction('NEW_MESSAGE', message);
    });

    socket.on('user_joined', function(user) {
      console.log('[socket] User joined:', user);
      Dispatcher.sendAction('USER_JOINED', user);
    });

    // `user` is object { uname: String }
    socket.on('user_left', function(user) {
      console.log('[socket] User left:', user);
      Dispatcher.sendAction('USER_LEFT', user);
    });

    socket.on('new_bet', function(bet) {
      console.log('[socket] New bet:', bet);

      // Ignore bets that aren't of kind "simple_dice".
      if (bet.kind !== 'simple_dice') {
        console.log('[weird] received bet from socket that was NOT a simple_dice bet');
        return;
      }

      Dispatcher.sendAction('NEW_ALL_BET', bet);
    });

    // Received when your client doesn't comply with chat-server api
    socket.on('client_error', function(text) {
      console.warn('[socket] Client error:', text);
    });

    // Once we connect to chat server, we send an auth message to join
    // this app's lobby channel.

    var authPayload = {
      app_id: config.app_id,
      access_token: worldStore.state.accessToken,
      subscriptions: ['CHAT', 'DEPOSITS', 'BETS']
    };

    socket.emit('auth', authPayload, function(err, data) {
      if (err) {
        console.log('[socket] Auth failure:', err);
        return;
      }
      console.log('[socket] Auth success:', data);
      Dispatcher.sendAction('INIT_CHAT', data);
    });
  });
}
// This function is passed to the recaptcha.js script and called when
// the script loads and exposes the window.grecaptcha object. We pass it
// as a prop into the faucet component so that the faucet can update when
// when grecaptcha is loaded.
function onRecaptchaLoad() {
  Dispatcher.sendAction('GRECAPTCHA_LOADED', grecaptcha);
}

$(document).on('keydown', function(e) {
  var H = 72, L = 76, C = 67, X = 88, V=86, keyCode = e.which;

  // Bail is hotkeys aren't currently enabled to prevent accidental bets
  if (!worldStore.state.hotkeysEnabled) {
    return;
  }

  // Bail if it's not a key we care about
  if (keyCode !== H && keyCode !== L && keyCode !== X && keyCode !== C && keyCode !== V) {
    return;
  }

  // TODO: Remind self which one I need and what they do ^_^;;
  e.stopPropagation();
  e.preventDefault();

  switch(keyCode) {
    case C:  // Increase wager
      var upWager = betStore.state.wager.num * 2;
      Dispatcher.sendAction('UPDATE_WAGER', {
        num: upWager,
        str: upWager.toString()
      });
      break;
    case X:  // Decrease wager
      var downWager = Math.floor(betStore.state.wager.num / 2);
      Dispatcher.sendAction('UPDATE_WAGER', {
        num: downWager,
        str: downWager.toString()
          
      });
           break;
     case V:  // Decrease wager
      var maxWager = Math.floor(worldStore.state.user.balance / 100);

          
          Dispatcher.sendAction('UPDATE_WAGER', {
        num: maxWager,
        str: maxWager.toString()
      });

      break;
    case L:  // Bet lo
      $('#bet-lo').click();
      break;
    case H:  // Bet hi
      $('#bet-hi').click();
      break;
    default:
      return;
  }
});

window.addEventListener('message', function(event) {
  if (event.origin === config.mp_browser_uri && event.data === 'UPDATE_BALANCE') {
    Dispatcher.sendAction('START_REFRESHING_USER');
  }
}, false);


var OutcomeStats = React.createClass({
    displayName: 'OutcomeStats',
    render: function() {
    return el.div(
    {className: 'OCcontainer'}, 
        el.h2({id:'outcomeanim', style:{ 'marginTop':'40px', 'font-size':'100px' }},'--')
    
    );
  }
});

var App = React.createClass({
  displayName: 'App',
  render: function() {
    return el.div(
      {className: 'container'},
      // Navbar
      React.createElement(Navbar, null),
      // BetBox & ChatBox
      el.div(
        {className: 'row'},
        el.div(
          {className: 'col-sm-5'},
          React.createElement(BetBox, null)
        ),
        el.div(
          {className: 'col-sm-7'},
          React.createElement(ChatBox, null)
        )
      ),
      // Tabs
      el.div(
        {style: {marginTop: '15px'}},
        React.createElement(Tabs, null)
      ),
      // Tab Contents
      React.createElement(TabContent, null),
      // Footer
      React.createElement(Footer, null)
    );
  }
});
/*
 $('html').addClass('hidden');
        $(document).ready(function() {
        $('html').show();  // EDIT: Can also use $('html').removeClass('hidden'); 
        }); 
*/





React.render(
React.createElement(Navbar, null),
  document.getElementById('userBox')
);



for(var x=0; x<document.getElementsByClassName('font-resize').length; x++){
document.getElementsByClassName('font-resize')[x].style.fontSize = (document.getElementsByClassName('font-resize')[x].parentElement.parentElement.clientWidth*0.07) + 'px';	

}

for(var x=0; x<document.getElementsByClassName('font-resize-2').length; x++){
document.getElementsByClassName('font-resize-2')[x].style.fontSize = (document.getElementsByClassName('font-resize-2')[x].parentElement.parentElement.clientWidth*0.036) + 'px';	
}    

for(var x=0; x<document.getElementsByClassName('font-resize-3').length; x++){
document.getElementsByClassName('font-resize-3')[x].style.fontSize = (document.getElementsByClassName('font-resize-3')[x].parentElement.parentElement.clientWidth*0.07) + 'px';	
} 

for(var x=0; x<document.getElementsByClassName('font-resize-4').length; x++){
document.getElementsByClassName('font-resize-4')[x].style.fontSize = (document.getElementsByClassName('font-resize-4')[x].parentElement.clientWidth*0.08) + 'px';	
} 
for(var x=0; x<document.getElementsByClassName('font-resize-5').length; x++){
document.getElementsByClassName('font-resize-5')[x].style.fontSize = (document.getElementsByClassName('font-resize-5')[x].parentElement.clientWidth*0.105) + 'px';	
} 


React.render(
React.createElement(ChatBox, null),
  document.getElementById('chatBox')
);



document.getElementById('cpheight').style.height = document.getElementById('chatBox').clientHeight*0.85 + 'px';
document.getElementById('cpheight').style.width = document.getElementById('chatBox').clientWidth*0.7 + 'px';	








/*
React.render(
React.createElement(BetBoxWager, null),
  document.getElementById('betboxwager')
);

React.render(
React.createElement(BetBoxMultiplier, null),
  document.getElementById('betboxmultiplier')
);

React.render(
React.createElement(BetBoxButton, null),
  document.getElementById('betboxbutton')
);

React.render(
React.createElement(HotkeyToggle, null),
  document.getElementById('hotkeyToggle')
);

React.render(
React.createElement(ChatBox, null),
  document.getElementById('chatbox')
);

React.render(
React.createElement(Tabs, null),
  document.getElementById('table')
);


React.render(
React.createElement(TabContent, null),
  document.getElementById('tablecontent')
);




/*

React.render(
React.createElement(ChatBox, null),
  document.getElementById('chatbox')
);*/






var takeProfitMultiplier;         //set the value in %. Stop after winning a percentage of initial balance size.
var stopLossMultiplier;            //set the value in %. Stop after losing a percentage of initial balance size.
var initialBetSize;                 //initial bet size in bits.
var multiWagerOnLoss;               //multiply previous bet size by how many times on loss.
var maxMultiplierOnLossTimes;       //set the frequency for how many times to multiply by factor above on loss.
var multiWagerOnWin;                //multiply previous bet size by how many times on win.
var maxMultiplierOnWinTimes;        //set the frequency for how many times to multiply by factor above on win.
var resetToInitialOnLossStreak;    //reset to initial bet size after exceeding this loss streak.
var resetToInitialOnWinStreak;      //reset to initial bet size after exceeding this win streak.
var betMode;                   //1 = high only, 2 = low only, 3 = alternate hi-lo.

var wager = 0;
var initialBal;
var maxMultiLoss;
var maxMultiWin;

var prevBetStats = new CBuffer(1);


var prevWagerSize = 0;
var autoBetLoop;
var toggleHi = 0;
var winStreak;
var loseStreak;


var autoBet = function(){
//config
prevBetStats = new CBuffer(1);   
initialBal = worldStore.state.user.balance;
takeProfitMultiplier =  parseFloat(document.getElementById('maxTP').value);        
stopLossMultiplier =  parseFloat(document.getElementById('maxSL').value);            
initialBetSize =  parseFloat(document.getElementById('betSize').value);                
multiWagerOnLoss =  parseFloat(document.getElementById('xLoss').value);              
maxMultiplierOnLossTimes =  parseFloat(document.getElementById('fLoss').value);      
multiWagerOnWin =  parseFloat(document.getElementById('xWin').value);                
maxMultiplierOnWinTimes =  parseFloat(document.getElementById('fWin').value);       
resetToInitialOnLossStreak =  parseFloat(document.getElementById('sLoss').value);     
resetToInitialOnWinStreak =  parseFloat(document.getElementById('sWin').value);      
betMode = parseFloat(document.getElementById('betMode').value);                   
maxMultiLoss = maxMultiplierOnLossTimes;
maxMultiWin = maxMultiplierOnWinTimes;
winStreak=0;
loseStreak=0;

var takeProfit = initialBal * (takeProfitMultiplier/100);
var stopLoss = initialBal * (stopLossMultiplier/100);

    
autoBetLoop = setInterval(function(){clicknow(initialBal, takeProfit,stopLoss)},100);

};




var clicknow = function(initialBal, takeProfit,stopLoss){


    


    
if(worldStore.state.user.balance > takeProfit|| worldStore.state.user.balance < stopLoss){
//initialBal = worldStore.state.user.balance;
clearInterval(autoBetLoop);

alert('profit = ' + (worldStore.state.user.balance - initialBal)/100 + ' bits');
    
}
else{
    
if(document.getElementById('bet-lo') != null){
 
if(document.getElementById('bet-lo').disabled == false){

    
if(prevBetStats.last() == null){
wager = initialBetSize;
}
    
else{


    
if(prevBetStats.last().profit < 0 ){
maxMultiWin = maxMultiplierOnWinTimes;
if(maxMultiLoss != 0){    
wager = prevWagerSize * multiWagerOnLoss;
maxMultiLoss = maxMultiLoss - 1;

}
    
else{
wager = prevWagerSize;  

};
loseStreak++;
winStreak = 0;
};

if(prevBetStats.last().profit > 0 ){
maxMultiLoss = maxMultiplierOnLossTimes;
if(maxMultiWin != 0){    
wager = prevWagerSize * multiWagerOnWin;
maxMultiWin = maxMultiWin -1;
}else{
wager = prevWagerSize;

};
winStreak++;
loseStreak = 0;
};
};
    


    
if(winStreak > resetToInitialOnWinStreak){
wager = initialBetSize;
maxMultiLoss = maxMultiplierOnLossTimes;
maxMultiWin = maxMultiplierOnWinTimes;
};
    
    
if(loseStreak > resetToInitialOnLossStreak){
wager = initialBetSize;
maxMultiLoss = maxMultiplierOnLossTimes;
maxMultiWin = maxMultiplierOnWinTimes;
};

    
if(wager>worldStore.state.user.balance){
wager = worldStore.state.user.balance;
};
    
    prevWagerSize = wager;


    
    
    
//var wager = (Math.random()*0.25*(worldStore.state.user.balance/100)).toFixed(2);
//var wager = (Math.random()*0.05*(initialBal/100)).toFixed(2);
//var multi =  2 + parseFloat((1*Math.random()).toFixed(2));
//var multi =  1.9;



Dispatcher.sendAction('UPDATE_WAGER', {
            str: wager
          });
/*
document.getElementById('betboxmultiplier').children[0].children[1].value = multi;
Dispatcher.sendAction('UPDATE_MULTIPLIER', {
        num: multi,
        error: null
      });
      */
    
if(betMode == 1){
document.getElementById('bet-hi').click();  

};
if(betMode == 2){
    
document.getElementById('bet-lo').click();  

};
    
if(betMode == 3){

    
if(toggleHi == 0){
document.getElementById('bet-lo').click();  

};

if(toggleHi == 1){
document.getElementById('bet-hi').click();  
};    
  
};

    toggleHi++;
    if(toggleHi == 2){
    toggleHi = 0;
    };
    
    
}else{
};
}
    else{
clearInterval(autoBetLoop);

alert('profit = ' + (worldStore.state.user.balance - initialBal)/100 + ' bits');
    
    
    };
};

}



function animateRoll(target, bet, wager, bonus){
document.getElementById("outcome").innerHTML = parseInt(Math.random() * 36);
var duration = 1;
var countLoop;
var startCount = setInterval(function(){ 
duration = duration +5;
if(duration >29){
  duration = 29;
}  
clearInterval(countLoop);
countLoop = setInterval(countup, duration);
if(duration > 28 && parseInt(document.getElementById("outcome").innerHTML) == target){

    worldStore.state.user.betted_wager += wager;
    worldStore.state.user.betted_count++;
	
	
    document.getElementById("outcome").style.backgroundColor = "black";
      switch(target){
      case 0:
          document.getElementById("outcome").style.backgroundColor = "#009901";
          break;
    case 1:
    case 3:
    case 5:
    case 7:          
    case 9:
    case 12:
    case 14:
    case 16:
    case 18:
    case 19:
    case 21:
    case 23:
    case 25:
    case 27:
    case 30:
    case 32:
    case 34:
    case 36:
           document.getElementById("outcome").style.backgroundColor = "#a90329";
          break;
  }	
	
	

clearInterval(countLoop);
clearInterval(startCount);


	

	createNewRow(document.getElementById('upMyBets'), bet.id, wager, bet.profit, target);
	addNewHChild(target);
	
	
            Dispatcher.sendAction('UPDATE_USER', {
            balance: worldStore.state.user.balance + bet.profit
          }); 
    
    document.getElementById('bet-net').innerHTML = parseFloat(bet.profit/100).toFixed(2) + " bits";
     Dispatcher.sendAction('NEW_BET', bet);
        if(bet.profit > 0){
         document.getElementById('bet-net').style.color = "green";
        }
        if(bet.profit <0){
        document.getElementById('bet-net').style.color = "red";
        }
    highlightChips(target,wager,bonus);
    disableChips = false;
	document.getElementById('bet-button').disabled = false;
}
  
}, 30);
};


function countup(){
  var outcome = parseInt(document.getElementById("outcome").innerHTML);
  outcome++;
  if(outcome > 36){
    outcome = 0;
  }
    
  document.getElementById("outcome").innerHTML = outcome;
document.getElementById("outcome").style.backgroundColor = "#475360";

    
}


window.addEventListener('resize', function(event){
document.getElementById('cpheight').style.height = document.getElementById('chatBox').clientHeight*0.85 + 'px';
document.getElementById('cpheight').style.width = document.getElementById('chatBox').clientWidth*0.7 + 'px';	
for(var x=0; x<document.getElementsByClassName('font-resize').length; x++){
document.getElementsByClassName('font-resize')[x].style.fontSize = (document.getElementsByClassName('font-resize')[x].parentElement.parentElement.clientWidth*0.07) + 'px';	
}
    
for(var x=0; x<document.getElementsByClassName('font-resize-2').length; x++){
document.getElementsByClassName('font-resize-2')[x].style.fontSize = (document.getElementsByClassName('font-resize-2')[x].parentElement.parentElement.clientWidth*0.036) + 'px';	
}  
    
for(var x=0; x<document.getElementsByClassName('font-resize-3').length; x++){
document.getElementsByClassName('font-resize-3')[x].style.fontSize = (document.getElementsByClassName('font-resize-3')[x].parentElement.parentElement.clientWidth*0.07) + 'px';	
}     
for(var x=0; x<document.getElementsByClassName('font-resize-4').length; x++){
document.getElementsByClassName('font-resize-4')[x].style.fontSize = (document.getElementsByClassName('font-resize-4')[x].parentElement.clientWidth*0.08) + 'px';	
} 
for(var x=0; x<document.getElementsByClassName('font-resize-5').length; x++){
document.getElementsByClassName('font-resize-5')[x].style.fontSize = (document.getElementsByClassName('font-resize-5')[x].parentElement.clientWidth*0.105) + 'px';	
}   
});
