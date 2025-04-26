let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let winner = document.getElementById("who-wins")

let homeScoreCount = 0
let guestScoreCount = 0
let wins = false

homeScore.innerText = homeScoreCount
guestScore.innerText = guestScoreCount

function color(){
    if (homeScoreCount > guestScoreCount) {
        homeScore.style.color = "green"
        guestScore.style.color = "red"
    }
    else if (homeScoreCount < guestScoreCount){
        guestScore.style.color = "green"
        homeScore.style.color = "red"
    }
    else{
        guestScore.style.color = "#F94F6D"
        homeScore.style.color = "#F94F6D"
    }
    whoWins()
}

function incrementOneHome(){
    if(!wins){
        homeScoreCount += 1
        homeScore.innerText = homeScoreCount
        color()
    }
}

function incrementOneGuest(){
    if(!wins){
    guestScoreCount += 1
    guestScore.innerText = guestScoreCount
    color()
    }
}

function incrementTwoHome(){
    if(!wins){
    homeScoreCount += 2
    homeScore.innerText = homeScoreCount
    color()
    }
}

function incrementTwoGuest(){
    if(!wins){
    guestScoreCount += 2
    guestScore.innerText = guestScoreCount
    color()
    }
}

function incrementThreeHome(){
    if(!wins){
    homeScoreCount += 3
    homeScore.innerText = homeScoreCount
    color()
    }
}

function incrementThreeGuest(){
    if(!wins){
    guestScoreCount += 3
    guestScore.innerText = guestScoreCount
    color()
    }
}

function resetScore(){
    homeScoreCount = 0
    guestScoreCount = 0
    homeScore.innerText = homeScoreCount
    guestScore.innerText = guestScoreCount
    color()
    wins = false
}

function whoWins(){
    if (homeScoreCount > 25 || guestScoreCount > 25) {
        if (homeScoreCount > guestScoreCount + 1) {
            winner.innerText = "Home"
            winner.style.display = 'block'
            celeb()
            wins = !wins
        } else if(homeScoreCount + 1 < guestScoreCount) {
            winner.innerText = "Guest"
            winner.style.display = 'block'
            celeb()
            wins = !wins
        }
    }
}

function celeb(){
    var duration = 30 * 1000;
    var end = Date.now() + duration;

    (function frame() {
    confetti({
        particleCount: 7,
        angle: 60,
        spread: 100,
        origin: { x: 0 }
    });
    confetti({
        particleCount: 7,
        angle: 120,
        spread: 100,
        origin: { x: 1 }
    });
    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }
    }());
}