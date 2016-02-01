 window.onload = function(){

   var clock = document.getElementById('clock');

   // enne timeouti kirjutan ühe korra ära
   writeDate();

   window.setInterval(function(){

     // iga ooteaja järel käivitatakse
     writeDate();

   }, 1000);// millisekundid - 1000ms = 1s


 };

function writeDate(){

  // tänane kp: Mon Feb 01 2016 12:42:44 GMT+0200 (FLE Standard Time)
  var today = new Date();

  var hours = today.getHours();
  var minutes = setZeroBefore(today.getMinutes());
  var seconds = today.getSeconds();

  seconds = setZeroBefore(seconds);

  clock.innerHTML = setZeroBefore(hours) + ':'+ minutes + ':' + seconds;

}

// lisab nulli kui arv on 10st väiksem
function setZeroBefore(number) {
  if(number < 10){
    number = '0' + number;
  }

  return number;
}
