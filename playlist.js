const mySongs = [
    { 
        title: "I took a pill in Ibiza", 
        artist: "idk girl", 
        url: "https://www.dropbox.com/scl/fi/400idathjtc406osp2tp1/idiza.m4a?rlkey=c90fhtnynmsvql76rig7hyw6m&dl=1" // Use the exact filename!
    }

];
function startTurn() {
    currentSong = mySongs[Math.floor(Math.random() * mySongs.length)];
    audio.src = currentSong.url;
    
    audio.load(); // ADD THIS LINE
    audio.play(); 
    
    // ... rest of your timer code ...
}