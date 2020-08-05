/* MADE BY PERIKLIS KALAFATAKIS ALL RIGHTS RESERVED 
Contact : periklis.kalafatakis@gmail.com
*/

function savestickies(){
  
  //GETTING THE X POSITION
  x1 = document.getElementById('s1').style.left
  x2 = document.getElementById('s2').style.left
  x3 = document.getElementById('s3').style.left
  x4 = document.getElementById('s4').style.left
  x5 = document.getElementById('s5').style.left
  x6 = document.getElementById('s6').style.left

  //GETTING THE Y POSITION
  y1 = document.getElementById('s1').style.top
  y2 = document.getElementById('s2').style.top
  y3 = document.getElementById('s3').style.top
  y4 = document.getElementById('s4').style.top
  y5 = document.getElementById('s5').style.top
  y6 = document.getElementById('s6').style.top

  //GETTING THE VALUE OF THE STICKIES (TEXT)
  t1 = document.getElementById('t1').value
  t2 = document.getElementById('t2').value
  t3 = document.getElementById('t3').value
  t4 = document.getElementById('t4').value
  t5 = document.getElementById('t5').value
  t6 = document.getElementById('t6').value

  //SAVING THE X POSITION
  localStorage.setItem("x1", x1);
  localStorage.setItem("x2", x2);
  localStorage.setItem("x3", x3);
  localStorage.setItem("x4", x4);
  localStorage.setItem("x5", x5);
  localStorage.setItem("x6", x6);

  //SAVING THE Y POSITION
  localStorage.setItem("y1", y1);
  localStorage.setItem("y2", y2);
  localStorage.setItem("y3", y3);
  localStorage.setItem("y4", y4);
  localStorage.setItem("y5", y5);
  localStorage.setItem("y6", y6);

  //SAVING THE VALUE(TEXT)
  localStorage.setItem("t1", t1);
  localStorage.setItem("t2", t2);
  localStorage.setItem("t3", t3);
  localStorage.setItem("t4", t4);
  localStorage.setItem("t5", t5);
  localStorage.setItem("t6", t6);
}


//FUNCTION TO DO WHEN THE BUTTON IS CLICKED

var myfunction = function() {

  var abce = document.getElementById("in").value
  
  if(abce === 'abc') {
  //MAKE STICKY NOTES DRAGGABLE
    $('div').draggable();
    
    //OFFLINE STORAGE CAN ONLY SAVE STRING SO WE HAVE TO CONVERT ALL OF IT IN INTEGERS SO WE CAN USE THEM 

    var getx1 = parseInt(localStorage.getItem("x1"),10);
    var getx2 = parseInt(localStorage.getItem("x2"),10);
    var getx3 = parseInt(localStorage.getItem("x3"),10);
    var getx4 = parseInt(localStorage.getItem("x4"),10);
    var getx5 = parseInt(localStorage.getItem("x5"),10);
    var getx6 = parseInt(localStorage.getItem("x6"),10);

    var gety1 = parseInt(localStorage.getItem("y1"),10);
    var gety2 = parseInt(localStorage.getItem("y2"),10);
    var gety3 = parseInt(localStorage.getItem("y3"),10);
    var gety4 = parseInt(localStorage.getItem("y4"),10);
    var gety5 = parseInt(localStorage.getItem("y5"),10);
    var gety6 = parseInt(localStorage.getItem("y6"),10);

    var gett1 = localStorage.getItem("t1");
    var gett2 = localStorage.getItem("t2");
    var gett3 = localStorage.getItem("t3");
    var gett4 = localStorage.getItem("t4");
    var gett5 = localStorage.getItem("t5");
    var gett6 = localStorage.getItem("t6");

    document.getElementById("s1").style.top = gety1;
    document.getElementById("s1").style.left = getx1;
    document.getElementById("t1").value = gett1;

    document.getElementById("s2").style.top = gety2;
    document.getElementById("s2").style.left = getx2;
    document.getElementById("t2").value = gett2;

    document.getElementById("s3").style.top = gety3;
    document.getElementById("s3").style.left = getx3;
    document.getElementById("t3").value = gett3;

    document.getElementById("s4").style.top = gety4;
    document.getElementById("s4").style.left = getx4;
    document.getElementById("t4").value = gett4;

    document.getElementById("s5").style.top = gety5;
    document.getElementById("s5").style.left = getx5;
    document.getElementById("t5").value = gett5;

    document.getElementById("s6").style.top = gety6;
    document.getElementById("s6").style.left = getx6;
    document.getElementById("t6").value = gett6;

  //SAVING THE PROPERTIES EVERY 50ms.
    setInterval(savestickies,50);
  }
  };