
  define('module-002',function(require){
  
     console.log('inin module-002');
     return {name:'testmodule-002'};
  });
    
  
  define('module-003',function(require){
  
     console.log('inin module-003');
     return {name:'testmodule-003'};
  });
  

  define('module-001',function(require){
   
   // console.log(require.resolve('$'));
       
    // var $ = require('jquery.cookie');
     
    // $.cookie("theme","sunny",{path:'/',expires:365});
     
   
   
    
    return "hello seajs";
 
  /*
  
    var STATUS = {
    'FETCHING': 1,  // The module file is fetching now.
    'FETCHED': 2,   // The module file has been fetched.
    'SAVED': 3,     // The module info has been saved.
    'READY': 4,     // All dependencies and self are ready to compile.
    'COMPILING': 5, // The module is in compiling now.
    'COMPILED': 6   // The module is compiled and module.exports is available.
  }
  */
     
  });
  
  

  
