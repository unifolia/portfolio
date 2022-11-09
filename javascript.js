const portfolio = {
    myInterests: ["🐱", "🏀", "🎸", "🌺", "🍺", "💻", "📚"],
    myEmail: "james@jameslewis.io",
    greetingsArray: [
        "Hello",
        "Hi",
        "Hey",
        "Greetings",
        "G'day",
        "Salutations",
        "Howdy-do",
        "Good morrow",
    ],

    activatorKey: "about",
    emojiActivatorSettings: {
        isFrame: true,
        loopSpeed: 212,
        loopSequences: 1,
    },
};

const body = document.body;
const h1 = document.querySelector("h1");
const headshot = document.querySelector(".headshot");
const skills = [...document.querySelectorAll(".skills i")];
const jamesOnCouch = document.querySelector(".jamesIllustration img");
const textarea = document.querySelector("textarea");
const formAnchor = document.querySelector("form p a");
const emojiArray = [
    "🕛⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤😐⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "🕑⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤😐⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "🕒⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤😐⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "🕓⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤😐⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "🕔⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🤨⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "🕕⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🤨⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "🕖⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🤨⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🐱",
    "🕖⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🤨⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🐱⠤",
    "🕖⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤😯⠤⠤⠤⠤⠤⠤⠤⠤⠤🐱⠤⠤",
    "🕖⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤😯⠤⠤⠤⠤⠤⠤⠤⠤🐱⠤⠤⠤",
    "🕖⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤😄⠤⠤⠤⠤⠤⠤⠤🐱⠤⠤⠤⠤",
    "🕖⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤😄⠤⠤⠤⠤⠤⠤🐱⠤⠤⠤⠤⠤",
    "🕖⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤😄⠤⠤⠤⠤⠤🐱⠤⠤⠤⠤⠤⠤",
    "🕖⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🤗⠤⠤⠤⠤🐱⠤⠤⠤⠤⠤⠤⠤",
    "🕖⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🤗⠤⠤⠤🐱⠤⠤⠤⠤⠤⠤⠤⠤",
    "🕖⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🤗⠤⠤🐱⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "🕖⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🤗⠤🐱⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "🕖⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🤗🐱⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "🕖⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🥰🐱⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "🕖⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🥰🐱⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "🏀⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🥰🐱⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🎸",
    "⠤🏀⠤⠤⠤⠤⠤⠤⠤⠤⠤🥰🐱⠤⠤⠤⠤⠤⠤⠤⠤⠤🎸⠤",
    "⠤⠤🏀⠤⠤⠤⠤⠤⠤⠤⠤🥰🐱⠤⠤⠤⠤⠤⠤⠤⠤🎸⠤⠤",
    "⠤⠤⠤🏀⠤⠤⠤⠤⠤⠤⠤🥰🐱⠤⠤⠤⠤⠤⠤⠤🎸⠤⠤⠤",
    "⠤⠤⠤⠤🏀⠤⠤⠤⠤⠤⠤🥰🐱⠤⠤⠤⠤⠤⠤🎸⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤🏀⠤⠤⠤⠤⠤🥰🐱⠤⠤⠤⠤⠤🎸⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤🏀⠤⠤⠤⠤🥰🐱⠤⠤⠤⠤🎸⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤🏀⠤⠤⠤🥰🐱⠤⠤⠤🎸⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤🏀⠤⠤🥰🐱⠤⠤🎸⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤🏀⠤🥰🐱⠤🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🏀🥰🐱🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🏀🥰🐱🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🏀🥰🐱🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤🏀🥰🐱🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤🏀🥰🐱🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤🏀🥰🐱🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤🏀🥰🐱🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤🏀🥰🐱🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤🏀🥰🐱🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤🏀🥰🐱🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤🏀🥰🐱🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤🏀🥰🐱🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "🏀🥰🐱🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "🥰🐱🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "🐱🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "🐱🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "😈🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "😈🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "😈🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "🐱🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤🐱🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤🐱🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤🐱🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🐱🎸⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "🤬⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🐱🎸⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤🤬⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🐱🎸⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤🤬⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🐱🎸⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤🤬⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🐱🎸",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🤬⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🤬⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤😑⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤😑⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤😑⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤😑⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤😑⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤😑⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
];

let userInput = "";

portfolio.generateGreeting = () => {
    const randomGreeting =
        portfolio.greetingsArray[Math.floor(Math.random() * portfolio.greetingsArray.length)];

    textarea.placeholder = `${randomGreeting}, James... `;
    formAnchor.href = `mailto:${portfolio.myEmail}?Subject=${randomGreeting},%20James...`;
};

