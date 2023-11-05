
class Box
  {
    constructor(x,y,w,h,newColor){
      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;
      this.color = newColor;
    }
    display(){
      fill(this.color);
      rect(this.x,this.y,this.width,this.height);
    }
  }

   
  

  
