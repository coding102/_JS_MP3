var audio = new Audio(),
    i = 0;
var playlist = new Array('mp3file/classical.mp3', 'mp3file/newborn.mp3', 'mp3file/watchtower.mp3', 'mp3file/muse.mp3');

audio.addEventListener('ended', function () {
    i = ++i < playlist.length ? i : 0;
    console.log(i)
    audio.src = playlist[i];
    audio.play();
}, true);
audio.volume = 0.3;
audio.loop = false;
audio.src = playlist[0];
audio.play();




















// function play(){
//     var audio = document.getElementById("audio");
//     audio.play();
// }

// function pause(){
//     var audio = document.getElementById("audio");
//     audio.pause();
// }

//<button onclick="document.getElementById('song1').play()">Song 1</button><br />
//<button onclick="document.getElementById('song2').play()">Sound </button><br />

//this is the object jukebox which has methods to play, stop and load a new song
//function Jukebox(song){
//    
//	   //method to play the song
//	   this.play = function(){
//    var audio = document.getElementById("").      
//		  return "Song is now playing"
//}
////method to pause the song
//this.pause = function(){
//    var audio = document.getElementById("audio");
//		  audio.addEventListener("click", pause();)
//		  return "Song is now paused."
//}
//	//method to load a new song
//	this.load = function(){
//		return = "New Song Loaded"
//	}
//};
