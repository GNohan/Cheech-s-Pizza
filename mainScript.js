// JavaScript source code for Cheech's Pizza

/*
 * Author: Noah Gumm
 * Date: 09/17/2019
*/

//Get reference to select box for quantity and create array of values
var qtySelect = document.getElementById("quantitySelect");
var options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Do the same as above for the pizza types
var pizzaSelect = document.getElementById("pizzaSelect");
var pizzaTypes = ["Cheese", "Pepperoni", "Sausage", "Bacon", "Supreme"];

//Variables for the receipt
var orderButton = document.getElementById("submitButton");
var receiptDiv = document.getElementById("receiptDiv");
var price = 9.99;
var taxPercent = 0.076;

//Populate the quantity select box
PopulateSelectBox(options, qtySelect);

//Populate the pizza select box
PopulateSelectBox(pizzaTypes, pizzaSelect);

//Function to populate select boxes
function PopulateSelectBox(optionsArray, selectBox) {

    //For every element in the options array
    for (var i = 0; i < optionsArray.length; i++) {

        //Store it in a temporary variable
        var option = optionsArray[i];

        //Create element and store value
        var element = document.createElement("option");
        element.textContent = option;
        element.value = option;

        //Add it to the select box
        selectBox.appendChild(element);
    }

}

//Generate the receipt using addeventlistener on the Order Button
orderButton.addEventListener("click", function () {

    //Assign variables from values on form
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var name = firstName + " " + lastName;

    var phoneNum = document.getElementById("phoneNumber").value;

    var quantity = document.getElementById("quantitySelect").value;
    var pizzaType = document.getElementById("pizzaSelect").value;

    //Calculate prices
    var subTotal = CalculateSubTotal(price, quantity);
    var tax = CalculateSalesTax(subTotal, taxPercent);
    var total = CalculateTotal(subTotal, tax);

    //Call display function
    DisplayReceipt(name, phoneNum, quantity, pizzaType, subTotal, tax, total);
});

//All mathemateical operation functions
function CalculateSubTotal(price, pizzaOrdered) { return price * pizzaOrdered; }
function CalculateSalesTax(subTotal, taxPercentage) { return subTotal * taxPercentage; }
function CalculateTotal(subTotal, tax) { return subTotal + tax; }

//Creates a title and paragraph element to load with the receipt information then appends it to the receiptDiv
function DisplayReceipt(name, phone, qty, type, sub, tax, total) {

    receiptDiv.innerHTML = ""; //Make sure receipt div is clear so they dont stack on page

    //Create the main header and paragraph element for the recipt
    var title = document.createElement("h3");
    var element = document.createElement("p");

    //Set the title
    title.innerText = "Receipt";

    //Set the main data inside the paragraph of the recipt
    element.innerHTML = "Name: " + name + "<br/>" +
        "Phone Number: " + phone + "<br/>" +
        "Quantity: " + qty + "<br/>" +
        "Pizza Type: " + type + "<br/><br/>" +
        "Sub Total: $" + sub + "<br/>" +
        "Tax: $" + tax.toFixed(2) + "<br/>" +
        "Total: $" + total.toFixed(2) + "<br/>";

    //Append the two elements to the reciept div
    receiptDiv.appendChild(title);
    receiptDiv.appendChild(element);
}