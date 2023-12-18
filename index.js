var hitrn =0;
var timer = 60;
var score =0;
// var clickednum =0;

function makebubble() {
    var clutter = "";
    for (i = 1; i < 190; i++) {
        var rdm = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rdm}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function getnewhit() {
        hitrn = Math.floor(Math.random()*10);
        document.querySelector("#hitval").textContent =hitrn

}


function increasescore(){
    score +=10;
    document.querySelector("#scoreval").textContent=score;
}
function runtimer() {
    var timerint = setInterval(function () {
         if (timer > 0 ) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            // document.querySelector("#pbtm").innerHTML =`<h1>Game Over <h1?>`;
        }

    }, 1000);

}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increasescore();
        makebubble();
        getnewhit();

    }
    else{
        document.querySelector("#pbtm").innerHTML =`<h1>Game Over <h1?>`;
        document.querySelector("#scoreval").innerHTML=0;
        document.querySelector("#timerval").textContent = 0;
        
        
    }

});


getnewhit();
runtimer();
makebubble();
// increasescore();





