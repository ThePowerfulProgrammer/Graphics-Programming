import {BoxBufferGeometry, CylinderBufferGeometry,Shape,ShapeGeometry } from "https://cdn.skypack.dev/three@0.132.2";

// this module creates the geometries
/**
 * The raw shape/data of an object (vertices, edges, faces)	Defines what the object looks like structurally
 * 
 */

// THE SHAPES WE WILL BE USING

function createGeometries() 
{
    const cabin = new BoxBufferGeometry(2, 2.25, 1.5);

    const nose = new CylinderBufferGeometry(0.75, 0.75, 3,12);

    // remember we can reuse a single cylinder geometry for all 4 wheels
    const wheel = new CylinderBufferGeometry(0.4, 0.4, 1.75, 16);
    
  // different values for the top and bottom radius creates a cone shape
  const chimney = new CylinderBufferGeometry(0.3, 0.1, 0.5);


  // train tracks can be created by using a cylinder buffer
  const track = new CylinderBufferGeometry(0.25,0.25,4.5,16);

  // 2d shapes : Length and width and no volume
  const circle = new Shape();
  circle.absarc(0,0,3);

  const segments = 100;
  const geometry = new ShapeGeometry(circle, segments/2);

    return { cabin,
         nose, 
        wheel, 
        chimney,
        track,
        geometry,
    };
}

export { createGeometries };