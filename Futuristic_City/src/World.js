import { createCamera } from "../components/camera.js";
import { createAxesHelper } from "../components/helpers.js";
import { createGridHelper } from "../components/helpers.js";
import { createScene } from "../components/scene.js";
import { createRenderer } from "../systems/renderer.js";
import { createPointLight } from "../components/light.js";
import { createControls } from "../systems/controls.js";
import {Loop} from "../systems/Loop.js"
import { Resizer } from "../systems/Resizer.js";

import { SkyScraper } from "../skyscraper/Skyscraper.js";
import { Ground } from "../ground/Ground.js";
import { Drone } from "../drone/Drone.js";
import { Hovercar } from '../hoverCar/Hovercar.js';

import { loadBirds } from "../components/models/birds.js";
import { MathUtils, Vector3 } from "https://cdn.skypack.dev/three@0.132.2";
import { loadApartment } from "../components/models/apartment.js";


let camera; 
let scene;
let renderer;
let light;
let loop;
let lightTwo;
let controls;

let isMovingFwd = true;

let moveFwd = true;
let turnRight = false

const path = [
    { x: -5, y: 1, z: 5 },
    { x: -7, y: 1, z: 5 },
    { x: -7, y: 1, z: 3 },
    { x: -5, y: 1, z: 3 },
    { x: -5, y: 1, z: 5 }
];

let currentTargetIndex = 0;

let currentPositionForHoverCarFour = 0;

let moveLeft = true;

// controls for moving cars and drones
let moveCar = true;
let rotateDrones = true;

// controls for day and night
let day = true;

