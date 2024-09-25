const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange','black','gray','brown','burlywood','pink'];
const box = document.querySelector('.button');
function changeColorAndIncrement() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
    let currentNumber = parseInt(box.textContent);
    box.textContent = currentNumber + 1;
}
box.addEventListener('click', changeColorAndIncrement);
