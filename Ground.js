class Ground {
    constructor(){
      var options = {
         isStatic:true
      }
      this.body = Bodies.rectangle(200,380,400,10);
     // this.width = width;
     // this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      
    }
  };