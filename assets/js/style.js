console.log();

var slider = document.getElementById("myRange");
var output = document.getElementById("levVal");

var fRes = document.getElementById("js-res");
var sl = document.querySelector('.input-box__sl > input');
var slu = document.querySelector('.input-box__u > input');

var slVal, sluVal;

sluVal = slu.value;

sl.oninput = function() {
    console.log(this.value);
    slVal = this.value;
}

slu.oninput = function() {
    console.log(this.value);
    sluVal = this.value;
}

// console.log(slider);
// console.log(output);

output.innerHTML = slider.value; // Display the default slider value
// output.innerHTML = "Hiiii";

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  fResVal = Math.round((sluVal/(slVal/100))/slider.value*10000)/10000;
  fRes.innerHTML = fResVal;
}

function btnCopy() {
    console.log(fResVal);
    navigator.clipboard.writeText(fResVal);
};