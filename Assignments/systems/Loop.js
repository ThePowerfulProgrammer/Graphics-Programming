import {Clock,
    WebGLRenderer
} from "https://cdn.skypack.dev/three@0.132.2";

const clock = new Clock();

class Loop 
{
    constructor(camera, scene, renderer) 
    {

        // create members
        this.camera = camera;
        this.scene =  scene;
        this.renderer = renderer;
        this.loopUpdateables = []; // everything that we wish to update
    }

    // declared here, defined elsewhere
    start() 
    {
        this.renderer.setAnimationLoop(() => 
            {
                // tell every animated object to 'do its's thing' once per frame
                this.tick();

                this.renderer.render(this.scene, this.camera); // render a frame from the loop
            });
    }

    stop() 
    {
        this.renderer.setAnimationLoop(null); // stop generating frames
    }

    // update/move any entity which has a tick method, where the tick method is the indivual entity's movement system
    tick() 
    {
        const delta = clock.getDelta();

        for (let i=0;i<this.loopUpdateables.length; i++) 
            {
                this.loopUpdateables[i].tick(delta);
            }
    }    

}

export { Loop };