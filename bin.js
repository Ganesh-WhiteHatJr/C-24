class Bin{
    constructor(x,y) {
        var options = {
            'isStatic': true
        }
        this.width=200;
        this.height=100;
        this.thickness=20;
        this.angle=0;
        
        this.bottomBody = Bodies.rectangle(x, y,this.width, this.thickness, options);

        this.leftBody = Bodies.rectangle(x-this.width/2, y-this.height/2, this.thickness, this.height, options);
        Matter.Body.setAngle(this.leftBody, this.angle);

        this.rightBody = Bodies.rectangle(x+this.width/2, y-this.height/2, this.thickness, this.height, options);
        Matter.Body.setAngle(this.rightBody, -1*this.angle);

        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
      }
      display(){
        push();
        translate(this.leftBody.position.x, this.leftBody.position.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        rotate(this.angle);
        rect(0, 0, this.thickness, this.height);
        pop();

        push();
        translate(this.rightBody.position.x, this.rightBody.position.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        rotate(-1*this.angle);
        rect(0, 0, this.thickness, this.height);
        pop();

        push();
        translate(this.bottomBody.position.x, this.bottomBody.position.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        rect(0, 0,this.width, this.thickness);
        pop();
      }
}