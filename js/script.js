//js
// text color chang 
function textColorChang() {
  document.getElementById('h22').style = "color:red";
}
function backgroundChang() {
   document.getElementById('london').style = "background-color: red";
  document.getElementById('paris').style = "background-color: red";
 
}
//calculation digit
function calculationDigit() {
 document.getElementById('d_cal').innerHTML = "110";
}
// heldoly 
function helDoly() {
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
}
//hello doly
  document.getElementById('h_doly').innerHTML="Hello doly" 

// calculation java
document.getElementById('cal_java').innerHTML = 5 + 11;
// paragraph chang 
function paraChang() {
  document.getElementById('p_chang').innerHTML="Paragraph changed."
}
//text java body
  document.getElementById('j_body').innerHTML = "My First JavaScrip";
// show hidden html 
function textHidden(){
  document.getElementById('text_hidden').style.display = 'block';
}
// text hide 
function textHide(){
  document.getElementById('text_hi').style.display = 'none';
}
// text chang 
function dextChang() {
  document.getElementById('text_d').innerHTML = "Hello java Script";
}
//font size chang 
function fontSize() {
  document.getElementById('s_35').style.fontSize = "40px";
}
// click hide london 
function hideLondon() {
  document.getElementById('l_don').style.display = "none";
}
// class name  text chang
function tagNameTextChang() {
  var info = document.getElementsByTagName('h3');
  alert(info.length);
}
// class name  text chang
function classNameTextChang() {
  document.getElementsByClassName('cntc')[2].innerHTML="Shabuz hossen prictis web devolop."
}
// variable3 
let parks1, parks2,parks3,parks4,parks5
parks1 = 4;
parks2 = 8;
parks3 = 8;
parks4 = 8;
parks5 = parks1 + parks2-parks3*parks4;

function calculationIn1() {
  document.getElementById('valu_in1').innerHTML =park1;
}

// variable2 
let park1, park2,park3
park1 = 4;
park2 = 8;
// park3 = park1 + park2;
park1 *= park2;
function calculationIn() {
  document.getElementById('valu_in').innerHTML =park1;
}
// variable1 
var number1 = 4;
var number2 = 3;
var number3= number1*number2
function calculation() {
  document.getElementById('valu').innerHTML =number3;
}
// paragraph chang 
function pargraphChang() {
  document.getElementById('p_c').innerHTML = "Heyper Text Markup Language";
}
// show/hide 
function show() {
  document.getElementById('shabuz').style.display = "block";
}
function hide() {
  document.getElementById('shabuz').style.display = "none";
}
// color chang 
function colorChang() {
  document.getElementById('c_c').style.color = "red";
}
//bulb on/off
function bulbOn(){
  document.getElementById('bulb').src = 'imges/on.gif';
}
function bulbOff(){
  document.getElementById('bulb').src = 'imges/off.gif';
}


//text chang
function textChang(){
  document.getElementById('text_c').innerHTML = "Shabuz";
}

function mextChang(){
  document.getElementById('text_b').innerHTML = "Hello";
}   
//show date
function showDate() {
  document.getElementById('s_d').innerHTML = Date();
}