(function($) {

  $.fn.scrollToTop = function(options) {

    //Default setting to plugin, if user not applied anything
    var settings = $.extend({
      position: 'fixed',
      height: '50px',
      width: '50px',
      bottom  : '50px',
      right   : '50px',
      bgColor : '#000',
      bgImage: 'img/defaultScrollIcon.png',
      color: '#fff'
    }, options);

    if (settings.position) {
      $(this).css('position', settings.position );
    }

    if (settings.width) {
      $(this).css('width', settings.width );
    }

    if (settings.height) {
      $(this).css('height', settings.height );
    }

    if (settings.bottom) {
      $(this).css('bottom', settings.bottom );
    }

    if (settings.right) {
      $(this).css('right', settings.right );
    }

    if (settings.bgColor) {
      if (!settings.bgImage) {
        $(this).css('background-color', settings.bgColor );
      }else{
        console.log('background image applied!')
      }
    }

    if (settings.bgImage) {
      $(this).css({'background-image':'url('+settings.bgImage+')', 'background-size':'100%', 'background-repeat':'no-repeat'});
    }


  };

}(jQuery));
