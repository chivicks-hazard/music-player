const music = [
		{
			file: 'Burna_Boy_-_Last_Last.mp3',
			name: 'Last Last',
			artist: 'Burna Boy',
			album: 'Love, Damini',
			album_cover: 'burna_boy_-_love,_damini.png'
		},
		{
			file: 'Burna_Boy_-_Its_Plenty.mp3',
			name: 'Its Plenty',
			artist: 'Burna Boy',
			album: 'Love, Damini',
			album_cover: 'burna_boy_-_love,_damini.png'
		},
		{
			file: 'Burna_Boy_-_Common_Person.mp3',
			name: 'Common Person',
			artist: 'Burna Boy',
			album: 'Love, Damini',
			album_cover: 'burna_boy_-_love,_damini.png'
		},
		{
			file: 'Sia_-_Fist_Fighting_A_Sandstorm.mp3',
			name: 'Fist Fighting A Sandstorm',
			artist: 'Sia',
			album: 'This Is Acting',
			album_cover: 'sia_-_this_is_acting.png'
		},
		{
			file: 'Sia_-_Reaper.mp3',
			name: 'Reaper',
			artist: 'Sia',
			album: 'This Is Acting',
			album_cover: 'sia_-_this_is_acting.png'
		},
		{
			file: 'Sia_-_Space_Between.mp3',
			name: 'Space Between',
			artist: 'Sia',
			album: 'This Is Acting',
			album_cover: 'sia_-_this_is_acting.png'
		},
		{
			file: 'Juice_WRLD_-_Wishing_Well.mp3',
			name: 'Wishing Well',
			artist: 'Juice WRLD',
			album: 'Legends Never Die',
			album_cover: 'legends_never_die_-_juice_wrld.jpg'
		},
		{
			file: 'Juice_WRLD_ft_Marshmello_-_Come_And_Go.mp3',
			name: 'Come And Go',
			artist: 'Juice WRLD ft. Marshmello',
			album: 'Legends Never Die',
			album_cover: 'legends_never_die_-_juice_wrld.jpg'
		},
		{
			file: 'Westlife_-_Soledad.mp3',
			name: 'Soledad',
			artist: 'Westlife',
			album: 'Coast To Coast',
			album_cover: 'coast_to_coast_-_westlife.jpg'
		},
		{
			file: 'Westlife_-_I_Lay_My_Love_On_You.mp3',
			name: 'I Lay My Love On You',
			artist: 'Westlife',
			album: 'Coast To Coast',
			album_cover: 'coast_to_coast_-_westlife.jpg'
		},
		{
			file: 'Westlife_-_My_Love.mp3',
			name: 'My Love',
			artist: 'Westlife',
			album: 'Coast To Coast',
			album_cover: 'coast_to_coast_-_westlife.jpg'
		},
		{
			file: 'Ella_Henderson_-_Friends.mp3',
			name: 'Friends',
			artist: 'Ella Henderson',
			album: 'Glorious',
			album_cover: 'ella_henderson_-_glorious.jpg'
		},
		{
			file: 'Allen_Stone_-_Consider_Me.mp3',
			name: 'Consider Me',
			artist: 'Allen Stone',
			album: 'Building Balance',
			album_cover: 'allen_stone_-_building_balance.jpg'
		}
];

var musicPlayer = document.getElementById('MP');
var play_n_pause_btn = document.querySelector('.playPause');
var albumPic = document.getElementById('albumCover');
var noAlbumPic = document.querySelector('.fa-music');
var next_btn = document.querySelector('.fa-step-forward');
var prev_btn = document.querySelector('.fa-step-backward');
var songDetails = document.querySelector('.song-details');
var progressArea = document.querySelector('.mpProgress');
var progressBar = document.querySelector('.mpProgressBar');
var current_play_time = document.querySelector('.current-time');
var songTime = document.querySelector('.max-time');
var index = 0;

// Event Listeners
window.onload = loadMusic(index);

