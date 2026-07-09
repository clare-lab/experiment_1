function typeText(elementId, text, speed) {
    const element = document.getElementById(elementId);
    element.textContent = "";

    let i = 0;

    const typing = setInterval(function() {
        element.textContent += text[i];
        i++;

        if (i >= text.length) {
            clearInterval(typing);
        }
    }, speed);
}
typeText("introText", "Access Granted.", 80);
function goToScreen(screenId) {
    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    const nextScreen = document.getElementById(screenId);
    nextScreen.classList.add("active");

    if (screenId === "screen6") {
        startLoading();
    }
}
function showWrong() {
    goToScreen("wrongScreen");
    
    setTimeout(function(){
        goToScreen("screen2");
    }, 2000);
}

function revealInkblot() {
    goToScreen("screen3");
}

function startLoading() {
    typeText("loadingText", "measuring height...", 60);

    setTimeout(function() {
        typeText("loadingText", "counting neurons...", 60);
    }, 1800);

    setTimeout(function() {
        typeText("loadingText", "1...", 60);
    }, 4000);

    setTimeout(function() {
        typeText("loadingText", "2...", 60);
    }, 6200);

setTimeout(function() {
        typeText("loadingText", "that's that all you have...?", 60);
    }, 8400);

setTimeout(function() {
        typeText("loadingText", "scanning brain activity", 60);
    }, 10600);

setTimeout(function() {
        typeText("loadingText", "finalising diagnosis...", 60);
    }, 12800);

    setTimeout(function() {
        goToScreen("screen7");
    }, 15000);
}

