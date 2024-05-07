// let price;
// let quantity;
// let total;

// price = 5;
// quantity = 6;
// total = price + quantity;
// let grandTotal = document.getElementById("total");
// grandTotal.textContent = "Сумма заказа:" + total;

// let price = 5;
// let quantity = 6;
// let total = price + quantity;
// document.getElementById("total").textContent = "Сумма заказа:" + total;

let name = prompt();
let price = 5;
let quantity = name.length;
let total = price * quantity;

document.getElementById("name").innerHTML = name;
document.getElementById("price").innerHTML = price;
document.getElementById("quantity").innerHTML = quantity;
document.getElementById("total").innerHTML = total;