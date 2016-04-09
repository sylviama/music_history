$(document).ready(function(){

  //Load song1.json file and loop to the song list(index.html)
  $.ajax({
    url: "songs1.json"
  }).done(function(data){
    loopThrough(data.songs);
  });

  function loopThrough(data){
    $(data).each(function(i, element){
      $("#addedSongs3").append("<ul><h1>"+element.songName+"</h1>"+"<li>"+element.artist+"</li><li>"+element.album+"</li><button>Delete</button></ul>");
    });
  };
  
  //load songs2.json file, (but hide until click "more" button)
  $.ajax({
    url:"songs2.json"
  }).done(function(data){
    loadJson2(data.songs);
  });

  function loadJson2(data){
    $(data).each(function(i,element){
      $("#addedSongs4").append("<ul><h1>"+element.songName+"</h1><li>"+element.artist+"</li><li>"+element.album+"</li><button>Delete</button></ul>");
    })
  };

  //When click "more" button, load the second json file
  $("#more").click(function(){
    $("#addedSongs4").show();
    //when click more, hide "more" btn and show "less" btn
    $("#more").hide();
    $("#less").show();
  });

  //less function: hide the songs in addedSongs4, and the "less" btn, show "more" btn
  $("#less").click(lessFunction);

  function lessFunction(){
    $("#addedSongs4").hide();
    $("#more").show();
    $("#less").hide();
  }

    // delete each song function
    $("#addedSongs3").click(function(event){
      $(event.target.parentNode).empty();
    });

    $("#addedSongs4").click(function deleteFunction(event){
      $(event.target.parentNode).empty();
    });
});

