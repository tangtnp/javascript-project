const timeEl = document.querySelector(".time")
const btnToggle = document.querySelector(".toggle")
function setTime(){
    //console.log(new Date())
    const time = new Date()
    const hours = time.getHours()
    const mins = time.getMinutes()
    const seconds = time.getSeconds()
    timeEl.innerHTML=`${hours}:
    ${mins<10 ? `0${mins}`: mins}:
    ${seconds<10 ? `0${seconds}`: `${seconds}`}`
}
btnToggle.addEventListener("click",(e)=>{
    //console.log("สลับโหมด")
    const html = document.querySelector(`html`)
    if(html.classList.contains("dark")){
        html.classList.remove("dark")
        e.target.innerHTML="โหมดกลางตืน"
    }else{
        html.classList.add("dark")
        e.target.innerHTML="โหมดกลางวัน"
    }
})

setTime()
setInterval(setTime,1000)
