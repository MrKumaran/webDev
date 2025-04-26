let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeScoreCount = 0
let guestScoreCount = 0

homeScore.innerText = homeScoreCount
guestScore.innerText = guestScoreCount

function incrementOneHome(){
    homeScoreCount += 1
    homeScore.innerText = homeScoreCount
}

function incrementOneGuest(){
    guestScoreCount += 1
    guestScore.innerText = guestScoreCount
}

function incrementTwoHome(){
    homeScoreCount += 2
    homeScore.innerText = homeScoreCount
}

function incrementTwoGuest(){
    guestScoreCount += 2
    guestScore.innerText = guestScoreCount}

function incrementThreeHome(){
    homeScoreCount += 3
    homeScore.innerText = homeScoreCount
}

function incrementThreeGuest(){
    guestScoreCount += 3
    guestScore.innerText = guestScoreCount
}

function resetScore(){
    homeScoreCount = 0
    guestScoreCount = 0
    homeScore.innerText = homeScoreCount
    guestScore.innerText = guestScoreCount
}
