let homeScoreEl = document.getElementById("score-home");
let guestScoreEl = document.getElementById("score-guest");

let homeScore = 0;
let guestScore = 0;


function homeScore1(){
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
    highlightWinner()
}

function homeScore2(){
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
    highlightWinner()
}

function homeScore3(){
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
    highlightWinner()
}


function guestScore1(){
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
    highlightWinner()
}

function guestScore2(){
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
    highlightWinner()
}

function guestScore3(){
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
    highlightWinner()
}

function highlightWinner(){
    if (guestScore > homeScore){
        guestScoreEl.style.boxShadow ="0px 0px 12px 7px white"
        homeScoreEl.style.boxShadow = "0 0 0"
    }
    else if (guestScore < homeScore){
        homeScoreEl.style.boxShadow ="0px 0px 12px 7px white"
        guestScoreEl.style.boxShadow = "0 0 0"
    }
    
    else {
        guestScoreEl.style.boxShadow = "0 0 0"
        homeScoreEl.style.boxShadow = "0 0 0"
    }
}

function newGame() {
    guestScore = 0;
    homeScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
    highlightWinner()
    newGameTime()
}

function newGameTime(){
    minuteTen = 0;
    minute = 0;
    secondTen = 0;
    second = 0;
    minuteTenEl.textContent = minuteTen
    minuteEl.textContent = minute
    secondTenEl.textContent = secondTen
    secondEl.textContent = second
    
}


// All variables and functions for the timer

let minuteTenEl = document.getElementById("minute10")
let minuteEl = document.getElementById("minute")
let secondTenEl = document.getElementById("second10")
let secondEl = document.getElementById("second")

let minuteTen = 0;
let minute = 0;
let secondTen = 0;
let second = 0;

function updateMinuteTen(){
    minuteTen +=1
    minuteTenEl.textContent = minuteTen
}

function updateMinute(){
    
    if (minute< 9){
        minute +=1;
        minuteEl.textContent = minute
    }
    else {
        minute = 0;
        minuteEl.textContent = minute
    }
}

function updateSecondTen(){
    if (secondTen < 5){
        secondTen +=1;
        secondTenEl.textContent = secondTen
    }
    else {
        secondTen = 0;
        secondTenEl.textContent = secondTen
    }
}

function updateSecond(){
    
    if (second < 9){
        second +=1;
        secondEl.textContent = second
    }
    else {
        second = 0
        secondEl.textContent = second;  
    }
}

setInterval(updateMinuteTen, 600000);
setInterval(updateSecond, 1000);
setInterval(updateMinute, 60000);
setInterval(updateSecondTen, 10000);