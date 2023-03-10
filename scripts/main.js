// const grandparent = document.querySelector(".grandparent")
// const parent = document.querySelector(".parent")
// const child = document.querySelector(".child")

// // grandparent.addEventListener('click',e =>{
// //     console.log('grandparent capture')
// // }, {capture: true})


// grandparent.addEventListener('click',e =>{
//     console.log('grandparent bubble ')
// })

// // parent.addEventListener('click',e =>{
    
// //     console.log('parent capture')
// // }, {capture: true})
// let printHi =()=>{
//     console.log("hi")
// }
// parent.addEventListener('click', printHi)

// setTimeout(() => {
//     parent.removeEventListener("click",printHi)
// }, 2000);

// // parent.addEventListener('click',e =>{
// //     console.log('parent bubble ')
// // }, {once: true})

// // child.addEventListener('click',e =>{
// //     e.stopPropagation()
// //     console.log('child capture')
// // }, {capture: true})

// child.addEventListener('click',e =>{
//     console.log('child bubble ')
// })
// /*
// parent.addEventListener('click',e =>{
//     console.log('parent ')
// })

// child.addEventListener('click',e =>{
//     console.log('child ')
// })

// document.addEventListener('click',e =>{
//     console.log('document')
// })*/
// // document.addEventListener('click',e =>{
// //     console.log('document capture')
// // }, {capture: true})

// // document.addEventListener('click',e =>{
// //     console.log('document bubble ')
// // })

const divs = document.querySelectorAll("div")

//event delegation 
document.addEventListener("click", e =>{
    if (e.target.matches("div")){
        console.log("hi")
    }
    
} )

//function global event listener

function addGlobalEventListener(type,selector, callback) {
    document.addEventListener(type, e =>{
        if (e.target.matches(selector)) callback(e)
        })
}

        
    


//event 
// divs.forEach(div => {
//     div.addEventListener("click", ()=>{
//         console.log("Hi")
//     })
// })

const newDiv = document.createElement("div")
newDiv.style.width ="200px"
newDiv.style.height ="200px"
newDiv.style.backgroundColor ="purple"
// newDiv.addEventListener("click")
document.body.append(newDiv)
