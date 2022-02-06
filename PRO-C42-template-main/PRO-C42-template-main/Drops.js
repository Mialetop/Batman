class Drop {
    constructor(x,y){
        var options = {
            friction: 0.1,
        }
    
        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 50;
        World.add(world, this.rain)
     
        
    }

    display(){
        var pos = this.rain.position;
      
    }
    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }
}
