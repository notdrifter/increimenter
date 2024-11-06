let amount = 0;
let display = document.getElementById("display");
let sentences = "Once upon a time, ";
document.getElementById("minus50").addEventListener("click", minus50);
document.getElementById("minus10").addEventListener("click", minus10);
document.getElementById("minus1").addEventListener("click", minus1);
document.getElementById("plus1").addEventListener("click", plus1);
document.getElementById("plus10").addEventListener("click", plus10);
document.getElementById("plus50").addEventListener("click", plus50);
document.getElementById("plus50").addEventListener("click", plus50);
document.getElementById("rand1").addEventListener("click", rand1);
document.getElementById("rand2").addEventListener("click", rand2);
document.getElementById("rand3").addEventListener("click", rand3);
document.getElementById("rand4").addEventListener("click", rand4);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("random-rgb").addEventListener("click", color);
document.getElementById("random-size").addEventListener("click", size);

function minus50() {
  amount -= 50;
  display.innerHTML = amount;
}

function minus10() {
  amount -= 10;
  display.innerHTML = amount;
}

function minus1() {
  amount -= 1;
  display.innerHTML = amount;
}

function plus1() {
  amount += 1;
  display.innerHTML = amount;
}

function plus10() {
  amount += 10;
  display.innerHTML = amount;
}

function plus50() {
  amount += 50;
  display.innerHTML = amount;
}

function sentence() {
  let value = document.getElementById("strIn").value;
  sentences += ` ${value}`;
  document.getElementById("strOut").innerText = sentences;
  document.getElementById("strIn").value = "";
}

function rand1() {
  let rand1 = Math.random();
  document.getElementById("rand1-out").innerText = rand1;
}

function rand2() {
  let rand2 = Math.floor(Math.random() * 101);
  document.getElementById("rand2-out").innerText = rand2;
}

function rand3() {
  let rand3 = Math.floor(Math.random() * 10) - 5;
  document.getElementById("rand3-out").innerText = rand3;
}

function rand4() {
  let value1 = +document.getElementById("rand-in1").value;
  let value2 = +document.getElementById("rand-in2").value;
  console.log(value1);
  console.log(value2);
  let rand4 = Math.round(Math.random() * (value2 - value1)) + value1;
  document.getElementById("rand4-out").innerText = rand4;
}

function size() {
  let textsize = Math.floor(Math.random() * 1000) + "px";
  document.getElementById("display1").style.width = textsize;
}

function color() {
  let r = Math.floor(Math.random() * 254) + 1;
  let g = Math.floor(Math.random() * 254) + 1;
  let b = Math.floor(Math.random() * 254) + 1;
  var col = "rgb(" + r + "," + g + "," + b + ")";
  document.getElementById("display1").style.backgroundColor = col;
}

function reset() {
  amount = 0;
  display.innerHTML = amount;
  document.getElementById("rand1-out").innerText = "----------";
  document.getElementById("rand2-out").innerText = "----------";
  document.getElementById("rand3-out").innerText = "----------";
  document.getElementById("rand4-out").innerText = "----------";
  document.getElementById("display1").style.background = "white";
  sentences = "Once upon a time, ";
  document.getElementById("strOut").innerText = sentences;
  document.getElementById("strIn").value = "";
  document.getElementById("display1").style.width = "700px";
}

// Math.random() * (HIGH - LOW) + LOW_NUMBER
