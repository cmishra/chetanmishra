ASSETS_FOLDER = "assets"
LETTERS = {
    "vowels": [
        "अ a.mp3",
        "आ aa.mp3",
        "इ i.mp3",
        "ई ee.mp3",
        "उ u.mp3",
        "ऊ oo.mp3",
        "ए e.mp3",
        "ऐ ai.mp3",
        "ओ o.mp3",
        "औ au.mp3",
        "ऋ ri.mp3",
    ],
    "consonants": []
}

const audio = document.querySelector("#prompt-audio")
const response = document.forms.namedItem('response-form')
const options = document.querySelectorAll('input')
const labels = document.querySelectorAll('label.option')

/* 
 * TODO:
 * - scoring
 * - consononts/other groups
 * - a way folks can select certain groupings
 * - image instead of audio visible
 * - update logo
 * - update navigation (rip off squarespace or something similar)
 */
response.addEventListener('submit', (event) => {
    event.preventDefault()
    checkedOption = event.target.querySelector("input:checked")
    character = checkedOption.getAttribute('value')
    resource = audio.getAttribute('src').split('/')[1]
        // console.log(`${resource.slice(0, 1)} vs ${character}`)
    label = document.querySelector(`label[for=${character}]`)
    if (resource.slice(0, 1) == character) {
        label.style.color = 'green'
    } else {
        label.style.color = 'red'
    }
    setTimeout(nextQuestion, 1000)
})

getRandomNumber = (min, maxExclusive) => {
    return Math.floor(Math.random() * (maxExclusive - min)) + min;
}

nextQuestion = () => {
    i = getRandomNumber(0, LETTERS['vowels'].length)
    nextSound = LETTERS['vowels'][i]
    nextCharacter = nextSound.slice(0, 1)
    j = i
    while (i == j) {
        j = getRandomNumber(0, LETTERS['vowels'].length)
    }
    nextFalseCharacter = LETTERS['vowels'][j].slice(0, 1)
    nextOptions = [nextCharacter, nextFalseCharacter]
    nextOptions = nextOptions.sort(() => Math.random() - 0.5)

    audio.setAttribute('src', `${ASSETS_FOLDER}/${nextSound}`)

    for (let i = 0; i < nextOptions.length; i++) {
        character = nextOptions[i]
        labels[i].setAttribute('for', character)
        labels[i].innerText = character
        label.style.color = 'black'
        options[i].checked = false
        options[i].setAttribute('id', character)
        options[i].setAttribute('value', character)
    }
}