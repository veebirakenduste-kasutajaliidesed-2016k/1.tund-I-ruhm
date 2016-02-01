//käivitub siis kui terve dokument laetud
window.onload = function(){
  console.log('laetud');
  // saan kätte input väljad

  var cm = document.getElementById('cm');
  var inch = document.getElementById('inch');

  // lisan nuppudele kuularid
  document.getElementById('to_inch').addEventListener('click', convertToInch);
  document.getElementById('to_cm').addEventListener('click', function(){
    cm.value = inch.value * 2.54;
  });

  //console.log(inch);
};


function convertToInch(){
  console.log('vajutas nuppu');
  //  arvutan ümber tollideks ja lisan väärtuse tollid lahtrisse
  inch.value = cm.value/2.54;

}
