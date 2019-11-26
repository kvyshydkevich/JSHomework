const vehicleType = [CAR, TRUCK, ELECTRIC, VAN, MOTORBIKE];
  
const parkingSpotType = [HANDICAPPED, COMPACT, LARGE, MOTORBIKE, ELECTRIC];

class ParkingSpot {
    number;
    free;
    vehicle;
    parkingSpotType;
  
    IsFree();
  
    ParkingSpot(parkingSpotType) {
      this.parkingSpotType = parkingSpotType;
    }
  
    assignVehicle(vehicle) {
      this.vehicle = vehicle;
      free = false;
    }
  
    removeVehicle() {
      this.vehicle = null;
      free = true;
    }
  }
  
  class HandicappedSpot extends ParkingSpot {
    HandicappedSpot() {
      super(parkingSpotType.HANDICAPPED);
    }
  }
  
  class CompactSpot extends ParkingSpot {
    CompactSpot() {
      super(parkingSpotType.COMPACT);
    }
  }
  
  class LargeSpot extends ParkingSpot {
    LargeSpot() {
      super(parkingSpotType.LARGE);
    }
  }
  
  class MotorbikeSpot extends ParkingSpot {
    MotorbikeSpot() {
      super(parkingSpotType.MOTORBIKE);
    }
  }
  
  class ElectricSpot extends ParkingSpot {
    ElectricSpot() {
      super(parkingSpotType.ELECTRIC);
    }
  }

  //----------------------------------------------------------------

class Vehicle {
    licenseNumber;
    vehicleType;
    ticket;
  
    Vehicle(vehicleType) {
      this.vehicleType = vehicleType;
    }
  
    assignTicket(parkingTicket) {
      this.parkingTicket = parkingTicket;
    }
  }
  
  class Car extends Vehicle {
    Car() {
      super(vehicleType.CAR);
    }
  }
  
  class Van extends Vehicle {
    Van() {
      super(vehicleType.VAN);
    }
  }
  
  class Truck extends Vehicle {
    Truck() {
      super(vehicleType.TRUCK);
    }
  }

//----------------------------------------------------------------------------------------

class ParkingFloor {
    name;
    handicappedSpots =[];
    compactSpots =[];
    largeSpots =[];
    motorbikeSpots =[];
    electricSpots  =[];
    infoPortals  =[];
   displayBoard  =[];
  
ParkingFloor(name) {
      this.name = name;
    }
  
addParkingSpot(spot) {
      switch (spot.getType()) {
      case ParkingSpotType.HANDICAPPED:
        handicappedSpots.put(spot.getNumber(), spot);
        break;
      case ParkingSpotType.COMPACT:
        compactSpots.put(spot.getNumber(), spot);
        break;
      case ParkingSpotType.LARGE:
        largeSpots.put(spot.getNumber(), spot);
        break;
      case ParkingSpotType.MOTORBIKE:
        motorbikeSpots.put(spot.getNumber(), spot);
        break;
      case ParkingSpotType.ELECTRIC:
        electricSpots.put(spot.getNumber(), spot);
        break;
      default:
        print("Wrong parking spot type!");
      }
    }
  
 assignVehicleToSpot(vehicle, spot) {
      spot.assignVehicle(vehicle);
      switch (spot.getType()) {
      case ParkingSpotType.HANDICAPPED:
        updateDisplayBoardForHandicapped(spot);
        break;
      case ParkingSpotType.COMPACT:
        updateDisplayBoardForCompact(spot);
        break;
      case ParkingSpotType.LARGE:
        updateDisplayBoardForLarge(spot);
        break;
      case ParkingSpotType.MOTORBIKE:
        updateDisplayBoardForMotorbike(spot);
        break;
      case ParkingSpotType.ELECTRIC:
        updateDisplayBoardForElectric(spot);
        break;
      default:
        print("Wrong parking spot type!");
      }
    }
  
    updateDisplayBoardForHandicapped(spot) {
      if (this.displayBoard.getHandicappedFreeSpot().getNumber() == spot.getNumber()) {
        // find another free handicapped parking and assign to displayBoard
        for (key : handicappedSpots.keySet()) {
          if (handicappedSpots.get(key).isFree()) {
            this.displayBoard.setHandicappedFreeSpot(handicappedSpots.get(key));
          }
        }
        this.displayBoard.showEmptySpotNumber();
      }
    }
  
