/* 
	Some music files to be played

	file: name of the file
	name: title of the song
	album_pic: album cover of the song
 */
var music = [
		{
			file: 'Aye.mp3',
			name: 'Aye',
			album_pic: 'desert.jpeg'
		},
		{
			file: 'Asa_Jailer.mp3',
			name: 'Jailer',
			album_pic: ''
		},
		{
			file: 'Bring It On.mp3',
			name: 'Bring It On',
			album_pic: 'desert3.jpeg'
		},
		{
			file: 'Burna_Boy_Ye.mp3',
			name: 'Ye',
			album_pic: 'forest.jpeg'
		},
		{
			file: 'Coldplay_-_Paradise.mp3',
			name: 'Paradise',
			album_pic: 'grass.jpeg'
		}
];

var index = 0;

/* music.html should be agood reference for this */
var play_pause_btn = document.querySelector('.playPause');
var prev_btn = document.querySelector('.fa-step-backward');
var next_btn = document.querySelector('.fa-step-forward');
var musicPlayer = document.getElementById('Music');
var Check = document.getElementById('check');
var MusicName = document.getElementById('mpName');
var albumPic = document.querySelector('.album-pic').children[0];
var noAlbumPic = document.querySelector('.album-pic').children[1];
// console.log(noAlbumPic);

window.onload = function() {
	loadMusic(index);
}

play_pause_btn.addEventListener('click', PlayPause);

// Loading the 'CDs' from the music array of objects 😉 
function loadMusic(musicIndex) {
	// body...
	musicPlayer.src = `media/music/${music[musicIndex].file}`;
	MusicName.innerText = music[musicIndex].name;
	if (music[musicIndex].album_pic === '') {
		albumPic.style.display = 'none';
		noAlbumPic.style.display = 'block';
	} else {
		noAlbumPic.style.display = 'none';
		albumPic.style.display = 'block';
		albumPic.src = `media/pic/${music[musicIndex].album_pic}`;
	}

}

// 
function PlayPause() {

	if (Check.innerText === 'Pause') {
		playMusic();
	} else {
		pauseMusic();
	}	
	
}

// For playing
function playMusic(argument) {
	musicPlayer.play();
	if (Check.innerText === 'Pause') {
		play_pause_btn.classList.remove('fa-play');
		play_pause_btn.classList.add('fa-pause');
		Check.innerText = 'Playing';
	}
}

// For pausing, if that is a word
function pauseMusic(argument) {
	musicPlayer.pause();
	if (Check.innerText === 'Playing') {
		play_pause_btn.classList.remove('fa-pause');
		play_pause_btn.classList.add('fa-play');
		Check.innerText = 'Pause';
	}
}

next_btn.addEventListener('click', nextSong);

// This gives the Play Next button its function
function nextSong() {
	// body...
	index++;
	console.log(index);
	
	
	if (index > music.length - 1) {
		index = 0;
	}

	loadMusic(index);

	if (Check.innerText === 'Pause') {
		pauseMusic();
	} else {
		playMusic();
	}
}

prev_btn.addEventListener('click', prevSong);

// This gives the Play Prev button its function
function prevSong() {
	if (index > 0) {
		index--;
	}

	loadMusic(index);

	if (Check.innerText === 'Pause') {
		pauseMusic();
	} else {
		playMusic();
	}
}