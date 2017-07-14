
$(document).ready(function() {

if ( $(window).width() < 836 ) {

	$('.br_remove').hide();
}

else {

}



});



$('#mc-embedded-subscribe-form').submit(function(e){
	var $this = $(this);
  		$.ajax({
      type: "GET",
      url: $this.attr('action').replace('/post?', '/post-json?').concat('&c=?'),
      data: $this.serialize(),
      dataType    : 'jsonp',
      contentType: "application/json; charset=utf-8",
      error       : function(err) { alert("Could not connect to the registration server."); },
      success     : function(data) {
          if (data.result != "success") {
          	$('#mce-error-response').html('');
            $('mce-success-response').css('display','none');
          	data.msg = '오류가 발생했습니다. 다시 시도해주세요.';
          		console.log('error happend');
          		$('#mce-error-response').html(data.msg);
          		console.log(data.msg);

          } else {
          	$('#mce-success-response').html('');
            $('mce-error-response').css('display','none');
          	data.msg = '이메일이 발송되었습니다.';
          	$('#mce-success-response').html(data.msg);
          	console.log('success');
          }
      }
  });
  return false;
});

//제이쿼리 css묶어서 display block이랑 none조정하기