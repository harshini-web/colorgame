var nofsqres=6;
var colors =generaterandomcolor(6);
var squares =document.querySelectorAll(".square");
var pickcolor =pickingcolor();
var dispcolor =document.getElementById("dispcolor");
dispcolor.textContent = pickcolor;
var msgdisplay=document.getElementById("msgdisplay");
var header=document.getElementById("header");
var resetbutton=document.getElementById("reset");
var easybtn=document.getElementById("easybtn");
var hardbtn=document.getElementById("hardbtn");
easybtn.addEventListener("click", function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	nofsqres=3;
	colors =generaterandomcolor(nofsqres);
 	pickcolor=pickingcolor();
 	dispcolor.textContent = pickcolor;
 	for(var i=0; i<squares.length; i++)
        {
        	if(colors[i])
        	{
        		squares[i].style.backgroundColor = colors[i];
        	}
        	else
        	{
        		squares[i].style.display = "none";
        	}
			
		}
});
hardbtn.addEventListener("click", function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	nofsqres=6;
	colors =generaterandomcolor(nofsqres);
 	pickcolor=pickingcolor();
 	dispcolor.textContent = pickcolor;
 	for(var i=0; i<squares.length; i++)
        {
        	
        	{
        		squares[i].style.backgroundColor = colors[i];
        		squares[i].style.display = "block";
        	}
			
		}

});



 resetbutton.addEventListener("click", function(){
 	colors =generaterandomcolor(nofsqres);
 	pickcolor=pickingcolor();
 	dispcolor.textContent = pickcolor;
 	for(var i=0; i<squares.length; i++)
        {
			squares[i].style.backgroundColor = colors[i];
		}
		header.style.backgroundColor="steelblue";
		msgdisplay.textContent="";
		this.textContent="NEW COLOR";
 });
for(var i=0; i<squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedcolor=this.style.backgroundColor;
		
		if(clickedcolor === pickcolor)
		{
			msgdisplay.textContent="Correct";
			changecolor(clickedcolor);
			header.style.background=clickedcolor;
			resetbutton.textContent="Try again";

        }
        else
        {
        	this.style.backgroundColor= "#232323";
        	msgdisplay.textContent="Try again";
        }

		
	});
	
}
function changecolor(clickedcolor){
	for(var i=0; i<squares.length; i++)
			{
	         squares[i].style.backgroundColor = pickcolor;
		    }

};
function pickingcolor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];

}
function generaterandomcolor(num){
	var arr=[];
	for (var i = 0; i <num; i++) {
		arr.push(randomcolor());
		
	}


	return arr;
}
function randomcolor(){
	r= Math.floor(Math.random() * 256);
	g= Math.floor(Math.random() * 256);
	b= Math.floor(Math.random() * 256);
	 return "rgb("+ r +", " + g +", "+b+")";
}




