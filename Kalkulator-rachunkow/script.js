const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const error = document.querySelector('.error')
const count = document.querySelector('.count')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const showBill = () => {
	if (people.value === '' || price.value === '' || tip.value === '') {
		console.error('Błąd: Wprowadź prawidłowe dane.') //
	} else {
		countBill()
	}
}

const countBill = () => {
	const priceInfo = parseFloat(price.value)
	const tipInfo = parseFloat(tip.value) / 100
	const personInfo = parseFloat(people.value)

	if (isNaN(priceInfo) || isNaN(tipInfo) || isNaN(personInfo)) {
		console.error('Błąd: Wprowadź prawidłowe dane.') // Sprawdzenie, czy dane są liczbami
		return
	}

    


}

count.addEventListener('click', showBill)

// 2. Stwórz funkcję, będzie sprawdzała, czy wszystkie pola zostały uzupełnione. Jeśli nie, pokaż błąd. Jeśli tak, wywołaj kolejną funkcję, która zajmie się obliczaniem rachunku.

// 3. Funkcja obliczająca rachunek musi przechwycić dane z input i select oraz wykonać działanie wg wzoru:

// 4.(kwota do zapłaty + (kwota do zapłaty * napiwek)) / ilość osób

// 5.  Wynik działania wypisz w odpowiednim paragrafie. Nie zapomnij zaokrąglić kwoty do dwóch miejsc po przecinku!
