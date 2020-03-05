setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock(){
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds() / 60
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60 
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12

    setRotaiton(secondHand, secondRatio)
    setRotaiton(minuteHand, minuteRatio)
    setRotaiton(hourHand, hourRatio)
}

function setRotaiton(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()