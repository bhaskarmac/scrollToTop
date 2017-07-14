(function($) {

  $.fn.scrollToTop = function(options) {

    //Adding default settings to the plugin
    var settings = $.extend({
      position: 'fixed',
      height: '50px',
      width: '50px',
      bottom  : '50px',
      right   : '50px',
      bgColor : '#000',
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
      $(this).css('background-color', settings.bgColor );
    }


  };

}(jQuery));
