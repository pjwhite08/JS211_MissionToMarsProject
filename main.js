


//The Vehicle can only GO once the correct title of crewmember is on it 

//Types of vehicles
//bus
//train
//plane
//boat



class Vehicle {
  //properties available to the vehicle:
  //name/ identifier/ plate number or the vehicle/ unique identifier
  //type of vehicle
  //crewAssigned - an array of crew members (objects) assigned to the vehicle  ? does it matter that this is an array? does the class care what it's taking in?
  
  constructor (identifier, type, crewAssigned) {
    this.identifier = identifier
    this.type = type
    this.crewAssigned = []
  }

  canGo() {
//for loop
    //for all the crewAssigned (will need a length)
    console.log(`this vehicle is a: ${this.type}`)
    for (let i=0; i < this.crewAssigned.length; i++) {
    console.log(`CG length of crew assigned: ${this.crewAssigned.length}`) 
    let currentCrewMember = this.crewAssigned[i]
    // console.log(`CG current crew member: ${JSON.stringify(currentCrewMember, null, 2)}`)

    let currentCrewTitle = this.crewAssigned[i].title
    console.log(`CG current crew member's title : ${JSON.stringify(currentCrewTitle, null, 2)}`)

    if ((currentCrewTitle == "Pilot" && this.type == "Plane") || (currentCrewTitle == "Driver" && this.type == "Bus") || (currentCrewTitle == "Engineer" && this.type == "Train") || (currentCrewTitle == "Captain" && this.type == "Boat")) {
      console.log (`We have a ${JSON.stringify(currentCrewTitle, null, 2)} and a ${this.type}. Let's GO!`)
      return true
    }
    

   
    //if/ then. if the/ any crewMember's title is the correct title for this type of vehicle
    //if this vehicle is Plane and this crew member's title is Pilor 
    //OR if this vehicle is Bus and this crew member's title is Drive
    // OR other two
    //then go
    

    //then the vehicle can go
  }
  console.log(`Nobody on this crew can drive a ${this.type}`)

//return true
//else return false
  }


 
}


//Titles:
//pilot (must be present in plane)
//captain (must be present in boat)
//engineer (must be present in train)
//driver(must be present in driver)
class CrewMember {
  //name
  //title (pilot, captain, etc.)
  //Vehicle (can only be assigned to one crewMember at a time)
  //...several CrewMembers can be on a vehicle
  //assignedVehicle - the Vehicle this crew member is assigned to
  constructor (name, title, assignedVehicle) {
     this.name = name
     this.title = title
     this.assignedVehicle = null
  }
  //Methods:
    //assignTo(Vehicle) - assigns this crewMember to the vehicle passed in
    //replaces their assigned vehicle
    //and update the Vehicle's list of assigned crew members (crewAssigned)
  assignTo(vehicle) {
    this.assignedVehicle = vehicle //THIS WORKS BY ITSELF
    // console.log(`AT the crewMember is now: ${JSON.stringify(this, null, 2)}`)
    
    vehicle.crewAssigned.push(this) //THIS WORKS BY ITSELF
    console.log(`AT now the vehicle has a crew: ${JSON.stringify(vehicle, null, 2)}`) //This creates a circular structure

    //TO DO! if assigned to vehicle already, then need to remove from that crewAssgned array
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
// console.log(`Nina: ${(JSON.stringify(nina, null, 2))}`)
// console.log(`v1's assigned crew: ${v1.crewAssigned}`)
// shondra.assignTo(v2);
// console.log(`Shondra's assigned vehicle: ${shondra.assignedVehicle}`)
// donna.assignTo(v2);
marie.assignTo(v1)

v1.canGo(); //true
// v2.canGo(); //false
// v3.canGo(); // false

// v2.assignedCrew.length //true

// nina.assignedVehicle.name //12341

//if this is too easy, and only after you are done with the above, 
//what happens if you assign a crew member to two vehicles?
//they need to be removed from the first list and assigned to the second one 

