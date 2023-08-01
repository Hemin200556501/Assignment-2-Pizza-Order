document.addEventListener("DOMContentLoaded", function (event) {
  // reference to confirm order button
  var orderButton = document.getElementById("order-btn");
  // Event listner event to confirm order button
  orderButton.addEventListener("click", function () {
    // getting selected events from the following 
    var size = document.getElementById("size").value;
    var crust = document.getElementById("crust").value;
    var sauce = document.querySelector('input[name="sauce"]:checked');

    // checking if sauce is selected and if Notification, an alert comes on the screen
    if (!sauce) {
      alert("Please select a sauce!");
      return; 
    }
    // extracting the value of sauce
    sauce = sauce.value; 

    // getting value of selected topping 
    var toppings = document.querySelectorAll('input[type="checkbox"]:checked');

    var delivery = document.getElementById("delivery");
    var paymentMethod = document.getElementById("payment-method").value;
    // order details String
    var orderDetails = "Order Details:\n";
    orderDetails += "Size: " + size + "\n";
    orderDetails += "Crust: " + crust + "\n";
    orderDetails += "Sauce: " + sauce + "\n";
    orderDetails += "Toppings: ";
    var toppingsDisplay = "";
    var toppingsPrice = 0;
    for (var i = 0; i < toppings.length; i++) {
      orderDetails += toppings[i].value + " ";
      toppingsDisplay += toppings[i].value + ", ";
      toppingsPrice += 1.5  ; //cost of each topping is $1.5
    } 
    // delievery or takeAway option for the Customr
    var delivery = document.getElementById("delivery").checked;
        var deliveryOption = delivery ? "Delivery" : "Take Away" + "\n";
        orderDetails += "\n";
        orderDetails += "Delivery or Takeaway: " + deliveryOption + "\n";

    

    // calculating the total price according to size and toppings
    var basePrice = 0;
    if (size === "small") {
      basePrice = 7.79;
    } else if (size === "medium") {
      basePrice = 9.29;
    } else if (size === "large") {
      basePrice = 11.29;
    } else if(size === "X-Large") {
      basePrice = 14.49;
    }

    var totalPrice = basePrice + toppingsPrice;

    // tax calculation 
    var tax = totalPrice * 0.1;
    totalPrice += tax;
    // append price details to order detail String
    orderDetails += "Price (Base): $" + basePrice.toFixed(2) + "\n";
    orderDetails += "Price (Toppings): $" + toppingsPrice.toFixed(2) + "\n";
    orderDetails += "Tax (13%): $" + tax.toFixed(2) + "\n";
    orderDetails += "Total Price: $" + totalPrice.toFixed(2) + "\n";
    orderDetails += "Payment Method: " + paymentMethod + "\n";
    // displayimg the order detail whith help of an alert 
    alert(orderDetails);
    // displaying the selected topping on the page
    document.getElementById("toppings-display").textContent = toppingsDisplay.slice(0, -2);
    // displaying total price in the end
    document.getElementById("total-price").value = totalPrice.toFixed(2);
  });
});