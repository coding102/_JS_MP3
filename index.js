
var hysteria = new Audio('mp3file/muse.mp3')
var classical = new Audio('mp3file/classical.mp3')

//this is the object jukebox which has methods to play, stop and load a new song
function Jukebox(song){
	//method to play the song
	this.play = function(song){
		return "Song is now playing"
	}
	//method to pause the song
	//pass in the current playing song with the argument
	this.pause = function(song){
		//set pauseB to the DOM element pause button
		var pauseB = document.getElementById("pause");
		//on click, invoke the pause function on the current playing song
		pauseB.onclick = function(){song.pause()}
		return "Song is now paused."
	}
	//method to load a new song
	//pass in the song to be loaded with the arugment
	this.load = function(song){
		//set loadB to the DOM element load button
		var loadB = document.getElementById("load")
		//on click, invoke the load function on the song argument to load it
		loadB.onclick = function(){song.load}
		return "Song is now loaded."
	}
};

//don't create a new jukebox every time song is loaded
//on start up, intitalize jukebox by looping through an array of song choices
//so that they are all loaded into the jukebox
var j = new Jukebox([""])
j.play
