!function(a){a.fn.hashtags=function(){a(this).wrap('<div class="jqueryHashtags"><div class="highlighter"></div></div>').unwrap().before('<div class="highlighter"></div>').wrap('<div class="typehead"></div></div>'),a(this).addClass("theSelector"),autosize(a(this)),a(this).on("keyup",function(){var t=a(this).val();a(this).parent().parent().find(".highlighter").css("width",a(this).css("width")),(t=t.replace(/\n/g,"<br>")).match(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?#([a-zA-Z0-9]+)/g)||t.match(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?@([a-zA-Z0-9]+)/g)||t.match(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?#([\u0600-\u06FF]+)/g)||t.match(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?@([\u0600-\u06FF]+)/g)||(t=t.match(/#(([a-zA-Z0-9]+)|([\u0600-\u06FF]+))#/g)?t.replace(/#(([a-zA-Z0-9]+)|([\u0600-\u06FF]+))#(([a-zA-Z0-9]+)|([\u0600-\u06FF]+))/g,'<span class="hashtag">#$1</span>'):t.replace(/#(([\w-]+)|([\u0600-\u06FF]+))/g,'<span class="hashtag">#$1</span>')),a(this).parent().parent().find(".highlighter").html(t)}),a(this).parent().prev().on("click",function(){a(this).parent().find(".theSelector").focus()})}}(jQuery);