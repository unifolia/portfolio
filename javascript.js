$(function() {

    let myInterests = ['🐱', '🏀', '🎸', '🌺', '🍺', '💻'];
    let userInput = '';
    let konamiKey = '38384040373937396665';

    onKonamiCode = callback => {
        document.addEventListener('keydown', function(e) {
            userInput += ("" + e.keyCode);
            if (userInput === konamiKey) {
                return callback();
            } else if (!konamiKey.indexOf(userInput)) {
                return 
            } userInput = ("" + e.keyCode);
        });
    };

    onKonamiCode(function() {
        $('.headshot').addClass("cursorPointer");
        $('.headshot').on("click", function() {
            funEmojiTime();
        });
    });

    funEmojiTime = () => {
        $('.headshot').removeClass("cursorPointer");
        commenceLoop = () => {
            randomEmoji = myInterests[Math.floor((Date.now() / 400) % myInterests.length)];

            // Hey, recruiter/future boss/curious person! randomEmoji can be replaced with location.hash here. This moves the cycling emojis to the URL! This is very fun but has its own issues - namely that it refreshes the page every time move and loop through the array. Try it out anyway! JavaScript's History API can be used as well but I haven't figured it out... yet!!!

            $('h1').html(randomEmoji)

            setTimeout(commenceLoop, 50);
        }
        commenceLoop();
    };

    // 
    $('.toGrid').on("click", function(){
        $('header').css("display", "block");
        $('.headerContent').css("display", "grid");
    });

    $('.toFlexbox').on("click", function () {
        $('header').css("display", "flex");
        $('.headerContent').css("display", "flex");
    });

    $('.toFloat').on("click", function() {
        $('header').css("display", "block");
        $('.headerContent').css("display", "block");
        $('header img').css("float", "left");
        $('header section').css("float", "right");
    });
});