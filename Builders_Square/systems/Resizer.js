
/**
This function resizes the camera and renderer to match the container’s current size — ensuring your 3D scene is always rendered correctly.
*/
const setSize = (container, camera, renderer) => 
{
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
};


class Resizer 
{
    constructor(container, camera, renderer) 
    {
        setSize(container, camera, renderer); // initial size

        window.addEventListener("resize", () => {
            setSize(container, camera, renderer); // updates size when we resize

            this.onResize();
        }); // that's right we have a RESIZE event! who knew?

        camera.aspect = container.clientWidth / container.clientHeight;

        camera.updateProjectionMatrix();

        // update the size of the renderer AND the canvas
        renderer.setSize(container.clientWidth, container.clientHeight);

        // set the pixel ratio (for mobile devices)
        renderer.setPixelRatio(window.devicePixelRatio);

    }

    onResize() 
    {
        console.log("We resized the screen");
    }   
}

export {Resizer};