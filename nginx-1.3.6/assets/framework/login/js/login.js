define(function (require) {
   
   seajs.pluginSDK.config.locale = 'en-us';
  
    var $ =  require('jquery.ui');
    
    require('jquery.validate');
    
    require('./messages_zh.js');
    
    require('jquery.placeholder');
    
  
    
    var res = require('./resource');
    
    var lang = res();
     
    var Mustache = require('mustache');
    
    var template = $('#login-form-tpl').html()
 
    var result = Mustache.render(template, lang);
     

    
     $('#login-form').html(result);
      
     //console.log($('#login h2').html());
     // console.log (getres('username'));
   
/*   
  
    
     
    console.log (getres('username'));
    
*/        
   

        
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
    
    
    $('#lang').change(function(){
    
       console.log('select value : ' + $(this).val());
     
      changeLang($(this).val());
    
    });
   
    function validate(username, password){
      
       return username =='admin'|| password =='admin'
      
    }
   
   
    function changeLang(language){
       //change system lang in var and cookie
       
          seajs.pluginSDK.config.locale = language;
          
          var lang = res();
          
           for (var key in lang ){
    
            console.log( key + '=' + lang[key]);
      
            }
          
       //change ui
         var result = Mustache.render(template, res());
       
         $('#login-form').html(result);
    
    }

    
});