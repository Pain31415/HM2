// Task 1
document.getElementById('b-1').addEventListener('click', function () {
    var div1 = document.getElementById('div-1');
    div1.style.width = '200px';
    div1.style.height = '90px';
    div1.textContent = `Width: ${div1.style.width}, Height: ${div1.style.height}`;
});

// Task 2
document.getElementById('b-2').addEventListener('click', function () {
    var div2 = document.getElementById('div-2');
    div2.classList.add('bg-orange');
});

// Task 3
document.getElementById('b-3').addEventListener('click', function () {
    var div2 = document.getElementById('div-2');
    var result = div2.classList.contains('bg-orange');
    document.querySelector('.out-3').textContent = result;
});

// Task 4
document.getElementById('b-4').addEventListener('click', function () {
    var blocks = document.querySelectorAll('.out-4');
    blocks.forEach(function (block) {
        block.classList.add('bg-red');
    });
});

// Task 5
document.querySelectorAll('.out-5').forEach(function (block) {
    block.addEventListener('click', function () {
        block.classList.toggle('bg-orange');
    });
});

// Task 6
let numberElement = document.getElementById('number');
let number = 0;

document.getElementById('decrement').addEventListener('click', function () {
    number--;
    numberElement.textContent = number;
});

document.getElementById('increment').addEventListener('click', function () {
    number++;
    numberElement.textContent = number;
});

// Task 7
document.getElementById('addBlock').addEventListener('click', function () {
    var colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    var block = document.createElement('div');
    block.style.backgroundColor = randomColor;
    block.className = 'color-block';
    block.addEventListener('click', function () {
        block.remove();
    });
    document.body.appendChild(block);
});

// Task 8
document.querySelectorAll('.color-palette div').forEach(function (palette) {
    palette.addEventListener('click', function () {
        var color = palette.getAttribute('data-color');
        document.getElementById('text').style.color = color;
    });
});