    updateDisplayBoardForCompact(spot) {
      if (this.displayBoard.getCompactFreeSpot().getNumber() == spot.getNumber()) {
        // find another free compact parking and assign to displayBoard
        for (key : compactSpots.keySet()) {
          if (compactSpots.get(key).isFree()) {
            this.displayBoard.setCompactFreeSpot(compactSpots.get(key));
          }
        }
        this.displayBoard.showEmptySpotNumber();
      }
    }
  
    freeSpot(spot) {
      spot.removeVehicle();
      switch (spot.getType()) {
      case ParkingSpotType.HANDICAPPED:
        freeHandicappedSpotCount++;
        break;
      case ParkingSpotType.COMPACT:
        freeCompactSpotCount++;
        break;
      case ParkingSpotType.LARGE:
        freeLargeSpotCount++;
        break;
      case ParkingSpotType.MOTORBIKE:
        freeMotorbikeSpotCount++;
        break;
      case ParkingSpotType.ELECTRIC:
        freeElectricSpotCount++;
        break;
      default:
        print("Wrong parking spot type!");
      }
    }
  }







 //------------------------------------------- 
    function showEmptySpotNumber() {
      message = "";
      if(handicappedFreeSpot.IsFree()){
        message += "Free Handicapped: " + handicappedFreeSpot.getNumber();
      } else {
        message += "Handicapped is full";
      }
      message += System.lineSeparator();
  
      if(compactFreeSpot.IsFree()){
        message += "Free Compact: " + compactFreeSpot.getNumber();
      } else {
        message += "Compact is full";
      }
      message += System.lineSeparator();
  
      if(largeFreeSpot.IsFree()){
        message += "Free Large: " + largeFreeSpot.getNumber();
      } else {
        message += "Large is full";
      }
      message += System.lineSeparator();
  
      if(motorbikeFreeSpot.IsFree()){
        message += "Free Motorbike: " + motorbikeFreeSpot.getNumber();
      } else {
        message += "Motorbike is full";
      }
      message += System.lineSeparator();
  
      if(electricFreeSpot.IsFree()){
        message += "Free Electric: " + electricFreeSpot.getNumber();
      } else {
        message += "Electric is full";
      }
  
      Show(message);
    }
  
  



//---------------------
let spot = new ParkingSpot('spott');
let vehicle = new Vehicle('car');
  
function addParkingSpot(spot) {
      switch (spot.getType()) {
      case parkingSpotType.HANDICAPPED:
        handicappedSpots.put(spot.getNumber(), spot);
        break;
      case parkingSpotType.COMPACT:
        compactSpots.put(spot.getNumber(), spot);
        break;
      case parkingSpotType.LARGE:
        largeSpots.put(spot.getNumber(), spot);
        break;
      case parkingSpotType.MOTORBIKE:
        motorbikeSpots.put(spot.getNumber(), spot);
        break;
      case parkingSpotType.ELECTRIC:
        electricSpots.put(spot.getNumber(), spot);
        break;
      default:
        print("Wrong parking spot type!");
      }
    }
  
  function assignVehicleToSpot(vehicle, spot) {
      spot.assignVehicle(vehicle);
      switch (spot.getType()) {
      case parkingSpotType.HANDICAPPED:
        updateDisplayBoardForHandicapped(spot);
        break;
      case parkingSpotType.COMPACT:
        updateDisplayBoardForCompact(spot);
        break;
      case parkingSpotType.LARGE:
        updateDisplayBoardForLarge(spot);
        break;
      case parkingSpotType.MOTORBIKE:
        updateDisplayBoardForMotorbike(spot);
        break;
      case parkingSpotType.ELECTRIC:
        updateDisplayBoardForElectric(spot);
        break;
      default:
        print("Wrong parking spot type!");
      }
    }
  
   
 function freeSpot(spot) {
      spot.removeVehicle();
      switch (spot.getType()) {
      case parkingSpotType.HANDICAPPED:
        freeHandicappedSpotCount++;
        break;
      case parkingSpotType.COMPACT:
        freeCompactSpotCount++;
        break;
      case parkingSpotType.LARGE:
        freeLargeSpotCount++;
        break;
      case parkingSpotType.MOTORBIKE:
        freeMotorbikeSpotCount++;
        break;
      case parkingSpotType.ELECTRIC:
        freeElectricSpotCount++;
        break;
      default:
        print("Wrong parking spot type!");
      }
    }
  

//---------------------------------------------
  