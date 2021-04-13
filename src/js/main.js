let animateButton = document.querySelector(`.animate-button`)
let ballImage = document.querySelector(`.logo`)

animateButton.addEventListener(`click`, function() {
    // ballImage.style.animationPlayState = `running`
    ballImage.classList.add(`animate`)
})