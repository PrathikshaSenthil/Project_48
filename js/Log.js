class Log extends BaseClass{

    constructor(x,y,h,angle){
        super(x,y,20,h,angle);
        this.image = loadImage("assets/wood2.png");
        Body.setAngle(this.body,angle);
    }
}