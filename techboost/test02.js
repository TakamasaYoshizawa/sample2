(function($, window) {
    $(function() {
      // この中に処理を書きます
      $('h2').remove();
      $('#index').html();
      $('#index').text();
      $('.list').append("<li>メソッド</li>");

      var list1 = $('#index1').text().length;
      alert(list1);
      var list2 = $('#index2').text().length;
      alert(list2);
      var list3 = $('#index3').text().length;
      alert(list3);

      $('#index li').append('jQueryのはじめ方');
    
    });
  })(jQuery, window);