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
const iconFlorest = document.querySelector('.florest svg path')
const iconRain = document.querySelector('.rain svg path')
const iconCoffee = document.querySelector('.coffee svg path')
const iconFire = document.querySelector('.fire svg path')
const volumeFlorest = document.querySelector('.florest .volume')
const volumeRain = document.querySelector('.rain .volume')
const volumeCoffee = document.querySelector('.coffee .volume')
const volumeFire = document.querySelector('.fire .volume')
const iconFlorestDark = document.querySelector(".florest svg path")
const iconRainDark = document.querySelector(".rain svg path")
const iconCoffeeDark = document.querySelector(".coffee svg path")
const iconFireDark = document.querySelector(".fire svg path")
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer =  new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
const florestSound = new Audio("./music/Floresta.wav")
const rainSound = new Audio("./music/Chuva.wav")
const coffeeSound = new Audio("./music/Cafeteria.wav")
const fireSound = new Audio("./music/Lareira.wav")
const buttonLight = document.querySelector('#light')
const buttonDark = document.querySelector('#dark')
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

  iconFlorest.style.fill = "white";
  iconRain.style.fill = "#323238";
  iconCoffee.style.fill = "#323238";
  iconFire.style.fill = "#323238";
}



function buttonColorRain() {
  buttonFlorest.style.backgroundColor = "#E1E1E6";
  buttonRain.style.backgroundColor = "#02799d";
  buttonCoffee.style.backgroundColor = "#E1E1E6";
  buttonFire.style.backgroundColor = "#E1E1E6";

  iconFlorest.style.fill = "#323238";
  iconRain.style.fill = "white";
  iconCoffee.style.fill = "#323238";
  iconFire.style.fill = "#323238";


}


function buttonColorCoffee() {
  buttonFlorest.style.backgroundColor = "#E1E1E6";
  buttonRain.style.backgroundColor = "#E1E1E6";
  buttonCoffee.style.backgroundColor = "#02799d";
  buttonFire.style.backgroundColor = "#E1E1E6";

  iconFlorest.style.fill = "#323238";
  iconRain.style.fill = "#323238";
  iconCoffee.style.fill = "white";
  iconFire.style.fill = "#323238";

}


function buttonColorFire() {
  buttonFlorest.style.backgroundColor = "#E1E1E6"
  buttonRain.style.backgroundColor = "#E1E1E6"
  buttonCoffee.style.backgroundColor = "#E1E1E6"
  buttonFire.style.backgroundColor = "#02799d"

  iconFlorest.style.fill = "#323238"
  iconRain.style.fill = "#323238"
  iconCoffee.style.fill = "#323238"
  iconFire.style.fill = "white"
}



function darkFlorest() {
  buttonFlorest.style.backgroundColor = "#0A3442"
  buttonRain.style.backgroundColor = "#29292E"
  buttonCoffee.style.backgroundColor = "#29292E";
  buttonFire.style.backgroundColor =  "#29292E"

 iconFlorestDark.style.fill ='white'
 iconRainDark.style.fill ='white'
 iconCoffeeDark.style.fill ='white'
 iconFireDark.style.fill ='white'
}

function darkRain() {
  buttonFlorest.style.backgroundColor = "#29292E"
  buttonRain.style.backgroundColor = "#0A3442"
  buttonCoffee.style.backgroundColor = "#29292E";
  buttonFire.style.backgroundColor =  "#29292E"

 iconFlorestDark.style.fill ='white'
 iconRainDark.style.fill ='white'
 iconCoffeeDark.style.fill ='white'
 iconFireDark.style.fill ='white'
}


function darkCoffee() {
  buttonFlorest.style.backgroundColor = "#29292E"
  buttonRain.style.backgroundColor = "#29292E"
  buttonCoffee.style.backgroundColor = "#0A3442";
  buttonFire.style.backgroundColor =  "#29292E"

 iconFlorestDark.style.fill ='white'
 iconRainDark.style.fill ='white'
 iconCoffeeDark.style.fill ='white'
 iconFireDark.style.fill ='white'
}


function darkFire() {
  buttonFlorest.style.backgroundColor = "#29292E"
  buttonRain.style.backgroundColor = "#29292E"
  buttonCoffee.style.backgroundColor = "#29292E";
  buttonFire.style.backgroundColor =  "#0A3442"

 iconFlorestDark.style.fill ='white'
 iconRainDark.style.fill ='white'
 iconCoffeeDark.style.fill ='white'
 iconFireDark.style.fill ='white'
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

function darkTheme() {
  document.body.classList.toggle('dark')

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

volumeFlorest.addEventListener("input", function(){
  florestSound.volume = volumeFlorest.value /100;
})

volumeRain.addEventListener('input',function(){
  rainSound.volume = volumeRain.value /100;
})

volumeCoffee.addEventListener('input' , function(){
  coffeeSound.volume = volumeCoffee.value /100;
})

volumeFire.addEventListener('input', function(){
  fireSound.volume = volumeFire.value /100;
})

buttonDark.addEventListener("click", function(){
  buttonLight.classList.toggle('hide')
  buttonDark.classList.toggle('hide')
  darkTheme()
})

buttonLight.addEventListener("click", function(){
  buttonDark.classList.toggle('hide')
  buttonLight.classList.toggle('hide')
  darkTheme()
})