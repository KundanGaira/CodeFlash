# CodeFlash - Jquery Plugin
  Jquery Plugin to highlight  *snippet code*.
  
### Dependencies
 * https://jquery.com/
 
### How to use
 * Download files from github.
 * Include Js and css file in your web page.
 * Write code snippet inside *<pre>* or any other tag.

### Example usage
<link rel="stylesheet" type="text/css" href="css/codeflash.css">
<script src="js/codeflash.js"></script>

    $(document).ready(function(){
       $('pre').codeflash({
           languages:['php']
       });
    });

This will flash /Highlight all code snippet inside *<pre>* tag
