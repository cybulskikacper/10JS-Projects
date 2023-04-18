const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const error = document.querySelector('.error')
const count = document.querySelector('.count')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const showBill = () => {
	if (people.value == '' || price.value == '' || tip.value == 0) {
		error.textContent = 'Uzupełnij wszystkie pola!'
	} else {
		countBill()
	}
}

const countBill = () => {
	const priceInfo = parseFloat(price.value)
	const personInfo = parseInt(people.value)
	const tipInfo = parseFloat(tip.value)

	if (isNaN(priceInfo) || isNaN(tipInfo) || isNaN(personInfo)) {
		error.textContent = 'Wprowadź poprawne dane w polach!'
	} else {
		const sum = (priceInfo + priceInfo * tipInfo) / personInfo
		costInfo.style.display = 'block'
		cost.textContent = sum.toFixed(2)
	}
}

count.addEventListener('click', countBill)
