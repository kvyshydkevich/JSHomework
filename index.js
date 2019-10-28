

     console.log("Hello!");
 

var myService = (function(){
     function F(str){
          return "Helloo" + str;
     }

     return{
          SayHello : F
     }
})();

myService.SayHello('Katya');