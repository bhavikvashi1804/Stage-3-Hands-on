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

    //finalize the result
    var totalNoOfElements = myResult.length;
    console.log(totalNoOfElements);
    var myMessage = "";
    $.each(myResult, function (i) {
      if (i == totalNoOfElements - 1) {
        myMessage += myResult[i];
      } else {
        myMessage += myResult[i] + ", ";
      }
    });
    console.log(myMessage);
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
