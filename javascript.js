const portfolio = {};

const greetingsArray = ["Hello", "Hi", "Hey", "Greetings", "G'day", "Salutations", "Howdy-do", "Good morrow", "What's crackin'", "Whassup"];
const myInterests = ["🐱", "🏀", "🎸", "🌺", "🍺", "💻", "📚"];

const rembrandtKey = "826977891649"; // type "remy!" anywhere :)
const rembrandtArray = [
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
];

let userInput;
let $body = $("body");
let $h1 = $("h1");
let $headshot = $(".headshot");
let $htmlBody = $("html,body");
let $jamesCameraRollImg = $(".jamesIllustration img");

portfolio.generateGreeting = () => {
    let randomGreeting = greetingsArray[Math.floor(Math.random() * greetingsArray.length)];

    $("textarea").attr("placeholder", `${randomGreeting}, James... `);
    $("form p a").attr("href", `mailto:james@jameslewis.io?Subject=${randomGreeting},%20James...`);
};

portfolio.onHeadshotClick = () => {
    $headshot.on("click", () => {
        $headshot.toggleClass("headshotClicked");
        portfolio.headerEmojiLoop();
    });
};

portfolio.headerEmojiLoop = () => {
    (runEmojiLoop = () => {
        if ($headshot.hasClass("headshotClicked")) {
            let randomEmoji = myInterests[Math.floor((Date.now() / 400) % myInterests.length)];

            $h1.attr("aria-hidden", "true")
                .html(`I enjoy: <span>${randomEmoji}</span>`);

            setTimeout(runEmojiLoop, 50);
        } else {
            $h1.attr("aria-hidden", "false")
                .html("James Lewis");
        };
    })();
};

portfolio.onRembrandtCode = callback => {
    document.addEventListener("keydown", event => {
        userInput += ("" + event.keyCode);
        if (userInput === rembrandtKey) {
            return callback();
        } else if (!rembrandtKey.indexOf(userInput)) {
            return
        } else {
            userInput = ("" + event.keyCode);
        };
    });
};


portfolio.rembrandtEmojiTime = () => {
    (rembrandtEmojiLoop = () => {
        location.hash = rembrandtArray[Math.floor((Date.now() / 120) % rembrandtArray.length)];
    
        setTimeout(rembrandtEmojiLoop, 50);
    })();
};

portfolio.SmoothScroll = () => {
    $(".scrollToProjects").on("click", () => {
        $htmlBody.animate({
            scrollTop: $("#projects").offset().top
        }, 250, "linear");
    });

    $(".scrollToSkills").on("click", () => {
        $htmlBody.animate({
            scrollTop: $("#skills").offset().top
        }, 0, "linear");
    });
};

portfolio.skillHighlight = () => {
    $(".skills li").hover(function () {
        if (!$body.hasClass("nightTime")) {
            $("i", this).toggleClass("colored");
        };
    });
};

portfolio.LightToggle = () => {
    $(".checkbox").on("click", () => {
        $body.toggleClass("nightTime");
        $(".skills i").toggleClass("colored");

        $jamesCameraRollImg.attr("src", ($body.hasClass("nightTime") ?
            "./assets/jamesCouchNight.png" : "./assets/jamesCouch.png"));
        
        console.clear();
        portfolio.console();
    });
};

portfolio.console = () => {
    let isItNight = $body.hasClass("nightTime");
    let emoji = isItNight  ? "🧛🏼‍♂️" : "🥳";
    let color = isItNight ? " #e9d8c4" : " #1d1d1d";
    let bg = isItNight  ? "#1d1d1d" : "#faf3ed";
    let emojiShadow = isItNight ? "#a57589" : "#87a3ca";

    console.log(
        `%cWelcome! %c${emoji}`, 
        // First style
        `font-family: 'PT Sans', sans-serif;
        font-size: 24px; font-weight: 600; 
        text-shadow: 3px 3px 1px #9cb89480; 
        text-align: center; 
        display: block; 
        color: ${color}; background: ${bg}; 
        padding: 75px 0 50px 0; 
        border-radius: 75px 75px 0 0`, 
        // Second style
        `font-size: 50px; 
        text-shadow: 3px 3px 1px ${emojiShadow}; text-align: center;  
        display: block; 
        color: ${color}; background: ${bg}; 
        padding: 0 5px 100px 0; 
        border-radius: 0 0 75px 75px;`
    );
};

portfolio.init = () => {
    AOS.init();
    portfolio.generateGreeting();
    portfolio.SmoothScroll();
    portfolio.skillHighlight();
    portfolio.LightToggle();
    portfolio.onHeadshotClick();
    portfolio.onRembrandtCode(() => {
        portfolio.rembrandtEmojiTime();
    });
    portfolio.console();
};

$(() => {
    portfolio.init();
});
