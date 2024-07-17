// Rating Options to select
var numberOne = document.getElementById("numberOne");
var numberTwo = document.getElementById("numberTwo");
var numberThree = document.getElementById("numberThree");
var numberFour = document.getElementById("numberFour");
var numberFive = document.getElementById("numberFive");

// Getting Elements
var submitBtn = document.getElementById("submitBtn");
var cardOne = document.getElementById("cardOne");
var cardTwo = document.getElementById("cardTwo");
var ratingSelected = document.getElementById("ratingSelected");
 
// Hidding Second Card
cardTwo.classList.add("hide");

// Creating An Empty Selected Variable to Store Selected Value
var selected = "";

// Click Event Listeners for rating buttons
var ratingButtons = [numberOne, numberTwo, numberThree, numberFour, numberFive];
ratingButtons.forEach(function(button) {
    button.addEventListener("click",ratingNumber);
});

// Click Event Listener Function for rating buttons
function ratingNumber() {
    selected = this.value;
    ratingButtons.forEach(function(button) {
        button.style.backgroundColor = "hsl(213, 19%, 18%)";
    });
    this.style.backgroundColor = "hsl(217, 12%, 63%)";
}

// Submit Button EventListener
submitBtn.addEventListener("click",function(){
    if (selected){
        cardOne.style.display = "none";
        cardTwo.style.display = "block";
        ratingSelected.innerText = selected;
        console.log(submitBtn);
    }
});
   


