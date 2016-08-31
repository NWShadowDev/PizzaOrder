//Business Logic
function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.pizzaPrice = function() {
  return this.topping + this.size;
}

//User Interface Logic
$(document).ready(function() {

  $("form#order").submit(function(event) {
  // debugger;
    event.preventDefault();
    var toppingsTotal = 0; $('input:checkbox[name=toppings]:checked').each(function() {
      toppingsTotal += parseInt($(this).val());

    });

    var inputtedSize = parseInt($("#size").val());
    var newOrder = new Pizza(toppingsTotal,inputtedSize);
    var customerName = $("#yourName").val();
    console.log(newOrder);
    $("#orderHead").show();
    $("#orderInfo").show();
    $("#orderInfo").text(customerName + ", " + "Your order total is: " + newOrder.pizzaPrice() + "$"  + " Have a nice day!");

    });
  });
