//View show and hide function (Music History Part 3)
document.getElementById("link-list").addEventListener("click", listShow);
document.getElementById("link-add").addEventListener("click", addShow);


function listShow(){
  document.getElementById("listView").classList.add("visible");
  document.getElementById("listView").classList.remove("hidden");

  document.getElementById("addView").classList.add("hidden");
  document.getElementById("addView").classList.remove("visible");
  console.log("show List");
}

function addShow(){
  document.getElementById("addView").classList.add("visible");
  document.getElementById("addView").classList.remove("hidden");

  document.getElementById("listView").classList.add("hidden");
  document.getElementById("listView").classList.remove("visible");
  console.log("show add");
}



//ADD SONG Function (Music History Part 3)
document.getElementById("addBtn").addEventListener("click", addSongFunction);
console.log("Song Object:",songInOrder);

function addSongFunction(){
  var songObject = {};
  songObject.name = document.getElementById("songName").value;
  songObject.artist = document.getElementById("artistPerson").value;
  songObject.album = document.getElementById("albumName").value;
  songInOrder.push(songObject);

  var sec="";
  for(i=0;i<songInOrder.length;i++){
    var h1="<h1>"+songInOrder[i].name+"</h1>";
    var li1Artist="<li>"+songInOrder[i].artist+"</li>";
    var li2Album="<li>"+songInOrder[i].album+"</li>";

    sec+="<section>"+h1+"<ul>"+li1Artist+li2Album+"</ul>"+"</section>";
  }
  document.getElementById("addedSong").innerHTML= sec;
}