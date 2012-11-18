define("m",function(require,exports,module){
      var $ =require('$');
	  $("#content2").html("test module define by inline code....")
	  
      var m2 =require('m2');
	  m2.go();

   });
   

define("m2",function(require,exports,module){
     
	  exports.go=function()
	  {
	    console.log('print message in module m2')  
	  }
});

seajs.use('m');