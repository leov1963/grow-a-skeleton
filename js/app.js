// ---set vars---

let skeleton = {
    age: 0,
    level: 1,
    thirst: 0,
    hunger: 0,
    darkEnergy: 10
}

// ---make functions---

const getRanNumInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const hRedText = () => {
    if (skeleton.hunger >= 8) {
        document.getElementById("hunger-html").style.color = "red"
    } else {
        document.getElementById("hunger-html").style.color = "white"
    }
}

const hGreenText = () => {
    if (skeleton.hunger <= 2) {
        document.getElementById("hunger-html").style.color = "green"
    } else {
        document.getElementById("hunger-html").style.color = "white"
    }
}

const tRedText = () => {
    if (skeleton.thirst >= 8) {
        document.getElementById("thirst-html").style.color = "red"
    } else {
        document.getElementById("thirst-html").style.color = "white"
    }
}

const tGreenText = () => {
    if (skeleton.thirst <= 2) {
        document.getElementById("thirst-html").style.color = "green"
    } else {
        document.getElementById("thirst-html").style.color = "white"
    }
}

const dRedText = () => {
    if (skeleton.darkEnergy <= 2) {
        document.getElementById("darkEnergy-html").style.color = "red"
    } else {
        document.getElementById("darkEnergy-html").style.color = "white"
    }
}

const dGreenText = () => {
    if (skeleton.darkEnergy >= 8) {
        document.getElementById("darkEnergy-html").style.color = "green"
    } else {
        document.getElementById("darkEnergy-html").style.color = "white"
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
        console.log(`level: ${skeleton.level}`)
        level2()
        gameWin()
    } else if (skeleton.age === 12 || 24) {
        skeleton.level = skeleton.level
        console.log(`level: ${skeleton.level}`)
    }
}

const ageTimer = () => {
    const aTimer = setInterval(() => {
        if (skeleton.age < 24) {
            skeleton.age++
            squareTimer()
            // console.log(`age: ${skeleton.age}`)
            levelUp()
        } else {
            clearInterval(aTimer)
        }
    }, 10000) 
}


// const thirstTimer = () => {
//     // run a loop
//     while (skeleton.thirst < skeleton.thirst+1 && skeleton.level < 3) {
//         // get ran number 
//         let ranTimeT = getRanNumInRange(2, 7) * 1000
        
//         if (skeleton.thirst === 10) {
//             clearInterval(timer)
//             document.querySelector("body").innerHTML = "<h1 id='game-over'>Game Over!</h1><h4>Even the undead need proper care!</h4>"
//         } else if (skeleton.thirst < 10 && skeleton.level < 3) {
//             skeleton.thirst++
//             tRedText()
//             tGreenText()
//             // console.log(`Thirst: ${skeleton.thirst}`)
//             document.querySelector("#thirst-html").innerHTML = `Thirst: ${skeleton.thirst}`           
//         }
//         setInterval(function() {
//             thirstTimer()
//         }, ranTimeT);
//         console.log("time: " + ranTimeT)
//     }
// }
// contains if else logic 
//set interval  

// ----------
let ranTimeT = getRanNumInRange(2, 7) * 1000

const thirstTimer = () => {
// run a loop
// get ran number 
// contains if else logic 
//set interval  
    const timer = setInterval(() => {
        
        if (skeleton.thirst === 10) {
            clearInterval(timer)
            document.querySelector("body").innerHTML = "<h1 id='game-over'>Game Over!</h1><h4>Even the undead need proper care!</h4>"
        } else if (skeleton.thirst < 10 && skeleton.level < 3) {
            skeleton.thirst++
            tRedText()
            tGreenText()
            // console.log(`Thirst: ${skeleton.thirst}`)
            document.querySelector("#thirst-html").innerHTML = `Thirst: ${skeleton.thirst}`
            
        }
    }, ranTimeT);
    console.log("time: " + ranTimeT)
}

const hungerTimer = () => {
    const hTimer = setInterval(() => {
        if (skeleton.hunger === 10) {
            clearInterval(hTimer)
            document.querySelector("body").innerHTML = "<h1 id='game-over'>Game Over!</h1><h4>Even the undead need proper care!</h4>"
        } else if (skeleton.hunger < 10 && skeleton.level < 3) {
            skeleton.hunger++
            hRedText()
            hGreenText()
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
            dRedText()
            dGreenText()
            // console.log(`D E: ${skeleton.darkEnergy}`)
            document.querySelector("#darkEnergy-html").innerHTML = `Dark Energy: ${skeleton.darkEnergy}` 
        }
    }, 7000)
}

const squareTimer = () => {
    if (skeleton.age < 24 && skeleton.age != 12) {
        const square = document.createElement("div")
        document.querySelector("#age-counter").appendChild(square)
    } else if (skeleton.age === 12) {
        document.querySelector("#age-counter").innerHTML = `Level 2 Progress:`
    }

}

// ---event listeners---

// code to replace html elements when the play button is pressed

document.querySelector("#start-button").addEventListener("click", () => {
    document.querySelector("#game-buttons-hidden").id = "game-buttons-shown"
})

document.querySelector("#start-button").addEventListener("click", () => {
    document.querySelector("#content-control").innerHTML = '<div id="game-control"><div id="stats"><p id="thirst-html"> Thirst: 0</p> <p id="hunger-html"> Hunger: 0 </p> <p id="darkEnergy-html"> Dark Energy: 10 </p> </div> </div>'
    document.querySelector("#age-counter").innerHTML = `Level 1 Progress:`
    document.querySelector("h3").innerHTML = "Let's help our friend grow!<br /><br />make sure to water, fertalize, and imbue the skull with dark energy as needed"
    hGreenText()
    tGreenText()
    dGreenText()
})

document.querySelector("#start-button").addEventListener("click", () => {
    thirstTimer()
    hungerTimer()
    darknessTimer()
    ageTimer()
})

document.getElementById("water").addEventListener("click", () => {
    if (skeleton.thirst > 0) {
        skeleton.thirst--
        tRedText()
        tGreenText()
        document.querySelector("#thirst-html").innerHTML = `Thirst: ${skeleton.thirst}`
        // console.log(`Thirst: ${skeleton.thirst}`)
    }
})

document.getElementById("fertalize").addEventListener("click", () => {
    if (skeleton.hunger > 0) {
        skeleton.hunger--
        hRedText()
        hGreenText()
        document.querySelector("#hunger-html").innerHTML = `Hunger: ${skeleton.hunger}`
        // console.log(`hunger: ${skeleton.hunger}`)
    }
})

document.getElementById("dark-energy").addEventListener("click", () => {
    if (skeleton.darkEnergy < 10) {
        skeleton.darkEnergy++
        dRedText()
        dGreenText()
        document.querySelector("#darkEnergy-html").innerHTML = `Dark Energy: ${skeleton.darkEnergy}`
    }
})


// change pic when buttons are pressed
document.getElementById("water").addEventListener("mousedown", () => {
    if (skeleton.level === 1){
        document.querySelector("#skull").src = "./assets/wet-skull.png"
    } else if (skeleton.level === 2) {
        
    }
})

document.getElementById("water").addEventListener("mouseleave", () => {
    if (skeleton.level === 1) {
        document.querySelector("#skull").src = "./assets/skull.png"
    }
})