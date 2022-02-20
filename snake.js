class Snakes{
    constructor(x,y,width,height){
        this.x = x
        this.y = y
        this.w = width
        this.h = height
    }

    show(){
        fill("purple");
        rect(this.x,this.y, this.w, this.h)
    }

    moveX(speed){
        this.x += speed;
    }
    moveY(speed){
        this.y += speed;
    }
}