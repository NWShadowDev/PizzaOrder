//Business Logic
function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.pizzaOrder = function() {
  return this.topping + ", " + this.size;
}

// function isEmpty(value){
//     return (value === undefined || value == null || value.length <= 0) ? true : false;
// }

function resetFields() {
  $(".topping").val("");
  $("#size").val("");
}

//User Interface Logic
$(document).ready(function() {

  $("form#order").submit(function(event) {
  // debugger;
    event.preventDefault();
    var inputtedToppings = parseInt($("input:checkbox[name=toppings]:checked").val());
    var inputtedSize = parseInt($("#size").val());
    var newOrder = (inputtedToppings + inputtedSize + "$ ");
    var customerName = $("#yourName").val();


    $("#orderHead").show();
    $("#orderInfo").show();
    $("#orderInfo").text(customerName + ", " + "Your order total is: " + newOrder  + "Have a nice day!");
    $("input#orderInfo").val("");


  });
});
