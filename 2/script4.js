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
     name: "TERI JHUKI NAZAR",
     path: "music/slowed/terijhukinazar.mp3",
     img: "musicimages/slowed/terijhukinazar.jpg",
     singer: ""
   },
   {
     name: "AE DIL HAI MUSHKIL",
     path: "music/slowed/aedilhaimushkil.mp3",
     img: "musicimages/slowed/aedilhaimushkil.jpg",
     singer: ""
   },
   
   {
     name: "BAARISH",
     path: "music/slowed/baarish.mp3",
     img: "musicimages/slowed/baarish.jpg",
     singer: ""
   },
   {
	name: "BEWAFA",
	path: "music/slowed/bewafa.mp3",
	img: "musicimages/slowed/bewafa.jpg",
	singer: ""
  },

  {
	name: "BEHTI HAWA SA THA WOH",
	path: "music/slowed/behtihawasathawoh.mp3",
	img: "musicimages/slowed/behtihawasathawoh.jpg",
	singer: ""
  },
  {
	name: "BAHARA BAHARA",
	path: "music/slowed/baharabahara.mp3",
	img: "musicimages/slowed/baharabahara.jpg",
	singer: ""
  },
  {
	name: "DEEWANI MASTANI",
	path: "music/slowed/deewanimastani.mp3",
	img: "musicimages/slowed/deewanimastani.jpg",
	singer: ""
  },
  {
	name: "DHADAK",
	path: "music/slowed/dhadak.mp3",
	img: "musicimages/slowed/dhadak.jpg",
	singer: ""
  },
  {
	name: "DILBAR",
	path: "music/slowed/dilbar.mp3",
	img: "musicimages/slowed/dilbar.jpg",
	singer: ""
  },
  {
	name: "GUZAARISH",
	path: "music/slowed/guzaarish.mp3",
	img: "musicimages/slowed/guzaarish.jpg",
	singer: ""
  },
  {
	name: "TU MILEYA",
	path: "music/slowed/tumileya.mp3",
	img: "musicimages/slowed/tumileya.jpg",
	singer: ""
  },
  {
	name: "TUM JO AAYE",
	path: "music/slowed/tumjoaaye.mp3",
	img: "musicimages/slowed/tumjoaaye.jpg",
	singer: ""
  },
  {
	name: "TUM MILE",
	path: "music/slowed/tummile.mp3",
	img: "musicimages/slowed/tummile.jpg",
	singer: ""
  },
  {
	name: "TUM SE HI",
	path: "music/slowed/tumsehi.mp3",
	img: "musicimages/slowed/tumsehi.jpg",
	singer: ""
  },
  {
	name: "YEH FITOOR MERA",
	path: "music/slowed/yehfitoormera.mp3",
	img: "musicimages/slowed/yehfitoormera.jpg",
	singer: ""
  },
  {
	name: "LAAL ISHQ",
	path: "music/slowed/laalishq.mp3",
	img: "musicimages/slowed/laalishq.jpg",
	singer: ""
  },
  {
	name: "MAIN RANG SHARBATON KA",
	path: "music/slowed/mainrangsharbatonka.mp3",
	img: "musicimages/slowed/mainrangsharbatonka.jpg",
	singer: ""
  },
  {
	name: "MANN BHARRYA 2.0",
	path: "music/slowed/mannbharrya.mp3",
	img: "musicimages/slowed/mannbharrya.jpg",
	singer: ""
  },
  {
	name: "MAST MAGAN",
	path: "music/slowed/mastmagan.mp3",
	img: "musicimages/slowed/mastmagan.jpg",
	singer: ""
  },
  {
	name: "MERE YAARA",
	path: "music/slowed/mereyaara.mp3",
	img: "musicimages/slowed/mereyaara.jpg",
	singer: ""
  },
  {
	name: "O RE PIYA",
	path: "music/slowed/orepiya.mp3",
	img: "musicimages/slowed/orepiya.jpg",
	singer: ""
  },
  {
	name: "PAHLI NAZAR",
	path: "music/slowed/pehlinazar.mp3",
	img: "musicimages/slowed/pahlinazar.jpg",
	singer: ""
  },
  {
	name: "PAL",
	path: "music/slowed/pal.mp3",
	img: "musicimages/slowed/pal.jpg",
	singer: ""
  },
  {
	name: "PEE LOON",
	path: "music/slowed/peeloon.mp3",
	img: "musicimages/slowed/peeloon.jpg",
	singer: ""
  },
  {
	name: "PHIR KABHI",
	path: "music/slowed/phirkabhi.mp3",
	img: "musicimages/slowed/phirkabhi.jpg",
	singer: ""
  },
  {
	name: "PHIR MOHABBAT",
	path: "music/slowed/phirmohabbat.mp3",
	img: "musicimages/slowed/phirmohabbat.jpg",
	singer: ""
  },
  {
	name: "RAATAAN LAMBHIYAN",
	path: "music/slowed/raataanlambhiyan.mp3",
	img: "musicimages/slowed/raataanlambhiyan.jpg",
	singer: ""
  },
  {
	name: "HAMARI ADHURI KAHANI",
	path: "music/slowed/hamaraiadhurikahani.mp3",
	img: "musicimages/slowed/hamariadhurikahani.jpg",
	singer: ""
  },
  {
	name: "IKTARA",
	path: "music/slowed/iktara.mp3",
	img: "musicimages/slowed/iktara.jpg",
	singer: ""
  },
  
  {
	name: "IK VAARI AA",
	path: "music/slowed/ikvaariaa.mp3",
	img: "musicimages/slowed/ikvaariaa.jpg",
	singer: ""
  },
  {
	name: "ISHQ SUFIYANA",
	path: "music/slowed/ishqsufiyana.mp3",
	img: "musicimages/slowed/ishqsufiyana.jpg",
	singer: ""
  },
  {
	name: "JASHN E BAHARAA",
	path: "music/slowed/jashnebahara.mp3",
	img: "musicimages/slowed/jashnebahaara.jpg",
	singer: ""
  },
  {
	name: "KAUN TUJHE",
	path: "music/slowed/kauntujhe.mp3",
	img: "musicimages/slowed/kauntujhe.jpg",
	singer: ""
  },
  {
	name: "KHALI SALAM DUA",
	path: "music/slowed/khalisalamdua.mp3",
	img: "musicimages/slowed/khalisalamdua.jpg",
	singer: ""
  },
  {
	name: "KHAMOSHIYAN",
	path: "music/slowed/khamoshiyan.mp3",
	img: "musicimages/slowed/khamoshiyan.jpg",
	singer: ""
  },
  {
	name: "KINNA SONA",
	path: "music/slowed/kinnasonna.mp3",
	img: "musicimages/slowed/kinnasonna.jpg",
	singer: ""
  },
  {
	name: "KUN FAYA KUN ",
	path: "music/slowed/kunfayakun.mp3",
	img: "musicimages/slowed/kunfayakun.jpg",
	singer: ""
  },
  {
	name: "KYA MUJHE PYAR HAI",
	path: "music/slowed/kyamujhepyarhai.mp3",
	img: "musicimages/slowed/kyamujhepyarhai.jpg",
	singer: ""
  },
  {
	name: "TUM HI HO",
	path: "music/slowed/tumhiho.mp3",
	img: "musicimages/slowed/tumhiho.jpg",
	singer: ""
  },
  {
	name: "TUJH MEIN RAB DIKHTA HAI",
	path: "music/slowed/tujhmeinrabdikhtahai.mp3",
	img: "musicimages/slowed/tujhmeinrabdikhtahai.jpg",
	singer: ""
  },
  {
	name: "TUM HI AANA",
	path: "music/slowed/tumhiaana.mp3",
	img: "musicimages/slowed/tumhiaana.jpg",
	singer: ""
  },
  {
	name: "TERI HOGAIYAAN",
	path: "music/slowed/terihogaiyaan.mp3",
	img: "musicimages/slowed/terihogaiyaan.jpg",
	singer: ""
  },
  {
	name: "SUBHANALLAH",
	path: "music/slowed/subhanallah.mp3",
	img: "musicimages/slowed/subhanallah.jpg",
	singer: ""
  },
  {
	name: "SURILI AKHIYON WALE",
	path: "music/slowed/suriliakhoyonwale.mp3",
	img: "musicimages/slowed/suriliakhiyonwale.jpg",
	singer: ""
  },
  {
	name: "TERA HUA",
	path: "music/slowed/terahua.mp3",
	img: "musicimages/slowed/terahua.jpg",
	singer: ""
  },
  {
	name: "RISHTE NAATE",
	path: "music/slowed/rishtenaate.mp3",
	img: "musicimages/slowed/rishtenaate.jpg",
	singer: ""
  },
  {
	name: "SAJDAA",
	path: "music/slowed/sajdaa.mp3",
	img: "musicimages/slowed/sajdaa.jpg",
	singer: ""
  },
  {
	name: "SAMJHAWAN",
	path: "music/slowed/samjhawan.mp3",
	img: "musicimages/slowed/samjhawan.jpg",
	singer: ""
  },
  {
	name: "RANJHA",
	path: "music/slowed/ranjha.mp3",
	img: "musicimages/slowed/ranjha.jpg",
	singer: ""
  },
  {
	name: "BEKHAYALI",
	path: "music/slowed/bekhayali.mp3",
	img: "musicimages/slowed/bekhayali.jpg",
	singer: ""
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