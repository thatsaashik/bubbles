
var timer = 10;
var score= 0;
var hitvalue;
function getHit(){
   hitvalue= Math.floor(Math.random()*10)
    document.querySelector("#hitvalue").textContent =  hitvalue;

}
function scoreIncrese(){
     score +=  10;
    document.querySelector("#Score").innerText= score

}
function runtimer(){
 var timerInterval  = setInterval(() => {
        if (timer>0) {
            timer--;
           document.querySelector("#timevalue").innerText = timer
        } else {
           clearInterval(timerInterval)
         var pbtm =   document.querySelector(".pbtm")
    //  document.querySelector(".ptop").innerHTML = ""
    pbtm.innerHTML = `<div class="finalScore"> <h1>Game over</h1>  <br>  <h4>  Your Total Score is: = ${score} </h4>
   <br>  <button class="restart">restart</button> </div>`

        }

    }, 1000);
}
document.querySelector(".restart"), addEventListener("click", () => {
    createBubble()
    getHit()
    runtimer()
    score = 0
    timer = 10;

})



function createBubble(){
    var cluter = ""

for (let i = 0; i < 80; i++) {
  var  random  = Math.floor(Math.random()*100)
   cluter += ` <div class="buble">${random}</div>`


}
    document.querySelector(".pbtm").innerHTML = cluter
}





function bubleValueGet() {
     document.querySelector(".pbtm").addEventListener("click",(dets)=>{
    var value = dets.target.textContent;
    if (value == hitvalue) {
        timer +=3;
         scoreIncrese();
        getHit()
        createBubble()
    }


})
}
bubleValueGet()
createBubble()
runtimer()
getHit()
