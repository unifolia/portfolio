const portfolio = {
    myInterests: ["🐱", "🏀", "🎸", "🌺", "🍺", "💻", "📚"],
    myEmail: "james@jameslewis.io",
    // type 'remy!' on page to activate emoji sequence
    activatorKey: "826977891649",
    emojiActivatorSettings: {
        loopType: "frame",
        loopSpeed: 50,
        loopSequences: 5,
    },
};

const body = document.body;
const h1 = document.querySelector("h1");
const headshot = document.querySelector(".headshot");
const skills = [...document.querySelectorAll(".skills i")];
const jamesOnCouch = document.querySelector(".jamesIllustration img");
const textarea = document.querySelector("textarea");
const formAnchor = document.querySelector("form p a");

let userInput;
const emojiArray = [
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤",
    "🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤⠤⠤🍣⠤⠤🐱",
    "⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤⠤⠤🍣🐱⠤",
    "⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤⠤⠤🐱⠤⠤",
    "⠤⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤🐱🍣⠤",
    "🍣⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣🐱⠤⠤🍣",
    "⠤🍣⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🐱⠤⠤⠤⠤⠤",
    "⠤⠤🍣⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤🐱🍣⠤⠤⠤⠤",
    "⠤⠤⠤🍣⠤⠤🍣⠤⠤⠤⠤⠤⠤🐱⠤⠤🍣⠤⠤⠤",
    "⠤⠤⠤⠤🍣⠤⠤🍣⠤⠤⠤⠤🐱⠤⠤⠤⠤🍣⠤⠤",
    "⠤⠤⠤⠤⠤🍣⠤⠤🍣⠤⠤🐱⠤⠤⠤⠤⠤⠤🍣⠤",
    "⠤⠤⠤⠤⠤⠤🍣⠤⠤🍣🐱⠤⠤⠤⠤⠤⠤⠤⠤🍣",
    "⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤🐱⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤🍣🐱🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤🐱⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤🐱🍣⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤🐱⠤⠤🍣⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤",
    "🍣⠤⠤⠤⠤🐱⠤⠤⠤⠤🍣⠤⠤🍣⠤⠤⠤⠤⠤⠤",
    "⠤🍣⠤⠤🐱⠤⠤⠤⠤⠤⠤🍣⠤⠤🍣⠤⠤⠤⠤⠤",
    "⠤⠤🍣🐱⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤🍣⠤⠤⠤⠤",
    "⠤⠤⠤🐱⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤🍣⠤⠤⠤",
    "⠤⠤🐱🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤🍣⠤⠤",
    "⠤🐱⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤🍣⠤",
    "🐱⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤🍣",
    "⠤🍣⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤⠤",
    "⠤⠤🍣⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤",
    "⠤⠤⠤🍣⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤",
    "⠤⠤⠤⠤🍣⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣",
    "⠤⠤⠤⠤⠤🍣⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤🍣⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤⠤⠤",
    "⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤🍣⠤⠤⠤⠤🍣⠤⠤⠤⠤⠤⠤",
];

const greetingsArray = [
    "Hello",
    "Hi",
    "Hey",
    "Greetings",
    "G'day",
    "Salutations",
    "Howdy-do",
    "Good morrow",
];

portfolio.generateGreeting = () => {
    const randomGreeting =
        greetingsArray[Math.floor(Math.random() * greetingsArray.length)];

    textarea.placeholder = `${randomGreeting}, James... `;
    formAnchor.href = `mailto:${portfolio.myEmail}?Subject=${randomGreeting},%20James...`;
};

portfolio.onHeadshotClick = () => {
    headshot.addEventListener("click", () => {
        headshot.classList.toggle("headshotClicked");
        portfolio.headerEmojiLoop();
    });
};

portfolio.headerEmojiLoop = () => {
    setInterval(() => {
        const randomEmoji =
            portfolio.myInterests[
                Math.floor((Date.now() / 400) % portfolio.myInterests.length)
            ];

        if (headshot.classList.contains("headshotClicked")) {
            h1.ariaHidden = true;
            h1.innerHTML = `I enjoy: <span>${randomEmoji}</span>`;
        } else {
            h1.ariaHidden = false;
            h1.innerHTML = `James Lewis`;
        }
    }, 100);
};

portfolio.emojiTime = ({
    loopType,
    loopSpeed,
    loopSequences,
    logger = true,
}) => {
    const loopDuration =
        loopType === "frame" ? loopSpeed * emojiArray.length : loopSpeed;

    logger && console.log(loopType, loopSpeed, loopSequences, loopDuration);

    const loopTypeHandlers = {
        frameHandler: async (i) => {
            await new Promise((res) => setTimeout(res, loopSpeed));
            location.hash = emojiArray[i];
        },
        shiftHandler: () => {
            location.hash = emojiArray.join("");
            emojiArray.push(emojiArray.shift());
        },
    };
    const emojiLooper = setInterval(async () => {
        const { frameHandler, shiftHandler } = loopTypeHandlers;
        if (loopType === "frame") {
            for (let i = 0; i < emojiArray.length; i++) {
                await frameHandler(i);
            }
        } else {
            shiftHandler();
        }
    }, loopDuration);
    setTimeout(() => {
        clearInterval(emojiLooper);
    }, loopDuration * loopSequences);
};

// keyCode deprecated - to fix
portfolio.onSecretKey = (emojiActivator) => {
    document.addEventListener("keydown", (event) => {
        userInput += "" + event.keyCode;
        if (userInput === portfolio.activatorKey) {
            emojiActivator();
        } else if (!portfolio.activatorKey.indexOf(userInput)) {
            return;
        } else {
            userInput = "" + event.keyCode;
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
    AOS.init();
    portfolio.console(event);

    portfolio.skillHighlight();
    portfolio.lightToggle();
    portfolio.onHeadshotClick();
    portfolio.generateGreeting();
    portfolio.onSecretKey(() => {
        portfolio.emojiTime(portfolio.emojiActivatorSettings);
    });
});
