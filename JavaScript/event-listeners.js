// 1.) click: Triggered when an element is clicked
const button = document.getElementById("myButton");
console.log(button);

const handleClick =() => {
 alert("Buttonn was clicked");
}

button.addEventListener("click", handleClick);

//doubleclick: Triggered when an elemrnt is double-clicked.
// const button = document.getElementById("myButton");
// button.addEventListener("dblclick", function(){
    // alert("Button was double-clicked!");
// });
// 
// 