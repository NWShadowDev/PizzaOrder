//Business Logic
// function Pizza(topping, size) {
//   this.topping = topping;
//   this.size = size;
// }
//
// Pizza.prototype.pizzaOrder = function() {
//   return this.topping + ", " + this.size;
// }
//
// function resetFields() {
//   $(".topping").val("");
//   $("#size").val("");
// }

//User Interface Logic
$(document).ready(function() {

  $("form#order").submit(function(event) {
  // debugger;
    event.preventDefault();
    var inputtedToppings = parseInt($("input:checkbox[name=toppings]:checked").val());
    var inputtedSize = parseInt($("#size").val());
    var newOrder = (inputtedToppings + inputtedSize + "$");



    $("#orderInfo").show();
    $("#orderInfo").text(newOrder);
    $("input#orderInfo").val("");

  });
});
