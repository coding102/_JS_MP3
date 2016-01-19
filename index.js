
var playlist = new Array('mp3file/classical.mp3', 'mp3file/newborn.mp3', 'mp3file/watchtower.mp3', 'mp3file/muse.mp3');
 


 // audio.addEventListener('ended', function () {
 //     i = ++i < playlist.length ? i : 0;
 //     console.log(i)
 //     audio.src = playlist[i];
 //     audio.play();
 // }, true);
 // audio.volume = 0.3;
 // audio.loop = false;
 // audio.src = playlist[0];
 // audio.play();
//this is the object jukebox which has methods to play, stop and load a new song

function Jukebox(song){
	//method to play the song
	//pass in the current loaded song with the argument
	this.play = function(song){
		song.play();
		return "Song is now playing";
	}
	//method to pause the song
	//pass in the current playing song with the argument
	this.pause = function(song){
		//use .pause to stop current song
		song.pause();
		return "Song is now paused.";
	}
	//method to load a new song
	//pass in the song to be loaded with the arugment
	this.newSong = function(song){
		song.load();
		return "Song is now loaded.";
	}
};

//don't create a new jukebox every time song is loaded
//on start up, intitalize jukebox by looping through an array of song choices
//so that they are all loaded into the jukebox




var audio = new Audio('mp3file/classical.mp3');
var j = new Jukebox(audio);
var newAudio = new Audio('mp3file/muse.mp3');

window.onload = function(){
	var playButton = document.getElementById("playButton");
		playButton.addEventListener("click", j.play(audio));

	var pauseButton = document.getElementById("pauseButton");
		pauseButton.addEventListener("click", j.pause(audio));

	var newSongButton = document.getElementById("loadButton");
		newSongButton.addEventListener("click", j.newSong(newAudio));

// when button clicked: j.play(currnet song)
};






