import { createCamera } from "../components/camera.js";
import { createSphere } from "../components/sphere.js";
import { createLight } from "../components/light.js";
import { createScene } from "../components/scene.js";
import { createOrbitingPlanets } from "../components/sphere.js";
import { CelestialObject } from "../components/sphere.js";

import { createRenderer } from "../systems/renderer.js";
import { Resizer } from "../systems/Resizer.js";
import { Loop } from "../systems/Loop.js";
import { createControls } from "../systems/controls.js";

// create the world that will consist of all the objects we use
let sphere;
let camera;
let light;
let bottomLight;
let spotLight;
let scene;
let renderer;
let loop;
let controls;
let anotherSphere;

let sun;
let mercury;
let venus;
let earth;
let mars;
let jupiter;
let saturn;
let uranus;
let neptune;
let planetsArray = new Array(mercury, venus, earth, mars, jupiter, saturn, uranus, neptune);

class World 
{
    constructor(container) 
    { 
        //sphere = createSphere(); // create and store a sphere
        sphere = new CelestialObject(2,0,"../assets/sunTexture.jpg", "sun");
        scene = createScene(); // The universe where my sphere will exist
        camera = createCamera(); // The telescope I will use to look into my universe
        // light = createLight()['top'];
        // bottomLight = createLight()['bottom'];
        // spotLight = createLight()['spotLight'];
        light = createLight();
        
        scene.add(sphere.getSphere(), light);

//        anotherSphere =  createAnotherSphere(sphere);
  //      scene.add(anotherSphere);
        
        var c = 0.125;
        let distance = 5;
        let additionalDistance = 1; // move each sphere further outward
        for (let i=0;i<sphere.materials.length;i++) 
            {
                // const angle =  (2 *Math.PI * c); // point on the circumeference away from the SUN
                planetsArray[i] = new CelestialObject(1,0,sphere.materials[i], "planet"); // planet obj is created
                const xCor = (Math.cos(2 *Math.PI * c) * distance ) * additionalDistance;
                // const yCor = (Math.sin(2 *Math.PI * c) * distance ) ;
                const zCor = (Math.sin(2 *Math.PI * c) * distance ) * additionalDistance;
                CelestialObject.planetsCoordinates[i] = {x: xCor, z: zCor};
                planetsArray
                planetsArray[i].getSphere().position.set(xCor,0, zCor);
                planetsArray[i].getSphere().scale.multiplyScalar(1/2);

                // distance += 2;
                c += 0.125;
                // additionalDistance += 0.04; // planets are different radius from the sun , work on this later
                planetsArray[i].orbit = true;
                planetsArray[i].c = c;
                planetsArray[i].distance = distance;
                planetsArray[i].additionalDistance = additionalDistance;
                planetsArray[i].index = i;
                console.log(planetsArray[i].index)
                console.log("X , Z = ", xCor, "," , zCor);
                
            }

            for (let key in CelestialObject.planetsCoordinates) 
                {
                    console.log(key, CelestialObject.planetsCoordinates[key].x,CelestialObject.planetsCoordinates[key].z);

                }

        // planetsArray[7].getSphere().position.set(planetsArray[0].getSphere().position.x,1, planetsArray[0].getSphere().position.z);

        for (let i=0;i<planetsArray.length;i++) 
            {
                console.log(planetsArray.length);
                scene.add(planetsArray[i].getSphere());
            }

        renderer = createRenderer(); // create our renderer which creates the <canvas> element which we add to container
        controls = createControls(camera,renderer.domElement);

        loop = new Loop(camera,scene,renderer);
        
        
        loop.loopUpdateables.push(controls); // only updating the controls
        loop.loopUpdateables.push(sphere);
    //    loop.loopUpdateables.push(anotherSphere);
        
        for (let i=0;i<planetsArray.length;i++) 
            {
                loop.loopUpdateables.push(planetsArray[i]);
            }

        const resizer = new Resizer(container, camera,renderer);


        container.append(renderer.domElement);
    
    }

    // prior to my loop, I was calling this recursive function to render my frames and create 'animation' --> Redundant
    render() 
    {

        function animate() 
        {
            requestAnimationFrame(animate);
            sphere.tick();
            renderer.render(scene,camera); // render our universe and look into it
        }

        console.log("1 frame rendered");
        animate();
    }

    // start and stop, just to call loop.start and loop.stop

    start() 
    {
        loop.start();
    }
    stop() 
    {
        loop.stop();
    }        


}


export { World };