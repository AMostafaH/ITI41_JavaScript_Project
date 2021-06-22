/* ================ Start Home ================== */
alert("Welcome !");
var txt = document.getElementById("guestName");
do {
    var name = prompt("What's your name ?"); 
} while(name === "" || name === null );

/* Check Time For Guest Message's Greeting */ 
var date = new Date();
var h = date.getHours(); 
var greeting = "";
switch(h)
{
    case 19 :
    case 20 :
    case 21 : 
    case 22 : 
    case 23 : 
    case 24 : 
    case 0 : 
    case 1 : 
    case 2 : 
    case 3 : 
    case 4 : 
    case 5 : 
        greeting = "Good Evening";
        break;
    case 6 :
    case 7 : 
    case 8 : 
    case 9 :
    case 10 : 
    case 11 : 
    case 12 : 
        greeting = "Good Morning";
        break;
    case 13 : 
    case 14 : 
    case 15 : 
    case 16 : 
    case 17 : 
    case 18 : 
        greeting = "Good Afternoon";
        break;
}  
txt.innerHTML = greeting +" : " + "<span style=\"color:#995220;\">"+name+"</span>";

/* Start Showing Time */

function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if(h == 0){
      h = 12;
  }

  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s; 
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("clock").innerHTML = time; 
  setTimeout(showTime, 1000); 
}
showTime();

// var myVar = setInterval(myTimer, 1000);
// function myTimer() {
//   var d = new Date();
//   document.getElementById("clock").innerHTML = d.toLocaleTimeString();
// }

/* Start Header */
var imageArr = ["header","header1","header2","header3","header4"];
var img = document.getElementById("image");
var i =0;
setTimeout("change()",3000);
function change(){
    //img.src ="Images/Home/header.jpg";
    img.src ="Images/Home/"+ imageArr[i] +".jpg";
    i++;
    if(i > imageArr.length-1)
        i=0;
    setTimeout("change()",3000);
}

/* Start Changing Colors */
var Blue = document.getElementById("blue");
var Brown = document.getElementById("brown");
var Random = document.getElementById("random");

function color(e){
  var element = document.getElementById(e.target.id);
  if(element == blue)
  {
    document.getElementById("home").style.backgroundColor = "lightseagreen";
    Blue.style.backgroundColor = "orange";
    Brown.style.backgroundColor = "brown";
    Random.style.backgroundColor = "rgb(170, 185, 85)"
  }
  else if(element == Brown)
  {
    document.getElementById("home").style.backgroundColor = "brown";
    Blue.style.backgroundColor = "lightseagreen";
    Brown.style.backgroundColor = "orange";
    Random.style.backgroundColor = "rgb(170, 185, 85)"
  }
  else if(element == Random)
  {
    var _red = Math.floor(Math.random()*255);
    var _green = Math.floor(Math.random()*255);
    var _blue = Math.floor(Math.random()*255);

    document.getElementById("home").style.backgroundColor = "rgb("+_red+","+_green+","+_blue+")" ;
    Blue.style.backgroundColor = "lightseagreen";
    Brown.style.backgroundColor = "brown";
    Random.style.backgroundColor = "orange";
    //console.log("rgb("+_red+","+_green+","+_blue+")");
  }
}
/* ================ End Home ================== */
