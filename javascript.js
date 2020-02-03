const portfolio = {}

let $body = $(`body`)
let $headshot = $(`.headshot`)
let $htmlBody = $(`html,body`)
let $jamesCameraRollImg = $(`.jamesCameraRoll img`)

let userInput = ``
let skiInput = ``
let konamiKey = `38384040373937396665`
let skiKey = `837573`
let greetingsArray = [`Hello`, `Dearest`, `Hi`, `Hey`, `Greetings`, `Good day`, `Salutations`, `Howdy`]
let myInterests = [`🐱`, `🏀`, `🎸`, `🌺`, `🍺`, `💻`]
let skiArray = [
    `⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤`,
    `🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤⠤⠤🌲⠤⠤🏂`,
    `⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤⠤⠤🌲🏂⠤`,
    `⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤⠤⠤🏂⠤⠤`,
    `⠤⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤🏂🌲⠤`,
    `🌲⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲🏂⠤⠤🌲`,
    `⠤🌲⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤`,
    `⠤⠤🌲⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤🏂🌲⠤⠤⠤⠤`,
    `⠤⠤⠤🌲⠤⠤🌲⠤⠤⠤⠤⠤⠤🏂⠤⠤🌲⠤⠤⠤`,
    `⠤⠤⠤⠤🌲⠤⠤🌲⠤⠤⠤⠤🏂⠤⠤⠤⠤🌲⠤⠤`,
    `⠤⠤⠤⠤⠤🌲⠤⠤🌲⠤⠤🏂⠤⠤⠤⠤⠤⠤🌲⠤`,
    `⠤⠤⠤⠤⠤⠤🌲⠤⠤🌲🏂⠤⠤⠤⠤⠤⠤⠤⠤🌲`,
    `⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤🏂⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤`,
    `⠤⠤⠤⠤⠤⠤⠤⠤🌲🏂🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤`,
    `⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤`,
    `⠤⠤⠤⠤⠤⠤⠤⠤🏂🌲⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤`,
    `⠤⠤⠤⠤⠤⠤⠤🏂⠤⠤🌲⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤`,
    `🌲⠤⠤⠤⠤🏂⠤⠤⠤⠤🌲⠤⠤🌲⠤⠤⠤⠤⠤⠤`,
    `⠤🌲⠤⠤🏂⠤⠤⠤⠤⠤⠤🌲⠤⠤🌲⠤⠤⠤⠤⠤`,
    `⠤⠤🌲🏂⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤🌲⠤⠤⠤⠤`,
    `⠤⠤⠤🏂⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤🌲⠤⠤⠤`,
    `⠤⠤🏂🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤🌲⠤⠤`,
    `⠤🏂⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤🌲⠤`,
    `🌲⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤🌲`,
    `⠤🌲⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤⠤`,
    `⠤⠤🌲⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤`,
    `⠤⠤⠤🌲⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤`,
    `⠤⠤⠤⠤🌲⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲`,
    `⠤⠤⠤⠤⠤🌲⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤`,
    `⠤⠤⠤⠤⠤⠤🌲⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤`,
    `⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤`,
    `⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤`,
    `⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤`,
    `⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤⠤`
]

portfolio.generateGreeting = (greetingsArray) => {
    let randomGreeting = greetingsArray[Math.floor(Math.random() * greetingsArray.length)]

    $(`textarea`).attr(`placeholder`, `${randomGreeting} James, `)
    $(`form p a`).attr(`href`, `mailto:james@jameslewis.io?Subject=${randomGreeting}%20James`)
}

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

portfolio.onSkiCode = (callback) => {
    if ($body.hasClass(`nightTime`) === true) {
        document.addEventListener(`keydown`, function (e) {
            skiInput += (`` + e.keyCode)
            if (skiInput === skiKey) {
                return callback()
            } else if (!skiKey.indexOf(skiInput)) {
                return
            } else {
                skiInput = (`` + e.keyCode)
            }
        })
    } else {
        return
    }
}


portfolio.skiEmojiTime = () => {
    skiEmojiTimeLoop = () => {
        location.hash = skiArray[Math.floor((Date.now() / 120) % skiArray.length)]
    
        setTimeout(portfolio.skiEmojiTime, 50)
    }
    skiEmojiTimeLoop()
}

portfolio.SmoothScroll = () => {
    $(`.scrollToProjects`).on(`click`, function () {
        $htmlBody.animate({
            scrollTop: $(`#projects`).offset().top
        }, 250, `linear`)
    })

    $(`.scrollToSkills`).on(`click`, function () {
        $htmlBody.animate({
            scrollTop: $(`#skills`).offset().top
        }, 0, `linear`)
    })
}


portfolio.LightToggle = () => {
    $(`.checkbox`).on(`click`, function(){
        $body.toggleClass(`nightTime`)

        if ($body.hasClass(`nightTime`) === true) {
            $jamesCameraRollImg.attr(`src`, `./assets/jamesCouchNight.png`)
        } else {
            $jamesCameraRollImg.attr(`src`, `./assets/jamesCouch.png`)
        }
        
        portfolio.onSkiCode(function () {
            portfolio.skiEmojiTime()
        })
    })
}

portfolio.conditionalFadeRight = () => {
    if ($(window).width() < 940) {
        $(`div.projectTwo`).attr(`data-aos`, `fade-right`)
    }
}

    
portfolio.init = () => {
    AOS.init()
    portfolio.conditionalFadeRight()
    portfolio.generateGreeting(greetingsArray)
    portfolio.SmoothScroll()
    portfolio.LightToggle()
    portfolio.onKonamiCode(function() {
        $headshot.addClass(`cursorPointer`)
        $(`.headshot.cursorPointer`).on(`click`, function() {
            portfolio.funEmojiTime()
        })
    })
}

$(function() {
    portfolio.init()
})