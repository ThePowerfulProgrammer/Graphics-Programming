import {Clock} from "https://cdn.skypack.dev/three@0.132.2";

const clock = new Clock();

class Loop {
    constructor(camera, scene, renderer) 
    {
        // these are publically accessible members and methods
        this.camera = camera;
        this.scene = scene;
        this.renderer =  renderer;
        this.updateables  = []; // all of the animation objects that are capable of being updated
    }

    start() 
    {
        this.renderer.setAnimationLoop(() => {
            // tell every animated object to tick forward one frame
            this.tick();

            // render a single frame
            this.renderer.render(this.scene, this.camera);
        })
    }

    stop() 
    {

        this.renderer.setAnimationLoop(null); // null ends the loop
    }

    tick() {
        // code to update animations will go here

        // Take careful note of the fact that Loop.tick will run every frame, which means it will run sixty times per second. 
        // It’s important to keep the amount of work done here to a minimum, which means that each animated object’s .tick method must be as simple as possible.

        const delta = clock.getDelta();

        for (const object of this.updateables) 
            {
                object.tick(delta);
            }
    }
}

export {Loop};