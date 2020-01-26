$(function() {

    let myInterests = ['🐱', '🏀', '🎸', '🌺', '🍺', '💻'];
    let greetingsArray = ["Hello", "Dearest", "Hi", "Hey", "Greetings"];
    let userInput = '';
    let konamiKey = '38384040373937396665';

    loopGreetings = (greetingsArray) => {
        randomGreeting = greetingsArray[Math.floor(Math.random() * greetingsArray.length)];

        $('textarea').attr("placeholder", `${randomGreeting} James, `);
    };

    loopGreetings(greetingsArray);

    onKonamiCode = callback => {
        document.addEventListener('keydown', function(e) {
            userInput += ("" + e.keyCode);
            if (userInput === konamiKey) {
                return callback();
            } else if (!konamiKey.indexOf(userInput)) {
                return 
            } else {
                userInput = ("" + e.keyCode);
            };
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

            $('h1').html(`I enjoy: ${randomEmoji}`)
            history.replaceState({ page: 1 }, "title 1", `?${randomEmoji}`);
            history.go(1);
            
            setTimeout(commenceLoop, 50);
        };
        commenceLoop();
    };

    $('.scrollDownButton').on("click", function(){
        $(`html,body`).animate({
            scrollTop: $(`#projects`).offset().top
        }, 300, `linear`);
    });

    // 
    // $('.toGrid').on("click", function(){
    //     $('.headerContent').css("display", "grid");
    // });

    // $('.toFlexbox').on("click", function () {
    //     $('header, .headerContent').css("display", "flex");
    // });

    // $('.toFloat').on("click", function() {
    //     $('.headerContent').css("display", "block");
    //     $('header img').css("float", "left");
    //     $('header section').css("float", "right");
    // });

    // $('.toGrid, .toFloat').on("click", function(){
    //     $('header').css("display", "block");
    // });
});