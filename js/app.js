// ---set vars---

let skeleton = {
    age: 1,
    level: 1,
    thirst: 0,
    hunger: 0,
    darkEnergy: 10
}

// ---make functions---

const level2 = () => {
    if (skeleton.level === 2) {
        document.getElementById("skull").src = "./assets/GaS-lvl1-new.png"
    }
}

const gameWin = () => {
    if (skeleton.level === 3) {
        document.getElementById("skull").src = "./assets/final-skele.png"
        document.getElementById("skull").id = "win-skele"
        document.getElementById("game-win-control").innerHTML = "<h1>You Win!</h1 id='you-win-text'><h4>Your first homegrown undead friend is fully powered up!</h4><div><button type='button'>Start Over?</button>"
    }
}

const levelUp = () => {
    if ((skeleton.age % 6) === 0) {
        skeleton.level++
        console.log(`level: ${skeleton.level}`)
        level2()
        gameWin()
    } else if (skeleton.age === 6 || 12) {
        skeleton.level = skeleton.level
        console.log(`level: ${skeleton.level}`)
    }
}

const ageTimer = () => {
    const aTimer = setInterval(() => {
        if (skeleton.age < 12) {
            skeleton.age++
            // console.log(`age: ${skeleton.age}`)
            levelUp()
        } else {
            clearInterval(aTimer)
        }
    }, 10000)
}

const thirstTimer = () => {
    const timer = setInterval(() => {
        if (skeleton.thirst === 10) {
            clearInterval(timer)
            document.querySelector("body").innerHTML = "<h1 id='game-over'>Game Over!</h1><h4>Even the undead need proper care!</h4>"
        } else if (skeleton.thirst < 10 && skeleton.level < 3) {
            skeleton.thirst++
            // console.log(`Thirst: ${skeleton.thirst}`)
            document.querySelector("#thirst-html").innerHTML = `Thirst: ${skeleton.thirst}`
        }
    }, 3000);
} 

const hungerTimer = () => {
    const hTimer = setInterval(() => {
        if (skeleton.hunger === 10) {
            clearInterval(hTimer)
            document.querySelector("body").innerHTML = "<h1 id='game-over'>Game Over!</h1><h4>Even the undead need proper care!</h4>"
        } else if (skeleton.hunger < 10 && skeleton.level < 3) {
            skeleton.hunger++
            // console.log(`hunger: ${skeleton.hunger}`)
            document.querySelector("#hunger-html").innerHTML = `Hunger: ${skeleton.hunger}`
        }
    }, 5000)
}

const darknessTimer = () => {
    const dTimer = setInterval(() => {
        if (skeleton.darkEnergy === 0) {
            clearInterval(dTimer)
            document.querySelector("body").innerHTML = "<h1 id='game-over'>Game Over!</h1><h4>Even the undead need proper care!</h4>"
        } else if (skeleton.darkEnergy > 0 && skeleton.level < 3) {
            skeleton.darkEnergy--
            // console.log(`D E: ${skeleton.darkEnergy}`)
            document.querySelector("#darkEnergy-html").innerHTML = `Dark Energy: ${skeleton.darkEnergy}` 
        }
    }, 7000)
}

// ---event listeners---

// code to replace html elements when the play button is pressed
document.querySelector("#start-button").addEventListener("click", () => {
    thirstTimer()
    hungerTimer()
    darknessTimer()
    ageTimer()
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
        // console.log(`Thirst: ${skeleton.thirst}`)
    }
})

document.getElementById("fertalize").addEventListener("click", () => {
    if (skeleton.hunger > 0) {
        skeleton.hunger--
        document.querySelector("#hunger-html").innerHTML = `Hunger: ${skeleton.hunger}`
        // console.log(`hunger: ${skeleton.hunger}`)
    }
})

document.getElementById("dark-energy").addEventListener("click", () => {
    if (skeleton.darkEnergy < 10) {
        skeleton.darkEnergy++
        document.querySelector("#darkEnergy-html").innerHTML = `Dark Energy: ${skeleton.darkEnergy}`
    }
})