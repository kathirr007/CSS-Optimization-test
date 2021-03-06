(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* Ce champs est requis",
                    "alertTextCheckboxMultiple": "* Merci de s&eacute;lectionner une option",
                    "alertTextCheckboxe": "* Merci de cocher cette case",
                    "alertTextDateRange": "* La p&eacute;riode est requise"
                },
                "requiredInFunction": { 
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* Field must equal test"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* Cette ",
                    "alertText2": "p&eacute;riode est invalide"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "* Cette ",
                    "alertText2": "p&eacute;riode est invalide"
                },				
                "minSize": {
                    "regex": "none",
                    "alertText": "* Minimum ",
                    "alertText2": " caract&egrave;res autoris&eacute;s"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* Maximum ",
                    "alertText2": " caract&egrave;res autoris&eacute;s"
                },
				"groupRequired": {
                    "regex": "none",
                    "alertText": "* Vous devez remplir l'un des champs suivants"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* La valeur minimale <br> possible est de ",
					"alertText2": " euros"
                },
                "max": {
                    "regex": "none",
                    "alertText": "* La valeur maximale <br> possible est de ",
					"alertText2": " euros"
                },
                "maxVol": {
                    "regex": "none",
                    "alertText": "* volume should correspond to tempo ",
                    "alertText2": ""
                },
				"maxWriters": {
                    "regex": "none",
                    "alertText": "* La valeur maximale possible est de ",
					"alertText2": ""
                },
				"minWriters": {
                    "regex": "none",
                    "alertText": "* La valeur minimale possible est de ",
					"alertText2": ""
                },
                "past": {
                    "regex": "none",
                    "alertText": "* Date prior to "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* Date past "
                },	
				"priceRange": {
                    "regex": "none",
                    "alertText": "* Le tarif donn&eacute; doit &ecirc;tre inf&eacute;rieur &agrave; celui donn&eacute; pour la question"                    
                },
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* Maximum ",
                    "alertText2": " options autoris&eacute;es"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* Merci de s&eacute;lectionner ",
                    "alertText2": " option(s)"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* Fields do not match"
                },
				"notequals": {
                    "regex": "none",
                    "alertText": "* Fields are matching"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* Invalid credit card number"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}[\ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9\ \.\-\/]{3,20})((x|ext|extension)[\ ]?[0-9]{1,4})?$/,
                    "alertText": "* Invalid phone number"
                },
                //added by naseer on 01-08-2015//
                "zipcode": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}[\ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9\ \.\-\/]{3,20})((x|ext|extension)[\ ]?[0-9]{1,4})?$/,
                    "alertText": "* Invalid Zip code"
                },
                "email": {
                    // HTML5 compatible email regex ( http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#    e-mail-state-%28type=email%29 )
                    //"regex": /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    "regex": /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                    "alertText": "* Invalid email address"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* Not a valid integer"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* Invalid floating decimal number"
                },
				"price": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* Prix incorrect"
                },
				"bulk_price": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* Prix incorrect"
                },
				"time": {
                    "regex": /^[\-\+]?(\d+)?$/,
                    "alertText": "* Ceci n'est pas une dur&eacute;e valide"
                },
                "date": {                    
                    //	Check if date is valid by leap year
			"func": function (field) {
					var pattern = new RegExp(/^(\d{4})[\/\-\.](0?[1-9]|1[012])[\/\-\.](0?[1-9]|[12][0-9]|3[01])$/);
					var match = pattern.exec(field.val());
					if (match == null)
					   return false;
	
					var year = match[1];
					var month = match[2]*1;
					var day = match[3]*1;					
					var date = new Date(year, month - 1, day); // because months starts from 0.
	
					return (date.getFullYear() == year && date.getMonth() == (month - 1) && date.getDate() == day);
				},                		
			 "alertText": "* Invalid date, must be in YYYY-MM-DD format"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* Invalid IP address"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* Invalid URL"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* Numbers only"
                },
                "onlyCommaSp": {
                    "regex": /^[0-9.,]+$/,
                    "alertText": "* Price only"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* Letters only"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* No special characters allowed"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
				"ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This username is available",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* This name is already taken",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This name is available",
                    // speaks by itself
                    "alertTextLoad": "* Validating, please wait"
                },
				 "ajaxNameCallPhp": {
	                    // remote json service location
	                    "url": "phpajax/ajaxValidateFieldName.php",
	                    // error
	                    "alertText": "* This name is already taken",
	                    // speaks by itself
	                    "alertTextLoad": "* Validating, please wait"
	                },
                "validate2fields": {
                    "alertText": "* Please input HELLO"
                },
				
				
				
				"ajaxEmailValidate":{
					
					// remote json service location
	                    "url": "/user/email-exits",
						"extraData": "user_type=super_client",
	                    // error
	                    "alertText": "* Email already in use!",
	                    // speaks by itself
	                    "alertTextLoad": "* Validating, please wait"
				},
				"ajaxClientValidate":{
					
					// remote json service location
	                    "url": "/user/client-exists",
						"extraData": "edit_client="+$("#edit_client" ).val(),
						"extraDataDynamic": "#edit_client",
	                    // error
	                    "alertText": "* Client already in use!",
	                    // speaks by itself
	                    "alertTextLoad": "* Validating, please wait"
				
				
				},
				"ajaxClientNoValidate":{
					
					// remote json service location
	                    "url": "/user/client-no-exists",
						"extraData": "ca_number="+$("#ca_number").val(),
						"extraDataDynamic": "#user_id",
	                    // error
	                    "alertText": "* Num&eacute;ro du client already in use!",
	                    // speaks by itself
	                    "alertTextLoad": "* Validating, please wait"
				
				
				},
                "ajaxYahooidValidate":{
                    // remote json service location
                    "url": "/user/yahoo-skype-ids-exits",
                    "extraData": "messenger=yahoo_id&user_status="+$("#user_status" ).val()+"userId="+$("#userId" ).val(),
                    "extraDataDynamic": "#user_status, #userId",
                    // error
                    "alertText": "* Yahoo id already in use!",
                    // speaks by itself
                    "alertTextLoad": "* Validating, please wait"
                },
                "ajaxSkypeidValidate":{
                    // remote json service location
                    "url": "/user/yahoo-skype-ids-exits",
                    "extraData": "messenger=skype_id&user_status="+$("#user_status" ).val()+"userId="+$("#userId" ).val(),
                    "extraDataDynamic": "#user_status, #userId",
                    // error
                    "alertText": "* Skype id already in use!",
                    // speaks by itself
                    "alertTextLoad": "* Validating, please wait"
                },
				
	            //tls warning:homegrown not fielded 
                "dateFormat":{
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* Invalid Date"
                },
                //tls warning:homegrown not fielded 
				"dateTimeFormat": {
	                "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText": "* Invalid Date or Date Format",
                    "alertText2": "Expected Format: ",
                    "alertText3": "mm/dd/yyyy hh:mm:ss AM|PM or ", 
                    "alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
	            },
	            'nbblogRange':{
					"regex": "none",
					"alertText": "* Un article de blog fait en <br>g&#233;n&#233;ral entre 200 et 500 mots",
					},
	            'nbnewsRange':{
					"regex": "none",
					"alertText": "* Une news fait en <br>g&#233;n&#233;ral entre 50 et 200 mots",
					},
	            'nbdescRange':{
					"regex": "none",
					"alertText": "* Un desc Produit fait en <br>g&#233;n&#233;ral entre 40 et 150 mots",
					},
	            'nbguideRange':{
					"regex": "none",
					"alertText": "* Un guide fait en g&#233;n&#233;ral <br>entre 500 et 1500 mots",
					}
            };
            
        }
    };

    $.validationEngineLanguage.newLang();
    
})(jQuery);
