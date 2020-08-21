class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajetory=[];
    this.smoke=loadImage('sprites/smoke.png');
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var pos=[this.body.position.x,this.body.position.y];
    if(this.body.position.x>200 && this.body.speed>10){
      this.trajetory.push(pos);
    }
    

    for(var i in this.trajetory){
      image(this.smoke,this.trajetory[i][0],this.trajetory[i][1]);

    }
    
    super.display();
  }
}
