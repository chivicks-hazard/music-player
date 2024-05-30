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

var musicHolder = document.getElementById('mpBody');
var musicPlayer = document.querySelector('.mp');
var musicAudioPlayer = document.getElementById('MP');
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
var volumeState = document.querySelector('.mpVolume .fas');
var volumeHolder = document.querySelector('.mpVolumeRange');
var lightNDarkSwitch = document.querySelector('.lightndark .switch input[type="checkbox"]');

var index = 0;

class musicModule {
	constructor(mp_db, mp, song_index) {
		this.mp_db = mp_db;
		this.mp = mp;
		this.song_index = song_index;
	}

	get_SI = function() {
		return this.song_index;
	}

	set_SI = function(index) {
		this.song_index = index;
	}

	loadMusic = function(index) {
		const musicIndex = index;

		musicAudioPlayer.src = `media/music/${music[musicIndex].file}`;
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

	playMusic = function(playBtn) {
		this.mp.play();
		if (playBtn.classList.contains('fa-play')) {
			playBtn.classList.remove('fa-play');
			playBtn.classList.add('fa-pause');
			
		}


		SongListItems.forEach(function(a) {
			if (songDetails.children[0].innerText === a.children[2].innerText) {
				console.log('YES')
			}
		})

		
	}

// For pausing, if that is a word
	pauseMusic = function(playBtn) {
		this.mp.pause();
		if (playBtn.classList.contains('fa-pause')) {
			playBtn.classList.remove('fa-pause');
			playBtn.classList.add('fa-play');
		}
	}

	displayTime = function() {
		this.mp.ontimeupdate = function(player) {
			const currentPlayTime = player.target.currentTime;
			const playDuration = player.target.duration;
			let progressWidth = (currentPlayTime / playDuration) * 100;
			progressBar.style.width = `${progressWidth}%`;

			musicAudioPlayer.addEventListener('loadeddata', function(playdata) {
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
	}

	changeColor = function(player) {
		this.mp.ontimeupdate = function() {
			

			let red = Math.floor((Math.random() * 256) + 50);
			let green = Math.floor((Math.random() * 256) + 50);
			let blue = Math.floor((Math.random() * 256) + 50);

			let RGB = `rgb(${red}, ${green}, ${blue})`;

			let musicBG = document.querySelector('.mp');
			musicBG.style.borderColor = RGB;
			musicBG.style.boxShadow = `0 0 10px 5px ${RGB}`;
		}
	}

	playTime = function() {
		return this.mp.duration;
	}

	

	nextSong = function() {
		let musicIndex = this.song_index;

		musicIndex++;

		if (musicIndex > music.length - 1) {
			musicIndex = 0;
		}

		this.set_SI(musicIndex);

		this.loadMusic(this.get_SI());

		if (play_n_pause_btn.classList.contains('fa-play') === true) {
			this.mp.pause();
		} else {
			this.mp.play();
		}

		if (musicAudioPlayer.currentTime === 0) {
			progressBar.style.width = '0';
		}

		
		
	}

	prevSong = function() {
		let musicIndex = this.song_index;

		if (musicIndex > 0) {
			musicIndex--;
		}

		this.set_SI(musicIndex);

		this.loadMusic(this.get_SI());

		if (play_n_pause_btn.classList.contains('fa-play') === true) {
			this.mp.pause();
		} else {
			this.mp.play();
		}

		if (musicAudioPlayer.currentTime === 0) {
			progressBar.style.width = '0';
		}
	}

	
}

const Player = new musicModule(music, musicAudioPlayer, index);

Player.displayTime();

next_btn.addEventListener('click', function() {
	Player.nextSong();

	SongListItems.forEach((a) => {
		if (Player.get_SI() === a.dataset.index) {
			console.log('YES');
		}
	})
});

prev_btn.addEventListener('click', function() {
	Player.prevSong();
});

window.onload = Player.loadMusic(Player.get_SI());

Player.mp.onended = function() {
	Player.nextSong();
}

progressArea.addEventListener('click', function(seek) {
	let progressWidth = progressArea.clientWidth;
	let clickedOfffsetX = seek.offsetX;
	let songDuration = musicAudioPlayer.duration;
	Player.mp.currentTime = (clickedOfffsetX / progressWidth) * songDuration;

	if (play_n_pause_btn.classList.contains('fa-play') === true) {
		Player.pauseMusic(play_n_pause_btn);
	}


})

play_n_pause_btn.addEventListener('click', function() {
	console.log(1);
	if (play_n_pause_btn.classList.contains('fa-play') === true) {
		Player.playMusic(play_n_pause_btn);
	} else {
		Player.pauseMusic(play_n_pause_btn);
	}
});

lightNDarkSwitch.addEventListener('change', (e) => {
	if (e.target.checked) {
		musicHolder.classList.remove('light');
		musicHolder.classList.add('dark');

		musicPlayer.classList.remove('light');
		musicPlayer.classList.add('dark');

		Player.changeColor();
	} else {
		musicHolder.classList.remove('dark');
		musicHolder.classList.add('light');

		musicPlayer.classList.remove('dark');
		musicPlayer.classList.add('light');
	}
})