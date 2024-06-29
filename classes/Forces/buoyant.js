
export class buoyant {

    constructor(){
        //this.R = 997; // kg/m^3
        this.G = 9.8; //تسارع الجاذبية 
        this.M = 185000; //kg
    }
    
    calculateBuoyant(mass){
        const direction = new THREE.Vector3(0, 1, 0);
        const ans = this.G * this.waterDensity(temperature) * this.calculateVsub(mass + this.M);
        const forceVector = direction.multiplyScalar(ans);
        return forceVector;
    }

    calculateVsub(mass){
        const V = mass / this.R; //حجم السائل المزاح
        return V;
    }

    waterDensity(temperature){
        if(temperature==0){
            return 1000;
        }
        if(temperature==20){
            return 998.23;
        }
        if(temperature==30){
            return 995.25;
        }
        if(temperature==40){
            return 992.75;
        }
    }

    // waterDensity(temperature) {
    //     const waterDensityData = {
    //       0: 1000.0,
    //       20: 998.23,
    //       30: 995.65,
    //       40: 992.75,
    //     };
      
    //     return waterDensityData[temperature] || null; // Return value or null if not found
    //   }


}