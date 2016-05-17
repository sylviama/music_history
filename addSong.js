//View show and hide function (Music History Part 3)
// $(document).ready(function(){
  $("#link-list").click(listShow);
  $("#link-add").click(function(){
    addShow();
    $("#addBtn").show();
    $("#addGoBack").show();
    $("#editSubmit").hide();
  });


  function listShow(){
    $("#listView").show();
    $("#addView").hide();
  }

  function addShow(){
    $("#listView").hide();
    $("#addView").show();
  }

  //ADD SONG Function (Music History Part 3)
  $("#addBtn").click(function(){
    addSongFunction();
    inputBoxClear();
  });

  $("#addGoBack").click(function(){
    addSongFunction();
    inputBoxClear();
    listShow();
  });

  function addSongFunction(){
    var songObject = {
      "songName": $("#songName").val(),
      "artist":$("#artistPerson").val(),
      "album":$("#albumName").val()
    };
    // songObject.songName = $("#songName").val();
    // songObject.artist = $("#artistPerson").val();
    // songObject.album = $("#albumName").val();
    // songInOrder.push(songObject);
    $.ajax({
      url:"https://trying-out.firebaseio.com/songs/.json",
      type: "POST",
      data: JSON.stringify(songObject)
    }).done(function(){
      $("#addedSongs3").empty();
      getJSON1Data();
    });
  };

  function inputBoxClear(){
    $("#songName").val("");
    $("#artistPerson").val("");
    $("#albumName").val("");
    listShow();
  };

// });
    

    

    // $(songInOrder).each(function(i,element){
    //   $("#addedSong").append("<section>");
    //   $("#addedSong").append("<h1>"+element.name+"</h1>");
    //   $("#addedSong").append("<li>"+element.artist+"</li>");
    //   $("#addedSong").append("<li>"+element.album+"</li>");
  





