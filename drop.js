class drop{
    constructor(x,y){
        var options = {
            'friction':0.1,
        }
    
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.rain = Bodies.circle(x.y,5,5,options);
    World.add(world,this.rain)

}
update(){
    if(this.rain.position.y > height ){
        Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
    }
}
display(){
    fill("blue");
    ellipseMode(RADIUS)
    ellipse(this.x,this.y,this.radius,this.radius);
    
}
}