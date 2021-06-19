class Ball{
    constructor(x,y,radius){
         var options={
            density: 1,
            frictionAir:0.05
         }
         this.body=Bodies.circle(x,y,radius,options);
         this.radius=radius;
         World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        strokeWeight(4);
        stroke(20,210,120);
        fill(240,204,220);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}