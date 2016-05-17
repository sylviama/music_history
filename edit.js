$(document).on("click", ".editBtn", function(){
    var captureId= $(this).attr("id");
    var editId=captureId.split("edit_")[1];
    //switch to the add song form
    addShow();
    $("#addBtn").hide();
    $("#addGoBack").hide();
    $("#addView h3").html("UPDATE");
    $("#cancelBtn").show();
    $("#editSubmit").show();
    getCertainSong(editId);


function getCertainSong(editId){
    $.ajax({
        url:"https://trying-out.firebaseio.com/songs/"+editId+".json",
        type:"GET"
    }).done(function(data){
        $("#songName").val(data.songName);
        $("#artistPerson").val(data.artist);
        $("#albumName").val(data.album);
    });
};

//when click "Update" button
$("#editSubmit").click(function(){
    var obj={
        "songName": $("#songName").val(),
      "artist":$("#artistPerson").val(),
      "album":$("#albumName").val()
    };

    $.ajax({
      url:"https://trying-out.firebaseio.com/songs/"+editId+".json",
      type: "PUT",
      data: JSON.stringify(obj)
    }).done(function(){
        listShow();
      $("#addedSongs3").empty();
      getJSON1Data();
      $("#songName").val("");
        $("#artistPerson").val("");
        $("#albumName").val("");
    });
  });

//when click "Cancel" button
$("#cancelBtn").click(inputBoxClear);


});

