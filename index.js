window.onload = function(){
//set the playlist array of original mp3 files
var playlist = ['mp3file/breakingUp.mp3', 'mp3file/dayTrippin.mp3', 'mp3file/disarmYou.mp3', 'mp3file/neverSleepAlone.mp3', 'mp3file/phoenix.mp3', 'mp3file/promise.mp3', 'mp3file/tearDownTheseWalls.mp3', 'mp3file/weDontStop.mp3', 'mp3file/whatever.mp3', 'mp3file/whereAreYouNow.mp3'];
//create an empty array to push the JS created audio files into
var playlistAudio = [];
//set x to zero for use in the for in loop
x = 0;
//loop through the playlist of music files
for (x in playlist) {
	//construct each audio element from the original array of files
	song = new Audio(playlist[x]);
	//push each audio element into the playlistAudio array
	playlistAudio.push(song);
	//increment x by one to move onto the next index of the array
	x++;
};

//list the audio element array in console to check if it's working
console.log(playlistAudio);

//this is the object jukebox which has methods to play, stop and load a new song
//pass in the playlist you would like to load
function Jukebox(playlist){
	console.log(playlist);
	//check the length of the playlist
	playListLength = playlist.length;
	console.log(playListLength)
	//initialize the currentSong to the first one in the playlist
	currentSong = playlist[0]
	//method to play the song
	//pass in the current loaded song with the argument
   this.play = function(){
		currentSong.play();
   }
	//method to pause the song
	//pass in the current playing song with the argument
    this.pause = function(){
		//use .pause to stop current song
		currentSong.pause();
    }
    //next method to go to the next song in the array
    //set the counter to zero outside the method
    songCounter = 0;
    this.next = function(){
		//check if the song counter is greater than the playlist length
		if (songCounter == playListLength - 1){
		songCounter = 0;
		};
		//stop the current playing song
		currentSong.pause();
		//increment the song counter by one
		songCounter = songCounter + 1;
		console.log(songCounter);
		//set the current song to the next song in the the playlist array via songCounter
		currentSong = playlist[songCounter];
		console.log(playlist[songCounter]);
		//play the song once it gets to the next song so
		//the user does not have to hit the play button again
		currentSong.play();
		//return song counter for use in other methods
		songCounter;
	    };

    this.back = function() {
    	//songCounter at start of back
    	console.log(songCounter)
    	//pause the current song
    	currentSong.pause();
    	//subtract 1 from the songCounter to go back 1 song
    	songCounter = songCounter -1
    	//check to make sure it is not a neagtive number
    	//if it is, go the back to the end of the playlist
    	if (songCounter < 0){
    		songCounter = 9
    	};
    	//set the currentSong to the corresponding place in the playlist array
    	currentSong = playlist[songCounter];
    	//logging to check
		console.log(playlist[songCounter]);
		//play the newly set song
		currentSong.play();
		//return song counter for use in other methods
		songCounter;
    };
	//method to load a new playlist
	//pass in the song to be loaded with the arugment
	this.newPlaylist = function(){
		currentSong = song.load();
	};

};


//create the jukebox object and pass in the current playlist
var j = new Jukebox(playlistAudio);
//don't create a new jukebox every time song is loaded
//on start up, intitalize jukebox by looping through an array of song choices
//so that they are all loaded into the jukebox
	var backButton = document.getElementById("backButton");
	backButton.onclick = function(){
		j.back();
	};
	var nextButton = document.getElementById("nextButton");
    	nextButton.onclick = function(){
    		j.next();
    };

	var playButton = document.getElementById("playButton");
	playButton.onclick = function(){
		j.play();
	};

	var pauseButton = document.getElementById("pauseButton");
	pauseButton.onclick = function(){
		j.pause();
	};
};

//make an array of 50 songs, then real array of 10 songs, pick 4 random songs, if correct is picked, increment points.





