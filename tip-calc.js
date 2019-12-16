let slider = document.getElementById('people');

let tipCalc = () => {
	let mealCost = +document.getElementById('subtotal').value;
	let tipPercent = +document.getElementById('rating').value;
	let partySize = Math.floor(
		+document.getElementById('people').value
	);

	let totalCost = mealCost * (1 + tipPercent);
	let costPerPerson = (totalCost / partySize).toFixed(2);

	let outputDiv = document.querySelector('#output');
	let grandTotal = document.querySelector('#grand-total');

	let splitDiv = document.querySelector('#split');
	let splitWays = document.querySelector('#diners');
	let splitTotal = document.querySelector('#split-total');

	outputDiv.classList.remove('d-none');
	grandTotal.textContent = `$${totalCost.toFixed(2)}`;

	if (partySize > 1) {
		splitDiv.classList.remove('d-none');
		splitWays.textContent = partySize;
		splitTotal.textContent = `$${costPerPerson}`;
	} else {
		if (!splitDiv.classList.contains('d-none')) {
			splitDiv.classList.add('d-none');
		}
	}

	// alert(`Each person pays $${costPerPerson}`);
};

slider.addEventListener('input', () => {
	document.getElementById('party-output').textContent =
		slider.value;
});

document
	.getElementById('calculate')
	.addEventListener('click', tipCalc);
