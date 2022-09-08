const time = document.querySelector(".time")
const yil = document.querySelector(".month")
const kun = document.querySelector(".day")

setInterval(()=>{
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    
    let clock = `${hour}:${minute}:${second}`
    
    time.innerHTML = clock
}, 1000)


let date = new Date()

let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()

let sana = `${day}.${month}.${year}`

if(month === 1){
    yil.innerHTML = `${day} - Yanvar. ${year}`
}else if(month === 9){
    yil.innerHTML = `${day} - Sentabr. ${year}`
}
