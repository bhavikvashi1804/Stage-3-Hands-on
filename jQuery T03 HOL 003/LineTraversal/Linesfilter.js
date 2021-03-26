var myResult = [];

$(document).ready(() => {
  $("#search").click(() => {

    //clear the prev state
    myResult = [];
    
    //get the search term
    var searchTerm = $("#searchTerms").val();
    //split the word by ","
    var words = searchTerm.split(",");

    //iterate through each and every word
    $.each(words, function (i) {
      findTheWordInTextArea(words[i]);
    });

    $.each(myResult, function (i) {
      console.log(myResult[i]);
    });
  });
});

function findTheWordInTextArea(word) {
  //console.log(word);

  //iterate through each and every line of input field
  var searchTextArea = $("#searchText").val();

  var searchTextAreaLines = searchTextArea.split(/\r|\r\n|\n/);
  $.each(searchTextAreaLines, function (i) {
    if (searchTextAreaLines[i].indexOf(word) != -1) {
      myResult.push(searchTextAreaLines[i]);
    }
  });
}
