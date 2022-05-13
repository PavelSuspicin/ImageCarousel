const imgs = document.getElementById('imgs')
const img = document.querySelectorAll('#imgs img')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let ind = 0
let interval = setInterval(run, 2000)

function run() {
    ind++
    changeImage()
}

function changeImage() {
    if (ind > img.length - 1) {
        ind = 0
    } else if (ind < 0) {
        ind = img.length - 1
    }

    imgs.style.transform = `translateX(${-ind * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

leftBtn.addEventListener('click', () => {
    ind--
    resetInterval()
    changeImage()
})

rightBtn.addEventListener('click', () => {
    ind++
    resetInterval()
    changeImage()
})
