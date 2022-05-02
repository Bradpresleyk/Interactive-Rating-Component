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


// Setting up click Event Listener for Rating Options
// And Setting The Selected Value to this value on click
// Click Event Listener For Number One
// Making Sure only the last clicked element is only orange
numberOne.addEventListener("click",function(){
    selected = this.value;
    numberTwo.style.backgroundColor = "hsl(213, 19%, 18%)";
    numberThree.style.backgroundColor = "hsl(213, 19%, 18%)";
    numberFour.style.backgroundColor = "hsl(213, 19%, 18%)";
    numberFive.style.backgroundColor = "hsl(213, 19%, 18%)";
    this.style.backgroundColor = "hsl(217, 12%, 63%)";
    
})

numberTwo.addEventListener("click",function(){
    selected = this.value;
    numberOne.style.backgroundColor = "hsl(213, 19%, 18%)";
    numberThree.style.backgroundColor = "hsl(213, 19%, 18%)";
    numberFour.style.backgroundColor = "hsl(213, 19%, 18%)";
    numberFive.style.backgroundColor = "hsl(213, 19%, 18%)";
    this.style.backgroundColor = "hsl(217, 12%, 63%)";
})

numberThree.addEventListener("click",function(){
    selected = this.value;
    numberOne.style.backgroundColor = "hsl(213, 19%, 18%)";
    numberTwo.style.backgroundColor = "hsl(213, 19%, 18%)";
    numberFour.style.backgroundColor = "hsl(213, 19%, 18%)";
    numberFive.style.backgroundColor = "hsl(213, 19%, 18%)";
    this.style.backgroundColor = "hsl(217, 12%, 63%)";
})

numberFour.addEventListener("click",function(){
    selected = this.value;
    numberOne.style.backgroundColor = "hsl(213, 19%, 18%)";
    numberTwo.style.backgroundColor = "hsl(213, 19%, 18%)";
    numberThree.style.backgroundColor = "hsl(213, 19%, 18%)";
    numberFive.style.backgroundColor = "hsl(213, 19%, 18%)";
    this.style.backgroundColor = "hsl(217, 12%, 63%)";
})

numberFive.addEventListener("click",function(){
    selected = this.value;
    numberOne.style.backgroundColor = "hsl(213, 19%, 18%)";
    numberTwo.style.backgroundColor = "hsl(213, 19%, 18%)";
    numberThree.style.backgroundColor = "hsl(213, 19%, 18%)";
    numberFour.style.backgroundColor = "hsl(213, 19%, 18%)";
    this.style.backgroundColor = "hsl(217, 12%, 63%)";


})


// Setting up Submit Button whilst making sure it only submits if selected
// And Setting Empty Span Element to Selected value
submitBtn.addEventListener("click",function(){
    if(selected){
    cardOne.style.display = "none";
    cardTwo.style.display = "block";
    ratingSelected.innerText = selected;
    }
})
  
   


