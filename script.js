// heart counter

function counter(heartBtn, heartCount) {    
    const heartCounter = document.getElementById(heartCount)
    let heart = 0;
    const heartButton = document.getElementsByClassName(heartBtn)
    
    for (const  countHeart of heartButton ) {
        countHeart.addEventListener("click", function () {
            heart++
            heartCounter.innerText = heart
        })
    }  
}

counter( "heart-btn", "heart-count")