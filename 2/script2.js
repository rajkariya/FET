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
     name: "JODE REJO RAJ",
     path: "music/gujarati/joderejoraj.mp3",
     img: "musicimages/gujarati/joderejoraj.jpg",
     singer: "HARSHH"
   },
   {
    name: "CHHELAJI RE",
    path: "music/gujarati/chhelajire.mp3",
    img: "musicimages/gujarati/chhelaji.jpg",
    singer: "SUCHITA VYAS"
  },
  {
    name: "GANESH DUNDALA",
    path: "music/gujarati/ganeshdundada.mp3",
    img: "musicimages/gujarati/ganeshdundala.jpg",
    singer: "SACHIN JIGAR"
  },
  {
    name: "MASHUP 1",
    path: "music/gujarati/mashup1.mp3",
    img: "musicimages/gujarati/mashup1.jpg",
    singer: "SANTVANI | SHWETA | BHARGAV"
  },
  {
    name: "DHUNI REH DHAKHAVI",
    path: "music/gujarati/dhuniredhakhavi.mp3",
    img: "musicimages/gujarati/dhunire.jpg",
    singer: "SACHIN JIGAR"
  },
  {
    name: "DHUN LAAGI",
    path: "music/gujarati/dhunlaagi.mp3",
    img: "musicimages/gujarati/dhunlaagi.jpg",
    singer: "SACHIN JIGAR"
  },
  {
    name: "VHALAM AAVO NE",
    path: "music/gujarati/vhalamaavone.mp3",
    img: "musicimages/gujarati/vhalamaavone.jpg",
    singer: "SACHIN JIGAR"
  },
  {
    name: "MOTI VERAANA ",
    path: "music/gujarati/motiveraana.mp3",
    img: "musicimages/gujarati/motiveraana.jpg",
    singer: "AMIT TRIVEDI"
  },
  {
    name: "RADHA NE SHYAM MALI JASE",
    path: "music/gujarati/radhaneshyammalijase.mp3",
    img: "musicimages/gujarati/radhaneshyam.jpg",
    singer: "SACHIN SANGHVI"
  },
  {
    name: "KAHO POONAM NA",
    path: "music/gujarati/kahopoonamna.mp3",
    img: "musicimages/gujarati/kahopoonamna.jpg",
    singer: "DHAVAL KOTHARI"
  },
  {
    name: "VAHAL NO DARIYO",
    path: "music/gujarati/vahalnodariyo.mp3",
    img: "musicimages/gujarati/vahalnodariyo.jpg",
    singer: "SANTVANI TRIVEDI"
  },

  {
    name: "PA PA PAGLI",
    path: "music/gujarati/papapagli.mp3",
    img: "musicimages/gujarati/papapagli.jpg",
    singer: "SONU NIGAM | SACHIN"
  },
  {
    name: "DUDHE TE BHARI",
    path: "music/gujarati/dudhetebharitalavdi.mp3",
    img: "musicimages/gujarati/dudhetebhari.jpg",
    singer: "PRUTHVI PARIKH"
  },
  {
    name: "GORI RADHA NE KAALO KAAN",
    path: "music/gujarati/goriradhanekalokan.mp3",
    img: "musicimages/gujarati/goriradhanekalokan.jpg",
    singer: "KIRTIDAN GADHVI"
  },
  {
    name: "SATRANGI RE",
    path: "music/gujarati/satrangire.mp3",
    img: "musicimages/gujarati/satrangire.jpg",
    singer: "SACHIN JIGAR"
  },
  {
    name: "NAYAN NE BANDH RAKHINE",
    path: "music/gujarati/nayannebandhrakhine.mp3",
    img: "musicimages/gujarati/nayannebandhrakhine.jpg",
    singer: "SACHIN JIGAR"
  },
  {
    name: "MASHUP 2",
    path: "music/gujarati/mashup2.mp3",
    img: "musicimages/gujarati/mashup2.jpg",
    singer: "SANTVANI | SHWETA | BHARGAV"
  },
  
  {
    name: "OLA KANA NE KAHO",
    path: "music/gujarati/olakananekaho.mp3",
    img: "musicimages/gujarati/olakananehakho.jpg",
    singer: "KAIRAVI BUCH"
  },
  {
    name: "CHOGADA ",
    path: "music/gujarati/chogada.mp3",
    img: "musicimages/gujarati/chogada.jpg",
    singer: "DARSHAN RAWAL | DJ CHETAS "
  },
  {
    name: "EK PATAN SHER NI",
    path: "music/gujarati/ekpatansherni.mp3",
    img: "musicimages/gujarati/ekpatansherni.jpg",
    singer: "PRATISHTHA WAGHELA"
  },
  {
    name: "DHOLIDA",
    path: "music/gujarati/dholida.mp3",
    img: "musicimages/gujarati/dholida.jpg",
    singer: "NEHA KAKKAR | UDIT N"
  },
  {
    name: "PANKHI RE",
    path: "music/gujarati/pankhire.mp3",
    img: "musicimages/gujarati/pankhire.jpg",
    singer: "SACHIN "
  },
  {
    name: "MANN MELO",
    path: "music/gujarati/mannmelo.mp3",
    img: "musicimages/gujarati/mannmelo.jpg",
    singer: "SACHIN JIGAR"
  },
  {
    name: "CHAAND NE KAHO",
    path: "music/gujarati/chaandnekaho.mp3",
    img: "musicimages/gujarati/chaandnekaho.jpg",
    singer: "SACHIN JIGAR"
  },
  
  {
    name: "MASHUP 3",
    path: "music/gujarati/mashup.mp3",
    img: "musicimages/gujarati/mashup.jpg",
    singer: "JIGARDAN GADHVI"
  },
  {
    name: "TAARI AANKH NO AFINI",
    path: "music/gujarati/taariaankhnoafini.mp3",
    img: "musicimages/gujarati/tariaankhnoafini.jpg",
    singer: "JAGDISH ITALIYA"
  },
  {
    name: "KON HALAVE LIMBDI",
    path: "music/gujarati/konhalavelimbdi.mp3",
    img: "musicimages/gujarati/konhalavelimbdi.jpg",
    singer: "DHAVAL KOTHARI"
  },
  {
    name: "LAADKI",
    path: "music/gujarati/laadki.mp3",
    img: "musicimages/gujarati/laadki.jpg",
    singer: "SACHIN JIGAR | KIRTIDAN G"
  },
  {
    name: "KAMARIYA",
    path: "music/gujarati/kamariya.mp3",
    img: "musicimages/gujarati/kamariya.jpg",
    singer: "JACCKY BHAGNANI"
  },
  
  {
    name: "DHAN CHE",
    path: "music/gujarati/dhanche.mp3",
    img: "musicimages/gujarati/dhanche.jpg",
    singer: "KINJAL DAVE"
  },
  {
    name: "JIVI LE",
    path: "music/gujarati/jivile.mp3",
    img: "musicimages/gujarati/jivile.jpg",
    singer: "KINJAL DAVE"
  },
  {
    name: "KHAVA MATE PIZZA",
    path: "music/gujarati/khavamatepizza.mp3",
    img: "musicimages/gujarati/khavamatepizza.jpg",
    singer: "KINJAL DAVE"
  },
  {
    name: "MOJ MA",
    path: "music/gujarati/mojma.mp3",
    img: "musicimages/gujarati/mojma.jpg",
    singer: "KINJAL DAVE"
  },
  {
    name: "RONA SER MA",
    path: "music/gujarati/ronaserma.mp3",
    img: "musicimages/gujarati/ronaserma.jpg",
    singer: "GEETA RABARI"
  },
  {
    name: "CHAR BANGDI VADI GADI",
    path: "music/gujarati/charbangdi.mp3",
    img: "musicimages/gujarati/charbangdivadigadi.jpg",
    singer: "KINJAL DAVE"

  },
  {
    name: "LERI LALA",
    path: "music/gujarati/lerilala.mp3",
    img: "musicimages/gujarati/lerilala.jpg",
    singer: "KINJAL DAVE"
  },
  {
    name: "BHAMARIYADO",
    path: "music/gujarati/bhamariyado.mp3",
    img: "musicimages/gujarati/bhamariyado.jpg",
    singer: "RAMESH BAROT"
  },
  {
    name: "GHUMARIYU",
    path: "music/gujarati/ghumariyu.mp3",
    img: "musicimages/gujarati/ghumariyu.jpg",
    singer: "OM BARAIYA"
  },
  {
    name: "KANA MANE DWARIKA DEKHAD",
    path: "music/gujarati/kanamanedwarikadekhad.mp3",
    img: "musicimages/gujarati/kanamanedwarikadekhad.jpg",
    singer: "KAIRAVI BUCH"
  },
  {
    name: "RAJA NE RANI",
    path: "music/gujarati/rajanerani.mp3",
    img: "musicimages/gujarati/rajanerani.jpg",
    singer: "PARTHIV GOHIL | MANSI PAREKH"
  },
  
  {
    name: "MANE EKLI JAANI RE",
    path: "music/gujarati/maneeklijaanire.mp3",
    img: "musicimages/gujarati/maneeklijanire.jpg",
    singer: "HARSH PATEL"
  },
  {
    name: "UNCHI TALAVDI",
    path: "music/gujarati/unchitalavdi.mp3",
    img: "musicimages/gujarati/unchitalavdi.jpg",
    singer: "SUMAN"
  },
  {
    name: "SAIBO",
    path: "music/gujarati/saibo.mp3",
    img: "musicimages/gujarati/saibo.jpg",
    singer: "HARSHH"
  },
  {
    name: "VAAGYO RE DHOL",
    path: "music/gujarati/vaagyoredhol.mp3",
    img: "musicimages/gujarati/vaagyoredhol.jpg",
    singer: "BHOOMI TRIVEDI"
  },
  {
    name: "SAIYAR MORI",
    path: "music/gujarati/saiyarmori.mp3",
    img: "musicimages/gujarati/saiyarmorire.jpg",
    singer: "GEETA RABARI"
  },
  {
    name: "MAHAHETAVALI",
    path: "music/gujarati/mahahetavli.mp3",
    img: "musicimages/gujarati/mahahetavli.jpg",
    singer: "ADITYA GADHVI"
  },
  {
    name: "SAPNA VINANI RAT",
    path: "music/gujarati/sapnavinanirat.mp3",
    img: "musicimages/gujarati/sapnavinanirat.jpg",
    singer: "ADITYA GADHVI"
  },
  {
    name: "MANN MOHI GAYU",
    path: "music/gujarati/mannmohigayu.mp3",
    img: "musicimages/gujarati/mannmohigayu.jpg",
    singer: "AISHWARIYA M"
  },
  
  {
    name: "KUM KUM KERA PAGLE",
    path: "music/gujarati/kumkumkerapagle.mp3",
    img: "musicimages/gujarati/kumkumkerapaglemadi.jpg",
    singer: "KAILASH KHER"
  },
  

  {
    name: "TARA NAINA NO RANG LAGYO",
    path: "music/gujarati/taranainanoranglagyo.mp3",
    img: "musicimages/gujarati/taranainanorang.jpg",
    singer: "HARSHH"
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