// ---set vars---

let skeleton = {
    age: 1,
    level: 1,
    thirst: 0,
    hunger: 0,
    darkEnergy: 10
}

// ---make functions---

const thirstHungerTimer = () => {
    const timer = setInterval(() => {
        skeleton.thirst++
        skeleton.hunger++
        console.log(`hunger: ${skeleton.hunger}`)
        console.log(`Thirst: ${skeleton.thirst}`)
        document.querySelector("#thirst-html").innerHTML = `Thirst: ${skeleton.thirst}`
        document.querySelector("#hunger-html").innerHTML = `Hunger: ${skeleton.hunger}`
        if(skeleton.thirst === 10 || skeleton.hunger === 10) {
            clearInterval(timer)
            document.querySelector("body").innerHTML = "<h1 id='game-over'>Game Over!</h1>"
        }
    }, 3000);
} 

// ---event listeners---

// code to replace html elements when the play button is pressed
document.querySelector("#start-button").addEventListener("click", () => {
    thirstHungerTimer()
})

document.querySelector("#start-button").addEventListener("click", () => {
    document.querySelector("#game-buttons-hidden").id = "game-buttons-shown"
})

document.querySelector("#start-button").addEventListener("click", () => {
    document.querySelector("#content-control").innerHTML = '<div id="game-control"><div id="stats"><p id="thirst-html"> Thirst: 0</p> <p id="hunger-html"> Hunger: 0 </p> </div> </div>'
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