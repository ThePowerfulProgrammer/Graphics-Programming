
const setSize = (container, camera, renderer) => 
    {

        camera.aspect = container.clientWidth/container.clientHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
    }

class Resizer 
{
    constructor(container, camera, renderer) 
    {
        // set initial size of load
        setSize(container, camera, renderer)

        window.addEventListener("resize", () => 
            {

                setSize(container,camera, renderer);

                // add a method we can create elsewhere 
                this.onResize();
            })
    }

    onResize() {}
}

export {Resizer};