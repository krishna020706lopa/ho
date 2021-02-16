class CAA {
    constructor(bodyA,bodyB) {
        var options = {
            bodyA:bodyA,
            bodyB:pointB,
            stifness:0.04,
            length:10
        }
        this.caa = Constraint.create(options);
        World.add(world,this.caa);
      }
      display(){
     var pointA = this.caa.bodyA.position;
     var pointB = pointB;
     strokeWeight(4);
     line(pointA.x,pointA.y,pointB.x,pointB.y);
      }
}