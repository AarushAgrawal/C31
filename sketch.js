var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  var plinko = [];
  var particle = [];
  var division = [];
}

function draw() {
  background(255,255,255);  

  for( var i = 0 ; i <=width ; i = i + 80){
      divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 40 ; j<=widht ; j = j + 50){
    plinkos.push(new Plinko(j , 75));
  }

  for(var j = 40 ; j<=widht ; j = j + 50){
    plinkos.push(new Plinko(j , 75));
  }

  for(var j = 40 ; j<=widht ; j = j + 50){
    plinkos.push(new Plinko(j , 75));
  }

  for(var j = 40 ; j<=widht ; j = j + 50){
    plinkos.push(new Plinko(j , 75));
  }

  for(var j = 40 ; j < particles.length ; j++){
    particles[j].display();
  }

  for( var i = 0 ; i < divisions.length ; i++){
    divisions[k].display();
  }

  drawSprites();
}