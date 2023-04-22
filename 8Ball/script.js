const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answers = ['Tak!', 'Nie.', 'Ciężko powiedzieć.', 'Nie chcesz znać odpowiedzi na to pytanie...:/']

const animation = () => {
	ball.classList.remove('shake-animation')
	void ball.offsetWidth 
	ball.classList.add('shake-animation')
	setTimeout(checkInput, 1000)
}

const checkInput = () => {
	if (input.value !== '' && input.value.endsWith('?')) {
		generateAnswer()
		error.textContent = ''
	} else if (!input.value == '' && !input.value.endsWith('?')) {
		error.textContent = 'Pytanie musi być zakończone znakiem zapytania.'
		answer.textContent = ''
	} else {
		error.textContent = 'Zadaj pytanie!'
	}
}

const generateAnswer = () => {
	const randomIndex = Math.floor(Math.random() * answers.length)
	const generatedAnswer = answers[randomIndex]
	answer.textContent = generatedAnswer
}

ball.addEventListener('click', animation)
