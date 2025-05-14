// With everything in place, here’s our complete code for the World.js module. As you can see,
// this class coordinates the setup of our 3D scene while offloading the complexity onto separate modules.

import { createCamera  } from "../../components/camera.js"
import { createMeshGroup } from "../../components/meshGroup.js";

import { createScene } from "../../components/scene.js";

import { createLights } from "../../components/lights.js";
import { createLightPointLight } from "../../components/lights.js";

import { createRenderer } from "../../systems/renderer.js";

import { Resizer } from "../../systems/Resizer.js";

import { Loop } from "../../systems/Loop.js";
import { createControls } from "../../systems/controls.js";

import { createAxesHelper, createGridHelper } from "../../components/helpers.js";
import { Train } from "../../components/Train/Train.js";
import { TrainTrack } from "../../components/Train/TrainTrack.js"


let camera;
let renderer;
let scene;
let cube;
let basicCube;
let loop;

// Everything else about the implementation of the World app should be hidden. From within main.js, we should not be 
// able to access the scene, camera, renderer, or cube.
// If we later need to add additional functionality, we’ll do so by expanding the interface, not by exposing three.js functions to the outside world.

class World 
{
    constructor(container) 
    {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        const controls = createControls(camera, renderer.domElement);

        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);

        

        // const meshGroup = createMeshGroup();
        loop.updateables.push(controls);
        
        const train = new Train();
        const trainTrack = new TrainTrack();


        const {ambientLight, light, hemisphereLight} = createLights();
        scene.add(ambientLight,light, train, trainTrack);
        loop.updateables.push(controls, train) ;

        // If I want to enable render on demand
        // controls.addEventListener('change', () => {
        //     this.render();
        // })

        scene.add(createAxesHelper(), createGridHelper());

        loop.updateables.push(camera);

        const resizer = new Resizer(container, camera, renderer); // what is needed to be done is done in the resizer class

        // // call that Hook function from resizer
        // resizer.onResize = () => 
        //     {

        //         this.render();
        //     }
    }

    // World.render and World.start give us two ways of producing frames. For apps with constant animation, 
    // we’ll use .start to run a loop, and for apps that update occasionally,
    // we’ll call .render whenever a new frame is needed.
    // We’ll refer to the second technique as rendering on demand.    
    render() 
    {
        function animate() 
        {
            requestAnimationFrame(animate);
            rotateCube(cube);
            rotateCube(basicCube);
            renderer.render(scene, camera);
        }
        animate();
    }

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