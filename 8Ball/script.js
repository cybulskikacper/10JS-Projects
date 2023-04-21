const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answers = ['Tak!', 'Nie.', 'Może', 'Ciężko powiedzieć..', 'Nie chcesz znać odpowiedzi na to pytanie... :/']

const shakeBall = () => {
	ball.classList.add('shake-animation')

	setTimeout(checkInput, 1000)
}

const checkInput = () => {
	if (input.value !== '' && input.value.endsWith('?')) {
		generateAnswer()
		error.textContent = ''
		ball.classList.remove('shake-animation')
	} else if (input.value !== '' && !input.value.endsWith('?')) {
		error.textContent = 'Pytanie musi być zakończone znakiem "?".'
		answer.textContent = ''
	} else {
		answer.textContent = ''
		error.textContent = 'Musisz zadać jakieś pytanie!'
	}
}

const generateAnswer = () => {
	const number = Math.floor(Math.random() * 5)
	answer.innerHTML = `<span>Odpowiedź:</span> ${answers[number]}`
}

ball.addEventListener('click', shakeBall)
