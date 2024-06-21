let currentSong = new Audio();
let songFilenames = ["Achha Sila Diya.mp3",
    "Ae Dil Hai Mushkil.mp3",
    "AGAR TUM SAATH HO.mp3",
    "Ajab Prem Ki Ghazab Kahani.mp3",
    "Baarish Ki Jaaye.mp3",
    "Chhod Diya.mp3",
    "Dekhte Dekhte.mp3",
    "Dhoke Pyaar Ke.mp3",
    "Dhoor Pendi.mp3",
    "Dil Meri Na Sune.mp3",
    "Dil Tod Ke Official Song.mp3",
    "Filhaal 2.mp3",
    "Hamari Adhuri Kahani.mp3",
    "Har Kisi Ko Nahi Milta.mp3",
    "Hawayein.mp3",
    "High Rated Gabru.mp3",
    "Humdard.mp3",
    "ISHARE TERE (2).mp3",
    "ISHARE TERE.mp3",
    "Ishq Tera.mp3",
    "Jee Ve Sohneya Jee.mp3",
    "Jeene Laga Hoon.mp3",
    "Kale Je Libaas Di.mp3",
    "Kesariya.mp3",
    "KHAIRIYAT.mp3",
    "Kuch Bhi Ho Jaye.mp3",
    "Kuch Is Tarah.mp3",
    "Kya Loge Tum.mp3",
    "Lahore.mp3",
    "Main Rang Sharbaton Ka.mp3",
    "Mann Bharrya.mp3",
    "Mareez - E - Ishq.mp3",
    "Mitti De Tibbe.mp3",
    "Moonrise.mp3",
    "Naach Meri Rani.mp3",
    "New Punjabi Songs 2021.mp3",
    "Parindey.mp3",
    "Pehli.mp3",
    "Phir Bhi Tumko Chaahungi.mp3",
    "Piya O Re Piya.mp3",
    "Qismat.mp3",
    "Rafta Rafta.mp3",
    "Rona Chadita.mp3",
    "SAARI DUNIYA JALAA DENGE.mp3",
    "Samjhawan.mp3",
    "Soch Na Sake.mp3",
    "Tera Yaar Hoon Main.mp3",
    "Tere Bin.mp3",
    "Tere Sang Yaara.mp3",
    "Thodi Jagah.mp3",
    "Tujhe Kitna Chahne Lage.mp3",
    "UDD GAYA.mp3",
    "Yaar Ka Sataya Hua Hai.mp3",
    "Zohrajabeen.mp3"];

let songTitleElement = document.getElementById("songTitle");

const playlist = document.getElementById("playlst");


// Select the song list element
const songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];

// Iterate over the array of songs and create song elements
songFilenames.forEach(song => {
    // Create a new list item element
    const li = document.createElement('li');
    // Set attributes and content for the list item
    li.innerHTML = `
    <img class="invert" width="34" src="img/music.svg" alt="">
        <div class="info">
            <div>${song}</div>
            <div></div>
        </div>
        <div class="playnow">
            <span style="color: white;">Play Now</span>
            <img class="invert" src="img/play1.svg" alt="" id="listplay">
        </div>
        `;
    // Set data source attribute
    li.setAttribute('data-src', song);
    // Add appropriate class
    li.classList.add('song');
    // Append the list item to the song list
    songUL.appendChild(li);

    li.addEventListener('click', () => {
        playSong(song);
        currentSong.play();
        document.getElementById("play").src = "img/pause.svg";
        document.getElementById("play1").src = "img/pause.svg";
    });
});

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}


