define(function(require,exports,module){
   
    
    function test(){
      console.log(this);
      this.b='tttt';
    }
  var util = {};
  var toString = Object.prototype.toString
  var AP = Array.prototype

  //�ж��Ƿ��Ǹ��ַ���
  util.isString = function(val) {
    return toString.call(val) === '[object String]'
  }
  
  //�ж��Ƿ��Ǹ�����
  util.isObject = function(val) {
    return val === Object(val)
  }
  console.log("ddd");
  
  console.log(Object.prototype.toString.call(new RegExp()));
  console.log(Object.prototype.toString.call(function(){}));
  console.log(Object.prototype.toString.call('string..'));
  console.log(Object.prototype.toString.call([]));
  console.log(Object.prototype.toString.call({}));
  var obj = {t:1,n:2,m:3}
  console.log(Object.keys);
  console.log(Object.keys(obj));
  
  console.dir(module);
  
  
   //console.log(Object.keys(console));
});