import {createCamera} from '../components/camera.js';
import { createAxesHelper } from "../components/helpers.js";
import { createGridHelper } from "../components/helpers.js";
import { createScene } from "../components/scene.js";
import {createDirectionalLight} from "../components/light.js"
import { createPointLight } from '../components/light.js';
import { createRoadLights } from '../components/light.js';
import { createPointLightForSkyScraper } from '../components/light.js';

import { createRenderer } from "../systems/renderer.js";
import { createControls } from "../systems/controls.js";
import {Loop} from "../systems/Loop.js"
import { Resizer } from "../systems/Resizer.js";


import { MathUtils, Vector3 } from "https://cdn.skypack.dev/three@0.132.2";


// All of my objects
import { Ground } from '../Objects/Ground/Ground.js';
import { Fence } from '../Objects/Fence/Fence.js';
import { Road } from '../Objects/Road/Road.js';
import { Skyscraper } from '../Objects/SkyScraper/SkyScraper.js';
import { loadEmpireStateBuilding } from '../Models/EmpireStateBuilding.js';

let camera;
let scene;
let directionLight;
let directionalLightFwd;
let pointLightOne;
let pointLightForSmallerSkyScrapers;
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
        directionLight = createDirectionalLight().directionalLight;
        directionalLightFwd = createDirectionalLight().directionLightForward;

        pointLightOne = createPointLight();
        roadLightOne = createRoadLights().pointLightOne;
        roadLightTwo = createRoadLights().pointLightTwo;
        pointLightForSmallerSkyScrapers = createPointLightForSkyScraper().pointLightForSmallerSkyScrapers;

        grid = createGridHelper();
        axes = createAxesHelper();
        

        controls = createControls(camera, renderer.domElement);        
        loop = new Loop(camera, scene,renderer);
        loop.updatedables.push(controls);
        container.append(renderer.domElement);



        scene.add(directionLight, directionalLightFwd);
        scene.add(pointLightOne);
        scene.add(roadLightOne, roadLightTwo);
        scene.add(pointLightForSmallerSkyScrapers);
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

        const road = new Road(); // road for entry and exit of builder_Square
        scene.add(road);
        

        // Creating Skyscrapers
        const skyScraperCubeOne = new Skyscraper("cube");
        skyScraperCubeOne.scaleY(20);
        skyScraperCubeOne.scaleX(3);
        skyScraperCubeOne.scaleZ(3);
        scene.add(skyScraperCubeOne);

        const skyScraperCubeTwo = new Skyscraper("cube");
        skyScraperCubeTwo.scaleY(25);
        skyScraperCubeTwo.scaleX(2.5);
        skyScraperCubeTwo.scaleZ(2.5);
        skyScraperCubeTwo.changePosition(5,skyScraperCubeTwo.position.y,2.5);
        scene.add(skyScraperCubeTwo);   
        
        const skyScraperCubeThree = new Skyscraper("cube");
        skyScraperCubeThree.scaleY(25);
        skyScraperCubeThree.scaleX(2);
        skyScraperCubeThree.scaleZ(2);
        skyScraperCubeThree.changePosition(3,skyScraperCubeThree.position.y,-1.5);
        scene.add(skyScraperCubeThree);           


        // Creating smaller Skyscrappers
        const skyScraperCubeFour = new Skyscraper("residentCube");
        skyScraperCubeFour.changePosition(-7,1,8);
        skyScraperCubeFour.scaleY(10);
        skyScraperCubeFour.scaleX(1);
        skyScraperCubeFour.scaleZ(1);        
        scene.add(skyScraperCubeFour);        

        const skyScraperCubeFive = new Skyscraper("residentCube");
        skyScraperCubeFive.changePosition(-5,1,8);
        skyScraperCubeFive.scaleY(10);
        skyScraperCubeFive.scaleX(1);
        skyScraperCubeFive.scaleZ(1);        
        scene.add(skyScraperCubeFive);
        
        const skyScraperCubeSix = new Skyscraper("residentCube");
        skyScraperCubeSix.changePosition(-3,1,9);
        skyScraperCubeSix.scaleY(8);
        skyScraperCubeSix.scaleX(1);
        skyScraperCubeSix.scaleZ(1);        
        scene.add(skyScraperCubeSix);        

        const skyScraperCubeSeven = new Skyscraper("residentCube");
        skyScraperCubeSeven.changePosition(-7,1,10);
        skyScraperCubeSeven.scaleY(5);
        skyScraperCubeSeven.scaleX(1);
        skyScraperCubeSeven.scaleZ(1);        
        scene.add(skyScraperCubeSeven);       
        
        const skyScraperCubeEight = new Skyscraper("residentCube");
        skyScraperCubeEight.changePosition(-5,1,10);
        skyScraperCubeEight.scaleY(5);
        skyScraperCubeEight.scaleX(1);
        skyScraperCubeEight.scaleZ(1);        
        scene.add(skyScraperCubeEight);               


        // Texture building

        const skyScraperCubeNineTextured = new Skyscraper("textureCube");
        skyScraperCubeNineTextured.changePosition(-5,1,3);
        skyScraperCubeNineTextured.scaleY(20);
        skyScraperCubeNineTextured.scaleX(4);
        skyScraperCubeNineTextured.scaleZ(4);

        scene.add(skyScraperCubeNineTextured);


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

    async init() 
    {
        
        try 
        {
            const esb = await loadEmpireStateBuilding();            
            esb.scale.set(3,5,3);
            esb.position.set(-8,22,-8);
            scene.add(esb);
        }
        catch 
        {
            console.log(error);
        }
    }
}

export {World};