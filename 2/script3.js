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
     name: "YAARI",
     path: "music/punjabi/yaari.mp3",
     img: "musicimages/punjabi/yaari.jpg",
     singer: "NIKK"
   },
   {
     name: "LEHANGA",
     path: "music/punjabi/lehanga.mp3",
     img: "musicimages/punjabi/lehanga.jpg",
     singer: "JASS MANAK"
   },
   {
    name: "BROWN MUNDE",
    path: "music/punjabi/brownmunde.mp3",
    img: "musicimages/punjabi/brownmunde.jpg",
    singer: "AP DHILLON"
  },
  {
    name: "FEELINGS",
    path: "music/punjabi/feelings.mp3",
    img: "musicimages/punjabi/feelings.jpg",
    singer: "KHATRI"
  },
  {
    name: "LIBAAS",
    path: "music/punjabi/libaas.mp3",
    img: "musicimages/punjabi/libaas.jpg",
    singer: "KAKA"
  },
  {
    name: "LAGDI LAHORE",
    path: "music/punjabi/lagdilahorediya.mp3",
    img: "musicimages/punjabi/lagdilahorediya.jpg",
    singer: "GURU RANDHAWA"
  },

  {
    name: "SAKHIYAN",
    path: "music/punjabi/sakhiyan.mp3",
    img: "musicimages/punjabi/sakhiyan.jpg",
    singer: "MANINDER BUTTAR"
  },
  {
    name: "NILKE CURRANT",
    path: "music/punjabi/niklecurrant.mp3",
    img: "musicimages/punjabi/niklecurrant.jpg",
    singer: "NEHA KAKKAR | JASSI GILL"
  },
  {
    name: "SOCH",
    path: "music/punjabi/soch.mp3",
    img: "musicimages/punjabi/soch.jpg",
    singer: "HARRDY SANDHU"
  },
  {
    name: "ALLAH",
    path: "music/punjabi/allah.mp3",
    img: "musicimages/punjabi/allah.jpg",
    singer: "JASS MANAK"
  },
  {
    name: "NAIN",
    path: "music/punjabi/nain.mp3",
    img: "musicimages/punjabi/nain.jpg",
    singer: "PAV DHARIA"
  },
  {
    name: "KALLI HO GAI",
    path: "music/punjabi/kallihogai.mp3",
    img: "musicimages/punjabi/kallihogai.jpg",
    singer: "JASS MANAK"
  },
  {
    name: "CHEHRA TERA",
    path: "music/punjabi/chehratera.mp3",
    img: "musicimages/punjabi/chehratera.jpg",
    singer: "JASS MANAK"
  },
  {
    name: "MOONLIGHT",
    path: "music/punjabi/moonlight.mp3",
    img: "musicimages/punjabi/moonlight.jpg",
    singer: "HARNOOR"
  },
  {
    name: "BOSS",
    path: "music/punjabi/boss.mp3",
    img: "musicimages/punjabi/boss.jpg",
    singer: "JASS MANAK"
  },
  {
    name: "YAARA TERA WARGA",
    path: "music/punjabi/yaaraterawarga.mp3",
    img: "musicimages/punjabi/yaaraterewarga.jpg",
    singer: "JASS MANAK"
  },
  {
    name: "GAL SUN ",
    path: "music/punjabi/galsun.mp3 ",
    img: "musicimages/punjabi/galsun.jpg",
    singer: "JASS MANAK"
  },
  {
    name: "BUTTERFLY",
    path: "music/punjabi/butterfly.mp3",
    img: "musicimages/punjabi/butterfly.jpg",
    singer: "JASS MANAK"
  },
  {
    name: "SORRY",
    path: "music/punjabi/sorry.mp3",
    img: "musicimages/punjabi/sorry.jpg",
    singer: "NEHA KAKKAR | MANINDER"
  },
  {
    name: "GUCCI",
    path: "music/punjabi/gucci.mp3",
    img: "musicimages/punjabi/gucci.jpg",
    singer: "ANSHUL GARG"
  },
  {
    name: "TERA MERA VIAH",
    path: "music/punjabi/teramerviah.mp3",
    img: "musicimages/punjabi/terameraviah.jpg",
    singer: "JASS MANAK"
  },
  {
    name: "RABB WANGU",
    path: "music/punjabi/rabbwangu.mp3",
    img: "musicimages/punjabi/rabbwangu.jpg",
    singer: "JASS MANAK"
  },
  {
    name: "GIRLFRIEND",
    path: "music/punjabi/girlfriend.mp3",
    img: "musicimages/punjabi/girlfriend.jpg",
    singer: "JASS MANAK"
  },
  {
    name: "MERE WALI SARDARNI",
    path: "music/punjabi/meriwalisardarni.mp3",
    img: "musicimages/punjabi/merewalisardarni.jpg",
    singer: "TUSHAR ARORA"
  },
  {
    name: "QISMAT",
    path: "music/punjabi/qismat.mp3",
    img: "musicimages/punjabi/qismat.jpg",
    singer: "AMMY VIRK B PRAAK"
  },
  {
    name: "LAARE",
    path: "music/punjabi/laare.mp3",
    img: "musicimages/punjabi/laare.jpg",
    singer: "MANINDER BUTTAR"
  },
  {
    name: "NIRA ISHQ",
    path: "music/punjabi/niraishq.mp3",
    img: "musicimages/punjabi/niraishq.jpg",
    singer: "SATTI DHILLON"
  },
  {
    name: "WAALIAN",
    path: "music/punjabi/waalian.mp3",
    img: "musicimages/punjabi/waalian.jpg",
    singer: "HARNOOR"
  },
  {
    name: "HOSH",
    path: "music/punjabi/hosh.mp3",
    img: "musicimages/punjabi/hosh.jpg",
    singer: "NIKK"
  },
  {
    name: "BADAAMI RANG",
    path: "music/punjabi/badaamirang.mp3",
    img: "musicimages/punjabi/badaamirang.jpg",
    singer: "NIKK"
  },
  {
    name: "PERFECT",
    path: "music/punjabi/perfect.mp3",
    img: "musicimages/punjabi/perfect.jpg",
    singer: "NIKK | MANN DHAMI"
  },
  {
    name: "WISH",
    path: "music/punjabi/wish.mp3",
    img: "musicimages/punjabi/wish.jpg",
    singer: "NIKK | NIKESHA"
  },
  {
    name: "RELATION",
    path: "music/punjabi/relation.mp3",
    img: "musicimages/punjabi/relation.jpg",
    singer: "NIKK"
  },
  {
    name: "CUTE",
    path: "music/punjabi/cute.mp3",
    img: "musicimages/punjabi/cute.jpg",
    singer: "VICKY SANDHU"
  },
  {
    name: "NAKHRE TERE",
    path: "music/punjabi/nakhretere.mp3",
    img: "musicimages/punjabi/nakhretere.jpg",
    singer: "NIKK"
  },
  {
    name: "CHAR CHUDIYAAN",
    path: "music/punjabi/chaarchudiyaan.mp3",
    img: "musicimages/punjabi/chaarchudiyaan.jpg",
    singer: "NIKK"
  },
  {
    name: "NO COMPETITION",
    path: "music/punjabi/nocompetition.mp3",
    img: "musicimages/punjabi/nocompetition.jpg",
    singer: "DIVNE ft JASS MANAK"
  },
  {
    name: "LEHANGA",
    path: "music/punjabi/lehanga.mp3",
    img: "musicimages/punjabi/lehanga.jpg",
    singer: "JASS MANAK"
  },
  {
    name: "TERI NAAR",
    path: "music/punjabi/terinaar.mp3",
    img: "musicimages/punjabi/terinaar.jpg",
    singer: "NIKK"
  },
  {
    name: "GUITAR SIKHDA",
    path: "music/punjabi/guitarsikhda.mp3",
    img: "musicimages/punjabi/guitarsikhda.jpg",
    singer: "JASSIE GILL"
  },
  {
    name: "MANN JA VE",
    path: "music/punjabi/mannjave.mp3",
    img: "musicimages/punjabi/mannjave.jpg",
    singer: "KAY VEE SINGH"
  },
  {
    name: "YES OR NO",
    path: "music/punjabi/yesorno.mp3",
    img: "musicimages/punjabi/yesorno.jpg",
    singer: "JASS MANAK"
  },
  {
    name: "DISTANCE LOVE",
    path: "music/punjabi/distancelove.mp3",
    img: "musicimages/punjabi/distancelove.jpg",
    singer: "YAARI GHUMAN"
  },
  {
    name: "KYA BAAT AY",
    path: "music/punjabi/kyabaatay.mp3",
    img: "musicimages/punjabi/kyabaatay.jpg",
    singer: "HARRDY SANDHU"
  },
  {
    name: "BAKCBONE",
    path: "music/punjabi/backbone.mp3",
    img: "musicimages/punjabi/backbone.jpg",
    singer: "HARRDY SANDHU"
  },
  {
    name: "LOVE YOU OYE",
    path: "music/punjabi/loveyouoye.mp3",
    img: "musicimages/punjabi/loveyouoye.jpg",
    singer: "PRABH GILL"
  },
  {
    name: "SHOPPING",
    path: "music/punjabi/shopping.mp3",
    img: "musicimages/punjabi/shopping.jpg",
    singer: "JASS MANAK"
  },
  {
    name: "PRADA",
    path: "music/punjabi/prada.mp3",
    img: "musicimages/punjabi/prada.jpg",
    singer: "JASS MANAK"
  },
  {
    name: "VIAH",
    path: "music/punjabi/viah.mp3",
    img: "musicimages/punjabi/viah.jpg",
    singer: "JASS MANAK"
  },
  {
    name: "JATTI DA CRUSH",
    path: "music/punjabi/jattidacrush.mp3",
    img: "musicimages/punjabi/jattidacrush.jpg",
    singer: "KAY VEE SINGH"
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