//Business Logic
function Pizza(topping, size, price) {
  this.topping = topping;
  this.size = size;
  this.price = price;
}

Pizza.prototype.pizzaPrice = function() {
  return this.topping + this.size;
}

//User Interface Logic
$(document).ready(function() {

  $("form#order").submit(function(event) {
  debugger;
    event.preventDefault();
    var toppingsTotal = 0; $('input:checkbox[name=toppings]:checked').each(function() {
      toppingsTotal += parseInt($(this).val());
    });

    for (i = 0; i <	toppingsTotal.length; i++) {
       	toppingsTotal[i].checked = true;
    }

    var inputtedSize = parseInt($("#size").val());
    var newOrder = (toppingsTotal,inputtedSize);
    var customerName = $("#yourName").val();

    $("#orderHead").show();
    $("#orderInfo").show();
    $("#orderInfo").text(customerName + ", " + "Your order total is: " + newOrder  + "Have a nice day!");
    // $("input#orderInfo").val("");

    });
  });
