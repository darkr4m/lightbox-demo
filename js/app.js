//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

  var $overlay = $("<div id='overlay'></div>");
  var $image = $("<img>");
  var $caption = $("<p></p>");

  $overlay.append($image);
  $overlay.append($caption);
  $('body').append($overlay);

  $('#imageGallery a').click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr('href');
    var captionText = $(this).children('img').attr('alt');

    $image.attr("src", imageLocation);
    $overlay.show();

    $caption.text(captionText);


  });

  $overlay.click(function(){
    $(this).hide();
  });