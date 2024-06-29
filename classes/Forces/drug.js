import { buoyant } from "../../Forces/buoyant";
import * as THREE from "three";

export class drug{

    constructor(){
        this.A = 444.6; //m^2
        this.density = new buoyant();
    }

    cd(temperature){
        if(temperature == 0){
            return 0.045;
        }
        if(temperature == 20){
            return 0.043;
        }
        if(temperature == 30){
            return 0.042;
        }
        if(temperature == 40){
            return 0.041;
        }
    }

    calculateDrug(temperature ){
        const direction = new THREE.Vector3(1, 0, 0);
        const ans = this.cd(temperature) * this.density.waterDensity(temperature) * this.A * this.v;
        const forceVector = direction.multiplyScalar(ans);
        return forceVector;
    }
}