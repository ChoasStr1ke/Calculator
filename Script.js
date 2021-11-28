class Calculator {

	constructor() {
		this.numbers = document.querySelectorAll(".numbers");
		this.operators = document.querySelectorAll(".operators");
		this.equals = document.querySelector(".equals");
		this.display = document.querySelector(".display");

		this.history = [];
		this.doMath = "";
		this.displayNumber = [];

	}

	calculate() {
		this.update(0, true);
		console.log(this.history);

		let ourCurrentNumber = this.history[history.length - 1];
		console.log("hello " + ourCurrentNumber);

		if (this.doMath === "+") {

			this.history.push(ourCurrentNumber + this.history[0]);
			this.display.innerHTML = this.history[this.history.length - 1];
			this.history.shift();
			this.history.shift();


		} else if (this.doMath === "-") {

			this.history.push(this.history[0] - ourCurrentNumber);
			this.display.innerHTML = this.history[this.history.length - 1];
			this.history.shift();
			this.history.shift();

		} else if (this.doMath === "x") {
			this.history.push(this.history[0] * ourCurrentNumber);
			this.display.innerHTML = this.history[this.history.length - 1];
			this.history.shift();
			this.history.shift();

		} else if (this.doMath === "÷") {
			this.history.push(this.history[0] / ourCurrentNumber);
			this.display.innerHTML = this.history[this.history.length - 1];
			this.history.shift();
			this.history.shift();


		} else {
			console.log(this.doMath);
			console.log("no operator");
		}
	}

	update(number, clear) {
		if (clear === true) {
			if (!(this.displayNumber.length === 0)) {
				this.history.push(Number(this.displayNumber.join("")));
			}

			if (!(number === 0)) {
				this.doMath = number;
			}

			this.displayNumber.length = 0;
			this.display.innerHTML = "";

		} else {
			this.displayNumber.push(number);
			this.display.innerHTML = this.displayNumber.join("");
		}
	}

	listener() {
		for (let x = 0; x < this.numbers.length; x++) {
			this.numbers[x].addEventListener("click", e => {
				this.update(this.numbers[x].innerHTML, false);
			});
		}

		for (let x = 0; x < this.operators.length; x++) {
			this.operators[x].addEventListener("click", e => {
				this.update(this.operators[x].innerHTML, true);
			});
		}

		this.equals.addEventListener("click", e => {
			this.calculate();
		});

	}
}

Calculator01 = new Calculator();
Calculator01.listener();