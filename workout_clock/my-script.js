const msg = document.querySelector('.current-message');
const image_msg = document.querySelector('.gif-message');
var exercise_img_obj = document.querySelector('.exercise-visual')

var gifs = [
    './resources/squats.gif',
    './resources/push ups.gif',
    './resources/mountain climbers.gif',
    './resources/rest.gif',
    './resources/plank.gif',
    './resources/single leg deadlifts.gif',
    './resources/single leg hip raises.gif',
    './resources/rest.gif',
    './resources/burpees.gif',
    './resources/split squats.gif',
    './resources/leg raises.gif',
    './resources/done.gif'
]

/*
TODO 
 - frame the images of various sizes
 - test out on phone 
 - make hip raise gif visible
 - make clock bigger
 */

mins = 0
seconds = 0

function pad_helper(n) {
    return n.toString().padStart(2, '0')
}


function increment_timer(until_mins) {
    if (until_mins == mins) {
        return
    }
    seconds += 1
    if (seconds >= 60) {
        mins += 1
        seconds = 0
        exercise_img_obj.src = gifs[mins]
    }
    msg.innerText = `${pad_helper(mins)}:${pad_helper(seconds)}`
}

function stop_timer(interval) {
    clearInterval(interval)
}

function start_timer() {
    image_msg.innerText = ''
    msg.innerText = `${pad_helper(mins)}:${pad_helper(seconds)}`
    exercise_img_obj.src = gifs[0]
    setInterval(increment_timer, 1000, 11)
}

const button = document.querySelector('.start-timer')
button.addEventListener('click', start_timer, { once: true })