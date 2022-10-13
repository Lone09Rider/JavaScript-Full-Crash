class Rocket {
    constructor (targetPlanet) { 
        this.targetPlanet = targetPlanet;
        console.log(targetPlanet); // Or call Later
    }
};

var SRJ = new Rocket('Mars');
var KirA = new Rocket('Jupiter');
