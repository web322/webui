define(function (require,exports,module) {

   
   
    var $ = require('jquery');
   
    var Calendar = require('calendar');

    var start = new Calendar({
        trigger: '#date-start'
    });
    var end = new Calendar({
        trigger: '#date-end'
    });

    start.on('selectDate', function (date) {
        end.range([date, null]);
    });

    end.on('selectDate', function (date) {
        start.range([null, date]);
    });
	
  
    $("#date-start").blur(function () {
        console.log(this.value);
    });
	


});

	


