var x = document.getElementsByClassName('ytp-button-replay');  
setInterval(function(){
	if(x.length>0){
			x[0].click();
			console.log("you're welcome.");
		}
}, 3000);