class World 
{
    constructor(container) 
    {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        light = createPointLight().light;
        lightTwo = createPointLight().lightTwo;
        loop = new Loop(camera, scene, renderer);
        controls = createControls(camera, renderer.domElement);
        loop.updatedables.push(controls);        
        container.append(renderer.domElement);            
        scene.add( light, lightTwo);
        scene.add(light.target);

        document.addEventListener("keypress", (event) => {
            if (event.key == "e" && day) 
                {
                    light.intensity = 0;
                    lightTwo.intensity = 0;
                    day = false;
                }
            else if (event.key == "e" && !day) 
                {
                    light.intensity = 12;
                    lightTwo.intensity = 12;
                    day = true;
                }
        })

        // add ground
        const ground = new Ground();
        ground.changePosition(0,0.5,4);
        ground.scaleY(0.25);
        ground.scaleX(25);
        ground.scaleZ(25);
        ground.changePosition(0,-0.125,0);    
        scene.add(ground);


        // add skyscraper
        const skyScraper = new SkyScraper('cube');
        skyScraper.changePosition(0,0.5,0);
        skyScraper.scaleY(8);
        skyScraper.scaleX(2);
        skyScraper.scaleZ(2);

        const skyScraperTwo = new SkyScraper('cube');
        skyScraperTwo.changePosition(-6,0.5,4);
        skyScraperTwo.scaleY(6);

        const skyScraperThree = new SkyScraper('cube');
        skyScraperThree.changePosition(-4,0.5,4);
        skyScraperThree.scaleY(6);       
        
        const skyScraperFour = new SkyScraper('glassTower');
        skyScraperFour.changePosition(-2.5,0.5,4);
        skyScraperFour.scaleY(3);               


        const skyScraperFive = new SkyScraper('glassTower');
        skyScraperFive.changePosition(-6,0.5,6);
        skyScraperFive.scaleY(3);               
        
        const skyScraperSix = new SkyScraper('glassTower');
        skyScraperSix.changePosition(-4,0.5,6);
        skyScraperSix.scaleY(3);      
        
        const skyScraperSeven = new SkyScraper('cube');
        skyScraperSeven.changePosition(6,0.5,-5);
        skyScraperSeven.scaleY(9);

        const skyScraperEight = new SkyScraper('cube');
        skyScraperEight.changePosition(6,0.5,-3);
        skyScraperEight.scaleY(9);

        const skyScraperNine = new SkyScraper('cylinder');
        skyScraperNine.changePosition(-4,0.5,-5);
        skyScraperNine.scaleY(10);

        const skyScraperTen = new SkyScraper('cylinder');
        skyScraperTen.changePosition(-7,0.5,-8);
        skyScraperTen.scaleY(10.5);        

        const skyScraperEleven = new SkyScraper("glassTower");
        skyScraperEleven.changePosition(6,0.5,5);
        skyScraperEleven.scaleY(8);
        skyScraperEleven.scaleX(2);
        skyScraperEleven.scaleZ(2);

        // add skyscrapers
        scene.add( skyScraper, skyScraperTwo,skyScraperThree,
    skyScraperFour, skyScraperFive, skyScraperSix,
    skyScraperSeven, skyScraperEight, skyScraperNine,
skyScraperTen, skyScraperEleven);

        





        // add drones
        const drone = new Drone();
        drone.changePosition(-7,5,-6);
        drone.scaleXYZ(0.09,0.09,0.09);
        const droneTwo = new Drone();
        droneTwo.changePosition(-5.5,5,-9);
        droneTwo.scaleXYZ(0.09,0.09,0.09);
        const droneThree = new Drone();
        droneThree.changePosition(-3,5,-7);
        droneThree.scaleXYZ(0.09,0.09,0.09);
        const droneFour = new Drone();
        droneFour.changePosition(-1.5,5,-2);
        droneFour.scaleXYZ(0.09,0.09,0.09);

        loop.droneUpdatesables.push(drone,droneTwo, droneThree, droneFour);
        scene.add(drone, droneTwo,droneThree,droneFour);

        // add cars
        const hovercar = new Hovercar(3,1,-12);
        hovercar.scaleXYZ(0.85,0.85,0.85);
        hovercar.scaleY(0.5);
        hovercar.tick = (delta) => {
            if (!turnRight && (hovercar.rotation.y == MathUtils.degToRad(0)
                || hovercar.rotation.y == MathUtils.degToRad(360))) {
                hovercar.position.z += delta * 6;
                if (hovercar.position.z >= 12) {
                    turnRight = true;
                    moveFwd = false;
                }
            }

            if (turnRight) {
                hovercar.rotation.y += MathUtils.degToRad(90);
                hovercar.rotation.y %= MathUtils.degToRad(360);  // Normalize rotation
                turnRight = false;
            }

            switch (Math.round(hovercar.rotation.y * (180 / Math.PI))) {  // Convert rad to degrees
                case 90:
                    if (hovercar.position.x > -12) {
                        hovercar.position.x -= delta * 6;
                    } else {
                        turnRight = true;
                    }
                    break;
                case 180:
                    if (hovercar.position.z > -12) {
                        hovercar.position.z -= delta * 6;
                    } else {
                        turnRight = true;
                    }
                    break;
                case 270:
                    if (hovercar.position.x < 3) {
                        hovercar.position.x += delta * 6;
                    } else {
                        turnRight = true;
                    }
                    break;
                case 0:
                    moveFwd = true;
                    break;
            }
        };


        scene.add(hovercar);
        loop.updatedables.push(hovercar);

        const hoverCarTwo = new Hovercar(12,1,-12);
        hoverCarTwo.scaleXYZ(0.75,0.425,0.425);
        hoverCarTwo.rotate(90, 'y');
        hoverCarTwo.tick = (delta) => 
            {
                if (isMovingFwd) 
                    {
                        if (hoverCarTwo.position.z < 12) 
                        {
                            hoverCarTwo.position.z += delta * 6;
                        }
                        else 
                        {
                            isMovingFwd = false;
                        }
                    }
                else 
                {
                    if (hoverCarTwo.position.z > -12 ) 
                    {
                        hoverCarTwo.position.z -= delta * 6;
                    }
                    else 
                    {
                        isMovingFwd = true;
                    }
                }

                

            }
        scene.add(hoverCarTwo);
        loop.updatedables.push(hoverCarTwo);


        const hoverCarThree = new Hovercar(-5,1,5);
        hoverCarThree.scaleXYZ(0.25,0.25,0.25);
        scene.add(hoverCarThree);
        hoverCarThree.tick = (delta) => {
            const target = path[currentTargetIndex];

            // Calculate direction
            const direction = new Vector3(
                target.x - hoverCarThree.position.x,
                target.y - hoverCarThree.position.y,
                target.z - hoverCarThree.position.z
            );
            direction.normalize(); // Normalize direction vector

            // Move toward the target
            hoverCarThree.position.x += direction.x * delta * 4;
            hoverCarThree.position.y += direction.y * delta * 4;
            hoverCarThree.position.z += direction.z * delta * 4;

            // Check if hovercar reached the target (small threshold for precision)
            if (
                Math.abs(hoverCarThree.position.x - target.x) < 0.1 &&
                Math.abs(hoverCarThree.position.y - target.y) < 0.1 &&
                Math.abs(hoverCarThree.position.z - target.z) < 0.1
            ) {
                currentTargetIndex = (currentTargetIndex + 1) % path.length; // Cycle through path
            }
        };
        loop.updatedables.push(hoverCarThree);


        const pathForHoverCarFour = [
            {x:-5,y:1, z:8},
            {x:-10,y:1, z:8},
            {x:-5,y:1, z:8}
        ]        


        const hoverCarFour = new Hovercar(-5,1,8);
        hoverCarFour.scaleXYZ(0.5,0.25,0.5);
        // now move car four
        hoverCarFour.tick = (delta) => {


            if (hoverCarFour.position.x > -8 && moveLeft) 
                {
                    hoverCarFour.position.x -= delta * 1;
                }
            else 
            {
                moveLeft = false;
            }

            if (hoverCarFour.position.x < -5 && !moveLeft) 
                {
                    hoverCarFour.position.x += delta * 1;
                }
            else 
            {
                moveLeft = true;
            }
        }        


        scene.add(hoverCarFour);
        loop.updatedables.push(hoverCarFour);
    
        // add event lister for stopping and starting cars
        document.addEventListener("keypress", (event) => {
            if (event.key == "s" && moveCar) 
                {
                    loop.updatedables.pop();
                    loop.updatedables.pop();
                    loop.updatedables.pop();
                    loop.updatedables.pop();
                    moveCar = false;
                }
            else if (event.key == "s" && !moveCar) 
                {
                    loop.updatedables.push(hovercar);
                    loop.updatedables.push(hoverCarTwo);
                    loop.updatedables.push(hoverCarThree);
                    loop.updatedables.push(hoverCarFour);
                    moveCar = true;
                }
        })

        // add event lister for starting and stopping 2 drones
        document.addEventListener("keypress", (event) => {
            if (event.key == "d" && rotateDrones ) 
                {
                    loop.droneUpdatesables.pop();
                    loop.droneUpdatesables.pop();
                    rotateDrones = false;
                }
            else if (event.key == "d" && !rotateDrones) 
                {
                    loop.droneUpdatesables.push(droneThree,droneFour);
                    rotateDrones = true;
                }
        })

        // ensure our graphics scale as per screen size :) 
        const resizer = new Resizer(container, camera, renderer);
        resizer.onResize = () => 
            {
                this.render();
            }   
    }

    // not used right now
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

    
    // because a ctor cannot be async
    async init() 
    {
        // load models here
        const {bird} = await loadBirds();
        // controls.target.copy(bird.position)
        bird.position.set(0,5,5);
        bird.scale.set(0.015,0.015,0.015);
        console.log(bird.rotation);


        const ss = await loadApartment();
        ss.scale.set(0.5,0.5,0.5);
        ss.position.set(0,0,-4);
        scene.add(ss);
        
        // loop.updatedables.push(bird);
        // scene.add(bird);

        // looks terrible
        // const skybox = await loadApartment();
        // skybox.scale.set(0.015,0.015,0.015);
        // skybox.position.set(0,0,5);
        // scene.add(skybox);
    }

}

export {World};