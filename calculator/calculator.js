const userInput = document.getElementById('userInput');
var expression = ''

function press(num){
	expression += num;
	userInput.value = expression;
}

function equal(){
	userInput.value = eval(expression);
	expression = '';

}

function erase(){
	expression = '';
	userInput.value = expression;
}

function Delete(){
	userInput.value = userInput.value.slice(0, -1)
}
