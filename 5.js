class Device {
  constructor() {
    this.isPlugged = false;
  }
  
  plugIn() {
    if (!this.isPlugged) {
      this.isPlugged = true;
    }
  }
  
  plugOut() {
    if (this.isPlugged) {
      this.isPlugged = false;
    }
  }
}

class Computer extends Device {
  constructor(name, workNumber, powerConsumption) {
    super();
    this.name = name;
    this.workNumber = workNumber;
    this.powerConsumption = 0;
    this.plugIn = function() {
      if (!this.isPlugged) {
        this.isPlugged = true;
        this.powerConsumption = powerConsumption;
      }
    };
    this.plugOut = function() {
      if (this.isPlugged) {
        this.isPlugged = false;
        this.powerConsumption = 0;
      }
    };
  }
}

class DeskLamp extends Device {
  constructor(name, color, powerConsumption) {
    super();
    this.name = name;
    this.color = color;
    this.powerConsumption = 0;
    this.plugIn = function() {
      if (!this.isPlugged) {
        this.isPlugged = true;
        this.powerConsumption = powerConsumption;
      }
    };
    this.plugOut = function() {
      if (this.isPlugged) {
        this.isPlugged = false;
        this.powerConsumption = 0;
      }
    };
  }
}

function getTotalPowerConsumption() {
  let result = 0;
  
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i].powerConsumption;
  }
  
  return result;
}

let computer1 = new Computer('Компьютер офисный', 1, 300);
let computer2 = new Computer('Компьютер офисный', 2, 250);
let deskLampWhite = new DeskLamp('Лампа настольная', 'белая', 40);
let deskLampBlack = new DeskLamp('Лампа настольная', 'чёрная', 50);

computer1.plugIn();
computer2.plugIn();
deskLampWhite.plugIn();
deskLampBlack.plugIn();

console.log(getTotalPowerConsumption(computer1, computer2, deskLampWhite, deskLampBlack));

computer2.plugOut();
deskLampBlack.plugOut();

console.log(getTotalPowerConsumption(computer1, computer2, deskLampWhite, deskLampBlack));