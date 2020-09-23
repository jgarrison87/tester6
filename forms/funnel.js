// Script for range input label

var rangeLabel = document.getElementById("range-label");
var experience = document.getElementById("experience");
function change() {
  rangeLabel.innerText = experience.value + "K";
}
