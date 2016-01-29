# CodeFlash - Jquery Plugin
  Jquery Plugin to highlight  *code snippet*.
  
### Dependencies
 * https://jquery.com/
 
### How to use
 * Download files from github.
 * Include Js and css file in your web page.
 * Write code snippet inside *&lt;pre&gt;* or any other tag.

### Example usage
<link rel="stylesheet" type="text/css" href="css/codeflash.css">
<script src="js/codeflash.js"></script>

    $(document).ready(function(){
       $('pre').codeflash({
           languages:['php']
       });
    });

This will flash /Highlight  code snippet inside all *&lt;pre&gt;* tags
