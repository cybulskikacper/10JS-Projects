const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const stopWatch = document.querySelector('.stopwatch')

const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')

const modalShadow = document.querySelector('.modal-shadow')
const closeBtn = document.querySelector('.close')

let minutes = 0
let seconds = 0
let isRunning = false
let intervalId

const results = []

const handleStart = () => {
	if (!isRunning) {
		isRunning = true
		if (time.style.visibility === 'visible') {
			time.style.visibility = 'hidden'
		}
		intervalId = setInterval(() => {
			seconds++
			if (seconds >= 60) {
				seconds = 0
				minutes++
			}
			if (minutes >= 60) {
				minutes = 0
			}
			stopWatch.textContent = `${minutes < 10 ? +minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
		}, 700)
	}
}

const handlePause = () => {
	clearInterval(intervalId)
	isRunning = false
}

const handleStop = () => {
	if (stopWatch.textContent !== '0:00') {
		time.style.visibility = 'visible'
		time.innerHTML = `Ostatni czas to: ${stopWatch.textContent}`
		results.push(stopWatch.textContent)
	}

	clearInterval(intervalId)
	stopWatch.textContent = '0:00'
	timeList.textContent = ''
	minutes = 0
	seconds = 0
	isRunning = false
}

const handleReset = () => {
	minutes = 0
	seconds = 0
}

startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
stopBtn.addEventListener('click', handleStop)
resetBtn.addEventListener('click', handleReset)

historyBtn.addEventListener('click', () => {
	console.log(results)
})
