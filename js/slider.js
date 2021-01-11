onload  = start;
let hoverImg = false;
let imgSlider = document.getElementById("projects__container");
function setHoverTrue(e) {
  hoverImg = true;
}
function setHoverFalse(e) {
  hoverImg = false;
}
imgSlider.addEventListener('mouseover', setHoverTrue);
imgSlider.addEventListener('mouseout', setHoverFalse);
function start(){
  let j = 1;	
function Move(){
  for (let i = 1; i < 5; i++) {
    if (document.getElementById('i'+i).checked == true) {
      j = (i%4)+1; // 4 is the Number of image in slider
      console.log(j);
    }
  } 
  if (!hoverImg) {
    document.getElementById('i'+j).checked = true;
  }		
}
setInterval(Move,4000); //change img in 5 sec
}