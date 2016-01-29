//We recommended to use space after and before the literal,which you want to flash /highlight   

(function ($) {
    var code = null, thisObj = null, clsPrefx = 'span-';
    var lang = [];
    lang['php'] = ['?>', '?&gt;', '<?php', '&lt;?php', '$'];//php
    lang['lit'] = ["(", ")", "{", "}", "[", "]"]; //Common
    $.fn.codeflash = function (options) {
        this.each(function () {
            thisObj = $(this);
            code = thisObj.html();
            var opts = $.extend({
                languages: []
            }, options);
            var a = opts.languages, b = (opts.languages).length, i, m;
            if (b > 0) {
                for (i = 0; i < b; i++) {  //Loop for each language passed
                    if (typeof (lang[a[i]]) != 'undefined') {  //if exists in this plugin 
                        flashPart(a[i]); // flash 
                        thisObj.html(code); // Add back to DOM
                    }
                }
            }
        });
        function flashPart(lngTyp) {  //One programming language at a time
            var a = code.split(' '), b = a.length, c, g, i, j, l;
            // After braking code into small parts, process one by one 
            for (i = 0; i < b; i++) {
                var matched = false;
           
                $(lang[lngTyp]).each(function (e, f) {
                    if (a[i].indexOf(f) == 0) { // string is at strating of word 
                        a[i] = '<span class="' + clsPrefx + lngTyp + '">' + a[i] + '</span>';
                        matched = true;
                    } else if (a[i].indexOf("\n") != -1) { // Check if Newline character is in part, 
                        c = a[i].split('\n');  //Remove it and test again
                        for (j = 0; j < c.length; j++) { //check for all subwords
                            if (c[j].indexOf(f) == 0) {
                                c[j] = '<span class="' + clsPrefx + lngTyp + '">' + c[j] + '</span>';
                                matched = true;
                            }
                        }
                        a[i] = c.join('\n');  // Join back 
                    }
                });
                if (!matched) { // this part has no char matched, So check if it is commonly used 
                    $(lang['lit']).each(function (k, d) {
                        var loc = a[i].indexOf(d);
                        if (loc != -1) { // matched
                            a[i] = a[i].replace(d, ' <span class="' + clsPrefx + 'lit">' + d + '</span> ');
                        }
                    });
                }
            }
            code = a.join(' '); // Join back
        }
    }
}(jQuery));
