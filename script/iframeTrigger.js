$('img').click(function () {
    var video = '<iframe width="640" height="360" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
    $(this).replaceWith(video);
  });