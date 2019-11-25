function Vehicle(brand, age, vehicleType) {
    this.brand = brand;
    this.age = age;
    this.vehicleType = vehicleType;
}

Vehicle.prototype.greeting = function () {
    console.log(`Hi! I need a spot for ${this.brand}`);
}

Vehicle.prototype.move = function () {
    console.log(this.brand + ' is moving.');
}



function MotorisedVehicle(brand, age, vehicleType, licenseNumber, engineDisplacement, fuelType) {
    Vehicle.call(this, brand, age, vehicleType);
    this.licenseNumber = licenseNumber;
    this.engineDisplacement = engineDisplacement;
    this.fuelType = fuelType;
}

MotorisedVehicle.prototype = Object.create(Vehicle.prototype);
MotorisedVehicle.prototype.constructor = MotorisedVehicle;


MotorisedVehicle.prototype.getLicenseNumber = function () {
    return this.licenseNumber;
}



function UnMotorisedVehicle(brand, age, vehicleType) {
    Vehicle.call(this, brand, age, vehicleType);
}

UnMotorisedVehicle.prototype = Object.create(Vehicle.prototype);
UnMotorisedVehicle.prototype.constructor = UnMotorisedVehicle;



function Car(brand, age, vehicleType, licenseNumber, engineDisplacement, fuelType, capacity) {
    MotorisedVehicle.call(this, brand, age, vehicleType, licenseNumber, engineDisplacement, fuelType);
    this.capacity = capacity;
}

Car.prototype = Object.create(MotorisedVehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.greeting = function () {
    console.log("Can I park " + this.brand + "?");
}




function Motorcycle(brand, age, vehicleType, licenseNumber, engineDisplacement, fuelType, capacity) {
    MotorisedVehicle.call(this, brand, age, vehicleType, licenseNumber, engineDisplacement, fuelType);
    this.capacity = capacity;
}

Motorcycle.prototype = Object.create(MotorisedVehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.greeting = function () {
    console.log("Can I put somewhere my " + this.brand + "?");
}


function Bicycle(brand, age, vehicleType) {
    UnMotorisedVehicle.call(this, brand, age, vehicleType);
}

Bicycle.prototype = Object.create(UnMotorisedVehicle.prototype);
Bicycle.prototype.constructor = Bicycle;



function Rocket(brand, age, vehicleType, licenseNumber, engineDisplacement, fuelType, capacity) {
    MotorisedVehicle.call(this, brand, age, vehicleType, licenseNumber, engineDisplacement, fuelType);
    this.capacity = capacity;
}

Rocket.prototype = Object.create(MotorisedVehicle.prototype);
Rocket.prototype.constructor = Rocket;





let parkingLots = ['reserved', 'reserved', '', ''];

let jee = new Car('Jeep', 1, 'SUV', 'MP20167', 3, 'gasoline', 5);
jee.move();
jee.greeting();
parkCar(jee.licenseNumber);


let jaris = new Car('Tyota', 5, 'Hatchback', 'MP98167', 1, 'gasoline', 5);
jaris.move();
jaris.greeting();
parkCar(jaris.licenseNumber);

let yamaha = new Motorcycle('Yamaha', 5, 'CoolBike', 'YP90067', 2, 'gasoline', 2);
yamaha.move();
yamaha.greeting();
parkCar(yamaha.licenseNumber);


let van = new Vehicle('Van', 'old', 'trash');
van.move();
van.greeting();
parkCar(van.licenseNumber);


let cycle = new Bicycle('Aist', 10, 'Lom');
cycle.move();
cycle.greeting();
parkCar(cycle.licenseNumber);

let rock = new Rocket('Apollo', 1, 'SUV', '', 7, 'cerosine', 0);
rock.move();
rock.greeting();
parkCar(rock.licenseNumber, rock.brand);


function parkCar(licence, brand) {
    if (brand == 'Apollo') { console.log("??? The nearest space shuttle airport is in Florida" + "\n"); return; }
    if (!licence) { console.log("You aren't permitted to park here - no licence plate (" + "\n"); return; }
    let counter = 0;
    for (let i = 0; i < parkingLots.length; i++) {
        spot = parkingLots[i];
        if (!spot) {
            console.log("Free spot: " + i);
            parkingLots[i] = licence;
            console.log("Got spot: " + parkingLots[i] + "\n");
            break;
        } else {
            counter++;
        }
    }
    if (counter === parkingLots.length) { console.log("Car park is fully occupied. Sorry (" + "\n"); };
}

