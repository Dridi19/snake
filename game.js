import { checkfordeath } from './objects.js';
import {update,draw,snake_speed} from '/objects.js';
let gameover = false
var secondsfromlastrender = 0
var lasttimerender = 0
const gamecontainer = document.querySelector(".game-container")
function main(currentTime){
    if(gameover){
        alert("lost")
        location.reload();

        return
    }
    secondsfromlastrender = (currentTime - lasttimerender)/1000
    window.requestAnimationFrame(main)
    if (secondsfromlastrender < snake_speed) return
    lasttimerender = currentTime
    updatesnake()
    drawsnake()
}

window.requestAnimationFrame(main)

function updatesnake(){
    update()
    gameover = checkfordeath()
}


function drawsnake(){
    draw(gamecontainer)
    
}
