# WebUI Project
##目标
   构建一个前端的通用解决方案，使用seajs做为模块管理，集成jquery +jqueryui+ bootstrap(css framework)+ backbone，支持大规模的javascript单页面程序的开发。  
   整理设计思路源自[large-scale-javascript-application-architecture](https://speakerdeck.com/addyosmani/large-scale-javascript-application-architecture)。  

### 目录说明：

webui   
   -- nginx-1.3.6 静态页面的webserver  
         --assets 前端工程的所有的文件
             src 
             test
             docs
         
   -- node-0.8.14 spm的运行环境  
   -- tools 开发常用的工具，后面会从git库删除  
   
   
### 使用nginx作为测试的WebServer

nginx -s stop 强制关闭  
nginx -s quit 安全关闭   
nginx -s reload 改变配置文件的时候，重启nginx工作进程，来时配置文件生效  
nginx -s reopen 打开日志文件  

     
### SPM(seajs package manager)模块打包工具

从git服务器clone的代码建议放到D盘，因为npm config 的cache和prefix参数都设置为D:\webui\node-0.8.14\npm
运行的时候添加“d:\webui\node-0.8.14\nodejs;D:\webui\node-0.8.14\npm”到PATH环境变量。已经预装好SPMV1.1版本。


