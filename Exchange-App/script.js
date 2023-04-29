const currencyOne = document.querySelector('#currency-one')
const currencyTwo = document.querySelector('#currency-two')
const amountOne = document.querySelector('.amount-one')
const amountTwo = document.querySelector('.amount-two')
const swapBtn = document.querySelector('.swap')
const rateInfo = document.querySelector('.rate-info')

const calculate = () => {
	const URL = `https://api.exchangerate.host/convert?from=${currencyOne.value}&to=${currencyTwo.value}`

	fetch(URL)
		.then(response => response.json())
		.then(data => {
			if (data && data.info.rate) {
				const currency1 = currencyOne.value
				const currency2 = currencyTwo.value
				const exchangeRate = data.info.rate
				rateInfo.textContent = `1 ${currency1} = ${exchangeRate.toFixed(4)}${currency2}`

				amountTwo.value = amountOne.value * exchangeRate.toFixed(2)
			}
		})
		.catch(error => console.error(error))
}

currencyOne.addEventListener('change', calculate)
currencyTwo.addEventListener('change', calculate)
amountOne.addEventListener('input',calculate)

calculate()