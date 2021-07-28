//The Vehicle can only GO once the correct title of crewmember is on it 

//Types of vehicles
  //bus
  //train
  //plane
  //boat

//Titles:
  //pilot (must be present in plane)
  //captain (must be present in boat)
  //engineer (must be present in train)
  //driver(must be present in driver)

class Vehicle {
  
  constructor (identifier, type, crewAssigned) {
    //name/ identifier/ plate number or the vehicle/ unique identifier
    this.identifier = identifier
    //type of vehicle
    this.type = type
    //crewAssigned - an array of crew members (objects) assigned to the vehicle  
    this.crewAssigned = []
  }

  canGo() {
    console.log(`CG this vehicle is a: ${this.type}`)

      //for all the crewAssigned 
    for (let i=0; i < this.crewAssigned.length; i++) {
      console.log(`CG length of crew assigned: ${this.crewAssigned.length}`) 

      let currentCrewTitle = this.crewAssigned[i].title
      console.log(`CG current crew member's title : ${JSON.stringify(currentCrewTitle, null, 2)}`)

      //if/ then. if the/ any crewMember's title is the correct title for this type of vehicle
      //then the vehicle can go
      if ((currentCrewTitle == "Pilot" && this.type == "Plane") || (currentCrewTitle == "Driver" && this.type == "Bus") || (currentCrewTitle == "Engineer" && this.type == "Train") || (currentCrewTitle == "Captain" && this.type == "Boat")) {
        console.log (`We have a ${JSON.stringify(currentCrewTitle, null, 2)} and a ${this.type}. Let's GO!`)
        return true
      }
    }
  //else return false
  console.log(`Nobody on this crew can drive a ${this.type}`)
  }
}



class CrewMember {
  //assignedVehicle - the Vehicle this crew member is assigned to
    //(several CrewMembers can be on a vehicle)
  constructor (name, title, assignedVehicle) {
    //name
     this.name = name
     //title (pilot, captain, etc.)
     this.title = title
     //Vehicle (can only be assigned to one crewMember at a time)
     this.assignedVehicle = null
  }

  //Methods:
  assignTo(vehicle) {

    //TO DO! if assigned to vehicle already, then need to remove from that crewAssgned array
    if(this.assignedVehicle !== null) {
      //find the vehicle for which they are assignedCrew
      //and remove them from that vehicle
    }
    //assignTo(Vehicle) - assigns this crewMember to the vehicle passed in
    vehicle.crewAssigned.push(this) //THIS WORKS BY ITSELF
    // console.log(`AT now the vehicle has a crew: ${JSON.stringify(vehicle, null, 2)}`) //This creates a circular structure when I assign the vehicle to the person

    //and update the Vehicle's list of assigned crew members (crewAssigned)
    this.assignedVehicle = vehicle //THIS WORKS BY ITSELF
    // console.log(`AT the crewMember is now: ${JSON.stringify(this, null, 2)}`)
  }
}

let nina = new CrewMember("Nina", "Pilot")
// console.log(`nina's name ${nina.name}`)
// console.log(`nina: ${(JSON.stringify(nina, null, 2))}`)
let shondra = new CrewMember("Shondra", "Engineer")
let donna = new CrewMember("Donna", "Captain")
let marie = new CrewMember("Marie", "Driver")

let v1 = new Vehicle("12341", "Plane")
// console.log(`v1 ${(JSON.stringify(v1, null, 2))}`)
let v2 = new Vehicle ("54325", "Bus")
let v3 = new Vehicle("Betty", "Boat")

nina.assignTo(v1);
console.log(`Length of crewAssigned in Nina's assignedVehicle: ${nina.assignedVehicle.crewAssigned.length}`) //THIS! tells me that (a) Nina has an assigned vehicle and (b) the length of that crew is 1 (as it should be, because she's the only one on it so far)


shondra.assignTo(v2);
// // console.log(`Shondra's assigned vehicle: ${shondra.assignedVehicle}`)

donna.assignTo(v2);

marie.assignTo(v1)
console.log(`Length of crewAssigned in Marie's assignedVehicle: ${marie.assignedVehicle.crewAssigned.length}`)


v1.canGo(); //true, because Nina is assigned to V1, and she is a pilot
v2.canGo(); //false, because v2 is a bus, and its assignedCrew are Shondra, an engineer, and Donna, a captain
v3.canGo(); // false, because v3 has no assigned crew; the console.log comes back weird, because it implies there's a crew on the boat

console.log(`Does v2 have a length: ${v2.crewAssigned.length}`) // 2, because Shondra and Donna are assigned to this vehicle

console.log(`this is nina's assigned vehicle: ${nina.assignedVehicle.identifier}`) //12341, because Nina is assigned to v1, and it's identifer is 12341

//if this is too easy, and only after you are done with the above, 
  //what happens if you assign a crew member to two vehicles?
      //The crewMember's assignedVehicle will always only by one; it's replaced with this.assignedVehicle = vehicle in canGo()

  //they need to be removed from the first list and assigned to the second one 

nina.assignTo(v3)
