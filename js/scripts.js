//Business Logic
function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.pizzaOrder = function() {
  return this.topping + ", " + this.size;
}

// function resetFields() {
//   $(".topping").val("");
//   $("#size").val("");
// }

//User Interface Logic
$(document).ready(function() {
  $("#submitOrder").submit(event) {
    var inputtedToppings = parseInt($("input:radio[name=toppings]:checked").val());
    var inputtedSize = parseInt($("#size").val());
    var newOrder = (inputtedToppings + inputtedSize + "$");

    if(inputtedToppings )
    event.preventDefault();

    $(".col-md-6").show();

    $("#orderInfo").text(newOrder);
    $("input#orderInfo").val("");

  });
});
