define(function(require,exports,module){
      console.log("enter m2 moudle");
	   function print(){
	       console.log('pring message in module m2');
	   }
	   
	   exports.print=print;
     console.log("leave m2 moudle");
   });