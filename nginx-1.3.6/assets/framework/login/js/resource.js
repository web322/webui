define(function (require,exports) {
   
   var lang ={};
   
   lang['zh-cn'] = {
       username : "用户名",
       password : "密码",
       valicode : "验证码",
       language : "语言",
       chinese : "中文",
       english : "英文",
       userinput:"请输入用户名",
       pwdinput:"请输入密码",
       login:"登陆",
  
   };
   lang['en-us'] = {
        username: "username",
        password : "password",
        valicode : "validate code",
        language : "language",
        chinese : "Chinese",
        english : "English",
        userinput:"Please Input User Name",
        pwdinput:"Please Input Password",
        login:"Login",
   
   };
   
   
    return function  resource(key){
       
        if( typeof key == 'undefined'){
           
          return lang[seajs.pluginSDK.config.locale];
          
        }else{
          return lang[seajs.pluginSDK.config.locale][key];
        }
        
        
        
      
   };
  
    
   
});