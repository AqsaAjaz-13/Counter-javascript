
var container = document.getElementById("counterContainer");
var minusBtn = document.getElementById("minusBtn");
var plusBtn = document.getElementById("plusBtn");
var restartBtn = document.getElementById("restartBtn");
var number = document.getElementById("number");

var count = 0;

//  STYLE USING JAVASCRIPT 

document.body.style.margin = "0";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.backgroundColor = "#16222A";


container.style.textAlign = "center";
container.style.backgroundColor = "#3A6073";
container.style.padding = "40px";
container.style.borderRadius = "20px";
container.style.boxShadow = "0 0 25px rgba(0,0,0,0.6)";


number.style.fontSize = "120px";
number.style.color = "#00FFD1";
number.style.margin = "20px";


function styleButton(btn, bgColor) {
    btn.style.fontSize = "30px";
    btn.style.margin = "10px";
    btn.style.padding = "15px 25px";
    btn.style.border = "none";
    btn.style.borderRadius = "50%";
    btn.style.cursor = "pointer";
    btn.style.backgroundColor = bgColor;
    btn.style.color = "white";
}

styleButton(minusBtn, "#ff4d4d");
styleButton(plusBtn, "#2ecc71");

restartBtn.style.padding = "10px 20px";
restartBtn.style.fontSize = "18px";
restartBtn.style.backgroundColor = "#6c5ce7";
restartBtn.style.color = "white";
restartBtn.style.border = "none";
restartBtn.style.borderRadius = "10px";
restartBtn.style.cursor = "pointer";



plusBtn.onclick = function () {
    count++;
    number.innerHTML = count;
};

minusBtn.onclick = function () {
    count--;
    number.innerHTML = count;
};

restartBtn.onclick = function () {
    count = 0;
    number.innerHTML = count;
};