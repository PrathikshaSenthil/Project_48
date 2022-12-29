class Viking extends BaseClass{

    constructor(x,y){
        super(x,y,90,90);
        this.image = loadImage("assets/viking.png");
        this.visibility = 255;
        this.sizeX = 70;
        this.sizeY = 70;
    }

    display(){

       

        if(this.body.speed>3){

            World.remove(world,this.body); 
            push()
            this.visibility-=5;
          //  this.sizeX-=15;
           // this.sizeY-=15;
            tint(255,this.visibility);
            image(this.image,this.body.position.x,this.body.position.y,50,50);
            pop()
        }

        else{
            super.display();
        }
    }

    score(){
        if(this.visibility< 0 && this.visibility> -1005){
            score+= 5;
        }
    }

}