portfolio.headerEmojiLoop = () => {
    setInterval(() => {
        const randomEmoji =
            portfolio.myInterests[Math.floor((Date.now() / 400) % portfolio.myInterests.length)];

        if (headshot.classList.contains("headshotClicked")) {
            h1.ariaHidden = true;
            h1.innerHTML = `I enjoy: <span>${randomEmoji}</span>`;
        } else {
            h1.ariaHidden = false;
            h1.innerHTML = `James Lewis`;
        }
    }, 100);
};

portfolio.onHeadshotClick = () => {
    headshot.addEventListener("click", () => {
        headshot.classList.toggle("headshotClicked");
        portfolio.headerEmojiLoop();
    });
};

portfolio.emojiTime = ({ isFrame, loopSpeed, loopSequences }) => {
    const funcArray = [...emojiArray];

    const emojiLooper = async () => {
        if (isFrame) {
            for (let i = 0; i < funcArray.length; i++) {
                await new Promise((res) => setTimeout(res, loopSpeed));
                location.hash = funcArray[i];
            }
            location.hash = "";
        } else {
            location.hash = funcArray.join("");
            funcArray.push(funcArray.shift());
        }
    };

    // First loop call is manual
    emojiLooper();

    if (loopSequences > 1) {
        const loopDuration = isFrame ? loopSpeed * funcArray.length : loopSpeed;
        const remainingLoops = isFrame ? loopSequences - 1 : loopSequences;

        // Second/third/etc. calls are managed by setInterval
        const interval = setInterval(emojiLooper, loopDuration);

        setTimeout(() => {
            clearInterval(interval);
            location.hash = "";
        }, loopDuration * remainingLoops);
    }
};

portfolio.onSecretKey = (emojiActivator) => {
    document.addEventListener("keydown", (event) => {
        userInput += event.key;
        if (userInput === portfolio.activatorKey) {
            emojiActivator();
        } else if (!portfolio.activatorKey.indexOf(userInput)) {
            return;
        } else {
            userInput = "" + event.key;
        }
    });
};

portfolio.skillHighlight = () => {
    [...document.querySelectorAll(".scrollToSkills a")].forEach((anchor) => {
        anchor.href = "#skills";
    });

    skills.forEach((skill) => {
        skill.addEventListener("mouseover", () => {
            const isNight = body.classList.contains("nightTime");
            !isNight && skill.classList.toggle("colored");
        });
        skill.addEventListener("mouseleave", () => {
            const isNight = body.classList.contains("nightTime");
            !isNight && skill.classList.remove("colored");
        });
    });
};

portfolio.console = (loadEvent) => {
    const isNight = body.classList.contains("nightTime");
    const emoji = isNight ? "🧛🏼‍♂️" : "🥳";
    const color = isNight ? " #e9d8c4" : " #1d1d1d";
    const bg = isNight ? "#1d1d1d" : "#faf3ed";
    const emojiShadow = isNight ? "#a57589" : "#87a3ca";

    const loadTimeConsole = () => {
        const { timeStamp } = loadEvent;
        console.log(
            `%c\n\nDOM loaded in ${timeStamp.toFixed(2)}ms!\n\n`,
            // styling
            `font-family: 'PT Sans', sans-serif;
            font-size: 24px; font-weight: 600;
            text-shadow: 3px 3px 1px #9cb89480;
            text-align: center;
            display: block;
            color: ${color}; background: ${bg};`
        );
    };

    loadEvent && loadTimeConsole(loadEvent);
    console.log(
        `%c\n\n${emoji} welcome!\n\n`,
        // styling
        `font-size: 50px;
        text-shadow: 3px 3px 1px ${emojiShadow}; 
        text-align: center;
        display: block;
        color: ${color}; background: ${bg}; 
        `
    );

    console.log(
        "Hello! You're looking at the console - so you're probably a dev.",
        "There isn't TOO much going on here... but there is SOME stuff going on.",
        "Type 'about' anywhere (but not here) if you want some fun"
    );
};

portfolio.lightToggle = () => {
    document.querySelector(".checkbox").addEventListener("click", () => {
        body.classList.toggle("nightTime");

        skills.forEach((skill) => skill.classList.toggle("colored"));

        jamesOnCouch.src = body.classList.contains("nightTime")
            ? "./assets/jamesCouchNight.png"
            : "./assets/jamesCouch.png";

        console.clear();
        portfolio.console();
    });
};

document.addEventListener("DOMContentLoaded", (event) => {
    portfolio.console(event);

    portfolio.skillHighlight();
    portfolio.lightToggle();
    portfolio.onHeadshotClick();
    portfolio.generateGreeting();
    portfolio.onSecretKey(() => {
        portfolio.emojiTime(portfolio.emojiActivatorSettings);
    });
});
