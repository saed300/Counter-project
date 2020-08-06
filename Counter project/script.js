// Set the count
let count = 0;

// Select the values
var value = document.querySelector('#value');
var btns = document.querySelectorAll('.btn');

// Loop through all btns & add event listener
btns.forEach(function(btn) {
  btn.addEventListener('click', function (e) {
    var design = e.currentTarget.classList;
    if (design.contains('increase')) {
      count++;
    } else if (design.contains('decrease')) {
      count--
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = 'green';
    }
    if (count < 0){
      value.style.color = 'red';
    } 
    if (count === 0) {
      value.style.color = 'black';
    }
    value.textContent = count;
  });
})