// Listen for timeupdate event
currentSong.addEventListener("timeupdate", () => {
    let curTime = document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)}`
    let curDuration = document.querySelector(".songtime1").innerHTML = `${secondsToMinutesSeconds(currentSong.duration)}`
    let scrollValue = document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    function updateProgressBar(value) {
        const progressBar = document.getElementById('progress');
        progressBar.style.width = value;
    }
    updateProgressBar(scrollValue)

})

// Add an event listener to seekbar
document.querySelector(".seek").addEventListener("click", e => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    currentSong.currentTime = ((currentSong.duration) * percent) / 100;
})

// Main Functions
function playSong(filename) {
    currentSong.src = "songs/" + filename;
    document.querySelector(".songinfo").innerHTML = decodeURI(filename);
    document.querySelector(".songtime").innerHTML = "00:00";
    document.querySelector(".songtime1").innerHTML = "00:00";

    songTitleElement.textContent = filename;
}


function playPause() {
    if (currentSong.paused) {
        currentSong.play();
        play.src = "img/pause.svg"
        play1.src = "img/pause.svg"
    } else {
        currentSong.pause();
        play.src = "img/play.svg"
        play1.src = "img/play.svg"
    }
}
function playPreviousSong() {
    var currentIndex = songFilenames.indexOf(songTitleElement.textContent);
    var previousIndex = (currentIndex - 1 + songFilenames.length) % songFilenames.length;
    var previousSong = songFilenames[previousIndex];
    playSong(previousSong);
    if (currentSong.paused) {
        currentSong.play();
        play.src = "img/pause.svg"
        play1.src = "img/pause.svg"
    } else {
        currentSong.pause();
        play.src = "img/play.svg"
        play1.src = "img/play.svg"
    }
}

function playNextSong() {
    var currentIndex = songFilenames.indexOf(songTitleElement.textContent);
    var nextIndex = (currentIndex + 1) % songFilenames.length;
    var nextSong = songFilenames[nextIndex];
    playSong(nextSong);
    if (currentSong.paused) {
        currentSong.play();
        play.src = "img/pause.svg"
        play1.src = "img/pause.svg"
    } else {
        currentSong.pause();
        play.src = "img/play.svg"
        play1.src = "img/play.svg"
    }
}
// Add an event to volume
document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
    // console.log("Setting volume to", e.target.value, "/ 100")
    currentSong.volume = parseInt(e.target.value) / 100
    if (currentSong.volume > 0) {
        document.querySelector(".volume-svg").src = document.querySelector(".volume-svg").src.replace("mute.svg", "volume.svg")
    }
    else if (currentSong.volume == 0) {
        document.querySelector(".volume-svg").src = document.querySelector(".volume-svg").src.replace("volume.svg", "mute.svg")
    }
})

// Add event listener to mute the track
document.querySelector(".volume-svg").addEventListener("click", e => {
    if (e.target.src.includes("volume.svg")) {
        e.target.src = e.target.src.replace("volume.svg", "mute.svg")
        currentSong.volume = 0;
        document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
    }
    else {
        e.target.src = e.target.src.replace("mute.svg", "volume.svg")
        currentSong.volume = .10;
        document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
    }

})

// Event Listeners
document.getElementById("play").addEventListener("click", playPause);
document.getElementById("previous").addEventListener("click", playPreviousSong);
document.getElementById("next").addEventListener("click", playNextSong);
document.getElementById("extraplay").addEventListener("click", playPause);
// Initialization
playSong(songFilenames[0]);



// volume function
function displayNoneVolumebar() {
    let volumeBar = document.querySelector(".volume-input");
    if (volumeBar.style.opacity == 0) {
        volumeBar.style.opacity = "1";
    }
    else {
        volumeBar.style.opacity = "0";
    }
}
function displayVolumebar() {
    let volumeBar = document.querySelector(".volume-input");
    if (volumeBar.style.opacity == 1) {
        volumeBar.style.opacity == "0"
    }
    else {
        volumeBar.style.opacity = "1";
    }
}


function displayPlaylit() {
    let Album = document.querySelector(".homepg");
    let library = document.querySelector(".songList");
    Album.style.display = "none";
    library.style.display = "block";
}

function BackAlbum() {
    let Album = document.querySelector(".homepg");
    let library = document.querySelector(".songList");
    Album.style.display = "block";
    library.style.display = "none";

}
