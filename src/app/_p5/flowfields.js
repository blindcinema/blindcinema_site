let particles = [];
const num = 1000;
let settings = [];
const noiseScale = 0.01;
let mousePos = [];


function setup() {
  canvas = createCanvas(400, 200);
  for (let i = 0; i < num; i++) {
    particles.push(createVector(random(width), random(height)));
    settings.push({r:random(200,255),g:random(200,255),b:random(200,255),weight:random(1,3)});;
  }
}

function draw() {
  background(0,10);
  for (i = 0 ; i < num; i++){
    let p = particles[i];

    let n = noise(p.x * noiseScale , p.y * noiseScale);
    let a = TAU * n ;
    p.x += cos(a);
    p.y += sin(a);    
    point(p.x, p.y);
    stroke(settings[i].r,settings[i].g,settings[i].b);
    strokeWeight(settings[i].weight);
    if (!onScreen(p)) {
      p.x = random(width);
     // p.x = random(width);
      p.y = random(height);
    };    
    
  }
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;  
}