$('.filter a').click(function(e) {
      e.preventDefault();
      var a = $(this).attr('href');
      a = a.substr(1);
      $('.main a').each(function() {
        if (!$(this).hasClass(a) && a != 'all')
          $(this).addClass('hide');
        else
          $(this).removeClass('hide');
      });
    });
    $('.main a').click(function(e) {
      e.preventDefault();
      var $i = $(this);
    });
    