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
    $("#par")
      .children("span")
      .each(function () {
        var spanText = $(this).text();

        if (spanText.indexOf(searchTerm) != -1) {
          $(this).css({
            "font-style": "italic",
            "text-shadow": "2px 2px pink",
            "font-weight": "bold",
          });
        }
      });
  });
});
