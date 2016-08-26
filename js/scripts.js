//Business Logic
// function Pizza(topping, size) {
//   this.topping = topping;
//   this.size = size;
// }
//
// Pizza.prototype.pizzaOrder = function() {
//   return this.topping + ", " + this.size;
// }

// function resetFields() {
//   $(".topping").val("");
//   $("#size").val("");
// }

//User Interface Logic
$(document).ready(function() {
  $("#submitOrder").submit(event) {
    // var totalCounter;
    // var inputtedToppings = parseInt($("input:checkbox[name=toppings]:checked").val());
    // var inputtedSize = parseInt($("#size").val());
    // var newOrder = (inputtedToppings + inputtedSize + "$");
// $("#orderInfo").append("<li>" + message[i] + "</li>");




    $("#orderInfo").show();
    event.preventDefault();
    // $("#orderInfo").text(newOrder);
    $("#orderInfo").val("");

  });
});
