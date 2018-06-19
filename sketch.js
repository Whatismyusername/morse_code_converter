function setup(){
    var ctx = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    ctx.parent('container');
}

function draw(){
    background(51);
}

function Dot(){
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.xMovement = 0;
    this.yMovement = 0;
    this.radius = Math.random()*20;
    
    this.show = function(){
        
        ellipse(this.x, this.y, this.radius, this.radius);
        fill(255)
    }
}