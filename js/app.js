// -------------------------------------
//         ---global vars---
// -------------------------------------

const skeleton = {
    age: 0,
    level: 1,
    thirst: 0,
    hunger: 0,
    darkEnergy: 10,
    isDead: false
}


// -------------------------------------
//           ---functions---
// -------------------------------------


const getRanNumInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
const hungerTextColor = () => {
    if (skeleton.hunger >= 8) {
        document.getElementById("hunger-html").style.color = "red"
    } else if (skeleton.hunger < 8 && skeleton.hunger > 2) {
        document.getElementById("hunger-html").style.color = "white"
    } else {
        document.getElementById("hunger-html").style.color = "green"
    }
}

const thirstTextColor = () => {
    if (skeleton.thirst >= 8) {
        document.getElementById("thirst-html").style.color = "red"
    } else if (skeleton.thirst < 8 && skeleton.thirst > 2) {
        document.getElementById("thirst-html").style.color = "white"
    } else {
        document.getElementById("thirst-html").style.color = "green"
    }
}

const darknessTextColor = () => {
    if (skeleton.darkEnergy <= 2) {
        document.getElementById("darkEnergy-html").style.color = "red"
    } else if (skeleton.darkEnergy < 8 && skeleton.darkEnergy > 2) {
        document.getElementById("darkEnergy-html").style.color = "white"
    } else {
        document.getElementById("darkEnergy-html").style.color = "green" 
    }
}

const level2 = () => {
    if (skeleton.level === 2) {
        document.getElementById("skull").src = "./assets/GaS-lvl1-new.png"
        document.querySelector("h3").innerHTML = "Nice! Your skull is now a skeleton!<br /><br />he's looking pretty weak though, he's gonna need some more care still"
    }
}

const gameWin = () => {
    if (skeleton.level === 3) {
        document.getElementById("skull").src = "./assets/final-skele.png"
        document.getElementById("skull").id = "win-skele"
        document.querySelector("h3").innerHTML = " "
        document.getElementById("game-win-control").innerHTML = "<div id='game-win-control'><h1 id='you-win-text'>You Win!</h1><h4>Your first homegrown undead friend is fully powered up!</h4><button type='submit' id='start-over-button' onClick='window.location.reload();''>Start Over?</button></div>"
    }
}

const levelUp = () => {
    if ((skeleton.age % 12) === 0) {
        skeleton.level++
        level2()
        gameWin()
    } else if (skeleton.age === 12 || 24) {
        skeleton.level = skeleton.level
    }
}

const ageTimer = () => {
    const aTimer = setInterval(() => {
        if (skeleton.age < 24 && skeleton.isDead === false) {
            skeleton.age++
            squareTimer()
            // console.log(`age: ${skeleton.age}`)
            levelUp()
        } else {
            clearInterval(aTimer)
        }
    }, 10000) 
}

const thirstTimer = (ms) => {
    setTimeout( () => {
        if (skeleton.isDead || skeleton.level === 3) {
            return 
        } else if (skeleton.thirst === 10) {
            skeleton.isDead = true
            document.querySelector("body").innerHTML = "<h1 id='game-over'>Game Over!</h1><h4>Even the undead need proper care!</h4>"
        } else {            
            skeleton.thirst++
            thirstTextColor()
            document.querySelector("#thirst-html").innerHTML = `Thirst: ${skeleton.thirst}`                        
            const randomMilliseconds = getRanNumInRange(2, 7) * 1000
            thirstTimer(randomMilliseconds)
        }
    }, ms)
}

const hungerTimer = (ms) => {
    setTimeout( () => {
        if (skeleton.isDead || skeleton.level === 3) {
            return 
        } else if (skeleton.hunger === 10) {
            skeleton.isDead = true
            document.querySelector("body").innerHTML = "<h1 id='game-over'>Game Over!</h1><h4>Even the undead need proper care!</h4>"
        } else {            
            skeleton.hunger++
            hungerTextColor()
            document.querySelector("#hunger-html").innerHTML = `Hunger: ${skeleton.hunger}`            
            const randomMilliseconds = getRanNumInRange(4, 9) * 1000
            hungerTimer(randomMilliseconds)
        }
    }, ms)
}

const darknessTimer = (ms) => {
    setTimeout( () => {
        if (skeleton.isDead || skeleton.level === 3) {
            return 
        } else if (skeleton.darkEnergy === 0) {
            skeleton.isDead = true
            document.querySelector("body").innerHTML = "<h1 id='game-over'>Game Over!</h1><h4>Even the undead need proper care!</h4>"
        } else {            
            skeleton.darkEnergy--
            darknessTextColor()
            document.querySelector("#darkEnergy-html").innerHTML = `Dark Energy: ${skeleton.darkEnergy}`            
            const randomMilliseconds = getRanNumInRange(6, 11) * 1000
            darknessTimer(randomMilliseconds)
        }
    }, ms)
}

