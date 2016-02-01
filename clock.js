 window.onload = function(){

   var clock = document.getElementById('clock');

   writeDate();

 };

function writeDate(){

  // tänane kp: Mon Feb 01 2016 12:42:44 GMT+0200 (FLE Standard Time)
  var today = new Date();

  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  clock.innerHTML = hours + ':'+ minutes + ':' + seconds;

}
