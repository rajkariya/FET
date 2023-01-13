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
     name: "TERE NAAL",
     path: "music/terenaal.mp3",
     img: "musicimages/terenaal.jpg",
     singer: "DARSHAN RAVAL"
   },
   {
     name: "ASAL MEIN",
     path: "music/Asal mein.mp3",
     img: "musicimages/asalmein.jpg",
     singer: "DARSHAN RAWAL"
   },
   {
     name: "JAAN BAN GAYE",
     path: "music/jaan ban gaye.mp3",
     img: "musicimages/jaanbangaye.jpg",
     singer: "Mithoon Ft Vishal D a"
   },
   {
     name: "TERE BIN",
     path: "music/terebin1.mp3",
     img: "musicimages/terebin.jpg",
     singer: "TANISHKQ BAGCHI & ASEES KAUR"
   },
   {
    name: "VE MAAHI",
    path: "music/vemaahi.mp3",
    img: "musicimages/vemaahi.jpg",
    singer: "ARIJIT SINGH & ASESS KAUR"
  },
  {
    name: "GIRL I NEED YOU",
    path: "music/girlineedyou.mp3",
    img: "musicimages/girlineedyou.jpg",
    singer: "ARIJIT SINGH | MEET BROS"
  },{
    name: " O SAATHI",
    path: "music/osaathi.mp3",
    img: "musicimages/osaathi.jpg",
    singer: "ARKO"
  },
  {
    name: "LO SAFAR",
    path: "music/losafar.mp3",
    img: "musicimages/lo safar.jpg",
    singer: "JUBIN NAUTIYAL "
  },
  {
    name: "HUMSAFAR",
    path: "music/humsafar.mp3",
    img: "musicimages/humsafar.jpg",
    singer: "AKHIL SACHDEVA"
  },
  {
    name: "NAZM NAZM",
    path: "music/nazmnazm.mp3",
    img: "musicimages/nazmnazm.jpg",
    singer: "ARKO"
  },
  {
    name: "DUNIYAA",
    path: "music/duniyaa.mp3",
    img: "musicimages/duniyaa.jpg",
    singer: "AKHIL | DHVANI B"
  },
  {
    name: "TERA CHEHRA  ",
    path: "music/terachehra.mp3",
    img: "musicimages/terachehra.jpg",
    singer: "ARIJIT SINGH"
  },
  {
    name: "BEWAJAH",
    path: "music/bewajah.mp3",
    img: "musicimages/bewajah.jpg",
    singer: "HIMESH RESHAMIYA"
  },
  {
    name: "BOL DO NA ZARA",
    path: "music/boldonazara.mp3",
    img: "musicimages/boldonazara.jpg",
    singer: "ARMAAN MALIK | AMAAL MALIK"
  },
  {
    name: "DIL MEIN HO TUM",
    path: "music/dilmeinhotum.mp3",
    img: "musicimages/dilmeinhotum.jpg",
    singer: "ARMAAN M |  BAPPI L"
  },
  {
    name: "TERE HOKE RAHENGEY",
    path: "music/terehokerahengey.mp3",
    img: "musicimages/terehokerahengey.jpg",
    singer: "HUMAIMA MALIK | YUVAN SHANKAR"
  },
  {
    name: "MAAHI",
    path: "music/maahi.mp3",
    img: "musicimages/maahi.jpg",
    singer: "TOSHI AND SHARIB SURI"
  },
  {
    name: "KYA MUJHE PYAR HAI",
    path: "music/kyamujhepyarhain.mp3",
    img: "musicimages/kyamujhepyarhai.jpg",
    singer: "PRITAM | SHINY AHUJA"
  },
  {
    name: "KABIRA",
    path: "music/kabira.mp3",
    img: "musicimages/kabira.jpg",
    singer: "ARIJIT SINGH"
  },
  {
    name: "VAASTE",
    path: "music/vaaste.mp3",
    img: "musicimages/vaaste.jpg",
    singer: "DHVANI BHANUSHALI"
  },
  {
    name: "TUM HI HO",
    path: "music/tumhiho.mp3",
    img: "musicimages/tumhiho.jpg",
    singer: "ARIJIT SINGH"
  },
  {
    name: "TUJHE KITNA CHAHNE LAGE",
    path: "music/tujhekitnachahnelage.mp3",
    img: "musicimages/tujhekitnachahnelage.jpg",
    singer: "ARIJIT SINGH | MITHOON"
  },
  {
    name: "BEKHAYALI",
    path: "music/bekhayali.mp3",
    img: "musicimages/bekhayali.jpg",
    singer: "SACHET & PARAMPARA"
  },
  {
    name: "KABHI TUMHHE",
    path: "music/kabhiitumhe.mp3",
    img: "musicimages/kabhiitumhe.jpg",
    singer: "DARSHAN RAWAL"
  },
  {
    name: "HUM DUM",
    path: "music/humdum.mp3",
    img: "musicimages/humdum.jpg",
    singer: "ANKIT TIWARI"
  },
  {
    name: "BARBAADIYAN",
    path: "music/barbaadiyan.mp3",
    img: "musicimages/barbaadiyan.jpg",
    singer: "SACHET T | NIKHITA G"
  },
  {
    name: "TUM HI HO BANDHU",
    path: "music/tumhihobandhu.mp3",
    img: "musicimages/tumhihobandhu.jpg",
    singer: "PRITAM"
  },
  {
    name: "BALAM PICHKARI",
    path: "music/balampichkari.mp3",
    img: "musicimages/balampichkari.jpg",
    singer: "VISHAL D | SHALAMI K"
  },
  {
    name: "HOOK UP SONG",
    path: "music/hookup.mp3",
    img: "musicimages/hookup.jpg",
    singer: "VISHAL & SHEKHAR"
  },
  {
    name: "FIRST CLASS",
    path: "music/firstclass.mp3",
    img: "musicimages/firstclass.jpg",
    singer: "ARIJIT SINGH | PRITAM"
  },
  {
    name: "ZINGAAT",
    path: "music/zingaat.mp3",
    img: "musicimages/zingaat.jpg",
    singer: "AJAY & ATUL"
  },
  {
    name: "SAUDA KHARA KHARA",
    path: "music/saudakharakhara.mp3",
    img: "musicimages/saudakharakhara.jpg",
    singer: "SUKHBIR & DHVANI"
  },
  {
    name: "AANKH MAREY",
    path: "music/aankhmarey.mp3",
    img: "musicimages/aankhmarey.jpg",
    singer: "TANISHQ BAGCHI"
  },
  {
    name: "MUQABLA",
    path: "music/muqabla.mp3",
    img: "musicimages/muqabla.jpg",
    singer: "TANISHQ BAGCHI"
  },
  {
    name: "GHUNGROO",
    path: "music/ghungroo.mp3",
    img: "musicimages/ghungroo.jpg",
    singer: "VISHAL AND SHEKHAR"
  },
  {
    name: "SOORAJ DOOBA HAIN",
    path: "music/soorajdoobahain.mp3",
    img: "musicimages/soorajdoobahain.jpg",
    singer: "ARIJIT SINGH | ADITI SHARMA"
  },
  {
    name: "ILLAHI",
    path: "music/illahi.mp3",
    img: "musicimages/illahi.jpg",
    singer: "PRITAM"
  },
  {
    name: "RAABTA",
    path: "music/raabta.mp3",
    img: "musicimages/raabta.jpg",
    singer: "ARIJIT SINGH | HASMIKA"
  },
  {
    name: "TERA YAAR HOON MAIN",
    path: "music/terayaarhoonmain.mp3",
    img: "musicimages/terayaarhoonmain.jpg",
    singer: "ARIJIT SINGH | ROCHAK KOHLI"
  },
  {
    name: "TERA GHATA",
    path: "music/teraghata.mp3",
    img: "musicimages/teraghata.jpg",
    singer: "GAJENDRA VERMA | KARISHMA SHARMA"
  },
  {
    name: "SHAYAD",
    path: "music/shayad.mp3",
    img: "musicimages/shayad.jpg",
    singer: "ARIJIT SINGH | PRITAM"
  },
  {
    name: "DIL MERI NA SUNE",
    path: "music/dilmerinasune.mp3",
    img: "musicimages/dilmerinasune.jpg",
    singer: "HIMESH RESHAMIYA"
  },
  {
    name: "TERA FITOOR",
    path: "music/terafitoor.mp3",
    img: "musicimages/terafitoor.jpg",
    singer: "ARIJIT SINGH"
  },
  {
    name: "ZAALIMA",
    path: "music/zaalima.mp3",
    img: "musicimages/zaalima.jpg",
    singer: "ARIJIT SINGH"
  },
  {
    name: "HAWAYEIN",
    path: "music/hawayein.mp3",
    img: "musicimages/hawayein.jpg",
    singer: "ARIJIT SINGH | PRITAM"
  },
  {
    name: "RABBA MEHER KARI",
    path: "music/rabbameherkari.mp3",
    img: "musicimages/rabbameherkari.jpg",
    singer: "DARSHAN RAWAL"
  },
  {
    name: "TERA ZIKR",
    path: "music/terazikr.mp3",
    img: "musicimages/terazikr.jpg",
    singer: "DARSHAN RAWAL"
  },
  {
    name: "PHIR KABHI",
    path: "music/phirkabhi.mp3",
    img: "musicimages/phirkabhi.jpg",
    singer: " ARIJIT SINGH"
  },
  {
    name: "MEHRAMA",
    path: "music/mehrama.mp3",
    img: "musicimages/mehrama.jpg",
    singer: "DARSHAN RAWAL"
  },
  {
    name: "KHARIYAT",
    path: "music/khariyat.mp3",
    img: "musicimages/khariyat.jpg",
    singer: "ARIJIT SINGH"
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