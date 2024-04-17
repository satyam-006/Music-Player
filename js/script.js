// // // // let currentSong = new Audio();
// // // let songs;
// // // let currFolder;

// // // // function secondsToMinutesSeconds(seconds) {
// // // //     if (isNaN(seconds) || seconds < 0) {
// // // //         return "00:00";
// // // //     }

// // // //     const minutes = Math.floor(seconds / 60);
// // // //     const remainingSeconds = Math.floor(seconds % 60);

// // // //     const formattedMinutes = String(minutes).padStart(2, '0');
// // // //     const formattedSeconds = String(remainingSeconds).padStart(2, '0');

// // // //     return `${formattedMinutes}:${formattedSeconds}`;
// // // // }

// // // // async function getSongs(folder) {
// // // //     currFolder = folder;
// // // //     // console.log(folder)
// // // //     let a = await fetch(`/${folder}/`)
// // // //     let response = await a.text();
// // // //     let div = document.createElement("div")
// // // //     div.innerHTML = response;
// // // //     let as = div.getElementsByTagName("a")
// // // //     songs = []

// // //     // console.log(songs)
// // //     // for (let index = 0; index < as.length; index++) {
// // //     //     const element = as[index];
// // //     //     if (element.href.endsWith(".mp3")) {
// // //     //         songs.push(element.href.split(`/${folder}/`)[1])
// // //     //     }

// // //     // }
// // //     // Show all the songs in the playlist
// // //     // let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
// // //     // songUL.innerHTML = ""
// // //     // for (const song of songs) {
// // //     //     songUL.innerHTML = songUL.innerHTML + `<li><img class="invert" width="34" src="img/music.svg" alt="">
// // //     //                         <div class="info">
// // //     //                             <div> ${song.replaceAll("%20", " ")}</div>
// // //     //                         </div>
// // //     //                         <div class="playnow">
// // //     //                             <span>Play Now</span>
// // //     //                             <img class="invert" src="img/play1.svg" alt="">
// // //     //                         </div> </li>`;
// // //     // }

// // //     // Attach an event listener to each song
// // //     // Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
// // //     //     e.addEventListener("click", element => {
// // //     //         playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())

// // //     //     })
// // //     // })
// // // //     return songs


// // // // }

// // // // const playMusic = (track, pause = false) => {
// // // //     currentSong.src = `/${currFolder}/` + track

// // // //     // console.log(track)
// // // //     if (!pause) {
// // // //         currentSong.play()
// // // //         play.src = "img/pause.svg"
// // // //     }
// // // //     document.querySelector(".songinfo").innerHTML = decodeURI(track)
// // // //     document.querySelector(".songtime").innerHTML = "00:00"
// // // //     document.querySelector(".songtime1").innerHTML = "00:00"


// // // // }




// // // async function main() {
// // // //     // Get the list of all the songs
// // // //     // await getSongs("/songs/Arjitsingh")
// // // //     await getSongs("songs")
// // // //     // playMusic(songs[0], true)


// // // //     // Show all the songs in the playlist
// // //     // let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
// // //     // songUL.innerHTML = ""
// // //     // // let songFilenames=[]
// // //     // // console.log(songFilenames)
// // //     // for (const song of songs) {
// // //     //     {songFilenames.push(song.replaceAll("%20", " "))}
// // //     //     songUL.innerHTML = songUL.innerHTML + `<li>
// // //     //     <img class="invert" width="34" src="img/music.svg" alt="">
// // //     // <div class="info">
// // //     //     <div> ${song.replaceAll("%20", " ")}</div>
// // //     //     <div></div>
// // //     // </div>
// // //     // <div class="playnow">
// // //     //     <span style="color: white;">Play Now</span>
// // //     //     <img class="invert" src="img/play1.svg" alt="" id="listplay">
// // //     // </div>
// // //     // </li>`;
// // //     // }

// // //     // Load the playlist whenever card is clicked
// // //     // Array.from(document.getElementsByClassName("artist-card")).forEach(e => {
// // //     //     e.addEventListener("click", async item => {
// // //     //         // console.log("Fetching Songs")
// // //     //         await getSongs(`songs/${item.currentTarget.dataset.folder}`)
// // //     //         playMusic(songs[0])
// // //     //     })

