import {BoxBufferGeometry, CylinderBufferGeometry,Shape,ShapeGeometry } from "https://cdn.skypack.dev/three@0.132.2";


function createDroneGeometries() 
{
    // 1) The Drone's body
    const droneBody = new CylinderBufferGeometry(0.1,0.5,6,32,1); // tR,bR,height,RadialSegments,heightSegments

    // 2) The Drone wings
    const droneWings = new BoxBufferGeometry(1,1,1);
    
    // 3) The Drone Tail Propellers
    const droneTailWing= new BoxBufferGeometry(1,1,1);

    return {droneBody, droneWings, droneTailWing};
}

export {createDroneGeometries};