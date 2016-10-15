var boundary;
var end;
var start;
var status;
var mazeBoundary;
var win = false;
var outOfBound = false;

window.onload = function(){

boundary = document.querySelectorAll('.boundary');
mazeBoundary = document.getElementById("maze");
start =document.getElementById('start');
end = document.getElementById('end');
playerstatus = document.getElementById('status')

start.addEventListener("click", reset);
mazeBoundary.addEventListener("mouseleave", anticheat);
end.addEventListener("mouseover", WinStatus);
for (var i=0; i<boundary.length -1; i++ ){
	boundary[i].addEventListener("mouseover", highlight);
}

}



function highlight(){
	if(!win){
		if(!outOfBound){
			outOfBound = true;
			playerstatus.innerHTML= "you lose!, Click on the S to play again.";
			for (var i=0; i<boundary.length -1; i++) {
				boundary[i].setAttribute("class","boundary youlose");
			}

		}
	}
	
}

function WinStatus(){
		if(!outOfBound){
			win = true;
			playerstatus.innerHTML= "You win! To play again click on the S";
		}
}

function reset(){
	win = false;
	outOfBound = false;
	playerstatus.innerHTML = "Move your mouse over the 'S' to begin.";
	for (var i=0; i<boundary.length -1; i++) {
				boundary[i].setAttribute("class","boundary boundary");
			}
}

function anticheat(){
	if(!win){
		highlight();
	}
}