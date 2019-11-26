function Person(name) {
    this.name = name;
 }
 
 Person.prototype.walk = function(){
 console.log(this.name + 'is walking');
 }
 
 function Programmer(name){
 Person.call(this,name);
 this.programmingLanguage='';
 }
 Programmer.prototype = Object.create(Person.prototype);
 Programmer.prototype.constructor = Programmer;
 
 var cory = new Programmer('Cory');
 cory.walk(); 