function preload()
{

}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  Model = ml5.imageClassifier("MobileNet",ModelL);
}

function ModelL()
{
  console.log("MODEL LOADED!");
}

function draw()
{
  image(video,0,0,300,300);
  Model.classify(video,res);
}

function res(e,r)
{
  if (e)
  {
    console.error(e);
  }

  else
  {
    console.log(r);
    document.getElementById("object").innerHTML = r[0].label;
    document.getElementById("accuracy").innerHTML = r[0].confidence.toFixed(3);
  }
}

