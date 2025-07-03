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
         // set initial size
         setSize(container, camera, renderer);

         window.addEventListener("resize", () => 
            {
               setSize(container, camera, renderer);

               // perform any custom actions
               this.onResize();
            });

        // Set the camera's aspect ratio
        camera.aspect = container.clientWidth / container.clientHeight;

        camera.updateProjectionMatrix();
        // update the size of the renderer AND the canvas
        renderer.setSize(container.clientWidth, container.clientHeight);

        // set the pixel ratio (for mobile devices)
        renderer.setPixelRatio(window.devicePixelRatio);
     } 


     onResize() {} //.onResize is an empty method that we can customize from outside the Resizer class.

 }

 export { Resizer };