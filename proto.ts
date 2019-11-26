function Person(first, last, age, gender, interests) {
    this.name = { first, last }; 
    this.age = age; 
    this.gender = gender; 
    this.interests = interests; 
  };
  
  Person.prototype.greeting = function() { 
    console.log('Hi! I\'m ' + this.name.first + '.'); 
  };

  
  function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
    this.subject = subject; 
  }
  
  Teacher.prototype = Object.create(Person.prototype);
  Teacher.prototype.constructor = Teacher;
  
  Teacher.prototype.greeting = function() { 
    console.log('Hi! I\'m  Teacher and my name is ' + this.name.first + '.'); 
  };
  