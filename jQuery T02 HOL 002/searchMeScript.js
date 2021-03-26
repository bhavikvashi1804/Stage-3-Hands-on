$(document).ready(function () {
  $("#par")
    .find("span")
    .hover(
      function () {
        $(this).css("background-color", "bisque");
      },
      function () {
        $(this).css("background-color", "white");
      }
    );

  $("input").change(function () {
    var searchTerm = $(this).val();
    //console.log(text);
    if (searchTerm === "") {
      $("#par")
        .children("span")
        .each(function () {
          if ($(this).hasClass("searchedWord")) {
            $(this).removeClass("searchedWord");
          }
        });
      return;
    }

    $("#par")
      .children("span")
      .each(function () {
        var spanText = $(this).text();

        if ($(this).hasClass("searchedWord")) {
          $(this).removeClass("searchedWord");
        }

        if (spanText.indexOf(searchTerm) != -1) {
          $(this).addClass("searchedWord");
        }
      });
  });
});
