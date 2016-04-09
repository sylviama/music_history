//View show and hide function (Music History Part 3)
$(document).ready(function(){
  $("#link-list").click(listShow);
  $("#link-add").click(addShow);


  function listShow(){
    $("#listView").show();
    $("#addView").hide();
  }

  function addShow(){
    $("#listView").hide();
    $("#addView").show();
  }

  //ADD SONG Function (Music History Part 3)
  $("#addBtn").click(addSongFunction);

  function addSongFunction(){
    var songObject = {};
    songObject.name = $("#songName").val();
    songObject.artist = $("#artistPerson").val();
    songObject.album = $("#albumName").val();
    songInOrder.push(songObject);

    $(songInOrder).each(function(i,element){
      $("#addedSong").append("<section>");
      $("#addedSong").append("<h1>"+element.name+"</h1>");
      $("#addedSong").append("<li>"+element.artist+"</li>");
      $("#addedSong").append("<li>"+element.album+"</li>");
    });
  };
});



