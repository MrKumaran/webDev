let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeScoreCount = 0
let guestScoreCount = 0

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
}

function incrementOneHome(){
    homeScoreCount += 1
    homeScore.innerText = homeScoreCount
    color()
}

function incrementOneGuest(){
    guestScoreCount += 1
    guestScore.innerText = guestScoreCount
    color()
}

function incrementTwoHome(){
    homeScoreCount += 2
    homeScore.innerText = homeScoreCount
    color()
}

function incrementTwoGuest(){
    guestScoreCount += 2
    guestScore.innerText = guestScoreCount
    color()
}

function incrementThreeHome(){
    homeScoreCount += 3
    homeScore.innerText = homeScoreCount
    color()
}

function incrementThreeGuest(){
    guestScoreCount += 3
    guestScore.innerText = guestScoreCount
    color()
}

function resetScore(){
    homeScoreCount = 0
    guestScoreCount = 0
    homeScore.innerText = homeScoreCount
    guestScore.innerText = guestScoreCount
    color()
}
