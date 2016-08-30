//Business Logic
function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

function Toppings(veggie, protein, cheese, sauce) {
  this.veggie = veggie;
  this.protein = protien;
  this.cheese = cheese;
  this.sauce = sauce;
}

function uncheck() {
    document.getElementByClass("topping").checked = false;
}

Pizza.prototype.pizzaOrder = function() {
  return this.topping + ", " + this.size;
}

Toppings.prototype.toppingTotal = function() {
  return this.veggie + ", " + this.protein + ", " + this.cheese + ", " + this.sauce;
}

//User Interface Logic
$(document).ready(function() {

  $("form#order").submit(function(event) {
  // debugger;
    event.preventDefault();
    var toppingsTotal = 0;
  $('input:checkbox[name=toppings]:checked').each(function() {
    toppingsTotal += $("input:checkbox[name=toppings]:checked").val();

    for (i = 0; i <	toppingsTotal.length; i++) {
       	toppingsTotal[i].checked = true;
    }

    var inputtedSize = parseInt($("#size").val());
    var newOrder = new Pizza(toppingsTotal + inputtedSize);
    var customerName = $("#yourName").val();


    $("#orderHead").show();
    $("#orderInfo").show();
    $("#orderInfo").text(customerName + ", " + "Your order total is: " + newOrder  + "Have a nice day!");
    $("input#orderInfo").val("");

    });
  });
});
