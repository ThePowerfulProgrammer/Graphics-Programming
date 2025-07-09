import {Clock} from "https://cdn.skypack.dev/three@0.132.2";

const clock = new Clock();

class Loop 
{
    constructor(camera, scene, renderer) 
    {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.updatedables = []; // everything that has a tick method goes into this array

    }

    start() 
    {
        this.renderer.setAnimationLoop(() => {
            this.tick();
            this.renderer.render(this.scene, this.camera);            
        })
    }

    stop() 
    {
        this.renderer.setAnimationLoop(null); 
    }

    tick() 
    {
        const delta = clock.getDelta();
        
        for (const object of this.updatedables) 
            {
                object.tick(delta);
            }
            

    }
};

export {Loop};