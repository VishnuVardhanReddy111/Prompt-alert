function alert1() {
  alert("The Alert message is started");
}
function pmt(){
  var n=prompt('Enter n value');
  if(n%2===0){
  document.getElementById('id1').innerHTML="Number "+n+" is even";
  }
  else{
    document.getElementById('id1').innerHTML="Number "+n+" is odd";
  }

}
