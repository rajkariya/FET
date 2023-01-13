let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   
   {
     name: "CLOSER",
     path: "music/english/closer.mp3",
     img: "musicimages/english/closer.jpg",
     singer: "CHAINSMOKERS"
   },
   {
    name: "ALONE",
    path: "music/english/alone.mp3",
    img: "musicimages/english/alone.jpg",
    singer: "MARSHEMELLO"
  },
  {
    name: "ALONE PT 2",
    path: "music/english/alonept2.mp3",
    img: "musicimages/english/alonept2.jpg",
    singer: "ALAN WAKLER | AVA MAX"
  },
  {
    name: "ANIMALS",
    path: "music/english/animals.mp3",
    img: "musicimages/english/animals.jpg",
    singer: "MAROON 5"
  },
  {
    name: "BABY",
    path: "music/english/baby.mp3",
    img: "musicimages/english/baby.jpg",
    singer: "JUSTIN BIEBER"
  },
  {
    name: "BURN",
    path: "music/english/burn.mp3",
    img: "musicimages/english/burn.jpg",
    singer: "ELLIE GOULDING"
  },
  {
    name: "CHEAP THRILLS",
    path: "music/english/cheapthrills.mp3",
    img: "musicimages/english/cheapthrills.jpg",
    singer: "SIA "
  },
  {
    name: "HYMN FOR THE WEEKEND",
    path: "music/english/hymnfortheweekend.mp3",
    img: "musicimages/english/coldplay.jpg",
    singer: "COLDPLAY"
  },
  {
    name: "COUNTING STARS",
    path: "music/english/countingstars.mp3",
    img: "musicimages/english/countingstars.jpg",
    singer: "ONE REPUBLIC"
  },
  {
    name: "DARK HORSE",
    path: "music/english/darkhorse.mp3",
    img: "musicimages/english/darkhorse.jpg",
    singer: "KATY PERRY"
  },
  {
    name: "DARKSIDE",
    path: "music/english/darkside.mp3",
    img: "musicimages/english/darkside.jpg",
    singer: "ALAN WALKER"
  },
  {
    name: "DIAMONDS",
    path: "music/english/diamonds.mp3",
    img: "musicimages/english/diamonfs.jpg",
    singer: "RIHANNA"
  },
  {
    name: "NEVER SAY NEVER",
    path: "music/english/neversaynever.mp3",
    img: "musicimages/english/neversaynever.jpg",
    singer: "JUSTIN BIEBER"
  },
  {
    name: "STARS",
    path: "music/english/stars.mp3",
    img: "musicimages/english/stars.jpg",
    singer: "MARSHMELLO"
  },
  {
    name: "UNSTOPPABLE",
    path: "music/english/unstoppable.mp3",
    img: "musicimages/english/unstoppable.jpg",
    singer: "SIA"
  },
  {
    name: "DUSK TILL DAWN",
    path: "music/english/dusktilldawn.mp3",
    img: "musicimages/english/dusktilldawn.jpg",
    singer: "ZAYN"
  },
  {
    name: "NUMB",
    path: "music/english/numb.mp3",
    img: "musicimages/english/numb.jpg",
    singer: "LINKIN PARK"
  },
  {
    name: "STAY",
    path: "music/english/stay.mp3",
    img: "musicimages/english/stay.jpg",
    singer: "JUSTIN BIEBER"
  },
  {
    name: "WAKA WAKA",
    path: "music/english/wakawaka.mp3",
    img: "musicimages/english/wakawaka.jpg",
    singer: "SHAKIRA"
  },
  {
    name: "FADED",
    path: "music/english/faded.mp3",
    img: "musicimages/english/faded.jpg",
    singer: "ALAN WALKER"
  },
  {
    name: "ON MY WAY",
    path: "music/english/onmyway.mp3",
    img: "musicimages/english/onmyway.jpg",
    singer: "ALAN WALKER"
  },
  {
    name: "SUGAR",
    path: "music/english/sugar.mp3",
    img: "musicimages/english/sugar.jpg",
    singer: "MAROON 5"
  },
  {
    name: "WAKE ME UP",
    path: "music/english/wakemeup.mp3",
    img: "musicimages/english/wakemeup.jpg",
    singer: "AVICII"
  },
  {
    name: "GIRLS LIKE YOU",
    path: "music/english/girlslikeyou.mp3",
    img: "musicimages/english/girlslikeyou.jpg",
    singer: "MAROON 5"
  },
  {
    name: "ON THE FLOOR",
    path: "music/english/onthefloor.mp3",
    img: "musicimages/english/onthefloor.jpg",
    singer: "JENNIFER LOPEZ"
  },
  {
    name: "SWEET BUT PSYCHO",
    path: "music/english/sweetbutpsycho.mp3",
    img: "musicimages/english/sweetbutpsycho.jpg",
    singer: "AVA MAX"
  },
  {
    name: "YUMMY ",
    path: "music/english/yummy.mp3",
    img: "musicimages/english/yummy.jpg",
    singer: "JUSTIN BIEBER"
  },
  {
    name: "HAPPIER",
    path: "music/english/happier.mp3",
    img: "musicimages/english/happier.jpg",
    singer: "MARSHMELLO"
  },
  {
    name: "PERFECT",
    path: "music/english/perfect.mp3",
    img: "musicimages/english/perfect.jpg",
    singer: "ED SHEERAN"
  },
  {
    name: "TAKI TAKI",
    path: "music/english/takitaki.mp3",
    img: "musicimages/english/takitaki.jpg",
    singer: "DJ SNAKE | SELENA GOMEZ"
  },
  {
    name: "ROAR ",
    path: "music/english/roar.mp3",
    img: "musicimages/english/roar.jpg",
    singer: "KATY PERRY"
  },
  {
    name: "THAT'S WHAT I LIKE",
    path: "music/english/thatswhatilike.mp3",
    img: "musicimages/english/thatswhatilike.jpg",
    singer: "BRUNO MARS"
  },
  {
    name: "IGNITE",
    path: "music/english/ignite.mp3",
    img: "musicimages/english/ignite.jpg",
    singer: "ALAN WALKER"
  },
  {
    name: "ROCKABYE",
    path: "music/english/rockabye.mp3",
    img: "musicimages/english/rockabye.jpg",
    singer: "CLEAN BANDIT"
  },
  {
    name: "LEAN ON",
    path: "music/english/leanon.mp3",
    img: "musicimages/english/leanon.jpg",
    singer: "DJ SNAKE | MAJOR LAZER"
  },
  {
    name: "IT'S MY LIFE",
    path: "music/english/itsmylife.mp3",
    img: "musicimages/english/itsmylife.jpg",
    singer: "BON JOVI"
  },
  {
    name: "THE LAZY SONG",
    path: "music/english/thelazysong.mp3",
    img: "musicimages/english/thelazysong.jpg",
    singer: "BRUNO MARS"
  },
  {
    name: "SEE YOU AGAIN",
    path: "music/english/seeyouagain.mp3",
    img: "musicimages/english/seeyouagain.jpg",
    singer: "WIZ KHALIFA"
  },
  {
    name: "THE NIGHTS",
    path: "music/english/thenights.mp3",
    img: "musicimages/english/thenights.jpg",
    singer: "AVICII"
  },
  {
    name: "LET ME LOVE YOU",
    path: "music/english/letmeloveyou.mp3",
    img: "musicimages/english/letmeloveyou.jpg",
    singer: "DJ SNAKE | JUSTIN BIEBER"
  },
  {
    name: "SHAPE OF YOU",
    path: "music/english/shapeofyou.mp3",
    img: "musicimages/english/shapeofyou.jpg",
    singer: "ED SHEERAN"
  },
  {
    name: "THE SPECTRE",
    path: "music/english/thespectre.mp3",
    img: "musicimages/english/thespectre.jpg",
    singer: "ALAN WALKER"
  },
  {
    name: "SO AM I",
    path: "music/english/soami.mp3",
    img: "musicimages/english/soami.jpg",
    singer: "AVA MAX"
  },
  {
    name: "THINKING OUT LOUD",
    path: "music/english/thinkingoutloud.mp3",
    img: "musicimages/english/thinkingoutloud.jpg",
    singer: "ED SHEERAN"
  },
  {
    name: "LOSE YOURSELF",
    path: "music/english/loseyourself.mp3",
    img: "musicimages/english/loseyourself.jpg",
    singer: "EMINEM"
  },
  {
    name: "LOVE ME LIKE YOU DO",
    path: "music/english/lovemelikeyoudo.mp3",
    img: "musicimages/english/lovemelikeyoudo.jpg",
    singer: "ELLIE GOULDING"
  },
  {
    name: "TOGETHER",
    path: "music/english/together.mp3",
    img: "musicimages/english/together.jpg",
    singer: "MARSHMELLO"
  },
  {
    name: "SORRY",
    path: "music/english/sorry.mp3",
    img: "musicimages/english/sorry.jpg",
    singer: "JUSTIN BIEBER"
  },
  {
    name: "LOVE THE WAY YOU LIE",
    path: "music/english/lovethewayyoulie.mp3",
    img: "musicimages/english/lovethewayyoulie.jpg",
    singer: "EMINEM"
  },
  {
    name: "TREAT YOU BETTER",
    path: "music/english/treatyoubetter.mp3",
    img: "musicimages/english/treatyoubetter.jpg",
    singer: "SHAWN MENDES"
  },

   
];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#FF8A65";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }