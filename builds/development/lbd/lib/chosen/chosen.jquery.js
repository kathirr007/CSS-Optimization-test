(function(){var h,s,r,n,o={}.hasOwnProperty;(n=function(){function t(){this.options_index=0,this.parsed=[]}return t.prototype.add_node=function(t){return"OPTGROUP"===t.nodeName.toUpperCase()?this.add_group(t):this.add_option(t)},t.prototype.add_group=function(t){var e,s,i,r,o,n;for(e=this.parsed.length,this.parsed.push({array_index:e,group:!0,label:this.escapeExpression(t.label),title:t.title?t.title:void 0,children:0,disabled:t.disabled,classes:t.className}),n=[],i=0,r=(o=t.childNodes).length;i<r;i++)s=o[i],n.push(this.add_option(s,e,t.disabled));return n},t.prototype.add_option=function(t,e,s){if("OPTION"===t.nodeName.toUpperCase())return""!==t.text?(null!=e&&(this.parsed[e].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:t.value,text:t.text,html:t.innerHTML,title:t.title?t.title:void 0,selected:t.selected,disabled:!0===s?s:t.disabled,group_array_index:e,group_label:null!=e?this.parsed[e].label:null,classes:t.className,style:t.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1},t.prototype.escapeExpression=function(t){var e,s;return null==t||!1===t?"":/[\&\<\>\"\'\`]/.test(t)?(e={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},s=/&(?!\w+;)|[\<\>\"\'\`]/g,t.replace(s,function(t){return e[t]||"&amp;"})):t},t}()).select_to_array=function(t){var e,s,i,r,o;for(s=new n,i=0,r=(o=t.childNodes).length;i<r;i++)e=o[i],s.add_node(e);return s.parsed},s=function(){function r(t,e){var s,i;this.form_field=t,this.options=null!=e?e:{},this.label_click_handler=(s=this.label_click_handler,i=this,function(){return s.apply(i,arguments)}),r.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers(),this.on_ready())}return r.prototype.set_default_values=function(){var e=this;return this.click_test_action=function(t){return e.test_active_click(t)},this.activate_action=function(t){return e.activate_field(t)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.is_rtl=this.options.rtl||/\bchosen-rtl\b/.test(this.form_field.className),this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text&&this.options.allow_single_deselect,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null==this.options.enable_split_word_search||this.options.enable_split_word_search,this.group_search=null==this.options.group_search||this.options.group_search,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null==this.options.single_backstroke_delete||this.options.single_backstroke_delete,this.max_selected_options=this.options.max_selected_options||1/0,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null==this.options.display_selected_options||this.options.display_selected_options,this.display_disabled_options=null==this.options.display_disabled_options||this.options.display_disabled_options,this.include_group_label_in_selected=this.options.include_group_label_in_selected||!1,this.max_shown_results=this.options.max_shown_results||Number.POSITIVE_INFINITY,this.case_sensitive_search=this.options.case_sensitive_search||!1,this.hide_results_on_select=null==this.options.hide_results_on_select||this.options.hide_results_on_select},r.prototype.set_default_text=function(){return this.form_field.getAttribute("data-placeholder")?this.default_text=this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||r.default_multiple_text:this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||r.default_single_text,this.default_text=this.escape_html(this.default_text),this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||r.default_no_result_text},r.prototype.choice_label=function(t){return this.include_group_label_in_selected&&null!=t.group_label?"<b class='group-name'>"+t.group_label+"</b>"+t.html:t.html},r.prototype.mouse_enter=function(){return this.mouse_on_container=!0},r.prototype.mouse_leave=function(){return this.mouse_on_container=!1},r.prototype.input_focus=function(t){var e=this;if(this.is_multiple){if(!this.active_field)return setTimeout(function(){return e.container_mousedown()},50)}else if(!this.active_field)return this.activate_field()},r.prototype.input_blur=function(t){var e=this;if(!this.mouse_on_container)return this.active_field=!1,setTimeout(function(){return e.blur_test()},100)},r.prototype.label_click_handler=function(t){return this.is_multiple?this.container_mousedown(t):this.activate_field()},r.prototype.results_option_build=function(t){var e,s,i,r,o,n,l;for(e="",o=r=0,n=(l=this.results_data).length;o<n&&((i="")!==(i=(s=l[o]).group?this.result_add_group(s):this.result_add_option(s))&&(r++,e+=i),(null!=t?t.first:void 0)&&(s.selected&&this.is_multiple?this.choice_build(s):s.selected&&!this.is_multiple&&this.single_set_selected_text(this.choice_label(s))),!(r>=this.max_shown_results));o++);return e},r.prototype.result_add_option=function(t){var e,s;return t.search_match&&this.include_option_in_results(t)?(e=[],t.disabled||t.selected&&this.is_multiple||e.push("active-result"),!t.disabled||t.selected&&this.is_multiple||e.push("disabled-result"),t.selected&&e.push("result-selected"),null!=t.group_array_index&&e.push("group-option"),""!==t.classes&&e.push(t.classes),(s=document.createElement("li")).className=e.join(" "),s.style.cssText=t.style,s.setAttribute("data-option-array-index",t.array_index),s.innerHTML=t.search_text,t.title&&(s.title=t.title),this.outerHTML(s)):""},r.prototype.result_add_group=function(t){var e,s;return(t.search_match||t.group_match)&&0<t.active_options?((e=[]).push("group-result"),t.classes&&e.push(t.classes),(s=document.createElement("li")).className=e.join(" "),s.innerHTML=t.search_text,t.title&&(s.title=t.title),this.outerHTML(s)):""},r.prototype.results_update_field=function(){if(this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.results_build(),this.results_showing)return this.winnow_results()},r.prototype.reset_single_select_options=function(){var t,e,s,i,r;for(r=[],e=0,s=(i=this.results_data).length;e<s;e++)(t=i[e]).selected?r.push(t.selected=!1):r.push(void 0);return r},r.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},r.prototype.results_search=function(t){return this.results_showing?this.winnow_results():this.results_show()},r.prototype.winnow_results=function(){var t,e,s,i,r,o,n,l,h,c,_,a;for(this.no_results_clear(),r=0,t=(n=this.get_search_text()).replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),i=this.get_search_regex(t),e=this.get_highlight_regex(t),c=0,_=(a=this.results_data).length;c<_;c++)(s=a[c]).search_match=!1,o=null,this.include_option_in_results(s)&&(s.group&&(s.group_match=!1,s.active_options=0),null!=s.group_array_index&&this.results_data[s.group_array_index]&&(0===(o=this.results_data[s.group_array_index]).active_options&&o.search_match&&(r+=1),o.active_options+=1),s.search_text=s.group?s.label:s.html,s.group&&!this.group_search||(s.search_match=this.search_string_match(s.search_text,i),s.search_match&&!s.group&&(r+=1),s.search_match?(n.length&&(l=s.search_text.search(e),h=s.search_text.substr(0,l+n.length)+"</em>"+s.search_text.substr(l+n.length),s.search_text=h.substr(0,l)+"<em>"+h.substr(l)),null!=o&&(o.group_match=!0)):null!=s.group_array_index&&this.results_data[s.group_array_index].search_match&&(s.search_match=!0)));return this.result_clear_highlight(),r<1&&n.length?(this.update_results_content(""),this.no_results(n)):(this.update_results_content(this.results_option_build()),this.winnow_results_set_highlight())},r.prototype.get_search_regex=function(t){var e,s;return e=this.search_contains?"":"^",s=this.case_sensitive_search?"":"i",new RegExp(e+t,s)},r.prototype.get_highlight_regex=function(t){var e,s;return e=this.search_contains?"":"\\b",s=this.case_sensitive_search?"":"i",new RegExp(e+t,s)},r.prototype.search_string_match=function(t,e){var s,i,r,o;if(e.test(t))return!0;if(this.enable_split_word_search&&(0<=t.indexOf(" ")||0===t.indexOf("["))&&(i=t.replace(/\[|\]/g,"").split(" ")).length)for(r=0,o=i.length;r<o;r++)if(s=i[r],e.test(s))return!0},r.prototype.choices_count=function(){var t,e,s;if(null!=this.selected_option_count)return this.selected_option_count;for(t=this.selected_option_count=0,e=(s=this.form_field.options).length;t<e;t++)s[t].selected&&(this.selected_option_count+=1);return this.selected_option_count},r.prototype.choices_click=function(t){if(t.preventDefault(),this.activate_field(),!this.results_showing&&!this.is_disabled)return this.results_show()},r.prototype.keydown_checker=function(t){var e,s;switch(e=null!=(s=t.which)?s:t.keyCode,this.search_field_scale(),8!==e&&this.pending_backstroke&&this.clear_backstroke(),e){case 8:this.backstroke_length=this.get_search_field_value().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(t),this.mouse_on_container=!1;break;case 13:case 27:this.results_showing&&t.preventDefault();break;case 32:this.disable_search&&t.preventDefault();break;case 38:t.preventDefault(),this.keyup_arrow();break;case 40:t.preventDefault(),this.keydown_arrow()}},r.prototype.keyup_checker=function(t){var e,s;switch(e=null!=(s=t.which)?s:t.keyCode,this.search_field_scale(),e){case 8:this.is_multiple&&this.backstroke_length<1&&0<this.choices_count()?this.keydown_backstroke():this.pending_backstroke||(this.result_clear_highlight(),this.results_search());break;case 13:t.preventDefault(),this.results_showing&&this.result_select(t);break;case 27:this.results_showing&&this.results_hide();break;case 9:case 16:case 17:case 18:case 38:case 40:case 91:break;default:this.results_search()}},r.prototype.clipboard_event_checker=function(t){var e=this;if(!this.is_disabled)return setTimeout(function(){return e.results_search()},50)},r.prototype.container_width=function(){return null!=this.options.width?this.options.width:this.form_field.offsetWidth+"px"},r.prototype.include_option_in_results=function(t){return!(this.is_multiple&&!this.display_selected_options&&t.selected)&&(!(!this.display_disabled_options&&t.disabled)&&!t.empty)},r.prototype.search_results_touchstart=function(t){return this.touch_started=!0,this.search_results_mouseover(t)},r.prototype.search_results_touchmove=function(t){return this.touch_started=!1,this.search_results_mouseout(t)},r.prototype.search_results_touchend=function(t){if(this.touch_started)return this.search_results_mouseup(t)},r.prototype.outerHTML=function(t){var e;return t.outerHTML?t.outerHTML:((e=document.createElement("div")).appendChild(t),e.innerHTML)},r.prototype.get_single_html=function(){return'<a class="chosen-single chosen-default">\n  <span>'+this.default_text+'</span>\n  <div><b></b></div>\n</a>\n<div class="chosen-drop">\n  <div class="chosen-search">\n    <input class="chosen-search-input" type="text" autocomplete="off" />\n  </div>\n  <ul class="chosen-results"></ul>\n</div>'},r.prototype.get_multi_html=function(){return'<ul class="chosen-choices">\n  <li class="search-field">\n    <input class="chosen-search-input" type="text" autocomplete="off" value="'+this.default_text+'" />\n  </li>\n</ul>\n<div class="chosen-drop">\n  <ul class="chosen-results"></ul>\n</div>'},r.prototype.get_no_results_html=function(t){return'<li class="no-results">\n  '+this.results_none_found+" <span>"+t+"</span>\n</li>"},r.browser_is_supported=function(){return"Microsoft Internet Explorer"===window.navigator.appName?8<=document.documentMode:!(/iP(od|hone)/i.test(window.navigator.userAgent)||/IEMobile/i.test(window.navigator.userAgent)||/Windows Phone/i.test(window.navigator.userAgent)||/BlackBerry/i.test(window.navigator.userAgent)||/BB10/i.test(window.navigator.userAgent)||/Android.*Mobile/i.test(window.navigator.userAgent))},r.default_multiple_text="Select Some Options",r.default_single_text="Select an Option",r.default_no_result_text="No results match",r}(),(h=jQuery).fn.extend({chosen:function(i){return s.browser_is_supported()?this.each(function(t){var e,s;s=(e=h(this)).data("chosen"),"destroy"!==i?s instanceof r||e.data("chosen",new r(this,i)):s instanceof r&&s.destroy()}):this}}),r=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return function(t,e){for(var s in e)o.call(e,s)&&(t[s]=e[s]);function i(){this.constructor=t}i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype}(e,s),e.prototype.setup=function(){return this.form_field_jq=h(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex},e.prototype.set_up_html=function(){var t,e;return(t=["chosen-container"]).push("chosen-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&t.push(this.form_field.className),this.is_rtl&&t.push("chosen-rtl"),e={class:t.join(" "),title:this.form_field.title},this.form_field.id.length&&(e.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen"),this.container=h("<div />",e),this.container.width(this.container_width()),this.is_multiple?this.container.html(this.get_multi_html()):this.container.html(this.get_single_html()),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chosen-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chosen-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chosen-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chosen-search").first(),this.selected_item=this.container.find(".chosen-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior()},e.prototype.on_ready=function(){return this.form_field_jq.trigger("chosen:ready",{chosen:this})},e.prototype.register_observers=function(){var e=this;return this.container.bind("touchstart.chosen",function(t){e.container_mousedown(t)}),this.container.bind("touchend.chosen",function(t){e.container_mouseup(t)}),this.container.bind("mousedown.chosen",function(t){e.container_mousedown(t)}),this.container.bind("mouseup.chosen",function(t){e.container_mouseup(t)}),this.container.bind("mouseenter.chosen",function(t){e.mouse_enter(t)}),this.container.bind("mouseleave.chosen",function(t){e.mouse_leave(t)}),this.search_results.bind("mouseup.chosen",function(t){e.search_results_mouseup(t)}),this.search_results.bind("mouseover.chosen",function(t){e.search_results_mouseover(t)}),this.search_results.bind("mouseout.chosen",function(t){e.search_results_mouseout(t)}),this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen",function(t){e.search_results_mousewheel(t)}),this.search_results.bind("touchstart.chosen",function(t){e.search_results_touchstart(t)}),this.search_results.bind("touchmove.chosen",function(t){e.search_results_touchmove(t)}),this.search_results.bind("touchend.chosen",function(t){e.search_results_touchend(t)}),this.form_field_jq.bind("chosen:updated.chosen",function(t){e.results_update_field(t)}),this.form_field_jq.bind("chosen:activate.chosen",function(t){e.activate_field(t)}),this.form_field_jq.bind("chosen:open.chosen",function(t){e.container_mousedown(t)}),this.form_field_jq.bind("chosen:close.chosen",function(t){e.close_field(t)}),this.search_field.bind("blur.chosen",function(t){e.input_blur(t)}),this.search_field.bind("keyup.chosen",function(t){e.keyup_checker(t)}),this.search_field.bind("keydown.chosen",function(t){e.keydown_checker(t)}),this.search_field.bind("focus.chosen",function(t){e.input_focus(t)}),this.search_field.bind("cut.chosen",function(t){e.clipboard_event_checker(t)}),this.search_field.bind("paste.chosen",function(t){e.clipboard_event_checker(t)}),this.is_multiple?this.search_choices.bind("click.chosen",function(t){e.choices_click(t)}):this.container.bind("click.chosen",function(t){t.preventDefault()})},e.prototype.destroy=function(){return h(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),0<this.form_field_label.length&&this.form_field_label.unbind("click.chosen"),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData("chosen"),this.form_field_jq.show()},e.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field.disabled||this.form_field_jq.parents("fieldset").is(":disabled"),this.container.toggleClass("chosen-disabled",this.is_disabled),this.search_field[0].disabled=this.is_disabled,this.is_multiple||this.selected_item.unbind("focus.chosen",this.activate_field),this.is_disabled?this.close_field():this.is_multiple?void 0:this.selected_item.bind("focus.chosen",this.activate_field)},e.prototype.container_mousedown=function(t){var e;if(!this.is_disabled)return!t||"mousedown"!==(e=t.type)&&"touchstart"!==e||this.results_showing||t.preventDefault(),null!=t&&h(t.target).hasClass("search-choice-close")?void 0:(this.active_field?this.is_multiple||!t||h(t.target)[0]!==this.selected_item[0]&&!h(t.target).parents("a.chosen-single").length||(t.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),h(this.container[0].ownerDocument).bind("click.chosen",this.click_test_action),this.results_show()),this.activate_field())},e.prototype.container_mouseup=function(t){if("ABBR"===t.target.nodeName&&!this.is_disabled)return this.results_reset(t)},e.prototype.search_results_mousewheel=function(t){var e;if(t.originalEvent&&(e=t.originalEvent.deltaY||-t.originalEvent.wheelDelta||t.originalEvent.detail),null!=e)return t.preventDefault(),"DOMMouseScroll"===t.type&&(e*=40),this.search_results.scrollTop(e+this.search_results.scrollTop())},e.prototype.blur_test=function(t){if(!this.active_field&&this.container.hasClass("chosen-container-active"))return this.close_field()},e.prototype.close_field=function(){return h(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chosen-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale(),this.search_field.blur()},e.prototype.activate_field=function(){if(!this.is_disabled)return this.container.addClass("chosen-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},e.prototype.test_active_click=function(t){var e;return(e=h(t.target).closest(".chosen-container")).length&&this.container[0]===e[0]?this.active_field=!0:this.close_field()},e.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=n.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():this.is_multiple||(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chosen-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chosen-container-single-nosearch"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1},e.prototype.result_do_highlight=function(t){var e,s,i,r;if(t.length){if(this.result_clear_highlight(),this.result_highlight=t,this.result_highlight.addClass("highlighted"),(i=parseInt(this.search_results.css("maxHeight"),10))+(r=this.search_results.scrollTop())<=(e=(s=this.result_highlight.position().top+this.search_results.scrollTop())+this.result_highlight.outerHeight()))return this.search_results.scrollTop(0<e-i?e-i:0);if(s<r)return this.search_results.scrollTop(s)}},e.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},e.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.container.addClass("chosen-with-drop"),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.get_search_field_value()),this.winnow_results(),this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this}))},e.prototype.update_results_content=function(t){return this.search_results.html(t)},e.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chosen-with-drop"),this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})),this.results_showing=!1},e.prototype.set_tab_index=function(t){var e;if(this.form_field.tabIndex)return e=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=e},e.prototype.set_label_behavior=function(){if(this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=h("label[for='"+this.form_field.id+"']")),0<this.form_field_label.length)return this.form_field_label.bind("click.chosen",this.label_click_handler)},e.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},e.prototype.search_results_mouseup=function(t){var e;if((e=h(t.target).hasClass("active-result")?h(t.target):h(t.target).parents(".active-result").first()).length)return this.result_highlight=e,this.result_select(t),this.search_field.focus()},e.prototype.search_results_mouseover=function(t){var e;if(e=h(t.target).hasClass("active-result")?h(t.target):h(t.target).parents(".active-result").first())return this.result_do_highlight(e)},e.prototype.search_results_mouseout=function(t){if(h(t.target).hasClass("active-result"))return this.result_clear_highlight()},e.prototype.choice_build=function(t){var e,s,i=this;return e=h("<li />",{class:"search-choice"}).html("<span>"+this.choice_label(t)+"</span>"),t.disabled?e.addClass("search-choice-disabled"):((s=h("<a />",{class:"search-choice-close","data-option-array-index":t.array_index,"data-toggle":"tooltip","data-placement":"bottom",title:"Remove Tag"}).tooltip()).bind("click.chosen",function(t){return i.choice_destroy_link_click(t)}),e.append(s)),this.search_container.before(e)},e.prototype.choice_destroy_link_click=function(t){if(t.preventDefault(),t.stopPropagation(),!this.is_disabled)return this.choice_destroy(h(t.target))},e.prototype.choice_destroy=function(t){if(this.result_deselect(t[0].getAttribute("data-option-array-index")))return this.active_field?this.search_field.focus():this.show_search_field_default(),this.is_multiple&&0<this.choices_count()&&this.get_search_field_value().length<1&&this.results_hide(),t.parents("li").first().remove(),this.search_field_scale()},e.prototype.results_reset=function(){if(this.reset_single_select_options(),this.form_field.options[0].selected=!0,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.trigger_form_field_change(),this.active_field)return this.results_hide()},e.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},e.prototype.result_select=function(t){var e,s;if(this.result_highlight)return e=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq.trigger("chosen:maxselected",{chosen:this}),!1):(this.is_multiple?e.removeClass("active-result"):this.reset_single_select_options(),e.addClass("result-selected"),(s=this.results_data[e[0].getAttribute("data-option-array-index")]).selected=!0,this.form_field.options[s.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(s):this.single_set_selected_text(this.choice_label(s)),this.is_multiple&&(!this.hide_results_on_select||t.metaKey||t.ctrlKey)||(this.results_hide(),this.show_search_field_default()),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.trigger_form_field_change({selected:this.form_field.options[s.options_index].value}),this.current_selectedIndex=this.form_field.selectedIndex,t.preventDefault(),this.search_field_scale())},e.prototype.single_set_selected_text=function(t){return null==t&&(t=this.default_text),t===this.default_text?this.selected_item.addClass("chosen-default"):(this.single_deselect_control_build(),this.selected_item.removeClass("chosen-default")),this.selected_item.find("span").html(t)},e.prototype.result_deselect=function(t){var e;return e=this.results_data[t],!this.form_field.options[e.options_index].disabled&&(e.selected=!1,this.form_field.options[e.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.trigger_form_field_change({deselected:this.form_field.options[e.options_index].value}),this.search_field_scale(),!0)},e.prototype.single_deselect_control_build=function(){if(this.allow_single_deselect)return this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),this.selected_item.addClass("chosen-single-with-deselect")},e.prototype.get_search_field_value=function(){return this.search_field.val()},e.prototype.get_search_text=function(){return this.escape_html(h.trim(this.get_search_field_value()))},e.prototype.escape_html=function(t){return h("<div/>").text(t).html()},e.prototype.winnow_results_set_highlight=function(){var t,e;if(null!=(t=(e=this.is_multiple?[]:this.search_results.find(".result-selected.active-result")).length?e.first():this.search_results.find(".active-result").first()))return this.result_do_highlight(t)},e.prototype.no_results=function(t){var e;return e=this.get_no_results_html(t),this.search_results.append(e),this.form_field_jq.trigger("chosen:no_results",{chosen:this})},e.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},e.prototype.keydown_arrow=function(){var t;return this.results_showing&&this.result_highlight?(t=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(t):void 0:this.results_show()},e.prototype.keyup_arrow=function(){var t;return this.results_showing||this.is_multiple?this.result_highlight?(t=this.result_highlight.prevAll("li.active-result")).length?this.result_do_highlight(t.first()):(0<this.choices_count()&&this.results_hide(),this.result_clear_highlight()):void 0:this.results_show()},e.prototype.keydown_backstroke=function(){var t;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(t=this.search_container.siblings("li.search-choice").last()).length&&!t.hasClass("search-choice-disabled")?(this.pending_backstroke=t,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0},e.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},e.prototype.search_field_scale=function(){var t,e,s,i,r,o,n,l;if(this.is_multiple){for(i={position:"absolute",left:"-1000px",top:"-1000px",display:"none",whiteSpace:"pre"},n=0,l=(r=["fontSize","fontStyle","fontWeight","fontFamily","lineHeight","textTransform","letterSpacing"]).length;n<l;n++)i[s=r[n]]=this.search_field.css(s);return(e=h("<div />").css(i)).text(this.get_search_field_value()),h("body").append(e),o=e.width()+25,e.remove(),t=this.container.outerWidth(),o=Math.min(t-10,o),this.search_field.width(o)}},e.prototype.trigger_form_field_change=function(t){return this.form_field_jq.trigger("input",t),this.form_field_jq.trigger("change",t)},e}()}).call(this);