function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(70);
  abc = windowWidth*0.10;
}

function draw() {
  // put drawing code here
  translate(windowWidth/2,windowHeight/2);

    if (frameCount <= 180) {
      push();
      translate(abc, 0);
      stroke(80, 0, 0);
      line(abc*cos(frameCount*2), abc*sin(frameCount*2), windowWidth*0.1, 0);
      pop();

      push();
      rotate(90);
      translate(abc, 0);
      stroke("black");
      line(abc*cos(frameCount*2), abc*sin(frameCount*2), windowWidth*0.1, 0);
      pop();

      push();
      rotate(180);
      translate(abc, 0);
      stroke(80, 0, 0);
      line(abc*cos(frameCount*2), abc*sin(frameCount*2), windowWidth*0.1, 0);
      pop();

      push();
      rotate(270);
      translate(abc, 0);
      stroke("black");
      line(abc*cos(frameCount*2), abc*sin(frameCount*2), windowWidth*0.1, 0);
      pop();

    }

    if (180<frameCount && frameCount<=540) {
      var2 = frameCount-180;
      stroke(100+var2);
      line(1.25*abc*sin(frameCount*3), 1.25*abc*cos(frameCount*1), -windowWidth*0.2, 0);
      line(1.25*abc*sin(frameCount*3), 1.25*abc*cos(frameCount*1), windowWidth*0.2, 0);

      push();
      rotate(90);
      stroke(100+var2, 0, 0);
      line(1.25*abc*sin(frameCount*3), 1.25*abc*cos(frameCount*1), -windowWidth*0.2, 0);
      line(1.25*abc*sin(frameCount*3), 1.25*abc*cos(frameCount*1), windowWidth*0.2, 0);
      pop();
    }

    if (frameCount > 540) {
      rotate((frameCount-720)*2);
      stroke(255, 255, 255);
      strokeWeight(1.5);
      line(windowWidth*0.21, 0, windowWidth*0.23, 0);
    }

  if (frameCount == 720) {
    noLoop();
  }

}
