const songs = [
{
title: "Shape of You",
artist: "Ed Sheeran",
src: "songs/shapeofyou.mp3"
},

{
title: "Blinding Lights",
artist: "The Weeknd",
src: "songs/blindinglights.mp3"
},

{
title: "Believer",
artist: "Imagine Dragons",
src: "songs/believer.mp3"
}
];

let currentSong = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

function loadSong(){
audio.src = songs[currentSong].src;
title.textContent = songs[currentSong].title;
artist.textContent = songs[currentSong].artist;
}

function playPause(){

if(audio.paused){
audio.play();
}
else{
audio.pause();
}

}

function nextSong(){

currentSong++;

if(currentSong >= songs.length)
currentSong = 0;

loadSong();
audio.play();

}

function prevSong(){

currentSong--;

if(currentSong < 0)
currentSong = songs.length - 1;

loadSong();
audio.play();

}

audio.addEventListener("timeupdate",()=>{

progress.value = (audio.currentTime / audio.duration) * 100;

});

progress.addEventListener("input",()=>{

audio.currentTime = (progress.value / 100) * audio.duration;

});

volume.addEventListener("input",()=>{

audio.volume = volume.value;

});

audio.addEventListener("ended",nextSong);

loadSong();
