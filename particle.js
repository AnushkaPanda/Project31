class Particle {
    constructor(x, y,r) {
      var options = {
          isStatic:false,
          restitution:0,
          friction:1,
          density:1.2
      }
      this.x=x;
		this.y=y;
		this.r=r;
		
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{

			var particlepos=this.body.position;		

			push()
			translate(particlepos.x, particlepos.y);
			ellipse(0,0,this.r)
			rectMode(CENTER)
			strokeWeight(3);
			fill(255)
			pop()

	}
}
