const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answers = ['Tak!', 'Nie.', 'Ciężko powiedzieć.', 'Nie chcesz znać odpowiedzi na to pytanie...:/']

console.log(answers)

const generateAnswer = () => {
	const randomIndex = Math.floor(Math.random() * answers.length)
	const generatedAnswer = answers[randomIndex]
	answer.textContent = generatedAnswer // Ustawienie tekstu na wygenerowaną odpowiedź
}

ball.addEventListener('click', generateAnswer)
