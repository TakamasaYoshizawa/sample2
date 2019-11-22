(function($, window) {
    $(function() {
      $('#login').on('click',function(){
        var email = $('#email').val(), password = $('#password').val();

        if (email = '') {
          alert('Enter your e-mail adress');
        } else if (email.indexOf('@') < 0){
          alert('You must enter "@" ok?');
        }

        if (password == ''){
          alert('Enter your password');
        }else if (password.length < 6) {
          alert ('You need enter more than 6alphabet')
        }
      })
    })
  })(jQuery, window);