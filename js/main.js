const buttonPlay = document.querySelector('.play')
const buttonstop = document.querySelector('.stop')
const buttonAugment = document.querySelector('.augment')
const buttonReduce = document.querySelector('.reduce')
const buttonFlorest = document.querySelector('.florest')
const buttonRain = document.querySelector('.rain')
const buttonCoffee = document.querySelector('.coffee')
const buttonFire = document.querySelector('.fire')
const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')
const iconflorest = document.querySelector('.iconflorest')
const iconrain = document.querySelector('.iconrain')
const iconcoffee = document.querySelector('.iconcoffee')
const iconfire = document.querySelector('.iconfire')
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer =  new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const florestSound = new Audio("./music/Floresta.wav")
const rainSound = new Audio("./music/Chuva.wav")
const coffeeSound = new Audio("./music/Cafeteria.wav")
const fireSound = new Audio("./music/Lareira.wav")
let timerOut
let minutes = Number(displayMinutes.textContent)


function endTimer() {
  kitchenTimer.play()
}

function pressbutton() {
  buttonPressAudio.play()
}
 


function resetTimer() {
  updateTimer(minutes, 0)
  clearTimeout(timerOut)
 } 



function updateTimer(minutes, seconds) {
  displaySeconds.textContent = String(seconds).padStart(2,"0")
  displayMinutes.textContent = String(minutes).padStart(2,"0")
}

function buttonColorFlorest() {

  buttonFlorest.style.backgroundColor = "#02799d";
  buttonRain.style.backgroundColor = "#E1E1E6";
  buttonCoffee.style.backgroundColor = "#E1E1E6";
  buttonFire.style.backgroundColor = "#E1E1E6";
}



function buttonColorRain() {
  buttonFlorest.style.backgroundColor = "#E1E1E6";
  buttonRain.style.backgroundColor = "#02799d";
  buttonCoffee.style.backgroundColor = "#E1E1E6";
  buttonFire.style.backgroundColor = "#E1E1E6";
}


function buttonColorCoffee() {
  buttonFlorest.style.backgroundColor = "#E1E1E6";
  buttonRain.style.backgroundColor = "#E1E1E6";
  buttonCoffee.style.backgroundColor = "#02799d";
  buttonFire.style.backgroundColor = "#E1E1E6";
}


function buttonColorFire() {
  buttonFlorest.style.backgroundColor = "#E1E1E6";
  buttonRain.style.backgroundColor = "#E1E1E6";
  buttonCoffee.style.backgroundColor = "#E1E1E6";
  buttonFire.style.backgroundColor = "#02799d";
}

function buttonflorestSound() {
  florestSound.play()
  rainSound.pause()
  coffeeSound.pause()
  fireSound.pause()
}

function buttonrainSound() {
  florestSound.pause()
  rainSound.play()
  coffeeSound.pause()
  fireSound.pause()
}


function buttoncoffeeSound() {
  florestSound.pause()
  rainSound.pause()
  coffeeSound.play()
  fireSound.pause()
}


function buttonfireSound() {
  florestSound.pause()
  rainSound.pause()
  coffeeSound.pause()
  fireSound.play()
}



function playTimer(){
 timerOut = setTimeout(function() {
 let seconds = Number(displaySeconds.textContent)
 let minutes = Number(displayMinutes.textContent)
  
  updateTimer(minutes, 0)
 
 if( minutes <= 0) {
  endTimer()
  return
}
 
 if(seconds <= 0) {
    seconds = 60
  --minutes
  }
 
  
updateTimer(minutes, String(seconds -1))

  
  playTimer()
}, 1000)
}

 buttonPlay.addEventListener('click', function() {
  playTimer()
  pressbutton()
})

buttonstop.addEventListener("click", function() {
  resetTimer()
  pressbutton()
})


buttonAugment.addEventListener("click", function() {
  updateTimer(minutes +=5 ,0)
  pressbutton()
  if(minutes <= 0) {
    updateTimer(1, 0)}
})

buttonReduce.addEventListener("click", function() {
  updateTimer(Number(minutes -=5),  0)
  if(minutes <= 0){
    updateTimer(0, 0)
  }
  pressbutton()
 
 })

buttonFlorest.addEventListener("click", function(){
pressbutton()
buttonflorestSound()
buttonColorFlorest()
})

buttonRain.addEventListener("click", function() {
  buttonColorRain()
  pressbutton()
  buttonrainSound()
})


buttonCoffee.addEventListener("click", function(){
  buttonColorCoffee()
  pressbutton()
  buttoncoffeeSound()
})

buttonFire.addEventListener("click", function() {
  buttonColorFire()
  pressbutton()
  buttonfireSound()
})

florestSound.loop = true
rainSound.loop = true
coffeeSound.loop = true
fireSound.loop = true

