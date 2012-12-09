define(function (require) {
    
    var $ =  require('jquery.ui');
    
    require('jquery.validate');
    
    require('./messages_zh.js');
    
    require('jquery.placeholder');
    
  
        
    $('input').placeholder();
    

 
    $('#btnLogin').button().click(function(){
        

        var username = $('#username').val();
        var password = $('#password').val();
        if( username == '' || password == ''){
        
            $('#msg').text('用户/密码不能为空');
          
        }
    
        if(validate(username, password)){
        
            window.document.location = 'todo.html';    
     
        }
        else
        {
            $('#msg').text('用户名/密码错误!');    
         
        }

        return false;
   
    });
   
    function validate(username, password){
      
       return username =='admin'|| password =='admin'
      
    }
   
    
});