// // //     // })

// // //     // Attach an event listener to each song
// // //     // Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
// // //     //     e.addEventListener("click", element => {
// // //     //         playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())

// // //     //     })
// // //     // })

// // //     // Attach an event listener to play, next and previous
// // //     // play.addEventListener("click", () => {
// // //     //     if (currentSong.paused) {
// // //     //         currentSong.play()
// // //     //         play.src = "img/pause.svg"
// // //     //         play1.src = "img/pause.svg"
// // //     //     }
// // //     //     else {
// // //     //         currentSong.pause()
// // //     //         play.src = "img/play.svg"
// // //     //         play1.src = "img/play.svg"
// // //     //     }
// // //     // })

// // //     // play1.addEventListener("click", () => {
// // //     //     if (currentSong.paused) {
// // //     //         currentSong.play()
// // //     //         play1.src = "img/pause.svg"
// // //     //         play.src = "img/pause.svg"
// // //     //     }
// // //     //     else {
// // //     //         currentSong.pause()
// // //     //         play1.src = "img/play.svg"
// // //     //         play.src = "img/play.svg"
// // //     //     }
// // //     // })


// // //     // // Listen for timeupdate event
// // //     // currentSong.addEventListener("timeupdate", () => {
// // //     //     let curTime = document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)}`
// // //     //     let curDuration = document.querySelector(".songtime1").innerHTML = `${secondsToMinutesSeconds(currentSong.duration)}`
// // //     //     let scrollValue = document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
// // //     //     function updateProgressBar(value) {
// // //     //         const progressBar = document.getElementById('progress');
// // //     //         progressBar.style.width = value;
// // //     //     }
// // //     //     updateProgressBar(scrollValue)

// // //     // })

// // //     // // Add an event listener to seekbar
// // //     // document.querySelector(".seek").addEventListener("click", e => {
// // //     //     let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
// // //     //     document.querySelector(".circle").style.left = percent + "%";
// // //     //     currentSong.currentTime = ((currentSong.duration) * percent) / 100;
// // //     // })


// // //     // previous.addEventListener("click", () => {
// // //     //     currentSong.pause()
// // //     //     // console.log("Previous clicked")
// // //     //     let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
// // //     //     if ((index - 1) >= 0) {
// // //     //         playMusic(songs[index - 1])
// // //     //     }
// // //     // })

// // //     // Add an event listener to next
// // //     // next.addEventListener("click", () => {
// // //     //     currentSong.pause()
// // //     //     // console.log("Next clicked")

// // //     //     let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
// // //     //     if ((index + 1) < songs.length) {
// // //     //         playMusic(songs[index + 1])
// // //     //     }
// // //     // })

// // //     // Add an event to volume
// // //     document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
// // //         // console.log("Setting volume to", e.target.value, "/ 100")
// // //         currentSong.volume = parseInt(e.target.value) / 100
// // //         if (currentSong.volume > 0) {
// // //             document.querySelector(".volume-svg").src = document.querySelector(".volume-svg").src.replace("mute.svg", "volume.svg")
// // //         }
// // //         else if (currentSong.volume == 0) {
// // //             document.querySelector(".volume-svg").src = document.querySelector(".volume-svg").src.replace("volume.svg", "mute.svg")
// // //         }
// // //     })

// // //     // Add event listener to mute the track
// // //     document.querySelector(".volume-svg").addEventListener("click", e => {
// // //         if (e.target.src.includes("volume.svg")) {
// // //             e.target.src = e.target.src.replace("volume.svg", "mute.svg")
// // //             currentSong.volume = 0;
// // //             document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
// // //         }
// // //         else {
// // //             e.target.src = e.target.src.replace("mute.svg", "volume.svg")
// // //             currentSong.volume = .10;
// // //             document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
// // //         }

// // //     })
// // // }

// // // main()


// // // // playnow btn hover
// // // window.onload = function (e) {
// // //     $(document).ready(function () {
// // //         $('.artist-card').append(`
// // //         <div class="plybtn"><img src="img/play.svg" alt=""></div>
// // //         `);
// // //     });
// // // }