const squareTimer = () => {
    if (skeleton.age < 24 && skeleton.age != 12 && skeleton.isDead === false) {
        const square = document.createElement("div")
        document.querySelector("#age-counter").appendChild(square)
    } else if (skeleton.age === 12) {
        document.querySelector("#age-counter").innerHTML = `Level 2 Progress:`
    } else {
        return
    }

}
 
// -------------------------------------
//         ---event listeners---
// -------------------------------------

// code to replace html elements when the play button is pressed

document.querySelector("#start-button").addEventListener("click", () => {
    document.querySelector("#game-buttons-hidden").id = "game-buttons-shown"
})

document.querySelector("#start-button").addEventListener("click", () => {
    document.querySelector("#content-control").innerHTML = '<div id="game-control"><div id="stats"><p id="thirst-html"> Thirst: 0</p> <p id="hunger-html"> Hunger: 0 </p> <p id="darkEnergy-html"> Dark Energy: 10 </p> </div> </div>'
    document.querySelector("#age-counter").innerHTML = `Level 1 Progress:`
    document.querySelector("h3").innerHTML = "Let's help our friend grow!<br /><br />make sure to water, fertalize, and imbue the skull with dark energy as needed"
    hungerTextColor() 
    thirstTextColor()
    darknessTextColor()
})

document.querySelector("#start-button").addEventListener("click", () => {
    thirstTimer(getRanNumInRange(2, 7) * 1000)
    hungerTimer(getRanNumInRange(4, 9) * 1000)
    darknessTimer(getRanNumInRange(6, 11) * 1000)
    ageTimer()
})

document.getElementById("water").addEventListener("click", () => {
    if (skeleton.thirst > 0) {
        skeleton.thirst--
        thirstTextColor()
        document.querySelector("#thirst-html").innerHTML = `Thirst: ${skeleton.thirst}`
    }
})

document.getElementById("fertalize").addEventListener("click", () => {
    if (skeleton.hunger > 0) {
        skeleton.hunger--
        hungerTextColor()
        // hGreenText()
        document.querySelector("#hunger-html").innerHTML = `Hunger: ${skeleton.hunger}`
        // console.log(`hunger: ${skeleton.hunger}`)
    }
})

document.getElementById("dark-energy").addEventListener("click", () => {
    if (skeleton.darkEnergy < 10) {
        skeleton.darkEnergy++
        darknessTextColor()
        document.querySelector("#darkEnergy-html").innerHTML = `Dark Energy: ${skeleton.darkEnergy}`
    }
})


// change pic when buttons are pressed
document.getElementById("water").addEventListener("mousedown", () => {
    if (skeleton.level === 1){
        document.querySelector("#skull").src = "./assets/wet-skull.png"
    } else if (skeleton.level === 2) {
        document.querySelector("#skull").src ="./assets/wet-skeleton.png"
    }
})

document.getElementById("water").addEventListener("mouseleave", () => {
    if (skeleton.level === 1) {
        document.querySelector("#skull").src = "./assets/skull.png"
    } else if (skeleton.level === 2) {
        document.querySelector("#skull").src = "./assets/GaS-lvl1-new.png"
    }
})

document.getElementById("fertalize").addEventListener("mousedown", () => {
    if (skeleton.level === 1){
        document.querySelector("#skull").src = "./assets/dirt-skull.png"
    } else if (skeleton.level === 2) {
        document.querySelector("#skull").src = "./assets/dirt-skeleton.png"
    }
})

document.getElementById("fertalize").addEventListener("mouseleave", () => {
    if (skeleton.level === 1) {
        document.querySelector("#skull").src = "./assets/skull.png"
    } else if (skeleton.level === 2) {
        document.querySelector("#skull").src = "./assets/GaS-lvl1-new.png"
    }
})

document.getElementById("dark-energy").addEventListener("mousedown", () => {
    if (skeleton.level === 1){
        document.querySelector("#skull").src = "./assets/dark-skull.png"
    } else if (skeleton.level === 2) {
        document.querySelector("#skull").src = "./assets/dark-skeleton.png"
    }
})

document.getElementById("dark-energy").addEventListener("mouseleave", () => {
    if (skeleton.level === 1) {
        document.querySelector("#skull").src = "./assets/skull.png"
    } else if (skeleton.level === 2) {
        document.querySelector("#skull").src = "./assets/GaS-lvl1-new.png"
    }
})
