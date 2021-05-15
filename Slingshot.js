class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.005,
            length: 5
        }
        this.pointB = pointB;
        this.slnigshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }
    
    fly(){
        this.slingshsot.bodyA = null;
    }
    
    display(){
        if(this.slingshot.bodyA){        
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
