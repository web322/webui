# WebUI Project
##使用nginx作为测试的环境
###1.nginx常用命令

nginx -s stop 强制关闭  
nginx -s quit 安全关闭   
nginx -s reload 改变配置文件的时候，重启nginx工作进程，来时配置文件生效  
nginx -s reopen 打开日志文件  

###2.采用Seajs作为模块加载器
	 如何融合不同组建的i18n方案：提供自己的local封装，提供local属性的外部访问API，在给第3方组件做个adapter。 
	 
###3.Node和SPM环境配置作为模块加载器	 
     从git服务器clone的代码建议放到D盘，因为npm config 的cache /prefix 都设置为D:\webui\node-0.8.14\npm
	 运行的时候添加“d:\webui\node-0.8.14\nodejs;D:\webui\node-0.8.14\npm”到PATH环境变量。
   