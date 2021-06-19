class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.5,
            length:400
        }
        this.body=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.body);
    }
    display(){
        if(this.body.bodyA){
            var bodypos=this.body.bodyA.position;
            var pointpos=this.pointB;
            push();
            stroke(69);
            strokeWeight(4);
            line(pointpos.x,pointpos.y,bodypos.x,bodypos.y);
            pop();
        }
    }
}