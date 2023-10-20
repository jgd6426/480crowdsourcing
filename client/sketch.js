let socket;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  socket = io.connect('http://localhost:3000');

  socket.on('mouse', function(data) {
    // console.log("Got: " + data.x + " " + data.y);
    fill(random(255), random(255), random(255));
    noStroke();
    square(data.x, data.y, 20);
  });
}

function draw() {

}

function mouseClicked() {
  fill(255);
  noStroke();
  square(mouseX, mouseY, 20);

  sendmouse(mouseX, mouseY);
}

function sendmouse(xpos, ypos) {
  // console.log("sendmouse: " + xpos + " " + ypos);

  let data = {
    x: xpos,
    y: ypos
  };

  socket.emit('mouse', data);
}
