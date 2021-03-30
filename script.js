var rainsound = new Audio('rain-music.mp3')
var watersound = new Audio('water-music.mp3')
var naturesound = new Audio('natural.mp3')
var nature = document.getElementById('nature')
var rain = document.getElementById('rain')
var water = document.getElementById('water')



function twoMinutes() {
    document.getElementById('line').classList.add('line-two-min')
    document.getElementById('line').classList.remove('line-five-min')
    document.getElementById('line').classList.remove('line-ten-min')
    setTimeout(() => {
        rainsound.pause()
        watersound.pause()
        naturesound.pause()
        document.getElementById('thank').style.visibility = 'visible'

    }, 120000);
    document.getElementById('time').style.display = 'none'


}


function fiveMinutes() {
    document.getElementById('line').classList.remove('line-two-min')
    document.getElementById('line').classList.add('line-five-min')
    document.getElementById('line').classList.remove('line-ten-min')
    setTimeout(() => {
        rainsound.pause()
        watersound.pause()
        naturesound.pause()
        document.getElementById('thank').style.visibility = 'visible'

    }, 300000);
    document.getElementById('time').style.display = 'none'

}

function tenMinutes() {
    document.getElementById('line').classList.remove('line-two-min')
    document.getElementById('line').classList.remove('line-five-min')
    document.getElementById('line').classList.add('line-ten-min')
    setTimeout(() => {
        rainsound.pause()
        watersound.pause()
        naturesound.pause()
        document.getElementById('thank').style.visibility = 'visible'

    }, 600000);
    document.getElementById('time').style.display = 'none'

}

document.getElementById('nature').addEventListener('click', () => {
    document.getElementById('image').style.backgroundImage = 'url(nature-image.gif)'
    document.getElementById('time').style.visibility = 'visible'
    naturesound.play()
    rainsound.pause()
    watersound.pause()
    document.getElementById('image-type').style.display = 'none'

})

document.getElementById('rain').addEventListener('click', () => {
    document.getElementById('image').style.backgroundImage = 'url(rain.gif)'
    document.getElementById('time').style.visibility = 'visible'
    rainsound.play()
    watersound.pause()
    naturesound.pause()
    document.getElementById('image-type').style.display = 'none'

})

document.getElementById('water').addEventListener('click', () => {
    document.getElementById('image').style.backgroundImage = 'url(water.gif)'
    document.getElementById('time').style.visibility = 'visible'
    rainsound.pause()
    watersound.play()
    naturesound.pause()
    document.getElementById('image-type').style.display = 'none'
})