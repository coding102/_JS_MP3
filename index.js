
// function play(){
//     var audio = document.getElementById("audio");
//     audio.play();
// }

// function pause(){
//     var audio = document.getElementById("audio");
//     audio.pause();
// }

//this is the object jukebox which has methods to play, stop and load a new song
function Jukebox(song){
	//method to play the song
	this.play = function(){
		return "Song is now playing"
	}
	//method to pause the song
	this.pause = function(){
		return "Song is now paused"
	}
	//method to load a new song
	this.load = function(){
		return = "New Song Loaded"
	}
};
