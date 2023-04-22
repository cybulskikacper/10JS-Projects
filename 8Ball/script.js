const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answers = ['Tak!', 'Nie.', 'Ciężko powiedzieć.', 'Nie chcesz znać odpowiedzi na to pytanie...:/']

const checkInput = () => {
	if (input.value !== '' && input.value.endsWith('?')) {
		generateAnswer()
		error.textContent = ''
	} else if (!input.value == '' && !input.value.endsWith('?')) {
		error.textContent = 'Pytanie musi być zakończone znakiem zapytania.'
	} else {
		error.textContent = 'Zadaj pytanie!'
	}
}

const generateAnswer = () => {
	const randomIndex = Math.floor(Math.random() * answers.length)
	const generatedAnswer = answers[randomIndex]
	answer.textContent = generatedAnswer
}

ball.addEventListener('click', checkInput)