// // // // volume function
// // // function displayNoneVolumebar() {
// // //     let volumeBar = document.querySelector(".volume-input");
// // //     if (volumeBar.style.opacity == 0) {
// // //         volumeBar.style.opacity = "1";
// // //     }
// // //     else {
// // //         volumeBar.style.opacity = "0";
// // //     }
// // // }
// // // function displayVolumebar() {
// // //     let volumeBar = document.querySelector(".volume-input");
// // //     if (volumeBar.style.opacity == 1) {
// // //         volumeBar.style.opacity == "0"
// // //     }
// // //     else {
// // //         volumeBar.style.opacity = "1";
// // //     }
// // // }

// // // // playlist display function
// // // // function displayPlaylit(){
// // // //     let Album=document.querySelector(".homepg");
// // // //     let library=document.querySelector(".songList");
// // // //     Album.style.display="none";
// // // //     library.style.display="block";
// // // // }
// // // // // Back funtion

// // // // function BackAlbum(){
// // // //     let Album=document.querySelector(".homepg");
// // // //     let library=document.querySelector(".songList");
// // // //     Album.style.display="block";
// // // //     library.style.display="none";

// // // // }

// // // // let art=document.querySelectorAll(".artist-card");
// // // // //
// // // // console.log(art)



// // let songFilenames = ["Achha Sila Diya.mp3",
// //     "Ae Dil Hai Mushkil.mp3",
// //     "AGAR TUM SAATH HO.mp3",
// //     "Ajab Prem Ki Ghazab Kahani.mp3",
// //     "Baarish Ki Jaaye.mp3",
// //     "Chhod Diya.mp3",
// //     "Dekhte Dekhte.mp3",
// //     "Dhoke Pyaar Ke.mp3",
// //     "Dhoor Pendi.mp3",
// //     "Dil Meri Na Sune.mp3",
// //     "Dil Tod Ke Official Song.mp3",
// //     "Filhaal 2.mp3",
// //     "Hamari Adhuri Kahani.mp3",
// //     "Har Kisi Ko Nahi Milta.mp3",
// //     "Hawayein.mp3",
// //     "High Rated Gabru.mp3",
// //     "Humdard.mp3",
// //     "ISHARE TERE (2).mp3",
// //     "ISHARE TERE.mp3",
// //     "Ishq Tera.mp3",
// //     "Jee Ve Sohneya Jee.mp3",
// //     "Jeene Laga Hoon.mp3",
// //     "Kale Je Libaas Di.mp3",
// //     "Kesariya.mp3",
// //     "KHAIRIYAT.mp3",
// //     "Kuch Bhi Ho Jaye.mp3",
// //     "Kuch Is Tarah.mp3",
// //     "Kya Loge Tum.mp3",
// //     "Lahore.mp3",
// //     "Main Rang Sharbaton Ka.mp3",
// //     "Mann Bharrya.mp3",
// //     "Mareez - E - Ishq.mp3",
// //     "Mitti De Tibbe.mp3",
// //     "Moonrise.mp3",
// //     "Naach Meri Rani.mp3",
// //     "New Punjabi Songs 2021.mp3",
// //     "Parindey.mp3",
// //     "Pehli.mp3",
// //     "Phir Bhi Tumko Chaahungi.mp3",
// //     "Piya O Re Piya.mp3",
// //     "Qismat.mp3",
// //     "Rafta Rafta.mp3",
// //     "Rona Chadita.mp3",
// //     "SAARI DUNIYA JALAA DENGE.mp3",
// //     "Samjhawan.mp3",
// //     "Soch Na Sake.mp3",
// //     "Tera Yaar Hoon Main.mp3",
// //     "Tere Bin.mp3",
// //     "Tere Sang Yaara.mp3",
// //     "Thodi Jagah.mp3",
// //     "Tujhe Kitna Chahne Lage.mp3",
// //     "UDD GAYA.mp3",
// //     "Yaar Ka Sataya Hua Hai.mp3",
// //     "Zohrajabeen.mp3"];
// // let currentSong = new Audio();
// // function secondsToMinutesSeconds(seconds) {
// //     if (isNaN(seconds) || seconds < 0) {
// //         return "00:00";
// //     }

// //     const minutes = Math.floor(seconds / 60);
// //     const remainingSeconds = Math.floor(seconds % 60);

// //     const formattedMinutes = String(minutes).padStart(2, '0');
// //     const formattedSeconds = String(remainingSeconds).padStart(2, '0');

