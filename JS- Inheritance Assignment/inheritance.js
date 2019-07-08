//1-6

(function(){
    "use strict"
    const createBicyclePrototype = function(){
        var speed = 0;
        return {
            speed: function(){
                return speed;
            },
            applyBrake: function(param){
                speed-=param;
            },
            speedup: function(param){
                speed+=param;
            }

        }
    }
    const createMountainBikePrototype = function(prototype){
        var gear = 0;
        prototype.setGear = function(value){
            gear = value;
        }
        return Object.create(prototype);
    }
    const start = function(){
        return {
            first : function(){
                return Object.create(createBicyclePrototype());
            },
            second: function(){
                return Object.create(createMountainBikePrototype(createBicyclePrototype()));
            }
        }
    }
    const str = start();
    const first = str.first();
    first.speedup(30);
    console.log(first.speed());
    first.applyBrake(20);
    console.log(first.speed());

    const second = str.second();
    second.speedup(50);
    second.speedup(19);
    console.log(second.speed());
})
/* Now using
ES6
*/

class Bicycle{
    constructor(){
        this.speed = 0;
    }
    applyBrake(value){
        this.speed=this.speed-value;
    }
    getSpeed(){
        return this.speed;
    }

    speedup(value){
        this.speed += value;
    }
}
class MountainBike extends Bicycle{
    constructor(){
        super();
        this.gear =0 ;
    }
    setGear(parameter){
        this.gear = parameter;
    }
    getGear(){
        return this.gear;
    }
}

const a = new Bicycle();
a.speedup(15);
console.log(a.getSpeed());


const c = new MountainBike();
c.speedup(35);
console.log(c.getSpeed());