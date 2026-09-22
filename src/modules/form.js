const form = () => {
	const textInputs = document.querySelectorAll(
		'form input[type="text"], form input:not([type])'
	);
	const emailInputs = document.querySelectorAll('form input[type="email"]');
	const telInputs = document.querySelectorAll('form input[type="tel"]');

	const squareInput = document.querySelectorAll("#calc .calc-square");
	const countInput = document.querySelectorAll("#calc .calc-count");
	const dayInput = document.querySelectorAll("#calc .calc-day");

	textInputs.forEach((input) => {
		input.addEventListener("input", () => {
			input.value = input.value.replace(/[^А-Яа-яЁё -]/g, "");
		});
	});

	emailInputs.forEach((input) => {
		input.addEventListener("input", () => {
			input.value = input.value.replace(/[^A-Za-z0-9@\-._!~*']/g, "");
		});
	});

	telInputs.forEach((input) => {
		input.addEventListener("input", () => {
			input.value = input.value.replace(/[^0-9()-]/g, "");
		});
	});

	[squareInput, countInput, dayInput].forEach((inputs) => {
		inputs.forEach((input) => {
			input.addEventListener("input", () => {
				input.value = input.value.replace(/[^0-9]/g, "");
			});
		});
	});
};

export default form;
