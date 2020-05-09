// Chain of Responsibility
class CumulativeSum {
  constructor() {
    this.sum = 0;
    this.add = (num) => {
      this.sum += num;
      return this;
    };
  }
}

class SpecialMath {
  constructor(num) {
    this._num = num;
  }

  square() {
    return this._num ** 2;
  }

  cube() {
    return this._num ** 3;
  }

  squareRoot() {
    return Math.sqrt(this._num);
  }
}

// Momento Class
class Command {
  constructor(specialMath) {
    this.specialMath = specialMath;
    this.commandsExecuted = [];

    this.execute = (command) => {
      this.commandsExecuted.push(command);
      switch (command) {
        case "square":
          console.log(this.specialMath.square());
          break;
        case "cube":
          console.log(this.specialMath.cube());
          break;
        default:
          console.log(this.specialMath.squareRoot());
          break;
      }
    };
  }
}

// Watching over the push and pop in Array, Observer Pattern

class Observer {
  constructor() {
    this.obsservers = [];
    this.value = [];
    this.observe = (commandName) => {
      console.log(`${commandName} called`);
    };
    this.push = (val) => {
      this.observe("push");
      this.value.push(val);
      return this;
    };
    this.pop = (val) => {
      this.observe("pop");
      this.value.pop(val);
      return this;
    };
  }
}

function doWrite() {
  const sum1 = new CumulativeSum();
  console.log(sum1.add(10).add(2).add(50).sum);

  const x = new Command(new SpecialMath(16));
  x.execute("square");
  x.execute("squareRoot");

  // console.log(x.commandsExecuted);
  const users = new Observer();
  users.push("Alex Banks");
  users.push("Eve Porcello");
  users.pop();
  users.push("Eve Porcello");
}

const add = (a, b) => a + b;

module.exports = add;
