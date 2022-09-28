let inc = 0.1;
let scl = 10; //number of pieces in which the screen is divided
let cols, rows; //rows and columns in which the screen is divided
let zoff = 0; //temporal dimension starting from zero

let particles = [];
let flowfield = []; 

function setup() { 
  let cnv = createCanvas(1700, 1000);
  cnv.style('display', 'block');
  background(color('rgba(26, 48, 132, 1)'));
  angleMode(RADIANS);
  rectMode(CENTER);

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  cols = floor(width / scl); //floor is used to remove decimals
  rows = floor(height / scl); 

  flowfield = new Array(cols * rows); //every vector is put in an array 

  for (let i = 0; i < 6000; i++){ //there are 6000 particles
    particles[i] = new Particle();
  }
}

function draw() { 
 //I create some vectors which correspond to the number given by the multiplication of rows and cols  
  let yoff = 0;
    for (let y = 0; y < rows; y++){
      let xoff = 0;
      for (let x = 0; x < cols; x++) {
        let index = x + y * cols; //it is used to index inside an array
        let angle = noise(xoff, yoff, zoff) * TWO_PI; //noise transition is an algorithm that generates random numbers close to each other.
        let v = p5.Vector.fromAngle(angle); //vectors are oriented with the angle variable 
        flowfield[index] = v; 
        v.setMag(1); //the magnitude indicates how a vector become bigger or smaller. If magnitude is to 1 nothing changes.
        //if I increase the magnitude, the acceleration applied to the particle increases too
        xoff += inc;
      }

     yoff += inc;
     zoff += 0.1; //third dimension
    }
  
    for (let i = 0; i < particles.length; i++){
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

//elements in the background
stroke(color('rgb(11, 35, 94)'));
fill(color('rgb(11, 35, 94)'));
rect(850, 935, 1700, 130);

rect(1518.9327, 793.5939, 368.2435, 152.8123);
circle(1672.9263, 701.437, 233.9366);
circle(1491.271, 753.0317, 233.9366);
circle(1341.5161, 833.2228, 233.9366);
circle(1197.739, 911.1403, 233.9366);
circle(1029.5445, 954.3559, 233.9366);

stroke(color('rgb(29, 40, 73)'));
fill(color('rgb(29, 40, 73)'));
ellipse(390, 844, 286, 321);
ellipse(647, 903, 202, 217);
ellipse(439, 613, 225, 229);
ellipse(424, 450, 161, 192);
rect(419, 467, 112, 356);2
rect(440, 823, 215, 356);
triangle(469, 998, 666, 998, 568, 517);
triangle(397, 292, 443, 292, 420, 32);

const grado = sin(-1)*7;
const grado1 = cos(1.9);

push();
translate(380, -150);
rotate(grado);
triangle(484, 999, 678, 999, 581, 619);
pop();

push();
translate(360, -160);
rotate(grado);
triangle(598, 999, 702, 908, 650, 683);
pop();

push();
translate(140, -160);
rotate(grado);
triangle(431, 318, 490, 318, 460, 203);
pop();

push();
translate(-70, 160);
rotate(grado1);
triangle(343, 371, 430, 371, 387, 186);
pop();

//first star, starting at the top right
const amount = 180;
translate(1600, 150);
for (let ix = 1; ix <= amount; ix++) {
  const angle = 20 * ix + frameCount;
  const rotation = sin(angle)*80;
  const x = 1;
  const y = 1;
  const rectWidth = ix/2;
  const rectHeight = ix/2;
  push();
  noFill();
  stroke(color('rgba(196, 173, 25, 0.3)'));
  rotate(rotation);
  line(x,y,rectWidth, rectHeight);
  pop();
}

//2nd star
const amount1 = 60;
translate(-350, 170);
for (let i1 = 1; i1 <= amount1; i1++) {
  const angle1 = 20 * i1 + frameCount;
  const rotation1 = sin(angle1)*50;
  const x1 = 1;
  const y1 = 1;
  const rectWidth1 = i1;
  const rectHeight1 = i1;
  push();
  noFill();
  stroke(color('rgba(210, 216, 123, 0.5)'));
  rotate(rotation1);
  line(x1,y1,rectWidth1, rectHeight1);
  pop();
}

//3rd star
const amount2 = 40;
translate(-200, -240);
for (let i2 = 1; i2 <= amount2; i2++) {
  const angle2 = 20 * i2 + frameCount;
  const rotation2 = sin(angle2)*15;
  const x2 = 1;
  const y2 = 1;
  const rectWidth2 = i2;
  const rectHeight2 = i2;
  push();
  noFill();
  stroke(color('rgba(209, 197, 55, 0.5)'));
  rotate(rotation2);
  line(x2,y2,rectWidth2, rectHeight2);
  pop();
}

//4th star
const amount3 = 70;
translate(-800, 100);
for (let i3 = 1; i3 <= amount3; i3++) {
  const angle3 = 20 * i3 + frameCount;
  const rotation3 = cos(angle3)*40;
  const x3 = 1;
  const y3 = 1;
  const rectWidth3 = i3;
  const rectHeight3 = i3;
  push();
  noFill();
  stroke(color('rgba(209, 197, 55, 0.2)'));
  rotate(rotation3);
  line(x3,y3,rectWidth3, rectHeight3);
  pop();
}

//5th star
const amount4 = 70;
translate(600, 500);
for (let i4 = 10; i4 <= amount4; i4++) {
  const angle4 = 200 * i4 + frameCount;
  const rotation4 = sin(angle4)*10;
  const x4 = 1;
  const y4 = 1;
  const rectWidth4 = i4;
  const rectHeight4 = i4;
  push();
  noFill();
  stroke(color('rgba(227, 229, 200, 0.5)'));
  rotate(rotation4);
  line(x4,y4,rectWidth4, rectHeight4);
  pop();
}
}

