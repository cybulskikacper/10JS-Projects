const img = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answers = ['Tak!', 'Nie.', 'Może', 'Ciężko powiedzieć..', 'Nie chcesz znać odpowiedzi na to pytanie... :/']

const checkInput = () => {
	if (input.value === '') {
		error.textContent = 'Musisz zadać jakieś pytanie!'
	}
}

input.addEventListener('keyup', checkInput)
