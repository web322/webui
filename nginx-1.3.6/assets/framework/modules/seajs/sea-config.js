;(function(){

seajs.debug = 0;

// seajs的模块别名，注意如果有代码已经通过别名引用模块，不能随便更改别名。

var alias = {
    
    'async' : 'gallery/async/0.1.23/async',
    'backbone' : 'gallery/backbone/0.9.2/backbone',
    'coffee-script' : 'gallery/coffee/1.4.0/coffee-script',
    'es5-safe' : 'gallery/es5-safe/0.9.2/es5-safe',
    'handlebars' : 'gallery/handlebars/1.0.0/handlebars',
    'jasmine' : 'gallery/jasmine/1.2.0/jasmine',
    'json' : 'gallery/json/1.0.2/json',
    'jsuri' : 'gallery/jsuri/1.2.2/jsuri',
    'keymaster' : 'gallery/keymaster/1.0.2/keymaster',
    'less' : ' gallery/less/1.3.1/less',
    'moment' : 'gallery/moment/1.7.2/moment',
    'mustache' : 'gallery/mustache/0.7.0/mustache',
    'querystring' : 'gallery/querystring/1.0.2/querystring',
    'raphael' : 'gallery/raphael/2.1.0/raphael',
    'selection' : 'gallery/selection/0.9.0/selection',
    'swfobject' : 'gallery/swfobject/2.3.0/swfobject',
    'underscore' : 'gallery/underscore/1.4.3/underscore',
    
    '$' : 'gallery/jquery/1.8.3/jquery',
    'jquery.ui' : 'jquery/ui/1.9.2/ui',
    'jquery.cookie' : 'jquery/cookie/1.0.0/cookie',
    'jquery.themeswitcher' : 'jquery/themeswitcher/1.0.0/themeswitcher',
    'jquery.hashchange' : 'jquery/hashchange/1.3/hashchange',
    
};

//预留，map是替换，同alias不同。 alias是对路径按'/'切割后的第一个元素做别名替换。
var map = [];

if (seajs.debug) {

    for (var k in alias) {
    
        if (alias.hasOwnProperty(k)) {
             var p = alias[k];
            if (!/\.(?:css|js)$/.test(p)) {
                alias[k] += '-debug';
            }
        }
    }
    map = [];                  
}

//seajs参数配置

seajs.config({
    
    map : map,
    alias : alias,
    debug : seajs.debug,
    
    preload : [
       // 'seajs/plugin-combo',    //nginx must install concat module 
        'seajs/plugin-text',
        'seajs/plugin-i18n',
       // 'seajs/plugin-warning',  //support in seajs1.3.1
        this.JSON ? '' : 'json',                          //如果浏览器没有内置JSON支持，则启用脚本。
        Function.prototype.bind ? '' : 'es5-safe'      //预加载es5的兼容函数
                         
    ],
    locale: 'zh-cn' 
    
});

})(this);
