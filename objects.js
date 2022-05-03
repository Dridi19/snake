import {getInputDirection} from './input.js';
import {updatefood,drawfood} from './food.js'
export const  snake_speed = 0.2
export const snakebody = [
    { x:10, y:11},
    


]
export function update(){
    const input = getInputDirection()
   for( let i=snakebody.length -2; i>=0 ; i--){
       snakebody[i+1] = {...snakebody[i]}
   }
   updatefood()
   snakebody[0].y +=input.y
    snakebody[0].x +=input.x
   
}

export function draw(gamecontainer){
    gamecontainer.innerHTML=''
    drawfood(gamecontainer)
    snakebody.forEach(element => {
        const snakeelement = document.createElement('div')
        snakeelement.classList.add("snake")
        snakeelement.style.gridRow = element.y
        snakeelement.style.gridColumn = element.x
        gamecontainer.appendChild(snakeelement)
    });
}
export function checkfordeath(){
    if(snakebody[0].x >=28 || snakebody[0].y >=28 ||snakebody[0].x <=1 || snakebody[0].y <=1){
        return true
    }
    for (let i = 1; i < snakebody.length; i++) {
        const element = snakebody[i];
        if(snakebody[0].x == element.x && snakebody[0].y == element.y){
            return true
        }
        
    }
}