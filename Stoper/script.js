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

let countTime = 0
let minutes = 0
let seconds = 0
let isRunning = false
let intervalId

const handleStart = () => {
	if (!isRunning) {
		isRunning = true
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
		}, 1000)
	}
}

const handlePause = () => {
	clearInterval(intervalId)
	isRunning = false
}

startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
