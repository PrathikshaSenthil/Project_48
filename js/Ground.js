class Ground{

    constructor(x,y,w,h){
    
        this.body = Bodies.rectangle(x,y,w,h,{isStatic:true});
        this.w = w;
        this.h = h;
        this.image = loadImage("assets/ground.png");
        World.add(world,this.body);
    }

    display(){

        push()
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.h);
        pop()
    }
} 

