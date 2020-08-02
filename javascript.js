const portfolio = {}

let $body = $("body")
let $h1 = $("h1")
let $headshot = $(".headshot")
let $htmlBody = $("html,body")
let $jamesCameraRollImg = $(".jamesCameraRoll img")

let greetingsArray = ["Hello", "Dearest", "Hi", "Hey", "Greetings", "Good day", "Salutations", "Howdy"]
let myInterests = ["🐱", "🏀", "🎸", "🌺", "🍺", "💻", "📚"]

let userInput;
let rembrandtKey = "826977891649" // type "remy!" anywhere :)
let rembrandtArray = [
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤",
    "🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤⠤⠤🍣⠤⠤🐱",
    "⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤⠤⠤🍣🐱⠤",
    "⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤⠤⠤🐱⠤⠤",
    "⠤⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤🐱🍣⠤",
    "🍣⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣🐱⠤⠤🍣",
    "⠤🍣⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤",
    "⠤⠤🍣⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤🐱🍣⠤⠤⠤⠤",
    "⠤⠤⠤🍣⠤⠤🍣⠤⠤⠤⠤⠤⠤🐱⠤⠤🍣⠤⠤⠤",
    "⠤⠤⠤⠤🍣⠤⠤🍣⠤⠤⠤⠤🐱⠤⠤⠤⠤🍣⠤⠤",
    "⠤⠤⠤⠤⠤🍣⠤⠤🍣⠤⠤🐱⠤⠤⠤⠤⠤⠤🍣⠤",
    "⠤⠤⠤⠤⠤⠤🍣⠤⠤🍣🐱⠤⠤⠤⠤⠤⠤⠤⠤🍣",
    "⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤🐱⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤🍣🐱🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤🐱🍣⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤🐱⠤⠤🍣⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤",
    "🍣⠤⠤⠤⠤🐱⠤⠤⠤⠤🍣⠤⠤🍣⠤⠤⠤⠤⠤⠤",
    "⠤🍣⠤⠤🐱⠤⠤⠤⠤⠤⠤🍣⠤⠤🍣⠤⠤⠤⠤⠤",
    "⠤⠤🍣🐱⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤🍣⠤⠤⠤⠤",
    "⠤⠤⠤🐱⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤🍣⠤⠤⠤",
    "⠤⠤🐱🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤🍣⠤⠤",
    "⠤🐱⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤🍣⠤",
    "🍣⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤🍣",
    "⠤🍣⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤⠤",
    "⠤⠤🍣⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤",
    "⠤⠤⠤🍣⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤",
    "⠤⠤⠤⠤🍣⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣",
    "⠤⠤⠤⠤⠤🍣⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤🍣⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤⠤"
]

portfolio.generateGreeting = () => {
    let randomGreeting = greetingsArray[Math.floor(Math.random() * greetingsArray.length)]

    $("textarea").attr("placeholder", `${randomGreeting} James, `)
    $("form p a").attr("href", `mailto:james@jameslewis.io?Subject=${randomGreeting}%20James`)
}

portfolio.onHeadshotClick = () => {
    $headshot.on("click", () => {
        $headshot.toggleClass("headshotClicked")  
        portfolio.headerEmojiLoop()
    })
}

portfolio.headerEmojiLoop = () => {
    (runEmojiLoop = () => {
        if ($headshot.hasClass("headshotClicked")) {
            let randomEmoji = myInterests[Math.floor((Date.now() / 400) % myInterests.length)]

            $h1.attr("aria-hidden", "true")
                .html(`I enjoy: <span>${randomEmoji}</span>`)

            setTimeout(runEmojiLoop, 50)
        } else {
            $h1.attr("aria-hidden", "false")
                .html("James Lewis")
        }
    })()
}

portfolio.onRembrandtCode = callback => {
    document.addEventListener("keydown", event => {
        userInput += ("" + event.keyCode)
        if (userInput === rembrandtKey) {
            return callback()
        } else if (!rembrandtKey.indexOf(userInput)) {
            return
        } else {
            userInput = ("" + event.keyCode)
        }
    })
}


portfolio.rembrandtEmojiTime = () => {
    (rembrandtEmojiLoop = () => {
        location.hash = rembrandtArray[Math.floor((Date.now() / 120) % rembrandtArray.length)]
    
        setTimeout(rembrandtEmojiLoop, 50)
    })()
}

portfolio.SmoothScroll = () => {
    $(".scrollToProjects").on("click", () => {
        $htmlBody.animate({
            scrollTop: $("#projects").offset().top
        }, 250, "linear")
    })

    $(".scrollToSkills").on("click", () => {
        $htmlBody.animate({
            scrollTop: $("#skills").offset().top
        }, 0, "linear")
    })
}

portfolio.skillHighlight = () => {
    $(".skills li").hover(function () {
        if (!$body.hasClass("nightTime")) {
            $("i", this).toggleClass("colored")
        }
    })
}

portfolio.LightToggle = () => {
    $(".checkbox").on("click", () => {
        $body.toggleClass("nightTime")
        $(".skills i").toggleClass("colored")

        if ($body.hasClass("nightTime") === true) {
            $jamesCameraRollImg.attr("src", "./assets/jamesCouchNight.png")
        } else {
            $jamesCameraRollImg.attr("src", "./assets/jamesCouch.png")
        }
    })
}
    
portfolio.init = () => {
    AOS.init()
    portfolio.generateGreeting()
    portfolio.SmoothScroll()
    portfolio.skillHighlight()
    portfolio.LightToggle()
    portfolio.onHeadshotClick()
    portfolio.onRembrandtCode(() => {
        portfolio.rembrandtEmojiTime()
    })
}

$(() => {
    portfolio.init()
})
