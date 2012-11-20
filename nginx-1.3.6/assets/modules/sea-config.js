    if(typeof console === 'undefined')
	{
	   console.log=console.error=console.warn=function(){};
	   
	}
	
	console.log("version:"+seajs.version);
	console.log("base:"+seajs.pluginSDK.config.base);
	
	
   //seajs全局配置文件
   seajs.config({
    
	  alias:{
	   'jquery':'gallery/jquery/1.7.2/jquery-debug',
	    '$':'gallery/jquery/1.7.2/jquery-debug',
	   'mustache':'gallery/mustache/0.5.0/mustache',
	   'calendar':'arale/calendar/0.8.1/calendar',
	   'cookie':'gallery/cookie/1.0.2/cookie'
	  },
	  debug:1,
	  preload: ['plugin-text','plugin-i18n','plugin-json'],
	  locale: 'zh-cn'
	
	});
	
	
	