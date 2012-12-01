JQuery
----
开发常用JQuery的子集,在实际的业务开发中，可能会涉及的更少，因为很多操作都已经被业务封装。

* jQuery 核心函数
```js
jQuery(callback)  
jQuery.holdReady(hold)1.6+  
```
* JQuery 对象访问
```js
each(callback) 
size() 
length 
selector 
context 
get([index]) 
index([selector|element]) 
```

* 插件机制
```js
jQuery.fn.extend(object) 
jQuery.extend(object) 
```

* 属性操作
```js
attr(name|pro|key,val|fn) 
removeAttr(name) 
prop(name|pro|key,val|fn)1.6+ 
removeProp(name)1.6+ 
```

* CSS设置
```js
addClass(class|fn) 
removeClass([class|fn]) 
toggleClass(class|fn[,sw]) 
```

* HTML代码/文本/值
```js
html([val|fn]) 
text([val|fn]) 
val([val|fn|arr]) 
```

* 选择器基本
```js
#id 
element 
.class 
* 
selector1,selector2,selectorN 
```
* 可见性
```js
:hidden 
:visible 
```
* 表单
```js
:input 
:text 
:password 
:radio 
:checkbox 
:submit 
:image 
:reset 
:button 
:file 
:hidden 
```

* 表单对象属性
```js
:enabled 
:disabled 
:checked 
:selected
```


* 页面载入
```js
ready(fn)
```
* 事件处理
```js
on(eve,[sel],[data],fn)1.7+ 
off(eve,[sel],[fn])1.7+ 
bind(type,[data],fn) 
one(type,[data],fn) 
trigger(type,[data]) 
triggerHandler(type, [data]) 
unbind(type,[data|fn]) 
```

* 事件委派
```js
live(type,[data],fn) 
die(type,[fn]) 
delegate(sel,[type],[data],fn) 
undelegate([sel,[type],fn]) 1.6* 
```

* 事件
```js
blur([[data],fn]) 
change([[data],fn]) 
click([[data],fn]) 
dblclick([[data],fn]) 
error([[data],fn]) 
focus([[data],fn]) 
focusin([data],fn) 
focusout([data],fn) 
keydown([[data],fn]) 
keypress([[data],fn]) 
keyup([[data],fn]) 
mousedown([[data],fn]) 
mouseenter([[data],fn]) 
mouseleave([[data],fn]) 
mousemove([[data],fn]) 
mouseout([[data],fn]) 
mouseover([[data],fn]) 
mouseup([[data],fn]) 
resize([[data],fn]) 
scroll([[data],fn]) 
select([[data],fn]) 
submit([[data],fn]) 
unload([[data],fn]) 
```

* ajax 请求
```js
ajax(url,[settings]) 
load(url,[data],[callback]) 
get(url,[data],[fn],[type]) 
getJSON(url,[data],[fn]) 
getScript(url,[callback]) 
post(url,[data],[fn],[type]) 
```

* 其它
```js
ajaxSetup([options]) 
serialize() 
serializearray() 
```

* 浏览器及特性检测
```js
support 
browser 
browser.version 
```

* 数组和对象操作
```js
each(object,[callback]) 
extend([d],tgt,obj1,[objN]) 
grep(array,fn,[invert]) 
sub() 
when(deferreds) 
makearray(obj) 
map(arr|obj,callback)1.6* 
inarray(val,arr,[from]) 
toarray() 
merge(first,second) 
unique(array) 
parseJSON(json) 
```

其他
```js
noop 
proxy(function,context) 
contains(container,contained) 
type(obj) 
isarray(obj) 
isFunction(obj) 
isEmptyObject(obj) 
isPlainObject(obj) 
isWindow(obj) 
isNumeric(value)1.7+ 
trim(str) 
param(obj,[traditional])
```