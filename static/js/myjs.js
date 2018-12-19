console.log("Creating New App");

function sayHello(btn) {
  console.log("btn", btn);
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
   modal.style.display = "block";

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


var equation = [];

function addSelection() {
  console.log("Item selected");
  var operator1 = document.getElementById("btn-selected").innerHTML;
  var operator2 = document.getElementById("number").value;
  console.log("oper2", operator2);
  equation.push(operator1);

  var xx = document.getElementById("equation1").src;
  console.log(xx);
  document.getElementById("equation1").src = "http://latex.codecogs.com/gif.latex?1+sin(x) $$ x^2 $$";


  console.log(equation);
}