// //     return `${formattedMinutes}:${formattedSeconds}`;
// // }
// // // Get reference to the audio player element in HTML
// // currentSong = document.getElementById("audioPlayer");
// // let songTitleElement = document.getElementById("songTitle");

// // // Function to play a song based on its filename
// // function playSong(filename) {
// //     currentSong.src = "songs/" + filename; // Assuming "songs" is the folder where your songs are stored
//     function presstoplay() {
//         currentSong.play();

//     }
// //     document.querySelector(".songinfo").innerHTML = decodeURI(filename)
// //     document.querySelector(".songtime").innerHTML = "00:00"
// //     document.querySelector(".songtime1").innerHTML = "00:00"


// //     // Update the song title displayed on the HTML page
// //     songTitleElement.textContent = filename;
// // }

// // // Function to play the next song in the array
// // function playNextSong() {
// //     var currentIndex = songFilenames.indexOf(songTitleElement.textContent);
// //     var nextIndex = (currentIndex + 1) % songFilenames.length;
// //     playSong(songFilenames[nextIndex]);
// //     //currentSong.play();
// //     if (currentSong.paused) {
// //         currentSong.play();
// //         play.src = "img/pause.svg"
// //         play1.src = "img/pause.svg"
// //     } else {
// //         currentSong.pause();
// //         play.src = "img/play.svg"
// //         play1.src = "img/play.svg"
// //     }
// // }

// // // Function to play the previous song in the array
// // function playPreviousSong() {
// //     var currentIndex = songFilenames.indexOf(songTitleElement.textContent);
// //     var previousIndex = (currentIndex - 1 + songFilenames.length) % songFilenames.length;
// //     playSong(songFilenames[previousIndex]);
// //     //currentSong.play();
// //     if (currentSong.paused) {
// //         currentSong.play();
// //         play.src = "img/pause.svg"
// //         play1.src = "img/pause.svg"
// //     } else {
// //         currentSong.pause();
// //         play.src = "img/play.svg"
// //         play1.src = "img/play.svg"
// //     }
// // }

// // // Example usage: Play the first song in the array when the page loads
// // playSong(songFilenames[0]);


// //         // Listen for timeupdate event
// //         currentSong.addEventListener("timeupdate", () => {
// //             let curTime = document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)}`
// //             let curDuration = document.querySelector(".songtime1").innerHTML = `${secondsToMinutesSeconds(currentSong.duration)}`
// //             let scrollValue = document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
// //             function updateProgressBar(value) {
// //                 const progressBar = document.getElementById('progress');
// //                 progressBar.style.width = value;
// //             }
// //             updateProgressBar(scrollValue)

// //         })

// //         // Add an event listener to seekbar
// //         document.querySelector(".seek").addEventListener("click", e => {
// //             let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
// //             document.querySelector(".circle").style.left = percent + "%";
// //             currentSong.currentTime = ((currentSong.duration) * percent) / 100;
// //         })

// // //         //const songListItems = Array.from(songFilenames);
// // //         //console.log(songListItems)
// // //         //const songLinks = songFilenames;
// // //         //songListItems.forEach((listItem, index) => {

// // //         // listItem.addEventListener("click", () => {
// // //         //if (index >= 0 && index < songLinks.length) {
// // //         //    play(songLinks[index]);
// // //         // } else {
// // //         //    console.error("Index out of bounds or link not found.");
// // //         //}
// // //         // });
// // //         //});
// // // let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
// // //         //songUL.innerHTML = ""
// // //         // let songFilenames=[]
// // //         // console.log(songFilenames)

// // //         //for (const song of songFilenames) {
// // //             //console.log(song)
// // songUL.innerHTML = songUL.innerHTML + `<li data_src=${song}>
// //            <img class="invert" width="34" src="img/music.svg" alt="">
// //         <div class="info">
// // <div> ${song}</div>
// //            <div></div>
// //        </div>
// //        <div class="playnow">
// //            <span style="color: white;">Play Now</span>
// //            <img class="invert" src="img/play1.svg" alt="" id="listplay">
// //         </div>
// //         </li>`;
// // //         //}

// // //         const playlist = document.getElementById('playlist');

