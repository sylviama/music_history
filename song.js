//This wield array is given by the exercise.
var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

//Make the messy string array into array with objects each contains three properties: name, artist and album; 
var songInOrder=[];
for(i=0;i<songs.length;i++){
  var songArray = [];
  var songArraySed =[];
  songArray=songs[i].split(' > by ');
  songArraySed= songArray[1].split(' on the album ');


  songInOrder[i]={};
  songInOrder[i].name = songArray[0];
  songInOrder[i].artist= songArraySed[0];
  songInOrder[i].album= songArraySed[1];
}

//Write the array into HTML
var sec="";
for(i=0;i<songInOrder.length;i++){
  var h1="<h1>"+songInOrder[i].name+"</h1>";
  var li1Artist="<li>"+songInOrder[i].artist+"</li>";
  var li2Album="<li>"+songInOrder[i].album+"</li>";

  sec+="<section>"+h1+"<ul>"+li1Artist+li2Album+"</ul>"+"</section>";

}

document.getElementById("addedSong").innerHTML= sec;














