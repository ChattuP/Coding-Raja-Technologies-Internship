// script.js

// Sample array of music tracks
const tracks = [
    { title: "Track 1", artist: "Artist 1", cover: "track1.jpg", audio: "track1.mp3" },
    { title: "Track 2", artist: "Artist 2", cover: "track2.jpg", audio: "track2.mp3" },
    // Add more tracks as needed
];

// Function to display music library
function displayMusicLibrary() {
    const musicLibrary = document.querySelector('.music-library');
    musicLibrary.innerHTML = '';
    tracks.forEach(track => {
        musicLibrary.innerHTML += `
            <div class="track">
                <img src="${track.cover}" alt="${track.title}">
                <div class="info">
                    <p>${track.title}</p>
                    <p>${track.artist}</p>
                </div>
            </div>
        `;
    });
}

// Function to play selected track
function playTrack(trackIndex) {
    const audio = new Audio(tracks[trackIndex].audio);
    audio.play();
}

// Function to display player controls
function displayPlayerControls() {
    const playerControls = document.querySelector('.player-controls');
    playerControls.innerHTML = `
        <button onclick="playTrack(0)">Play</button>
        <!-- Add other player controls as needed -->
    `;
}

// Call functions to initialize the application
displayMusicLibrary();
displayPlayerControls();
