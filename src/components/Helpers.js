// import React from 'react'
// import Food from './components/Food'

// random item
// picked index between 0 and the last index in the array
function choice(items){
    let idx= Math.floor(Math.random()* items.length)
    // return  the item at that index
    return items[idx];
    
}

//remove 
function remove(items, item){
    for (let i =0; i< items.length; i++){
        if(items[i] === item){
            return [...items.slice(0,i), ...items.slice(i+1)];
        }
    }

}



export {choice,remove};