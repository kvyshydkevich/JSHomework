  
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
    console.log(`Hi! I need a spot for ${this.brand}`);
    };
  }

class MotorisedVehicle extends Vehicle {
    constructor(brand, age, vehicleType, licenseNumber, engineDisplacement, fuelType) {
      super(brand, age, vehicleType);
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
  
    greeting() {
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

    greeting() {
      console.log("Can I put somewhere my " + this.brand + "?");
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
  /*  
      greeting(hello) {
        console.log("Can I park " + this.brand + "?");
      }
  */
      set capacity(capacity) {
        this._capacity = newCapacity;
      }
    }



  let parkingLots=['reserved', 'reserved', '', ''];

  let jee = new Car ('Jeep', 1, 'SUV', 'MP20167', 3, 'gasoline', 5);
  jee.move();
  jee.greeting();
  parkCar(jee.licenseNumber);


  let jaris = new Car ('Tyota', 5, 'Hatchback', 'MP98167', 1, 'gasoline', 5);
  jaris.move();
  jaris.greeting();
  parkCar(jaris.licenseNumber);

  let yamaha = new Motorcycle ('Yamaha', 5, 'CoolBike', 'YP90067', 2, 'gasoline', 2);
  yamaha.move();
  yamaha.greeting();
  parkCar(yamaha.licenseNumber);

           
  let van = new Vehicle ('Van', 'old', 'trash');
  van.move();
  van.greeting();
  parkCar(van.licenseNumber);
  

  let cycle = new Bicycle ('Aist', 10, 'Lom');
  cycle.move();
  cycle.greeting();
  parkCar(cycle.licenseNumber);

  let rock = new Rocket ('Apollo', 1, 'SUV', '', 7, 'cerosine', 0);
  rock.move();
  rock.greeting();
  parkCar(rock.licenseNumber, rock.brand);


  function parkCar(licence, brand) {
  if (brand=='Apollo') {console.log("??? The nearest space shuttle airport is in Florida" + "\n"); return;}
  if (!licence) {console.log("You aren't permitted to park here - no licence plate (" + "\n"); return;}
  let counter=0;
    for (let i = 0; i < parkingLots.length; i++) {
        spot=parkingLots[i];
        if(!spot){
            console.log("Free spot: " + i);
            parkingLots[i]=licence;
            console.log("Got spot: " + parkingLots[i] + "\n");
            break;
          } else {
            counter++;
          }
       }
  if (counter===parkingLots.length) {console.log("Car park is fully occupied. Sorry (" + "\n");};
 }
   
     