$(document).ready(function(){

  //Load song1.json file and loop to the song list(index.html)
  $.ajax({
    url: "https://trying-out.firebaseio.com/songs/.json",
    type: "GET"
  }).done(function(data){
    loopThrough(data);
  });


  // function loopThrough(data){
  //   $(data).each(function(i, element){
  //     $("#addedSongs3").append("<ul><h1>"+element.songName+"</h1>"+"<li>"+element.artist+"</li><li>"+element.album+"</li><button>Delete</button></ul>");
  //   });
  // };

  //this is the loop through with firebase change from array to objects
  let loopThrough=(data)=>{
    for (let key in data){
      $("#addedSongs3").append("<ul><li><b>"+data[key].songName+"</b></li>"+"<li>"+data[key].artist+"</li><li>"+data[key].album+"</li><button>Delete</button></ul>");
    }
  }
  
  //load songs2.json file, (but hide until click "more" button)
  $.ajax({
    url:"https://blistering-heat-1448.firebaseio.com/songs/.json"
  }).done(function(data){
    loadJson2(data);
  });

  let loadJson2=(data)=>{
    for(let key in data){
      $("#addedSongs4").append("<ul><li><b>"+data[key].songName+"<b></li><li>"+data[key].artist+"</li><li>"+data[key].album+"</li><button>Delete</button></ul>");
    };
  };
  

  //When click "more" button, load the second json file
  $("#more").click(()=>{
    $("#addedSongs4").show();
    //when click more, hide "more" btn and show "less" btn
    $("#more").hide();
    $("#less").show();
  });

  //less function: hide the songs in addedSongs4, and the "less" btn, show "more" btn
  $("#less").click(lessfunction);

  function lessfunction(){
    $("#addedSongs4").hide();
    $("#more").show();
    $("#less").hide();
  };

    // delete each song function
    $("#addedSongs3").click((event)=>{
      $(event.target.parentNode).empty();
    });

    $("#addedSongs4").click(function deleteFunction(event){
      $(event.target.parentNode).empty();
    });
});

