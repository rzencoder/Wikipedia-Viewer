/*Wikipedia article search for Free Code Camp using Bootstrap and JQuery*/

$(document).ready(function() {

  //Search when button clicked
  $("#search-button").click(function() {
    //Clear previous search results
    $("ul").html("");

    //Store search query and url
    var searchString = $("input").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + searchString + "&callback=?";
    var searchInfo = [];

    //ajax call to get wikipedia data
    $.ajax({
      type: "GET",
      url: url,
      dataType: "json",
      async: false,
      success: function(data) {
        searchInfo = data;
        //for loop to display data in html  
        for (i = 0; i < 10; i++) {
          $("ul").append("<li>" + '<a href="' + searchInfo[3][i] + '">' + searchInfo[1][i] + "</a><br>" + searchInfo[2][i] + "</li>");
        }
      },
      error: function() {
        $("ul").html("error");
      }
    });

    //Open random wikipedia page
    $(".random").click(function() {
      window.open("https://en.wikipedia.org/wiki/Special:Random");
    });
  });
});