// // //         // Iterate over the array of songs and create song elements
// // // songFilenames.forEach(song => {
// // //     const li = document.createElement('li');
// // //     li.textContent = song;
// // //     li.setAttribute('data-src', song);
// // //     li.classList.add('song');
// // //     playlist.appendChild(li);
// // // });
// // // playlist.addEventListener('click', function (event) {
// // //     // Check if the clicked element is a song
// // //     if (event.target.classList.contains('song')) {
// // //         // Get the audio source from data-src attribute of the clicked song
// // //         // const audioSrc = event.target.getAttribute('data-src');
// // //         // Get the audio element
// // //         const audioPlayer = document.getElementById('audioPlayer');
// // //         // Set the source of the audio element
// // //         audioPlayer.src = "songs/ISHARE TERE.mp3";
// // //         console.log(audioPlayer.src)
// // //         // Play the audio
// // //         audioPlayer.play();
// // //     }
// // // });
// // // audioPlayer.src = "../songs/ISHARE TERE.mp3";


// //         // Function to toggle play/pause
// //         function playPause() {
// //             if (currentSong.paused) {
// //                 currentSong.play();
// //                 play.src = "img/pause.svg"
// //                 play1.src = "img/pause.svg"
// //             } else {
// //                 currentSong.pause();
// //                 play.src = "img/play.svg"
// //                 play1.src = "img/play.svg"
// //             }
// //         }



// <script>
//     let currentSong = new Audio();
//     currentSong = document.getElementById("audioPlayer");
//     songFilenames = ["Achha Sila Diya.mp3",
//     "Ae Dil Hai Mushkil.mp3",
//     "AGAR TUM SAATH HO.mp3",
//     "Ajab Prem Ki Ghazab Kahani.mp3",
//     "Baarish Ki Jaaye.mp3",
//     "Chhod Diya.mp3",
//     "Dekhte Dekhte.mp3",
//     "Dhoke Pyaar Ke.mp3",
//     "Dhoor Pendi.mp3",
//     "Dil Meri Na Sune.mp3",
//     "Dil Tod Ke Official Song.mp3",
//     "Filhaal 2.mp3",
//     "Hamari Adhuri Kahani.mp3",
//     "Har Kisi Ko Nahi Milta.mp3",
//     "Hawayein.mp3",
//     "High Rated Gabru.mp3",
//     "Humdard.mp3",
//     "ISHARE TERE (2).mp3",
//     "ISHARE TERE.mp3",
//     "Ishq Tera.mp3",
//     "Jee Ve Sohneya Jee.mp3",
//     "Jeene Laga Hoon.mp3",
//     "Kale Je Libaas Di.mp3",
//     "Kesariya.mp3",
//     "KHAIRIYAT.mp3",
//     "Kuch Bhi Ho Jaye.mp3",
//     "Kuch Is Tarah.mp3",
//     "Kya Loge Tum.mp3",
//     "Lahore.mp3",
//     "Main Rang Sharbaton Ka.mp3",
//     "Mann Bharrya.mp3",
//     "Mareez - E - Ishq.mp3",
//     "Mitti De Tibbe.mp3",
//     "Moonrise.mp3",
//     "Naach Meri Rani.mp3",
//     "New Punjabi Songs 2021.mp3",
//     "Parindey.mp3",
//     "Pehli.mp3",
//     "Phir Bhi Tumko Chaahungi.mp3",
//     "Piya O Re Piya.mp3",
//     "Qismat.mp3",
//     "Rafta Rafta.mp3",
//     "Rona Chadita.mp3",
//     "SAARI DUNIYA JALAA DENGE.mp3",
//     "Samjhawan.mp3",
//     "Soch Na Sake.mp3",
//     "Tera Yaar Hoon Main.mp3",
//     "Tere Bin.mp3",
//     "Tere Sang Yaara.mp3",
//     "Thodi Jagah.mp3",
//     "Tujhe Kitna Chahne Lage.mp3",
//     "UDD GAYA.mp3",
//     "Yaar Ka Sataya Hua Hai.mp3",
//     "Zohrajabeen.mp3"];
//     // Get the parent element where you want to append the song list
//     let songTitleElement = document.getElementById("songTitle");



//     function secondsToMinutesSeconds(seconds) {
//     if (isNaN(seconds) || seconds < 0) {
//         return "00:00";
//     }

