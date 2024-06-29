import * as THREE from "three";

export class gravity{

    constructor(){
        this.G = 9.8; //تسارع الجاذبية 
        this.M = 185000; //kg
    }


    calculateGravity(mass){
        const direction = new THREE.Vector3(0, -1, 0);
        const ans = this.G * (this.M + mass);
        const forceVector = direction.multiplyScalar(ans);
        return forceVector;
    }
}