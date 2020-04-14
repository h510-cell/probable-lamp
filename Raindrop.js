class Raindrop extends BaseClass{
    constructor(x,y){
      super(x,y,70,50);
      this.image=loadImage("sprites/raindrop.jfif");
      Matter.Body.setAngle(this.body,angle)
    }
}