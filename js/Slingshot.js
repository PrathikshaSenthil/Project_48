class Slingshot{

    constructor(stone,p){

        var options = {

            bodyA: stone,
            pointB: p,
            stiffness: 0.04,
            length: 10
        }

        this.sling1 = loadImage("assets/sling1.png");
        this.sling2 = loadImage("assets/sling2.png");
        this.sling3 = loadImage("assets/sling3.png");

        this.p = p;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    fly(){
     this.sling.bodyA =null;
    }   

    attach(a){
     this.sling.bodyA = a;
    }


    display(){

        image(this.sling1,200,200);
        image(this.sling2,170,200);

        if(this.sling.bodyA){
            var pa = this.sling.bodyA.position;
            var pb = this.p;

            push()
            stroke(48,22,8);
            if(pa.x>220){
             strokeWeight(3);
             line(pa.x+25,pa.y,pb.x-10,pb.y);
             line(pa.x+25,pa.y,pb.x+30,pb.y-3);
             image(this.sling3,pa.x+25,pa.y-10,15,30);

            }

            else{
                strokeWeight(7);
                line(pa.x-20,pa.y,pb.x-10,pb.y);
                line(pa.x-20,pa.y,pb.x+30,pb.y-3);
                image(this.sling3,pa.x-30,pa.y-10,15,30);
   

            }
        }
       
    }
}