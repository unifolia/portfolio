const portfolio = {}

let userInput = ''
let skiInput = ''
let konamiKey = '38384040373937396665'
let skiKey = '766984837179837573737871'
let greetingsArray = ["Hello", "Dearest", "Hi", "Hey", "Greetings", "Good day", "Salutations"]
let myInterests = ['🐱', '🏀', '🎸', '🌺', '🍺', '💻']
let skiArray = [
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤",
    "🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤⠤⠤🌲⠤⠤🏂",
    "⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤⠤⠤🌲🏂⠤",
    "⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤⠤⠤🏂⠤⠤",
    "⠤⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤🏂🌲⠤",
    "🌲⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲🏂⠤⠤🌲",
    "⠤🌲⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤",
    "⠤⠤🌲⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤🏂🌲⠤⠤⠤⠤",
    "⠤⠤⠤🌲⠤⠤🌲⠤⠤⠤⠤⠤⠤🏂⠤⠤🌲⠤⠤⠤",
    "⠤⠤⠤⠤🌲⠤⠤🌲⠤⠤⠤⠤🏂⠤⠤⠤⠤🌲⠤⠤",
    "⠤⠤⠤⠤⠤🌲⠤⠤🌲⠤⠤🏂⠤⠤⠤⠤⠤⠤🌲⠤",
    "⠤⠤⠤⠤⠤⠤🌲⠤⠤🌲🏂⠤⠤⠤⠤⠤⠤⠤⠤🌲",
    "⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤🏂⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤🌲🏂🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤🏂🌲⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤🏂⠤⠤🌲⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤",
    "🌲⠤⠤⠤⠤🏂⠤⠤⠤⠤🌲⠤⠤🌲⠤⠤⠤⠤⠤⠤",
    "⠤🌲⠤⠤🏂⠤⠤⠤⠤⠤⠤🌲⠤⠤🌲⠤⠤⠤⠤⠤",
    "⠤⠤🌲🏂⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤🌲⠤⠤⠤⠤",
    "⠤⠤⠤🏂⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤🌲⠤⠤⠤",
    "⠤⠤🏂🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤🌲⠤⠤",
    "⠤🏂⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤🌲⠤",
    "🌲⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤🌲",
    "⠤🌲⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤⠤",
    "⠤⠤🌲⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤",
    "⠤⠤⠤🌲⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤",
    "⠤⠤⠤⠤🌲⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲",
    "⠤⠤⠤⠤⠤🌲⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤🌲⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🌲⠤⠤⠤⠤🌲⠤⠤⠤⠤⠤⠤"
]

portfolio.loopGreetings = (greetingsArray) => {
    randomGreeting = greetingsArray[Math.floor(Math.random() * greetingsArray.length)]

    $('textarea').attr("placeholder", `${randomGreeting} James, `)
}

portfolio.onKonamiCode = (callback) => {
    document.addEventListener('keydown', function(e) {
        userInput += ("" + e.keyCode)
        if (userInput === konamiKey) {
            return callback();
        } else if (!konamiKey.indexOf(userInput)) {
            return 
        } else {
            userInput = ("" + e.keyCode)
        }
    })
}


portfolio.funEmojiTime = () => {
    $('.headshot').removeClass("cursorPointer");
    commenceLoop = () => {
        let randomEmoji = myInterests[Math.floor((Date.now() / 400) % myInterests.length)]

        $('h1').html(`I enjoy: ${randomEmoji}`)
        
        setTimeout(commenceLoop, 50);
    }
    commenceLoop()
}

portfolio.onSkiCode = (callback) => {
    document.addEventListener('keydown', function (e) {
        skiInput += ("" + e.keyCode)
        if (skiInput === skiKey) {
            return callback();
        } else if (!skiKey.indexOf(skiInput)) {
            return
        } else {
            skiInput = ("" + e.keyCode)
        }
    })
}


portfolio.skiEmojiTime = () => {
    skiEmojiTimeLoop = () => {
        location.hash = skiArray[Math.floor((Date.now() / 120) % skiArray.length)]
    
        setTimeout(portfolio.skiEmojiTime, 50);
    }
    skiEmojiTimeLoop()
}

portfolio.SmoothScroll = () => {
    $('.scrollToProjects').on("click", function () {
        $(`html,body`).animate({
            scrollTop: $(`#projects`).offset().top
        }, 250, `linear`)
    })

    $('.scrollToSkills').on("click", function () {
        $(`html,body`).animate({
            scrollTop: $(`#skills`).offset().top
        }, 0, `linear`)
    })
}


portfolio.LightToggle = () => {
    $('.checkbox').on("click", function(){
        $('body').toggleClass("lightsOut")
        if ($('body').hasClass("lightsOut") === true) {
            $('.jamesCameraRoll img').attr("src", "./assets/jamesCouchNight.png")

            portfolio.onSkiCode(function () {
                portfolio.skiEmojiTime()
            })
        } else {
            $('.jamesCameraRoll img').attr("src", "./assets/jamesCouch.png")
        }
    })
}

portfolio.conditionalFadeRight = () => {
    if ($(window).width() < 940) {
        $('div.projectTwo').attr("data-aos", "fade-right")
    }
}

    
portfolio.init = () => {
    portfolio.conditionalFadeRight()
    portfolio.loopGreetings(greetingsArray)
    AOS.init()
    portfolio.SmoothScroll()
    portfolio.LightToggle()
    portfolio.onKonamiCode(function() {
        $('.headshot').addClass("cursorPointer");
        $('.headshot.cursorPointer').on("click", function() {
            portfolio.funEmojiTime()
        })
    })
}

$(function() {
    portfolio.init()
})