$(document).ready(function(){$(window).width()<836&&$(".br_remove").hide()}),$("#mc-embedded-subscribe-form").submit(function(e){var s=$(this);return $.ajax({type:"GET",url:s.attr("action").replace("/post?","/post-json?").concat("&c=?"),data:s.serialize(),dataType:"jsonp",contentType:"application/json; charset=utf-8",error:function(e){alert("Could not connect to the registration server.")},success:function(e){"success"!=e.result?($("#mce-error-response").html(""),$("mce-success-response").css("display","none"),e.msg="오류가 발생했습니다. 다시 시도해주세요.",console.log("error happend"),$("#mce-error-response").html(e.msg),console.log(e.msg)):($("#mce-success-response").html(""),$("mce-error-response").css("display","none"),e.msg="이메일이 발송되었습니다.",$("#mce-success-response").html(e.msg),console.log("success"))}}),!1});