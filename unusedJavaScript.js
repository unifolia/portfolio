let konamiKey = `38384040373937396665`
let userInput = ``

portfolio.onKonamiCode = (callback) => {
    document.addEventListener(`keydown`, function(e) {
        userInput += (`` + e.keyCode)
        if (userInput === konamiKey) {
            return callback()
        } else if (!konamiKey.indexOf(userInput)) {
            return 
        } else {
            userInput = (`` + e.keyCode)
        }
    })
}


portfolio.funEmojiTime = () => {
    $headshot.removeClass(`cursorPointer`)
    commenceLoop = () => {
        let randomEmoji = myInterests[Math.floor((Date.now() / 400) % myInterests.length)]

        $(`h1`).html(`I enjoy: ${randomEmoji}`)

        setTimeout(commenceLoop, 50)
    }
    commenceLoop()
}

// ---

portfolio.onKonamiCode(function() {
    $headshot.addClass(`cursorPointer`)
    $(`.headshot.cursorPointer`).on(`click`, function() {
        portfolio.funEmojiTime()
    })
})