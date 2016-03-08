//Load song1.json file and loop to the song list(index.html)
var json1Data = new XMLHttpRequest();

json1Data.addEventListener("load", addMoreSongs);

function addMoreSongs(){
  var data = JSON.parse(json1Data.responseText);
  var string="";
  for(var i=0;i<data.songs.length;i++){
    string+="<ul>"+"<h1>"+data.songs[i].songName+"</h1>"+"<li>"+data.songs[i].artist+"</li><li>"+data.songs[i].album+"</li><button>Delete</button></ul>";
  }
  document.getElementById("addedSongs3").innerHTML = string;
}

json1Data.open("GET","songs1.json");
json1Data.send();


//delete each song function
  document.getElementById("addedSongs3").addEventListener("click",deleteFunction);
  function deleteFunction(event){
    this.removeChild(event.target.parentNode);
  }

//When click "more" button, load the second json file
document.getElementById("more").addEventListener("click", triggerJson2);

function triggerJson2(){
  var json2Data = new XMLHttpRequest();

  json2Data.addEventListener("load", loadJson2);

  function loadJson2(){
  var data = JSON.parse(json2Data.responseText);
  var string="";
  for(var i=0;i<data.songs.length;i++){
    string+="<ul>"+"<h1>"+data.songs[i].songName+"</h1>"+"<li>"+data.songs[i].artist+"</li><li>"+data.songs[i].album+"</li><button>Delete</button></ul>";
  }
  document.getElementById("addedSongs4").innerHTML = string;
}

  json1Data.open("GET","songs2.json");
  json1Data.send();
}

//current: cannot make both addedSong3 and addedSong4 run


