// ---set vars---

let skeleton = {
    age: 1,
    level: 1,
    thirst: 0,
    hunger: 0,
    darkEnergy: 10
}

// ---make functions---

const thirstTimer = () => {
    const timer = setInterval(() => {
        skeleton.thirst++
        console.log(`Thirst: ${skeleton.thirst}`)
        document.querySelector("#thirst-html").innerHTML = `Thirst: ${skeleton.thirst}`
        if (skeleton.thirst === 10) {
            clearInterval(timer)
            document.querySelector("body").innerHTML = "<h1 id='game-over'>Game Over!</h1>"
        }
    }, 3000);
} 

const hungerTimer = () => {
    const hTimer = setInterval(() => {
        skeleton.hunger++
        console.log(`hunger: ${skeleton.hunger}`)
        document.querySelector("#hunger-html").innerHTML = `Hunger: ${skeleton.hunger}`
        if (skeleton.hunger === 10) {
            clearInterval(hTimer)
            document.querySelector("body").innerHTML = "<h1 id='game-over'>Game Over!</h1>"
        }
    }, 5000)
}

const darknessTimer = () => {
    const dTimer = setInterval(() => {
        skeleton.darkEnergy--
        console.log(`D E: ${skeleton.darkEnergy}`)
        document.querySelector("#darkEnergy-html").innerHTML = `Dark Energy: ${skeleton.darkEnergy}` 
        if (skeleton.darkEnergy === 0) {
            clearInterval(dTimer)
            document.querySelector("body").innerHTML = "<h1 id='game-over'>Game Over!</h1>"
        }
    }, 7000)
}

// ---event listeners---

// code to replace html elements when the play button is pressed
document.querySelector("#start-button").addEventListener("click", () => {
    thirstTimer()
    hungerTimer()
    darknessTimer()
})

document.querySelector("#start-button").addEventListener("click", () => {
    document.querySelector("#game-buttons-hidden").id = "game-buttons-shown"
})

document.querySelector("#start-button").addEventListener("click", () => {
    document.querySelector("#content-control").innerHTML = '<div id="game-control"><div id="stats"><p id="thirst-html"> Thirst: 0</p> <p id="hunger-html"> Hunger: 0 </p> <p id="darkEnergy-html"> Dark Energy: 10 </p> </div> </div>'
})

document.getElementById("water").addEventListener("click", () => {
    if (skeleton.thirst > 0) {
        skeleton.thirst--
        document.querySelector("#thirst-html").innerHTML = `Thirst: ${skeleton.thirst}`
        console.log(`Thirst: ${skeleton.thirst}`)
    }
})

document.getElementById("fertalize").addEventListener("click", () => {
    if (skeleton.hunger > 0) {
        skeleton.hunger--
        document.querySelector("#hunger-html").innerHTML = `Hunger: ${skeleton.hunger}`
        console.log(`hunger: ${skeleton.hunger}`)
    }
})

document.getElementById("dark-energy").addEventListener("click", () => {
    if (skeleton.darkEnergy < 10) {
        skeleton.darkEnergy++
        document.querySelector("#darkEnergy-html").innerHTML = `Dark Energy: ${skeleton.darkEnergy}`
    }
})