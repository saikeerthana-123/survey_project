const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState = 0;
var database;
var engine, world;
var input;
var submit;
var submit1;
var contin;
var userName;
var contin1;
var ans;
var cap;
var rand;
var reset;
var inputCount;

function setup() {
  createCanvas(1200,800);
  database = firebase.database();
  edges = createEdgeSprites();
  engine = Engine.create();
  world = engine.world;
  input = createInput('Type name here');
  inputCount = createInput('Type Answer here');
  ans = createInput('Type answer here');
  submit = createButton('Enter');
  reset = createButton('Play Again');
  submit1 = createButton('Enter');
  contin = createButton('Continue');
  contin1 = createButton('Continue');
}

function draw() {
  
  Engine.update(engine);
  if(gameState == 0) {
    background('rgb(199,206,234)'); 
    inputCount.hide();
    var input_value = input.value();
    if(input_value!=null && input_value!="Type name here"){ 
       submit.mousePressed(()=>{
       //input.hide(); 
       //submit.hide(); 
       userName = input.value();
       gameState = 1; 
      }); 
    }
    ans.hide();
    contin.hide();
    contin1.hide();
    reset.hide();
    submit1.hide();
    textSize(20);
    fill('white');
    text('Please Enter Your Name', 460, 200)
    input.position(500, 400);
    submit.position(550, 500);
  }

  if(gameState == 1) {
    background('rgb(199,206,234)'); 
    inputCount.hide();
    var input_value = input.value();
    if(input_value!=null && input_value!="Type name here"){ 
       submit.mousePressed(()=>{
       //input.hide(); 
       //submit.hide(); 
       userName = input.value();
       gameState = 2; 
      }); 
    }
    ans.hide();
    contin.hide();
    contin1.hide();
    reset.hide();
    submit1.hide();
    textSize(20);
    fill('white');
    text('Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?', 80, 200)
    input.position(500, 400);
    submit.position(550, 500);
  }

  if(gameState == 2) {
    background('rgb(199,206,234)'); 
    inputCount.hide();
    var input_value = input.value();
    if(input_value!=null && input_value!="Type name here"){ 
       submit.mousePressed(()=>{
       input.hide(); 
       submit.hide(); 
       userName = input.value();
       gameState = 3; 
      }); 
    }
    ans.hide();
    contin.hide();
    contin1.hide();
    reset.hide();
    submit1.hide();
    textSize(20);
    fill('white');
    text('Would you be willing to contribute a small amount every month for such a program?', 80, 200)
    input.position(500, 400);
    submit.position(550, 500);
  }

  if(gameState == 3){
    text('Thank You')
  }
}