class Person {
  constructor(name = "unnamed person") {
    this.name = name;
  }
}

class Shopper extends Person {
  instance;
  static getInstance(name, money = 0) {
    if (!this.instance) {
      this.instance = new Shopper(name, money);
      this.instance = Shopper.instance;
    } else {
      console.warn("Shopper object is created already");
    }
    return this.instance;
  }

  constructor(name, money) {
    if (!!Shopper.instance) {
      console.warn("Shopper object is created already");
      return Shopper.instance;
    }
    super(name);
    this.money = money;
    this.employed = false;
  }
}

class Employee extends Shopper {
  empInstance;
  static getInstance(name, money = 0, employer = "") {
    if (!this.empInstance) {
      this.empInstance = new Employee(name, money, employer);
    } else {
      console.warn("Employee object is created already");
    }
    return this.empInstance;
  }

  constructor(name, money, employer) {
    if (!!Employee.empInstance) {
      console.warn("Employee object is created already");
      return Employee.empInstance;
    }
    super(name, money);
    this.employerName = employer;
    this.employed = true;
    Employee.empInstance = this;
  }
}

function doWrite() {
  const newE = new Employee("as");
  const eve = Employee.getInstance("Eve Parcello", 100, "Alex banks");
  console.log(eve, newE);

  const sho = Shopper.getInstance("Alex banks", 100);
  const sho2 = new Shopper("Alex", 100);
  console.log(sho, sho2);
}
