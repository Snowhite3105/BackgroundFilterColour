function setup() {
    canvas = createCanvas(640,480);
    canvas.position(300,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_colour = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_colour);
}

function take_snapshot() {
    save('filter_image.png');
}

function filter() {
  tint_colour = document.getElementById("FilterColour").value;
}