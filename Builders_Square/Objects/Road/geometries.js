import {BoxBufferGeometry } from "https://cdn.skypack.dev/three@0.132.2";


function createRoadGeometry() 
{
    const roadGeometry = new BoxBufferGeometry(6,0.25,15); // not position but rather the stretch factor
    

    const roadMarkerGeometry = new BoxBufferGeometry(0.125,0.075,15);
    return {roadGeometry, roadMarkerGeometry};
}

export {createRoadGeometry};