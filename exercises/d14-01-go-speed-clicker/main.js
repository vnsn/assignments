
var countSpan = document.getElementById("counter");
var count = JSON.parse(localStorage.getItem("SpeedClicker")) || 0;
countSpan.innerText = count;

window.addEventListener("click", function(){
    console.log("i clicked");
    count++;
    countSpan.innerText = count;
    localStorage.setItem("SpeedClicker", JSON.stringify(count)) 
})
