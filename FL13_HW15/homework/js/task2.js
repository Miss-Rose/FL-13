const sec = 2000;
const thirty = 30;
const nine = 19;

function Vehicle(color, engine) {
    this.color = color;
    this.engine = engine;
    this.maxSpeed = 70;
    this.model = 'unknown model';
    this.upgradeEngine = function(newEngine, maxSpeed){
        this.maxSpeed = maxSpeed;
        this.engine = newEngine;
    };
    this.getInfo = function () {
        return {
            engine: this.engine,
            color: this.color,
            maxSpeed: this.maxSpeed,
            model: this.model
        }
    };
    this.speed = 0;
    this.myMaxSpeed = 0;
    this.drive = function () {
        clearTimeout(this.timerIdStop);
        this.timerIdDrive = setInterval(() => {
                this.speed += 20;
                if (this.speed > this.myMaxSpeed){
                    this.myMaxSpeed = this.speed;
                }
                console.log(this.speed);
                if( this.speed > this.maxSpeed){
                    return console.log('speed is too high, SLOW DOWN!');
                }
                return this.speed; 
}
            , sec);
        return this.speed;
    };
    this.stop = function () {
        clearTimeout(this.timerIdDrive);
        this.timerIdStop = setInterval(() => {
                console.log( this.speed);
                if( this.speed <= 0){
                    this.ifStopped();
                    clearTimeout(this.timerIdStop);
                }else {
                    this.speed -= 20;
                }
                return this.speed;
            }
            , sec);
        return this.speed;
    };
    this.ifStopped = function () {
        console.log(`${this.constructor.name} is stopped.  Maximum speed during the drive was ${this.myMaxSpeed}`);
        this.myMaxSpeed = 0;
    }
}

function Car(model, color, engine) {
    Vehicle.call(this);
    this.model = model;
    this.color = color;
    this.engine = engine;
    this.maxSpeed = 80;
    this.ifStopped = function () {
        console.log(`${this.constructor.name} ${this.model}`+
            `is stopped.  Maximum speed during the drive was ${this.myMaxSpeed}`);
        this.myMaxSpeed = 0;
    };
    this.changeColor = function (newColor) {
        if(this.color === newColor){
            console.log('The selected color is the same st the previous, '
                + 'please choose another one'
            );
        }else{
            this.color = newColor;
        }
    };
}

function Motorcycle(model, color, engine) {
    Vehicle.call(this);
    this.model = model;
    this.color = color;
    this.engine = engine;
    this.maxSpeed = 90;
    this.drive = function () {
        clearTimeout(this.timerIdStop);
        console.log('Let’s drive');
        this.timerIdDrive = setInterval(() => {
                this.speed += 20;
                if (this.speed > this.myMaxSpeed){
                    this.myMaxSpeed = this.speed;
                }
                console.log(this.speed);
                if( this.speed+thirty >= this.maxSpeed){
                    console.log('Engine overheating');
                    this.stop();
                }
                return this.speed; 
}
            , sec);
        return this.speed;
    };
    this.ifStopped = function () {
        console.log(`${this.constructor.name} ${this.model} is stopped. Good drive`);
        this.myMaxSpeed = 0;
    }
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;