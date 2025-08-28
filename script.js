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
            alert("tumar jotesto coin nai")
            return;
        }
        coins -= 20;
        const serviceName = document.getElementById(buttonId).innerText
        const serviceNumber = document.getElementById(serviceNumberId).innerText

        alert(`calling ${serviceName} at ${serviceNumber} coins left : ${coins}`)

        const coin = document.getElementById(coinAmountId)
        coin.innerText = coins

        const history = document.getElementById("call-history")
        const div = document.createElement("div")

        // div.innerText = `${serviceName}  ${serviceNumber}`
        // history.appendChild(div)
        div.innerHTML = `
        <div >
            <div class="flex items-center justify-between bg-gray-200 p-2 rounded-lg gap-3 my-3">
                <div class="ml-3">
                    <h1>${serviceName}</h1>
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