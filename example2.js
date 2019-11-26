  
class Vehicle {
    constructor(brand, age, vehicleType) {
      this.brand = brand;
      this.age = age;
      this.vehicleType = vehicleType;
    }

    move() {
        console.log(this.brand + ' is moving.');
     }

    greeting() {
    console.log(`Hi! I need a spot for a ${this.brand}`);
    };
  }

class MotorisedVehicle extends Vehicle {
    constructor(brand, age, vehicleType, licenseNumber, engineDisplacement, fuelType) {
      super(brand, age, vehicleType, licenseNumber, engineDisplacement);
      this._licenseNumber = licenseNumber;
      this.engineDisplacement = engineDisplacement;
      this.fuelType = fuelType;
    }
    get licenseNumber() {
      return this._licenseNumber;
    }
}

class UnMotorisedVehicle extends Vehicle {
    constructor(brand, age, vehicleType) {
      super(brand, age, vehicleType);
    }
}


  class Car extends MotorisedVehicle {
    constructor(brand, age, vehicleType, licenseNumber, engineDisplacement, fuelType, capacity) {
      super(brand, age, vehicleType, licenseNumber, engineDisplacement, fuelType);
      this._capacity = capacity;
      
    }
    get capacity() {
      return this._capacity;
    }
  
    greeting(hello) {
      console.log("Can I park " + this.brand + "?");
    }

    set capacity(capacity) {
      this._capacity = newCapacity;
    }
  }
  
  
  class Motorcycle extends MotorisedVehicle {
    constructor(brand, age, vehicleType, licenseNumber, engineDisplacement, fuelType, capacity) {
      super(brand, age, vehicleType, licenseNumber, engineDisplacement, fuelType);
      this._capacity = capacity;
    
    }
    get capacity() {
      return this._capacity;
    }
  
    greeting(hello) {
      console.log("Can I park " + this.brand + "?");
    }

    set capacity(capacity) {
      this._capacity = newCapacity;
    }
  }
 
  class Bicycle extends UnMotorisedVehicle {
    constructor(brand, age, vehicleType) {
      super(brand, age, vehicleType);
      
    }
   
    }

    class Rocket extends MotorisedVehicle {
      constructor(brand, age, vehicleType, licenseNumber, engineDisplacement, fuelType, capacity) {
        super(brand, age, vehicleType, licenseNumber, engineDisplacement, fuelType);
        this._capacity = capacity;
        
      }
      get capacity() {
        return this._capacity;
      }
    
      greeting(hello) {
        console.log("Can I park " + this.brand + "?");
      }
  
      set capacity(capacity) {
        this._capacity = newCapacity;
      }
    }



  let groundFloor=['reserved', 'reserved', '', ''];

  let jee = new Car ('Jeep', 1, 'SUV', 'MP20167', 3, 'gasoline', 5);
  jee.move();
  jee.greeting();
  console.log(jee.brand);
  parkCar(jee.licenseNumber);


  let jaris = new Car ('Tyota', 5, 'Hatchback', 'MP98167', 1, 'gasoline', 5);
  jaris.move();
  jaris.greeting();
  console.log(jaris.brand);
  parkCar(jaris.licenseNumber);

  let yamaha = new Motorcycle ('Yamaha', 5, 'CoolBike', 'YP90067', 2, 'gasoline', 2);
  yamaha.move();
  yamaha.greeting();
  console.log(yamaha.brand);
  parkCar(yamaha.licenseNumber);

           
  let van = new Vehicle ('Van', 'old', 'trash');
  van.move();
  van.greeting();
  console.log(van.brand);
  parkCar(van.licenseNumber);
  

  let cycle = new Bicycle ('Aist', 10, 'Lom');
  cycle.move();
  cycle.greeting();
  console.log(cycle.brand);
  parkCar(cycle.licenseNumber);

  let rock = new Rocket ('Apollo', 1, 'SUV', '', 7, 'cerosine', 0);
  rock.move();
  rock.greeting();
  console.log(rock.brand);
  parkCar(rock.licenseNumber, rock.brand);


  function parkCar(licence, brand) {
  
  if (brand=='Apollo') {console.log("??? The nearest space shuttle airport is in Florida"); return;}

  if (!licence) {console.log("You aren't permitted to park here - no licence plate ("); return;}

  let counter=0;
    for (let i = 0; i < groundFloor.length; i++) {
        spot=groundFloor[i];
        if(!spot){
            console.log("Free spot: " + i);
            groundFloor[i]=licence;
            console.log("Got spot: " + groundFloor[i]);
            break;
          } else {
            console.log(i + " spot is occupied");
            counter++;
          }
       }
  if (counter===groundFloor.length) {console.log("Car park is occupied. Sorry (");};
   }
   
     


//let groundFloor=['reserved', 'reserved', '', ''];
//let firstFloor=['reserved', '', '', ''];

/*class ParkingLot {
      constructor(groundFloor, firstFloor) {
        this.groundFloor = groundFloor;
        this.firstFloor = firstFloor;
        
      }
  parkCar() {

        if(Spot.IsFree()){
            console.log("Free spot: " + Spot.getNumber());
          } else {
            console.log("Parking is full");
          }
       }

}
*/



/*
class Programmer extends Vehicle { 
  constructor(brand, programmingLanguage) {
    super(brand);
    this._programmingLanguage = programmingLanguage;
  }

  get programmingLanguage() {
    return this._programmingLanguage;
  }

  set programmingLanguage(newprogrammingLanguage) {
    this._programmingLanguage = newprogrammingLanguage;
  }

  writeCode() {
    console.log(this._brand + ' is coding in ' + this._programmingLanguage + '.');
  }
}
         
let jee = new Person('jee');
jee.move();
         
let cory = new Programmer('Cory', 'JavaScript');
cory.move();
cory.writeCode();
console.log(cory.brand);

*/