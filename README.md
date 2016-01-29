# CodeFlash - Jquery Plugin
  Jquery Plugin to highlight/styling  *snippet code*.
  
### Dependencies
 * https://jquery.com/ 
### How to use
 * Download, include Js and css file.

### Example usage
<link rel="stylesheet" type="text/css" href="css/codeflash.css">
<script src="js/codeflash.js"></script>

    $(document).ready(function(){
       $('pre').codeflash({
           color:'red',
           languages:['php']
       });
    });