# Youtube-Looper
Achrome extension to loop youtube videos. Just go to your favourite music video and click the loop icon on the top right. 

To do it the hard way, just add this javascript in the URL and hit enter:

``javascript: var x = document.getElementsByClassName('ytp-button-replay');  
setInterval(function(){
	if(x.length>0){
			x[0].click();
			console.log("you're welcome.");
		}
}, 3000);``