//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);

//     const formattedMinutes = String(minutes).padStart(2, '0');
//     const formattedSeconds = String(remainingSeconds).padStart(2, '0');

//     return `${formattedMinutes}:${formattedSeconds}`;
// }
//     function playSong(filename) {
//         currentSong.src = "songs/" + filename;
//     document.querySelector(".songinfo").innerHTML = decodeURI(filename)
//     document.querySelector(".songtime").innerHTML = "00:00"
//     document.querySelector(".songtime1").innerHTML = "00:00"



//     songTitleElement.textContent = filename;
//     currentSong.play();
// }
//     function playPreviousSong() {
//     var currentIndex = songFilenames.indexOf(songTitleElement.textContent);
//     var previousIndex = (currentIndex - 1 + songFilenames.length) % songFilenames.length;

//     if (currentSong.paused) {
//         currentSong.play();
//     play.src = "img/pause.svg"
//     play1.src = "img/pause.svg"
//     } else {
//         currentSong.pause();
//     play.src = "img/play.svg"
//     play1.src = "img/play.svg"
//     }
//     playSong(previousSong);
// }

//     function playNextSong() {
//     var currentIndex = songFilenames.indexOf(songTitleElement.textContent);
//     var nextIndex = (currentIndex + 1) % songFilenames.length;

//     if (currentSong.paused) {
//         currentSong.play();
//     play.src = "img/pause.svg"
//     play1.src = "img/pause.svg"
//     } else {
//         currentSong.pause();
//     play.src = "img/play.svg"
//     play1.src = "img/play.svg"
//     }
//     playSong(nextSong);
    
// }




//     const playlist = document.getElementById("playlst");


//     // Select the song list element
//     const songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];

// // Iterate over the array of songs and create song elements
// songFilenames.forEach(song => {
//     // Create a new list item element
//     const li = document.createElement('li');
//     // Set attributes and content for the list item
//     li.innerHTML = `
//     <img class="invert" width="34" src="img/music.svg" alt="">
//         <div class="info">
//             <div>${song}</div>
//             <div></div>
//         </div>
//         <div class="playnow">
//             <span style="color: white;">Play Now</span>
//             <img class="invert" src="img/play1.svg" alt="" id="listplay">
//         </div>
//         `;
//         // Set data source attribute
//         li.setAttribute('data-src', song);
//         // Add appropriate class
//         li.classList.add('song');
//         // Append the list item to the song list
//         songUL.appendChild(li);
// });


//         // Add event listener to dynamically generated song elements
//         playlist.addEventListener('click', function (event) {
//     // Check if the clicked element is a song
//     if (event.target.classList.contains('song')) {
//         // Get the audio source from data-src attribute of the clicked song
//         const audioSrc = event.target.getAttribute('data-src');
//         // Get the audio element
//         // Set the source of the audio element
//         audioPlayer.src = "songs/" + audioSrc;

//     }
// });



// // Listen for timeupdate event
// currentSong.addEventListener("timeupdate", () => {
//             let curTime = document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)}`
//         let curDuration = document.querySelector(".songtime1").innerHTML = `${secondsToMinutesSeconds(currentSong.duration)}`
//         let scrollValue = document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
//         function updateProgressBar(value) {
//         const progressBar = document.getElementById('progress');
//         progressBar.style.width = value;
//     }
//         updateProgressBar(scrollValue)

// })

// // Add an event listener to seekbar
// document.querySelector(".seek").addEventListener("click", e => {
//             let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
//         document.querySelector(".circle").style.left = percent + "%";
//         currentSong.currentTime = ((currentSong.duration) * percent) / 100;
// })




//         // Function to toggle play/pause
//         function playPause() {
//     if (currentSong.paused) {
//             currentSong.play();
//         play.src = "img/pause.svg"
//         play1.src = "img/pause.svg"
//     } else {
//             currentSong.pause();
//         play.src = "img/play.svg"
//         play1.src = "img/play.svg"
//     }
// }

//         document.getElementById("play").addEventListener("click", playPause);
//         document.getElementById("previous").addEventListener("click", playPreviousSong);
//         document.getElementById("next").addEventListener("click", playNextSong);
//         playSong(songFilenames[0]);
// </script>