play_n_pause_btn.addEventListener('click', PlayPause)

next_btn.addEventListener('click', nextSong);

prev_btn.addEventListener('click', prevSong);

musicPlayer.addEventListener('timeupdate', playTime);

progressArea.addEventListener('click', seekPlay);


//Functions
// Loading the 'CDs' from the music array of objects 😉 
function loadMusic(musicIndex) {
	// body...
	musicPlayer.src = `media/music/${music[musicIndex].file}`;
	songDetails.children[0].innerText = `Name: ${music[musicIndex].name}`;
	songDetails.children[1].innerText = `Artist: ${music[musicIndex].artist}`;
	songDetails.children[2].innerText = `Album: ${music[musicIndex].album}`;
	if (music[musicIndex].album_cover === '') {
		albumPic.style.display = 'none';
		noAlbumPic.style.display = 'block';
	} else {
		noAlbumPic.style.display = 'none';
		albumPic.style.display = 'block';
		albumPic.src = `media/pic/${music[musicIndex].album_cover}`;
	}

}

// For the play and pause button
function PlayPause() {

	if (play_n_pause_btn.classList.contains('fa-play') === true) {
		playMusic();
	} else {
		pauseMusic();
	}	
	
}

// For playing
function playMusic(argument) {
	musicPlayer.play();
	if (play_n_pause_btn.classList.contains('fa-play') === true) {
		play_n_pause_btn.classList.remove('fa-play');
		play_n_pause_btn.classList.add('fa-pause');
		
	}
}

// For pausing, if that is a word
function pauseMusic(argument) {
	musicPlayer.pause();
	if (play_n_pause_btn.classList.contains('fa-pause') === true) {
		play_n_pause_btn.classList.remove('fa-pause');
		play_n_pause_btn.classList.add('fa-play');
	}
}

// This gives the Play Next button its function
function nextSong() {
	// body...
	index++;
	console.log(index);
	
	
	if (index > music.length - 1) {
		index = 0;
	}

	loadMusic(index);

	if (play_n_pause_btn.classList.contains('fa-play') === true) {
		pauseMusic();
	} else {
		playMusic();
	}

	if (musicPlayer.currentTime === 0) {
		progressBar.style.width = '0';
	}
}

// This gives the Play Prev button its function
function prevSong() {
	if (index > 0) {
		index--;
	}

	loadMusic(index);

	if (play_n_pause_btn.classList.contains('fa-play') === true) {
		pauseMusic();
	} else {
		playMusic();
	}

	if (musicPlayer.currentTime === 0) {
		progressBar.style.width = '0';
	}
}

// For the progress bar and song timers
function playTime(player) {
	const currentPlayTime = player.target.currentTime;
	const playDuration = player.target.duration;
	let progressWidth = (currentPlayTime / playDuration) * 100;
	progressBar.style.width = `${progressWidth}%`;

	musicPlayer.addEventListener('loadeddata', function(playdata) {
		let songDuration = playdata.target.duration;
		let totalMin = Math.floor(songDuration / 60);
		let totalSec = Math.floor(songDuration % 60);

		if (totalSec < 10) {
			totalSec = `0${totalSec}`;
		}

		songTime.innerText = `${totalMin}:${totalSec}`;
	})

	let currentMin = Math.floor(currentPlayTime / 60);
	let currentSec = Math.floor(currentPlayTime % 60);

	if (currentSec < 10) {
		currentSec = `0${currentSec}`;
	}

	current_play_time.innerText = `${currentMin}:${currentSec}`;
}

// If the progress bar is clicked at any point
function seekPlay(seek) {
	let progressWidth = progressArea.clientWidth;
	let clickedOfffsetX = seek.offsetX;
	let songDuration = musicPlayer.duration;

	// console.log(clickedOfffsetX);

	musicPlayer.currentTime = (clickedOfffsetX / progressWidth) * songDuration;

	if (play_n_pause_btn.classList.contains('fa-play') === true) {
		pauseMusic();
	}


}