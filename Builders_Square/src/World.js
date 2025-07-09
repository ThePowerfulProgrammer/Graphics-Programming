import {createCamera} from '../components/camera.js';
import { createAxesHelper } from "../components/helpers.js";
import { createGridHelper } from "../components/helpers.js";
import { createScene } from "../components/scene.js";
import {createDirectionalLight} from "../components/light.js"
import { createPointLight } from '../components/light.js';
import { createRoadLights } from '../components/light.js';

import { createRenderer } from "../systems/renderer.js";
import { createControls } from "../systems/controls.js";
import {Loop} from "../systems/Loop.js"
import { Resizer } from "../systems/Resizer.js";


import { MathUtils, Vector3 } from "https://cdn.skypack.dev/three@0.132.2";


// All of my objects
import { Ground } from '../Objects/Ground/Ground.js';
import { Fence } from '../Objects/Fence/Fence.js';
import { Road } from '../Objects/Road/Road.js';

let camera;
let scene;
let directionLight
let pointLightOne;
let roadLightOne;
let roadLightTwo;

let renderer;
let grid;
let axes;
let loop;
let controls;

// It all comes together here :) 
class World 
{
    constructor(container) 
    {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        directionLight = createDirectionalLight();
        pointLightOne = createPointLight();
        roadLightOne = createRoadLights().pointLightOne;
        roadLightTwo = createRoadLights().pointLightTwo;
        
        grid = createGridHelper();
        axes = createAxesHelper();
        

        controls = createControls(camera, renderer.domElement);        
        loop = new Loop(camera, scene,renderer);
        loop.updatedables.push(controls);
        container.append(renderer.domElement);



        scene.add(directionLight);
        scene.add(pointLightOne);
        scene.add(roadLightOne, roadLightTwo);
        scene.add(grid);
        scene.add(axes)

        // add objects that form the city
        const ground = new Ground(); // GROUND
        ground.scaleX(23);
        ground.scaleZ(23);
        ground.scaleY(0.25);
        ground.changePosition(0,0,0);
        scene.add(ground);

        const fenceWallOne = new Fence(); // FENCEONE : Left wall
        fenceWallOne.scaleX(1);
        fenceWallOne.scaleZ(25);

        fenceWallOne.changePosition(-12,0.5,0);
        scene.add(fenceWallOne);

        const fenceWallTwo = new Fence(); // FENCETWO : Back wall
        fenceWallTwo.scaleX(1);
        fenceWallTwo.scaleZ(24);

        fenceWallTwo.changePosition(0.5,0.5,-12);
        fenceWallTwo.rotation.y += MathUtils.degToRad(90);
        scene.add(fenceWallTwo);

        const fenceWallThree = new Fence(); // FENCETHREE : Fwd wall
        fenceWallThree.scaleX(1);
        fenceWallThree.scaleZ(24);
        
        fenceWallThree.changePosition(0.5,0.5,12);
        fenceWallThree.rotation.y += MathUtils.degToRad(90);
        scene.add(fenceWallThree);        

        const fenceWallFour = new Fence(); // FENCEFOUR: Right wall 
        fenceWallFour.scaleX(1);
        fenceWallFour.scaleZ(18);
        
        fenceWallFour.changePosition(12,0.5,3);
        scene.add(fenceWallFour);        

        const road = new Road();
        scene.add(road);
        

        // handle resizer
        const resizer = new Resizer(container, camera, renderer);
        resizer.onResize = () => 
            {
                this.render();
            }

    }

    render() 
    {
        function animate() 
        {
            requestAnimationFrame(animate);
            renderer.render(this.scene, this.camera);        
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

export {World};