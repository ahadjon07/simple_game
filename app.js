const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')

const button = document.querySelector('button')

button.addEventListener('click', () =>  {
const random1 = Math.floor(Math.random() * 6) + 1
const random2 = Math.floor(Math.random() * 6) + 1

// console.log(random1, random2)
img1.src = `images/dice${random1}.png`
img2.src = `images/dice${random2}.png`

const h1 = document.querySelector('h1')

if (random1 > random2) {
    h1.textContent = 'Player 1 win!'
} else if (random1 < random2) {
    h1.textContent = 'Player 2 win!'
} else {
    h1.textContent = 'Draw!'
}
})







    