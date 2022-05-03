let input ={ x:0 , y:0}
let lastinpurt = { x:0 , y:0}
window.addEventListener("keydown", e=>{
    switch(e.key){
        case 'ArrowUp':
            if(lastinpurt.y !==0) break
            input = { x:0 , y:-1}
            break
        case 'ArrowDown':
            if(lastinpurt.y !==0) break
            input = { x:0 , y:+1}
            break
        case 'ArrowLeft':
            if(lastinpurt.x !==0) break
            input = { x:-1 , y:0}
            break
        case 'ArrowRight':
            if(lastinpurt.x !==0) break
            input = { x:+1 , y:0}
            break
        
    }

})
export function getInputDirection(){
    lastinpurt = input
    return input
}