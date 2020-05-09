class OldCalculator {
    constructor() {
        this.operations = function(term1, term2, operation) {
            switch (operation) {
                case 'add':
                    return { res: term1 + term2 };
                case 'sub':
                    return { res: term1 - term2 };
                default:
                    return NaN;
            }
        };
    }
}

class NewCalculator {
    constructor() {
        this.multiply = function(term1, term2) {
            return term1 * term2;
        };
        this.divide = function(term1, term2) {
            return term1 / term2;
        };
    }
}

// Adapter Class
class UltimateCalculator {
  constructor() {
    const newCalc = new NewCalculator();
	const oldClac = new OldCalculator();
	
	this.multiply = (term1,term2) => newCalc.multiply(term1, term2);
	this.divide = (term1,term2) => newCalc.divide(term1, term2);
    this.operations =(term1, term2, operation) => {
		 switch (operation) {
                case 'add':
                    return oldClac.operations(term1, term2, operation).res;
				case 'sub':
                    return oldClac.operations(term1, term2, operation).res;
                default:
                    return NaN;
            }
	}
  }
}

// Proxy Class
class CleverCalculator {
	cachedResults = {};
	constructor() {
		const ultimateCal = new UltimateCalculator();
		this.multiply = (term1,term2) => {
			if(!this.cachedResults['multiply'+term1+term2]) {
				this.cachedResults['multiply'+term1+term2] = ultimateCal.multiply(term1, term2);
				console.log('I am fresh');
			}
			return this.cachedResults['multiply'+term1+term2]
		};
		this.divide = (term1,term2) => {
			if(!this.cachedResults['divide'+term1+term2]) {
				this.cachedResults['divide'+term1+term2] = ultimateCal.divide(term1, term2);
			}
			return this.cachedResults['divide'+term1+term2]
		};
		this.operations =(term1, term2, operation) => {
			switch (operation) {
				case 'add':
					{
						if(!this.cachedResults['add'+term1+term2]) {
							this.cachedResults['add'+term1+term2] = ultimateCal.operations(term1, term2, operation);
						}
						
						return this.cachedResults['add'+term1+term2] ;
					}
				case 'sub':
					{
						if(!this.cachedResults['sub'+term1+term2]) {
							this.cachedResults['sub'+term1+term2] = ultimateCal.operations(term1, term2, operation);
						}
						return this.cachedResults['sub'+term1+term2] ;
					}
				default:
					return NaN;
			}
		}
	}
}

//Decorator Class 
class LogOperations {
	constructor(){
		const cleverC = new CleverCalculator();
		this.multiply = (term1,term2) => {
			this.logMessage(term1, term2, 'multiply');
			return cleverC.multiply(term1, term2);
		};
		this.divide = (term1,term2) => {
			this.logMessage(term1, term2, 'divide');
			return cleverC.divide(term1, term2);
		};
		this.operations = (term1,term2, operation) => {
			this.logMessage(term1, term2, operation);
			return cleverC.operations(term1, term2, operation);
		};
		
		this.logMessage = (term1, term2, operation) => {
			console.log(`term1 - ${term1}
			term2 - ${term2}
			operation - ${operation}
			`)
		};
	}
}


function doWrite() {
	
const newUClac = new UltimateCalculator();
const testVal1 = newUClac.divide(newUClac.operations(3,3,'add'),3);
const testVal2 = newUClac.multiply(newUClac.operations(3,3,'sub'),3);
console.log(testVal1, testVal2);

const cleverC = new CleverCalculator();
cleverC.multiply(3,3);
cleverC.multiply(3,5);
cleverC.multiply(3,3);
console.log(cleverC);

const logger = new LogOperations();
console.log(logger.divide(4,2));
console.log(logger.operations(15, 3, 'sub'));
console.log(logger.operations('a','b','add'));
}
