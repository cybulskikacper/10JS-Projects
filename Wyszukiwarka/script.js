const search = document.querySelector('.search')
const drinks = document.querySelectorAll('li')

const handleInput = event => {
	const inputValue = event.target.value.toLowerCase()

	for (let i = 0; i < drinks.length; i++) {
		const drink = drinks[i].textContent.toLowerCase();// Pobierz tekst z elementu <li> i zamień na małe litery
		if (drink.includes(inputValue)) {
			// Sprawdź, czy wartość wpisana w inputie zawiera się w tekście napoju
			drinks[i].style.display = 'block' // Pokaż element <li> na liście
		} else {
			drinks[i].style.display = 'none' // Ukryj element <li> na liście
		}
	}
}

search.addEventListener('keyup', handleInput)
