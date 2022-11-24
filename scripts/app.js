"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let userInput = "";
const activatorKey = "about";
const myInterests = ["🐱", "🏀", "🎸", "🌺", "🍺", "💻", "📚"];
const myEmail = "james@jameslewis.io"; // say hi!
const body = document.body;
const h1 = document.querySelector("h1");
const headshot = document.querySelector(".headshot");
const jamesOnCouch = document.querySelector(".jamesIllustration img");
const textarea = document.querySelector("textarea");
const formAnchor = document.querySelector("form p a");
const skills = [...document.querySelectorAll(".skills i")];
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
const generateGreeting = () => {
    const randomGreeting = greetingsArray[Math.floor(Math.random() * greetingsArray.length)];
    textarea.placeholder = `${randomGreeting}, James... `;
    formAnchor.href = `mailto:${myEmail}?Subject=${randomGreeting},%20James...`;
};
const headerEmojiLoop = () => {
    setInterval(() => {
        const randomEmoji = myInterests[Math.floor((Date.now() / 400) % myInterests.length)];
        if (headshot.classList.contains("headshotClicked") && h1) {
            h1.ariaHidden = "true";
            h1.innerHTML = `I enjoy: <span>${randomEmoji}</span>`;
        }
        else {
            h1.ariaHidden = "false";
            h1.innerHTML = `James Lewis`;
        }
    }, 100);
};
const onHeadshotClick = () => {
    headshot.addEventListener("click", () => {
        headshot.classList.toggle("headshotClicked");
        headerEmojiLoop();
    });
};
const emojiTime = ({ isFrame, loopSpeed, loopSequences }) => {
    const funcArray = [...emojiArray];
    const emojiLooper = () => __awaiter(void 0, void 0, void 0, function* () {
        if (isFrame) {
            for (let i = 0; i < funcArray.length; i++) {
                yield new Promise((res) => setTimeout(res, loopSpeed));
                location.hash = funcArray[i];
            }
            location.hash = "";
        }
        else {
            location.hash = funcArray.join("");
            funcArray.push(funcArray.shift());
        }
    });
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
const onSecretKey = (emojiActivator) => {
    document.addEventListener("keydown", (event) => {
        userInput += event.key;
        if (userInput === activatorKey) {
            emojiActivator();
        }
        else if (!activatorKey.indexOf(userInput)) {
            return;
        }
        else {
            userInput = "" + event.key;
        }
    });
};
const skillHighlight = () => {
    [...document.querySelectorAll(".scrollToSkills a")].forEach((anchor) => {
        const target = anchor;
        target.href = "#skills";
        target.ariaLabel = "Scroll to skills section";
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
const consoleFunc = (loadEvent) => {
    const isNight = body.classList.contains("nightTime");
    const emoji = isNight ? "🧛🏼‍♂️" : "🥳";
    const color = isNight ? " #e9d8c4" : " #1d1d1d";
    const bg = isNight ? "#1d1d1d" : "#faf3ed";
    const emojiShadow = isNight ? "#a57589" : "#87a3ca";
    const loadTimeConsole = () => {
        var _a;
        console.log(`%c\n\nDOM loaded in ${(_a = loadEvent.timeStamp) === null || _a === void 0 ? void 0 : _a.toFixed(2)}ms!\n\n`, 
        // styling
        `font-family: 'PT Sans', sans-serif;
            font-size: 24px; font-weight: 600;
            text-shadow: 3px 3px 1px #9cb89480;
            text-align: center;
            display: block;
            color: ${color}; background: ${bg};`);
    };
    loadEvent && loadTimeConsole();
    console.log(`%c\n\n${emoji} welcome!\n\n`, 
    // styling
    `font-size: 50px;
        text-shadow: 3px 3px 1px ${emojiShadow}; 
        text-align: center;
        display: block;
        color: ${color}; background: ${bg}; 
        `);
    console.log("Hello! You're looking at the console - so you're probably a dev.", "There isn't TOO much going on here... but there is SOME stuff going on.", "Type 'about' anywhere (but not here) if you want some fun");
};
const lightToggle = () => {
    var _a;
    (_a = document.querySelector(".checkbox")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        body.classList.toggle("nightTime");
        skills.forEach((skill) => skill.classList.toggle("colored"));
        if (jamesOnCouch) {
            jamesOnCouch.src = body.classList.contains("nightTime")
                ? "./assets/jamesCouchNight.png"
                : "./assets/jamesCouch.png";
        }
        console.clear();
        consoleFunc({});
    });
};
document.addEventListener("DOMContentLoaded", (event) => {
    consoleFunc(event);
    skillHighlight();
    lightToggle();
    onHeadshotClick();
    generateGreeting();
    onSecretKey(() => {
        emojiTime({
            isFrame: true,
            loopSpeed: 212,
            loopSequences: 1,
        });
    });
});
