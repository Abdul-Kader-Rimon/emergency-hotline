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

counter("heart-btn", "heart-count")


// call section

let coins = 100;

function callButton(buttonId, serviceNameId, serviceNumberId , coinAmountId) {
    const call = document.getElementById(buttonId);

    call.addEventListener("click", function () {
        if (coins < 20) {
            alert("You don't have enough coins! You need at least 20 coins to make a call.")
            return;
        }
        coins -= 20;
        const serviceName = document.getElementById(serviceNameId).innerText
        const serviceNumber = document.getElementById(serviceNumberId).innerText

        alert(` calling ${serviceName}  ${serviceNumber} `)

        const coin = document.getElementById(coinAmountId)
        coin.innerText = coins

        const history = document.getElementById("call-history")
        const div = document.createElement("div")
        div.innerHTML = `
        <div >
            <div class="flex items-center justify-between bg-gray-100 p-2 rounded-lg gap-3 my-3">
                <div class="ml-3">
                    <h1 class="font-bold">${serviceName}</h1>
                    <p>${serviceNumber}</p>
                </div>
                <div>
                    <p>${new Date().toLocaleTimeString()}</p>
                </div>
            </div>
        `
        history.appendChild(div)
    })
}

callButton("call-btn", "service-name", "service-number", "coin-amount")
callButton("call-btn-1", "service-name-1", "service-number-1", "coin-amount")
callButton("call-btn-2", "service-name-2", "service-number-2", "coin-amount")
callButton("call-btn-3", "service-name-3", "service-number-3", "coin-amount")
callButton("call-btn-4", "service-name-4", "service-number-4", "coin-amount")
callButton("call-btn-5", "service-name-5", "service-number-5", "coin-amount")
callButton("call-btn-6", "service-name-6", "service-number-6", "coin-amount")
callButton("call-btn-7", "service-name-7", "service-number-7", "coin-amount")
callButton("call-btn-8", "service-name-8", "service-number-8", "coin-amount")

// clear history

document.getElementById("clear-history-btn").addEventListener("click", function (){
    const history = document.getElementById("call-history")
    history.innerHTML = ""
})


// copy functionality

function copyButton(copyBtnClass, copyNumberClass, copyCountId) {
    const counter = document.getElementById(copyCountId)
    let count = Number(counter.innerText)
    
    const copyButton = document.getElementsByClassName(copyBtnClass)
    const copyNumber = document.getElementsByClassName(copyNumberClass)
     
    let index = 0

    for (const copyBtn of copyButton) {
        const value = copyNumber[index].innerText
        copyBtn.addEventListener("click", function () {
            navigator.clipboard.writeText(value)

            alert("Copied : " + value)
            counter.innerText = ++count
        })
        index++
    }
    
}

copyButton("copy-btn", "copy-number", "copy-count")