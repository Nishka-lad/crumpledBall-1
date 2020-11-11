class dustbin
{
	constructor(){
this.bottomBody=Bodies.rectangle(1100,530,200,20, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(990,490,20,100,{isStatic:true})
		this.rightWallBody=Bodies.rectangle(1200,490,20,100,{isStatic:true})
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;
      fill("black")
rect(posLeft.x,posLeft.y,20,100);		
rect(posRight.x,posRight.y,20,100 );		
rect(posBottom.x,posBottom.y,200,20 );
	
	}

}