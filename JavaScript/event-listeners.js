// 1.) click: Triggered when an element is clicked
// const button = document.getElementById("myButton");
// console.log(button);
// 
// EVENT ARE ACTION THAT TAKE PLACE IN OUR DOCUMENT
// const handleClick =() => {
//  alert("BUTTON WAS CLICKED");
// }
// 
// button.addEventListener("click", handleClick);

//doubleclick: Triggered when an elemrnt is double-clicked.
const button = document.getElementById("myButton");
button.addEventListener("dblclick", function() {
    alert("Button was double-clicked!");
});

// 
button.addEventListener("mouseover", function(){
    button.style.backgroundColor = "green";
});

// document.addEventListener("keydown", function(event) {
//     console.log("key pressed: " + event.key);
//     button.style.background = "yellow";
// });

document.addEventListener("keyup", function(event){
    const body = document.querySelector(" body");
    body.style.backgroundColor = "red"

})