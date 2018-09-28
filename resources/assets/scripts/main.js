(function($){
  $(document).ready(function() {
    if ($('.acf-field-yoast').length) {
      $('.acf-field-yoast .acf-input').append($('.wpseo-metabox-content'));
      $('.wpseo-metabox').remove();
    }
  });
})(jQuery);
