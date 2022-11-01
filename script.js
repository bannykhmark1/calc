var keys = document.querySelectorAll('#calculator .btn');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;
console.log(keys)
var img = document.querySelector('#backspace')
img.addEventListener('click', () => {
    const input = document.querySelector('.screen');
    input.innerText = input.innerText.slice(0, -1)
})
document.querySelector('.screen').innerHTML = 0

for (var i = 0; i < keys.length; i++) {
    keys[i].onclick = function(e) {
        var input = document.querySelector('.screen');
        var inputVal = input.innerHTML;
        var btnVal = this.innerHTML;


        if (btnVal == '%') {
            input.innerHTML = input.innerHTML / 100;

        }

        if (btnVal == 'C') {
            input.innerHTML = '0';
            decimalAdded = false;
        } else if (input.innerHTML === '0') {
            input.innerHTML = e.target.innerHTML;
        } else if (btnVal == '=') {
            var equation = inputVal;
            var lastChar = equation[equation.length - 1];

            equation = equation.replace(/×/g, '*').replace(/÷/g, '/');

            if (operators.indexOf(lastChar) > -1 || lastChar == '.')
                equation = equation.replace(/.$/, '');

            if (equation)
                input.innerHTML = eval(equation);

            decimalAdded = false;
        } else if (operators.indexOf(btnVal) > -1) {

            var lastChar = inputVal[inputVal.length - 1];

            if (inputVal != '' && operators.indexOf(lastChar) == -1)
                input.innerHTML += btnVal;


            else if (inputVal == '' && btnVal == '-')
                input.innerHTML += btnVal;


            if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {

                input.innerHTML = inputVal.replace(/.$/, btnVal);
            }

            decimalAdded = false;
        } else if (btnVal == '.') {
            if (!decimalAdded) {
                input.innerHTML += btnVal;
                decimalAdded = true;
            }
        } else {
            input.innerHTML += btnVal;
        }

        e.preventDefault();
    }
}