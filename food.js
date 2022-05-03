import {snakebody} from './objects.js'

const foodplace = { x:10 ,y:2}
let foodplacetaken = true
const gamelength = { x:28 ,  y:28}
export function updatefood(){
    if(snakebody[0].x == foodplace.x && snakebody[0].y == foodplace.y ){
    console.log("eaten")
    expand()
    foodplacetaken = true
    changefoodloc()
   
}

}

export function drawfood(gamecontainer){
    const FoodElement = document.createElement('div')
    FoodElement.classList.add("food")
    FoodElement.style.gridRow = foodplace.y
    FoodElement.style.gridColumn = foodplace.x
    gamecontainer.appendChild(FoodElement)
}
function changefoodloc(){
    while (foodplacetaken){
        foodplace.x = Math.floor(Math.random() * gamelength.x+1);
        foodplace.y = Math.floor(Math.random() * gamelength.y+1);
        foodplacetaken = (snakebody[0].x == foodplace.x && snakebody[0].y == foodplace.y )
    }
}
function expand(){
    const newsnake = {...snakebody[snakebody.length-1]}
    snakebody.push(newsnake)

}