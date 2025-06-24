// Taking the variable to load all the buttons
const audio=document.getElementById('audio');
const back_but=document.getElementById('backwards');
const play_but=document.getElementById('Play');
const pause_but=document.getElementById('Pause');
const for_but=document.getElementById('forwards');
const progress=document.getElementById('progress');
const vol_up=document.getElementById('vol_up');
const vol_down=document.getElementById('vol_down');
const buts=document.getElementsByClassName('song_');
const pica=document.getElementById('song-pic');
const song=document.getElementById('songs');
const singer=document.getElementById('singer');
const lyrics=document.getElementById('lyrics');
const composer=document.getElementById('composer');
const label=document.getElementById('label');

//Adding the functionality of each button

play_but.addEventListener('click',()=>{
    audio.play();
});

pause_but.addEventListener('click',()=>{
    audio.pause();
});

for_but.addEventListener('click',()=>{
    audio.currentTime+=10;
});;

back_but.addEventListener('click',()=>{
    audio.currentTime-=10;
});

//This is for movement of progress bar as the song progresses.
audio.addEventListener('timeupdate',()=>{
    progress.value=(audio.currentTime)/(audio.duration)*100
});

//This is when user click the progress bar and move it to desired position and song play from there onwards.
progress.addEventListener('input',()=>{
    audio.currentTime=(progress.value/100)*audio.duration;
});

vol_up.addEventListener('click',()=>{
    if(audio.volume<1.0){
        audio.volume=Math.min(1.0,audio.volume+0.1);
    }
});

vol_down.addEventListener('click',()=>{
    if(audio.volume>0.0){
        audio.volume=Math.max(0.0,audio.volume-0.1);
    }
});

//When user click the song from song list than the below changes work. Here the songs and other things related to song can be changed as per user's choice.
Array.from(buts).forEach((but)=>{
    but.addEventListener('click',()=>{
        if(but.id=='but1'){
            audio.src='C:/Users/kirta/Downloads/Music Player/Music_Player/Main Dhoondne Ko Zamaane Mein (Heartless)_64-(PagalWorld.Ink).mp3';
            pica.src='C:/Users/kirta/Downloads/Music Player/Music_Player/song-1.jpg';
            song.textContent='Main Dhoondne Ko Zamaane Mein';
            singer.textContent='Arijit Singh';
            lyrics.textContent='Arafat Mehmood';
            composer.textContent='Gaurav Dagaonkar';
            label.textContent='T-Series';
            audio.play();
        }
        if(but.id=='but2'){
            audio.src='C:/Users/kirta/Downloads/Music Player/Music_Player/Brown Rang-128kbps.mp3';
            pica.src='C:/Users/kirta/Downloads/Music Player/Music_Player/song-2.jpg';
            song.textContent='Brown Rang';
            singer.textContent='Yo Yo Honey Singh';
            lyrics.textContent='Yo Yo Honey Singh';
            composer.textContent='Yo Yo Honey Singh'
            label.textContent='T-Series';
            audio.play();
        }
        if(but.id=='but3'){
            audio.src='C:/Users/kirta/Downloads/Music Player/Music_Player/Ride It - PagalWorld.mp3';
            pica.src='C:/Users/kirta/Downloads/Music Player/Music_Player/song-3.jpg';
            song.textContent='Ride It';
            singer.textContent='Jay Sean';
            lyrics.textContent='Jay Sean & Alan Sampson';
            composer.textContent='Alan Sampson';
            label.textContent='Jayded and 2Point9 Records';
            audio.play();
        }
        if(but.id=='but4'){
            audio.src='C:/Users/kirta/Downloads/Music Player/Music_Player/Dheere Dheere Chuke Mere - PagalWorld.mp3';
            pica.src='C:/Users/kirta/Downloads/Music Player/Music_Player/song-4.jpg';
            song.textContent='Dheere Dheere Chhuke';
            singer.textContent='Shilpa Rao';
            lyrics.textContent='Kausar Munir ';
            composer.textContent='Anirudh Ravichander';
            label.textContent='T-Series';
            audio.play();
        }
        if(but.id=='but5'){
            audio.src='C:/Users/kirta/Downloads/Music Player/Music_Player/Main Ishq Likhu Tujhe Ho Jaye - PagalWorld.mp3';
            pica.src='C:/Users/kirta/Downloads/Music Player/Music_Player/song-5.jpg';
            song.textContent='Ishq';
            singer.textContent='Faheem Abdullah & Rauhan Malik';
            lyrics.textContent='Amir Ameer';
            composer.textContent='Faheem Abdullah & Rauhan Malik';
            label.textContent='Artiste First';
            audio.play();
        }
    })
})