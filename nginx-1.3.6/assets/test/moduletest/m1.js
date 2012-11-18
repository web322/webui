define(function(require,exports,module){
        console.log("enter m1 moudle");
	    require('./m2').print();
		 console.log("leave m1 moudle");

   });