describe("Borders",function(){$("#borders div").each(function(e,a){it($(this).attr("style"),function(){["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"].forEach(function(e){var t=$(a).css(e);"thin"===t?t="1px":"medium"===t?t="3px":"thick"===t&&(t="5px");var r=new NodeContainer(a,null);expect(r.css(e)).to.be(t)})})})}),describe("Padding",function(){$("#padding div").each(function(e,r){it($(this).attr("style"),function(){["paddingTop","paddingRight","paddingBottom","paddingLeft"].forEach(function(e){var t=new NodeContainer(r,null).css(e);expect(t).to.contain("px"),expect(t,$(r).css(e))})})})}),describe("Background-position",function(){$("#backgroundPosition div").each(function(e,n){it($(this).attr("style"),function(){var e="backgroundPosition",t=new Image;t.width=50,t.height=50;var r=new NodeContainer(n,null),a=(r.css(e),r.parseBackgroundPosition(getBounds(n),t)),i=window.getComputedStyle?$(n).css(e).split(" "):[$(n).css(e+"X"),$(n).css(e+"Y")],l=$("<div />").css({position:"absolute",left:i[0],top:i[1]});l.appendTo(n),expect(a.left).to.equal(Math.floor(parseFloat(l.css("left")))),expect(a.top).to.equal(Math.floor(parseFloat(l.css("top")))),l.remove()})})}),describe("Text-shadow",function(){$("#textShadows div").each(function(e,t){var r=new NodeContainer(t,null).parseTextShadows();if(0===e)expect(r.length).to.equal(0);else{if(expect(r.length).to.equal(6<=e?2:1),expect(r[0].offsetX).to.equal(e),expect(r[0].offsetY).to.equal(e),e<2)expect(r[0].color.toString()).to.equal("rgba(0,0,0,0)");else if(e%2==0)expect(r[0].color.toString()).to.equal("rgb(2,2,2)");else{expect(r[0].color.toString()).to.match(/rgba\(2,2,2,(0.2|0\.199219)\)/)}1===e&&expect(r[0].blur).to.equal("1")}})}),describe("Background-image",function(){function e(e,t,r){it(r,function(){expect(parseBackgrounds(e)).to.eql(Array.isArray(t)?t:[t])})}e('url("te)st")',{prefix:"",method:"url",value:'url("te)st")',args:["te)st"],image:null},"test quoted"),e('url("te,st")',{prefix:"",method:"url",value:'url("te,st")',args:["te,st"],image:null},"test quoted"),e("url(te,st)",{prefix:"",method:"url",value:"url(te,st)",args:["te,st"],image:null},"test quoted"),e("url(test)",{prefix:"",method:"url",value:"url(test)",args:["test"],image:null},"basic url"),e('url("test")',{prefix:"",method:"url",value:'url("test")',args:["test"],image:null},"quoted url"),e("url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",{prefix:"",method:"url",value:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",args:["data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"],image:null},"data url"),e("linear-gradient(red,black)",{prefix:"",method:"linear-gradient",value:"linear-gradient(red,black)",args:["red","black"],image:null},"linear-gradient"),e("linear-gradient(top,rgb(255,0,0),rgb(0,0,0))",{prefix:"",method:"linear-gradient",value:"linear-gradient(top,rgb(255,0,0),rgb(0,0,0))",args:["top","rgb(255,0,0)","rgb(0,0,0)"],image:null},"linear-gradient w/ rgb()"),e("-webkit-linear-gradient(red,black)",{prefix:"-webkit-",method:"linear-gradient",value:"-webkit-linear-gradient(red,black)",args:["red","black"],image:null},"prefixed linear-gradient"),e('linear-gradient(red,black), url(test), url("test"),\n none, ',[{prefix:"",method:"linear-gradient",value:"linear-gradient(red,black)",args:["red","black"],image:null},{prefix:"",method:"url",value:"url(test)",args:["test"],image:null},{prefix:"",method:"url",value:'url("test")',args:["test"],image:null},{prefix:"",method:"none",value:"none",args:[],image:null}],"multiple backgrounds")});