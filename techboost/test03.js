(function($, window) {
    $(function() {
      // ここに処理を書きます
      $('html').on('click', function() {
        $(this).css({'color': 'red'});
      });
    });
  })(jQuery, window);