function setup (){
  createCanvas(600, 600);
  background(221, 223, 222);
}
function draw (){
  noStroke();
  if (mouseX < width / 2) {
    if (mouseY < height / 2) {
      fill(247, 43, 12);
    } else {
      fill(248, 210, 0);
    }
  } else {
    if (mouseY < height / 2) {
      fill(32, 29, 110);
    } else {
      fill(20);
    }
  }
  if(mouseY < mouseX ) {
    circle(mouseX, mouseY, random(10,80));
}else {
  rect(mouseX, mouseY, random(10,80), random(10,80));
      }
}
