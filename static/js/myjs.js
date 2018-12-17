console.log("Creating New App");

function sayHello(btn) {
  console.log("btn", btn);
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  // var btn = document.getElementById(btn);

  // // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  //
  // // When the user clicks the button, open the modal
  // btn.onclick = function() {
   modal.style.display = "block";
  // }

  var x = document.getElementById(btn).innerHTML;
  document.getElementById("btn-selected").innerHTML = x;


  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
   modal.style.display = "none";
  }

  // // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
  }
}

function addSelection() {
  console.log("Item selected");
  var operator = document.getElementById("btn-selected").innerHTML;
  console.log(operator);
  var xx = document.getElementById("equation").innerHTML;
  console.log(xx);
}
